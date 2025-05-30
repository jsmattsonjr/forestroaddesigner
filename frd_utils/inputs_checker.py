# -*- coding: utf-8 -*-
"""
/***************************************************************************
 ForestRoadDesigner
                                 A QGIS plugin
 This plugin serve as support of foresters in the design of forest roads
                              -------------------
        begin                : 2017-02-08
        git sha              : $Format:%H$
        copyright            : (C) 2017 by PANOimagen S.L.
        email                : info@panoimagen.com
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
"""


from osgeo import gdal
from qgis.core import Qgis, QgsGeometry, QgsPoint, QgsPointXY, QgsWkbTypes
from qgis.PyQt.QtCore import QCoreApplication


import numpy as np
from . import exclusion_areas_fn
from .array_funs import waypoints_list


def tr(text):
    """Helper function for translation"""
    return QCoreApplication.translate("ForestRoadDesigner", text)


def check_layers(dtm_layer, waypoints_layer, exclusion_areas_layer=None):
    """Check if waypoints, dtm and exclusion_areas_layer's contents are ok

    Check that waypoints_layer is a line layer with at least one line.
    Check that exclusion_areas_layer is a Polygon layer with at least one
    polygon feature.
    Check that the pixel's are square (for dtm_layer).
    Check that dtm_layer, waypoints_layer adn exclusion layer share the same
    CRS.
    """
    # wkbTypes:
    # qgis.sourceforge.net/qgis_api/html/classQgsVectorLayer.html#y10y4

    if waypoints_layer is not None:
        if waypoints_layer.isEditable() == True:
            message = tr(
                "La capa que contiene los puntos de paso (waypoints)"
                " está en modo de edición. \nPor favor cierre el"
                " modo de edición de la capa y relance el proceso."
            )
            return False, message

        if not waypoints_layer.isValid():
            message = tr(
                "La capa que contiene los puntos de"
                " paso (waypoints), no es válida.\nPor favor,"
                " solucionelo y relance el proceso."
            )
            return False, message

        elif not check_layer_type(waypoints_layer):
            message = tr(
                "La capa seleccionada como entrada para los puntos de"
                " paso no es de tipo linea.\nSolo se admiten geometrías"
                " tipo WKBLineString y WKBMultiLineString.\nPor favor,"
                " solucionelo y relance el proceso."
            )
            return False, message

        try:
            waypoints_list(waypoints_layer)
        except AttributeError:
            message = tr(
                "La capa que contiene los puntos de paso (waypoints)"
                " no es válida.\nPor favor, compruebe su geometría y"
                " relance el proceso."
            )
            return False, message

        if (
            waypoints_layer.wkbType() == QgsWkbTypes.LineString
            or waypoints_layer.wkbType() == QgsWkbTypes.MultiLineString
            or waypoints_layer.wkbType() == QgsWkbTypes.LineString25D
            or waypoints_layer.wkbType() == QgsWkbTypes.MultiLineString25D
        ) and waypoints_layer.dataProvider().featureCount() <= 0:
            message = tr(
                "Error: ¡No hay suficientes puntos para realizar la"
                " optimización!.\n"
                "Pruebe a seleccionar una capa con dos o más puntos de"
                " paso o cierre la edición de la capa actual y relance"
                " el proceso."
            )

            return False, message

        elif not check_feature_count(waypoints_layer):
            message = tr(
                "Forest Road Designer no admite como archivo de entrada"
                " para los puntos de paso (waypoints) capas con más de"
                " un elemento (feature). Por favor, seleccione un"
                " archivo con solo un elemento (feature) y relance el"
                " proceso."
            )
            return False, message

    if exclusion_areas_layer is not None:
        if exclusion_areas_layer.isEditable() == True:
            message = tr(
                "La capa que contiene las zonas a excluir del trazado"
                " está en modo de edición. \nPor favor cierre el"
                " modo de edición de la capa y relance el proceso."
            )
            return False, message

        if not exclusion_areas_layer.isValid():
            message = tr(
                "La capa que incluye las areas de exclusión no es"
                " válida.\nPor favor, solucionelo y relance el"
                " proceso."
            )
            return False, message

        from osgeo import ogr

        mb_v = ogr.Open(exclusion_areas_layer.source())
        try:
            mb_v.GetLayer()
        except AttributeError:
            message = tr(
                "El proceso requiere que la capa con las areas de"
                " exclusión para el trazado esté almacenada en disco"
                ", no se admiten capas en memoria.\nPor favor,"
                " soluciónelo y relance el proceso."
            )
            return False, message

        try:
            if waypoints_layer is not None:
                if not check_waypoints_not_excluded(
                    waypoints_layer, exclusion_areas_layer
                ):

                    message = tr(
                        "Existe al menos un punto de paso contenido en la"
                        " zona de exclusión. "
                        "Reviselo y relance el proceso"
                    )
                    return False, message
        except AttributeError:
            message = tr(
                "La capa que contiene las areas de exclusión"
                " no es válida.\nPor favor, compruebe su geometría y"
                " relance el proceso."
            )
            return False, message

        if not (exclusion_areas_layer.featureCount() >= 1):
            message = tr(
                "La capa que incluye las areas de exclusión no posee"
                " ninguna entidad (feature).\nPor favor, compruebelo"
                " y relance el proceso."
            )
            return False, message

        elif not (
            exclusion_areas_layer.wkbType() == QgsWkbTypes.Polygon
            or exclusion_areas_layer.wkbType() == QgsWkbTypes.MultiPolygon
            or exclusion_areas_layer.wkbType() == QgsWkbTypes.PolygonGeometry
            or exclusion_areas_layer.wkbType() == QgsWkbTypes.MultiPolygon25D
            or exclusion_areas_layer.wkbType() == QgsWkbTypes.Polygon25D
        ):
            # 3 == Polygon
            # 6 == MultiPolygon
            # 2 == PolygonGeometry
            # -2147483645 == Polygon25D
            # -2147483642 == MultiPolygon25D

            message = tr(
                "La capa  con las zonas de exclusión debe ser de"
                " tipo polígono.\nPor favor, solucionelo y relance"
                " el proceso."
            )
            return False, message

    elif not dtm_layer.isValid():
        message = tr(
            "Hay un problema con el Modelo Digital del Terreno,"
            " no es válido.\nPor favor solucionelo y relance el"
            " proceso."
        )
        return False, message

    raster = gdal.Open(dtm_layer.source())
    try:

        raster.GetGeoTransform()
    except AttributeError:
        message = tr(
            "Error: La capa seleccionada como Modelo Digital del"
            " Terreno no es compatible.\nPor favor asegurese de"
            " que ha seleccionado la capa correcta y relance el"
            " proceso."
        )
        return False, message

    if not check_pixel_size(dtm_layer):
        message = tr(
            "El ancho y alto de pixel del modelo digital del terreno"
            " difiere en más del 5 %, por favor seleccione un DTM con "
            " menor diferencia entre ancho y alto de pixel y relance"
            " el proceso."
        )
        return False, message

    elif not check_crs(dtm_layer, waypoints_layer, exclusion_areas_layer):
        message = tr(
            "Los ficheros de entrada tienen distintos sistemas"
            "de referencia (CRS), esto puede producir resultados"
            " inesperados. Establezca los sistemas de referencia"
            " de las capas y relance el proceso."
        )
        return False, message

    elif not check_bounds(dtm_layer, waypoints_layer):
        message = tr(
            "Los puntos dados exceden la extensión del DTM, por"
            " favor solucionelo y relance el proceso"
        )
        return False, message

    return True, ""


