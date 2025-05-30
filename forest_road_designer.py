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

import os.path

from qgis.PyQt.QtCore import QSettings, QTranslator, qVersion, QCoreApplication, Qt
from qgis.PyQt.QtWidgets import QAction
from qgis.PyQt.QtGui import QIcon

from qgis.core import QgsApplication
from .processing_provider.provider import Provider

# Initialize Qt resources from file resources.py
from . import resources  # NOQA

# Import the code for the DockWidget
from .forest_road_designer_dockwidget import ForestRoadDesignerDockWidget
from .dlgabout import DlgAbout


class ForestRoadDesigner(object):
    """QGIS Plugin Implementation."""

    def __init__(self, iface):
        """Constructor.

        :param iface: An interface instance that will be passed to this class
            which provides the hook by which you can manipulate the QGIS
            application at run time.
        :type iface: QgsInterface
        """
        # Save reference to the QGIS interface
        self.iface = iface

        # initialize plugin directory
        self.plugin_dir = os.path.dirname(__file__)

        # initialize locale
        locale = QSettings().value("locale/userLocale")[0:2]
        locale_path = os.path.join(
            self.plugin_dir, "i18n", "ForestRoadDesigner_{}.qm".format(locale)
        )

        if os.path.exists(locale_path):
            self.translator = QTranslator()
            self.translator.load(locale_path)

            if qVersion() > "4.3.3":
                QCoreApplication.installTranslator(self.translator)

        # processing provider
        self.provider = None

        # Declare instance attributes
        self.actions = []
        self.menu = self.tr("&Forest Road Designer")
        # TODO: We are going to let the user set this up in a future iteration
        self.toolbar = self.iface.addToolBar("ForestRoadDesigner")
        self.toolbar.setObjectName("ForestRoadDesigner")

        self.pluginIsActive = False
        self.dockwidget = None

    def tr(self, message):
        """Get the translation for a string using Qt translation API.

        We implement this ourselves since we do not inherit QObject.

        :param message: String for translation.
        :type message: str, QString

        :returns: Translated version of message.
        :rtype: QString
        """
        # noinspection PyTypeChecker,PyArgumentList,PyCallByClass
        return QCoreApplication.translate("ForestRoadDesigner", message)

    def add_action(
        self,
        icon_path,
        text,
        callback,
        enabled_flag=True,
        add_to_menu=True,
        add_to_toolbar=True,
        status_tip=None,
        whats_this=None,
        parent=None,
    ):
        """Add a toolbar icon to the toolbar.

        :param icon_path: Path to the icon for this action. Can be a resource
            path (e.g. ':/plugins/foo/bar.png') or a normal file system path.
        :type icon_path: str

        :param text: Text that should be shown in menu items for this action.
        :type text: str

        :param callback: Function to be called when the action is triggered.
        :type callback: function

        :param enabled_flag: A flag indicating if the action should be enabled
            by default. Defaults to True.
        :type enabled_flag: bool

        :param add_to_menu: Flag indicating whether the action should also
            be added to the menu. Defaults to True.
        :type add_to_menu: bool

        :param add_to_toolbar: Flag indicating whether the action should also
            be added to the toolbar. Defaults to True.
        :type add_to_toolbar: bool

        :param status_tip: Optional text to show in a popup when mouse pointer
            hovers over the action.
        :type status_tip: str

        :param parent: Parent widget for the new action. Defaults None.
        :type parent: QWidget

        :param whats_this: Optional text to show in the status bar when the
            mouse pointer hovers over the action.

        :returns: The action that was created. Note that the action is also
            added to self.actions list.
        :rtype: QAction
        """

        icon = QIcon(icon_path)
        action = QAction(icon, text, parent)
        action.triggered.connect(callback)
        action.setEnabled(enabled_flag)

        aboutIcon = QIcon(":/plugins/ForestRoadDesigner/icons/aboutIcon.png")
        self.actionAbout = QAction(aboutIcon, "Acerca de", self.iface.mainWindow())
        self.actionAbout.triggered.connect(self.about)
        self.actionAbout.setEnabled(enabled_flag)

        if status_tip is not None:
            action.setStatusTip(status_tip)

        if whats_this is not None:
            action.setWhatsThis(whats_this)

        if add_to_toolbar:
            self.toolbar.addAction(action)

        if add_to_menu:
            self.iface.addPluginToMenu(self.menu, action)
            self.iface.addPluginToMenu(self.menu, self.actionAbout)

        self.actions.append(action)
        self.actions.append(self.actionAbout)

        return action

    def initGui(self):
        """Create the menu entries and toolbar icons inside the QGIS GUI."""

        icon_path = ":/plugins/ForestRoadDesigner/icons/icon.png"
        self.add_action(
            icon_path,
            text=self.tr("Forest Road Designer"),
            callback=self.run,
            parent=self.iface.mainWindow(),
        )

        self.initProcessing()

    # --------------------------------------------------------------------------

    def initProcessing(self):
        self.provider = Provider()
        QgsApplication.processingRegistry().addProvider(self.provider)

    # --------------------------------------------------------------------------

    def onClosePlugin(self):
        """Cleanup necessary items here when plugin dockwidget is closed"""

        # disconnects
        self.dockwidget.closingPlugin.disconnect(self.onClosePlugin)

        # remove this statement if dockwidget is to remain
        # for reuse if plugin is reopened
        # Commented next statement since it causes QGIS crashe
        # when closing the docked window:
        # self.dockwidget = None

        self.pluginIsActive = False

    def unload(self):
        """Removes the plugin menu item and icon from QGIS GUI."""

        # print "** UNLOAD ForestRoadDesigner"

        for action in self.actions:
            self.iface.removePluginMenu(self.tr("&Forest Road Designer"), action)
            self.iface.removeToolBarIcon(action)
        # remove the toolbar
        del self.toolbar

        # remove processprovider
        QgsApplication.processingRegistry().removeProvider(self.provider)

    # --------------------------------------------------------------------------

    def run(self):
        """Run method that loads and starts the plugin"""

        if not self.pluginIsActive:
            self.pluginIsActive = True

            # print "** STARTING ForestRoadDesigner"

            # dockwidget may not exist if:
            #    first run of plugin
            #    removed on close (see self.onClosePlugin method)
            if self.dockwidget is None:
                # Create the dockwidget (after translation) and keep reference
                self.dockwidget = ForestRoadDesignerDockWidget(self.iface)

            # connect to provide cleanup on closing of dockwidget
            self.dockwidget.closingPlugin.connect(self.onClosePlugin)

            # show the dockwidget
            # TODO: fix to allow choice of dock location
            self.iface.addDockWidget(Qt.RightDockWidgetArea, self.dockwidget)
            self.dockwidget.show()

    def about(self):
        DlgAbout(self.iface.mainWindow()).exec_()