def check_layer_type(waypoints_layer):
    """Check that waypoint layer is LineString"""
    if waypoints_layer.wkbType() in (
        QgsWkbTypes.LineString,
        QgsWkbTypes.MultiLineString,
        QgsWkbTypes.LineString25D,
        QgsWkbTypes.MultiLineString25D,
    ):
        return True
    else:
        return False


def check_feature_count(waypoints_layer):
    """Check if the input vector layer has only one feature"""
    return waypoints_layer.featureCount() == 1


def check_crs(dtm_layer, waypoints_layer, exclusion_areas_layer=None):
    """Check input files CRS. If them are not the same launch message."""
    if not exclusion_areas_layer is None:
        if waypoints_layer is None:
            return dtm_layer.crs().authid() == exclusion_areas_layer.crs().authid()
        return (
            dtm_layer.crs().authid()
            == waypoints_layer.crs().authid()
            == exclusion_areas_layer.crs().authid()
        )
    else:
        return (
            waypoints_layer is None
            or dtm_layer.crs().authid() == waypoints_layer.crs().authid()
        )


def check_bounds(dtm_layer, waypoints_layer):
    """Check if the input waypoints layer is contained in the input DTM."""
    return waypoints_layer is None or dtm_layer.extent().contains(
        waypoints_layer.extent()
    )


def check_waypoints_not_excluded(waypoints_layer, exclusion_areas_layer=None):
    """Check if the input waypoints are contained in the exclusion areas.
    Check user mistake
    """
    if exclusion_areas_layer is None:
        return True
    else:
        polygon_wkb = exclusion_areas_fn.exclusion_areas_geoms(exclusion_areas_layer)

        waypoints_coords_list = waypoints_list(waypoints_layer)

        included_points = []
        for geom_ent in polygon_wkb:
            exclusion_geom = QgsGeometry()
            exclusion_geom.fromWkb(geom_ent)
            for point in waypoints_coords_list:
                point_coord = QgsPointXY(point[0], point[1])
                if exclusion_geom.contains(point_coord):
                    included_points.append(point_coord)

        return included_points == []


# por revisar def raster_info
def check_pixel_size(dtm_layer):
    """Extract the pixel information of the DTM layer pixel size"""
    dtm_layer_path = dtm_layer.source()
    raster = gdal.Open(
        dtm_layer_path
    )  # el dtm debe estar guardado, solo me lo hace con la ruta
    geotransform = raster.GetGeoTransform()
    pixel_size = []
    pixel_size.append([geotransform[1], geotransform[5]])
    return np.isclose(abs(geotransform[1]), abs(geotransform[5]), rtol=0.05)
