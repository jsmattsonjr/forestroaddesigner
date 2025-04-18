<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="en" sourcelanguage="es_ES">
<context>
    <name></name>
    <message>
        <location filename="../processing_provider/pa_utils.py" line="101"/>
        <source>el parámetro {0} no puede ser menor que {1}
</source>
        <translation>the parameter {0} cannot be less than {1}
</translation>
    </message>
    <message>
        <location filename="../processing_provider/pa_utils.py" line="105"/>
        <source>el parámetro {0} no puede ser mayor que {1}
</source>
        <translation>the parameter {0} cannot be greater than {1}
</translation>
    </message>
    <message>
        <location filename="../processing_provider/pa_utils.py" line="114"/>
        <source>    Distancia origen-destino {:.2f}{}
    Distancia recorrido total {:.2f}{}
    Desnivel neto {:.2f}{}
    Desnivel acumulado {:.2f}{}
    Desnivel medio neto {:.2f}{}
    Desnivel medio acumulado {:.2f}{}
    Número penalizaciones pendiente {}</source>
        <translation>    Origin-destination distance {:.2f}{}
    Total route distance {:.2f}{}
    Net elevation change {:.2f}{}
    Accumulated elevation change {:.2f}{}
    Average net gradient {:.2f}{}
    Average accumulated gradient {:.2f}{}
    Number of slope penalties {}</translation>
    </message>
    <message>
        <location filename="../processing_provider/pa_utils.py" line="140"/>
        <source>
   Número penalizaciones radio {}</source>
        <translation>
   Number of radius penalties {}</translation>
    </message>
    <message>
        <location filename="../processing_provider/pa_utils.py" line="146"/>
        <source>
   Número penalizaciones desmonte/terraplén {}</source>
        <translation>
   Number of cut/fill penalties {}</translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <location filename="../frd_utils/check_point_dtm_extent.py" line="38"/>
        <source>Error: ¡No se admiten puntos fuera de la extensión del Modelo Digital del Terreno!</source>
        <translation>Error: Points outside the Digital Terrain Model extent are not allowed!</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="55"/>
        <source>La capa que contiene los puntos de paso (waypoints) está en modo de edición. 
Por favor cierre el modo de edición de la capa y relance el proceso.</source>
        <translation>The layer containing the waypoints is in edit mode. 
Please exit the layer edit mode and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="63"/>
        <source>La capa que contiene los puntos de paso (waypoints), no es válida.
Por favor, solucionelo y relance el proceso.</source>
        <translation>The layer containing the waypoints is not valid.
Please fix it and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="71"/>
        <source>La capa seleccionada como entrada para los puntos de paso no es de tipo linea.
Solo se admiten geometrías tipo WKBLineString y WKBMultiLineString.
Por favor, solucionelo y relance el proceso.</source>
        <translation>The selected input layer for waypoints is not a line type.
Only WKBLineString and WKBMultiLineString geometry types are supported.
Please fix it and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="82"/>
        <source>La capa que contiene los puntos de paso (waypoints) no es válida.
Por favor, compruebe su geometría y relance el proceso.</source>
        <translation>The layer containing the waypoints is not valid.
Please check its geometry and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="95"/>
        <source>Error: ¡No hay suficientes puntos para realizar la optimización!.
Pruebe a seleccionar una capa con dos o más puntos de paso o cierre la edición de la capa actual y relance el proceso.</source>
        <translation>Error: There are not enough points to perform the optimization!
Try selecting a layer with two or more waypoints or close the current layer editing mode and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="106"/>
        <source>Forest Road Designer no admite como archivo de entrada para los puntos de paso (waypoints) capas con más de un elemento (feature). Por favor, seleccione un archivo con solo un elemento (feature) y relance el proceso.</source>
        <translation>Forest Road Designer does not support input layers for waypoints with more than one feature. Please select a file with only one feature and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="117"/>
        <source>La capa que contiene las zonas a excluir del trazado está en modo de edición. 
Por favor cierre el modo de edición de la capa y relance el proceso.</source>
        <translation>The layer containing the exclusion zones is in edit mode. 
Please exit the layer edit mode and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="125"/>
        <source>La capa que incluye las areas de exclusión no es válida.
Por favor, solucionelo y relance el proceso.</source>
        <translation>The layer containing the exclusion areas is not valid.
Please fix it and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="138"/>
        <source>El proceso requiere que la capa con las areas de exclusión para el trazado esté almacenada en disco, no se admiten capas en memoria.
Por favor, soluciónelo y relance el proceso.</source>
        <translation>The process requires that the layer with exclusion areas be stored on disk; memory layers are not supported.
Please fix it and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="152"/>
        <source>Existe al menos un punto de paso contenido en la zona de exclusión. Reviselo y relance el proceso</source>
        <translation>There is at least one waypoint inside an exclusion zone. Please review it and restart the process</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="159"/>
        <source>La capa que contiene las areas de exclusión no es válida.
Por favor, compruebe su geometría y relance el proceso.</source>
        <translation>The layer containing the exclusion areas is not valid.
Please check its geometry and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="167"/>
        <source>La capa que incluye las areas de exclusión no posee ninguna entidad (feature).
Por favor, compruebelo y relance el proceso.</source>
        <translation>The layer containing the exclusion areas has no features.
Please check it and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="187"/>
        <source>La capa  con las zonas de exclusión debe ser de tipo polígono.
Por favor, solucionelo y relance el proceso.</source>
        <translation>The layer with exclusion zones must be of polygon type.
Please fix it and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="195"/>
        <source>Hay un problema con el Modelo Digital del Terreno, no es válido.
Por favor solucionelo y relance el proceso.</source>
        <translation>There is a problem with the Digital Terrain Model; it is not valid.
Please fix it and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="207"/>
        <source>Error: La capa seleccionada como Modelo Digital del Terreno no es compatible.
Por favor asegurese de que ha seleccionado la capa correcta y relance el proceso.</source>
        <translation>Error: The selected Digital Terrain Model layer is not compatible.
Please make sure you have selected the correct layer and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="216"/>
        <source>El ancho y alto de pixel del modelo digital del terreno difiere en más del 5 %, por favor seleccione un DTM con  menor diferencia entre ancho y alto de pixel y relance el proceso.</source>
        <translation>The pixel width and height of the digital terrain model differ by more than 5%. Please select a DTM with less difference between pixel width and height and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="225"/>
        <source>Los ficheros de entrada tienen distintos sistemasde referencia (CRS), esto puede producir resultados inesperados. Establezca los sistemas de referencia de las capas y relance el proceso.</source>
        <translation>The input files have different coordinate reference systems (CRS), which may produce unexpected results. Please set the same reference system for all layers and restart the process.</translation>
    </message>
    <message>
        <location filename="../frd_utils/inputs_checker.py" line="234"/>
        <source>Los puntos dados exceden la extensión del DTM, por favor solucionelo y relance el proceso</source>
        <translation>The given points exceed the DTM extent, please fix it and restart the process</translation>
    </message>
</context>
<context>
    <name>ForestRoadDesigner</name>
    <message>
        <location filename="../forest_road_designer.py" line="218"/>
        <source>&amp;Forest Road Designer</source>
        <translation>&amp;Forest Road Designer</translation>
    </message>
    <message>
        <location filename="../forest_road_designer.py" line="181"/>
        <source>Forest Road Designer</source>
        <translation>Forest Road Designer</translation>
    </message>
</context>
<context>
    <name>ForestRoadDesignerDockWidget</name>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="234"/>
        <source>Forest Road Designer {}</source>
        <translation>Forest Road Designer {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="393"/>
        <source>{}/cambio máximo pendiente</source>
        <translation>{}/maximum slope change</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="503"/>
        <source>PROCESANDO</source>
        <translation>PROCESSING</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="588"/>
        <source>Seleccione el directorio de salida</source>
        <translation>Select output directory</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="593"/>
        <source>salidas_FRD</source>
        <translation>FRD_outputs</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="701"/>
        <source>Error: ¡No se ha seleccionado un DTM!
Por favor seleccione uno.</source>
        <translation>Error: No DTM has been selected!
Please select one.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="627"/>
        <source>Error: ¡No se ha seleccionado ninguna capa con los puntos de paso!
Por favor seleccione una.</source>
        <translation>Error: No layer with waypoints has been selected!
Please select one.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="714"/>
        <source>Error: ¡No se ha seleccionado ninguna capa con las zonas de exclusion para el trazado!
Por favor seleccione una o desactive la opción.</source>
        <translation>Error: No layer with exclusion zones has been selected!
Please select one or disable the option.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="725"/>
        <source>Error: ¡No se ha seleccionado directorio para los resultados!, por favor seleccione uno</source>
        <translation>Error: No directory for results has been selected! Please select one</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="675"/>
        <source>Error: ¡Error en las opciones de pista!Por favor revise los valores o desactive la opción</source>
        <translation>Error: Error in road options! Please review the values or disable the option</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1353"/>
        <source>Error del optimizador</source>
        <translation>Optimizer error</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1354"/>
        <source>Forest Road Designer: ha fallado la optimización</source>
        <translation>Forest Road Designer: optimization has failed</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="920"/>
        <source>Forest Road Designer: Simplificando...</source>
        <translation>Forest Road Designer: Simplifying...</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="936"/>
        <source>Forest Road Designer: procesando...</source>
        <translation>Forest Road Designer: processing...</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="968"/>
        <source>resultado obtenido</source>
        <translation>result obtained</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="984"/>
        <source>Modo interactivo</source>
        <translation>Interactive mode</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1029"/>
        <source>Forest Road Designer: entrando en modo interactivo...</source>
        <translation>Forest Road Designer: entering interactive mode...</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1038"/>
        <source>No se ha podido iniciar el modo interactivo.</source>
        <translation>Unable to start interactive mode.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1064"/>
        <source>Continuar Proceso</source>
        <translation>Continue Process</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1076"/>
        <source>Iniciar el proceso de diseño</source>
        <translation>Start design process</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1160"/>
        <source>modo interactivo</source>
        <translation>interactive mode</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1218"/>
        <source>    Distancia origen-destino {:.2f}{}
    Distancia recorrido total {:.2f}{}
    Desnivel neto {:.2f}{}
    Desnivel acumulado {:.2f}{}
    Desnivel medio neto {:.2f}{}
    Desnivel medio acumulado {:.2f}{}
    Número penalizaciones pendiente {}</source>
        <translation>    Origin-destination distance {:.2f}{}
    Total route distance {:.2f}{}
    Net elevation difference {:.2f}{}
    Accumulated elevation difference {:.2f}{}
    Average net elevation difference {:.2f}{}
    Average accumulated elevation difference {:.2f}{}
    Number of slope penalties {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1244"/>
        <source>
   Número penalizaciones radio {}</source>
        <translation>
   Number of radius penalties {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1250"/>
        <source>
   Número penalizaciones desmonte/terraplén {}</source>
        <translation>
   Number of cut/fill penalties {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1365"/>
        <source>summary_layer {}</source>
        <translation>summary_layer {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1371"/>
        <source>Forest Road Designer ha finalizado el proceso</source>
        <translation>Forest Road Designer has finished the process</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1450"/>
        <source>Parámetros {0}</source>
        <translation>Parameters {0}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1408"/>
        <source>Radio mínimo de giro {:.2f}{} 
Tamaño mínimo de segmento {}{} 
Pendiente mínima {:.2f}% 

</source>
        <translation>Minimum turning radius {:.2f}{} 
Minimum segment size {}{} 
Minimum slope {:.2f}% 

</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1417"/>
        <source> Resultado 1
 Pendiente máxima {:.2f}%
</source>
        <translation> Result 1
 Maximum slope {:.2f}%
</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1422"/>
        <source> Resultado {} 
Pendiente máxima {:.2f}%
</source>
        <translation> Result {} 
Maximum slope {:.2f}%
</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1436"/>
        <source>Penalización cambio de dirección {}{}/180º 
Penalización cambio de rasante {}{}/cambio máximo pendiente</source>
        <translation>Direction change penalty {}{}/180° 
Grade change penalty {}{}/maximum slope change</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1455"/>
        <source>Factor de pendiente {} 
Factor de radio {}</source>
        <translation>Slope factor {} 
Radius factor {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1489"/>
        <source>    Distancia origen-destino: {:.2f} {}
    Desnivel neto: {:.2f} {}</source>
        <translation>    Distance from origin to destination: {:.2f} {}
    Net elevation difference: {:.2f} {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1502"/>
        <source>
    Distancia recorrido total: {:.2f} {}
    Desnivel acumulado: {:.2f}{}
    Desnivel acumulado medio: {:.2f} {}
    Número penalizaciones pendiente: {}</source>
        <translation>
    Total route distance: {:.2f} {}
    Accumulated elevation change: {:.2f}{}
    Average accumulated gradient: {:.2f} {}
    Number of slope penalties: {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1520"/>
        <source>
   Número penalizaciones radio: {}</source>
        <translation>
   Number of radius penalties: {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1526"/>
        <source>
   Número penalizaciones desmonte/terraplén: {}</source>
        <translation>
   Number of cut/fill penalties: {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1574"/>
        <source>
   Número de giros: {}</source>
        <translation>
   Number of turns: {}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1578"/>
        <source>
   Indice de calidad de trazado: {:.2f}</source>
        <translation>
   Route quality index: {:.2f}</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1559"/>
        <source>
    Distancia recorrido total: {:.2f} {}
    Desnivel acumulado: {:.2f} {}
    Desnivel acumulado medio: {:.2f} {}
    </source>
        <translation>
    Total route distance: {:.2f} {}
    Accumulated elevation change: {:.2f} {}
    Average accumulated gradient: {:.2f} {}
    </translation>
    </message>
</context>
<context>
    <name>ForestRoadDesignerProcessingAlgorithm</name>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="169"/>
        <source>Introduce capa</source>
        <translation>Enter layer</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="173"/>
        <source>Introduce zona de exclusión</source>
        <translation>Enter exclusion zone</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="182"/>
        <source>Introduce polilínea para proceso por lotes</source>
        <translation>Enter polyline for batch process</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="190"/>
        <source>Introduce carpeta destino de resultados</source>
        <translation>Enter destination folder for results</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="200"/>
        <source>Activa/desactiva opciones de pendiente/terraplen</source>
        <translation>Enable/disable slope/embankment options</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="422"/>
        <source>Error: ¡Error en las opciones de pista!</source>
        <translation>Error: Error in road options!</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="484"/>
        <source>Error en archivo salida</source>
        <translation>Error in output file</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="583"/>
        <source>    Distancia origen-destino {:.2f}{}
    Distancia recorrido total {:.2f}{}
    Desnivel neto {:.2f}{}
    Desnivel acumulado {:.2f}{}
    Desnivel medio neto {:.2f}{}
    Desnivel medio acumulado {:.2f}{}
    Número penalizaciones pendiente {}</source>
        <translation>    Distance from origin to destination {:.2f}{}
    Total route distance {:.2f}{}
    Net elevation difference {:.2f}{}
    Accumulated elevation difference {:.2f}{}
    Average net elevation difference {:.2f}{}
    Average accumulated elevation difference {:.2f}{}
    Number of slope penalties {}</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="609"/>
        <source>
   Número penalizaciones radio {}</source>
        <translation>
   Number of radius penalties {}</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="617"/>
        <source>
   Número penalizaciones desmonte/terraplén {}</source>
        <translation>
   Number of cut/fill penalties {}</translation>
    </message>
    <message>
        <location filename="../processing_provider/frd_processing_algorithm.py" line="627"/>
        <source>
   Indice de calidad de trazado {:.2f}</source>
        <translation>
   Route quality index {:.2f}</translation>
    </message>
</context>
<context>
    <name>Provider</name>
    <message>
        <location filename="../processing_provider/provider.py" line="28"/>
        <source>Forest Road Designer</source>
        <translation>Forest Road Designer</translation>
    </message>
</context>
<context>
    <name>self.self</name>
    <message>
        <location filename="../forest_road_designer_dockwidget.py" line="1464"/>
        <source>Mensaje</source>
        <translation>Message</translation>
    </message>
</context>
<context>
    <name>ForestRoadDesignerDockWidgetBase</name>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="73"/>
        <source>Forest Road Designer</source>
        <translation>Forest Road Designer</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="170"/>
        <source>Capa ráster del Modelo Digital del Terreno (DTM)</source>
        <translation>Digital Terrain Model (DTM) raster layer</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="198"/>
        <source>Manual Ayuda</source>
        <translation>User Guide</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="229"/>
        <source>Especifique el Modelo Digital del Terreno que contiene la zona de interés, en formato raster</source>
        <translation>Choose the raster Digital Terrain Model for the area of interest</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="278"/>
        <source>Gobierno de La Rioja</source>
        <translation>Gobierno de La Rioja</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="306"/>
        <source>PANOimagen S.L.</source>
        <translation>PANOimagen S.L.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="338"/>
        <source>Versión de Forest Road Designer</source>
        <translation>Forest Road Designer version</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="341"/>
        <source>Forest Road Designer version -.-</source>
        <translation>Forest Road Designer version -.-</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="380"/>
        <source>Directorio de salida</source>
        <translation>Output directory</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="402"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="409"/>
        <source>Especifique el directorio dónde se guardarán los resultados</source>
        <translation>Specify the directory where the results will be saved</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="412"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="427"/>
        <source>Proceso Interactivo</source>
        <translation>Interactive Processing</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="441"/>
        <source>Pendiente (%)</source>
        <translation>Grade (%)</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="458"/>
        <source>Longitud de segmento (en proyección)</source>
        <translation>Segment length (in projection)</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="485"/>
        <source>Desnivel </source>
        <translation>Elevation change </translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="498"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="560"/>
        <source>Comenzar el diseño en modo interactivo</source>
        <translation>Start the design in interactive mode</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="563"/>
        <source>Iniciar el proceso de diseño</source>
        <translation>Start the design process</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="596"/>
        <source>Cancelar el proceso de diseño</source>
        <translation>Cancel the design process</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="639"/>
        <source>Terminar el proceso interactivo</source>
        <translation>End the interactive process</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="642"/>
        <source>Finalizar captura</source>
        <translation>Finish capture</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="654"/>
        <source>Proceso por Lotes</source>
        <translation>Batch Processing</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="684"/>
        <source>Active la casilla si desea realizar el diseño con zonas a excluir del trazado</source>
        <translation>Check this box to exclude specific areas from the route design</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="687"/>
        <source>Diseño con zonas excluidas para el trazado</source>
        <translation>Route design with excluded areas</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="720"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="739"/>
        <source>Especifique la capa vectorial que incluye las zonas a excluir del diseño del trazado</source>
        <translation>Choose the vector layer with exclusion zones for the route</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="723"/>
        <source>Capa de exclusión para el trazado </source>
        <translation>Route exclusion layer </translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="762"/>
        <source>Parámetros de diseño</source>
        <translation>Design parameters</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="772"/>
        <source>Básicos (Predeterminados)</source>
        <translation>Basic (Default)</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="779"/>
        <source>Avanzados</source>
        <translation>Advanced</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="813"/>
        <source>Especifique los parámetros de diseño </source>
        <translation>Specify the design parameters </translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="876"/>
        <source>Básicos</source>
        <translation>Basic</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="931"/>
        <source>Determina los parámetros de pendiente y radio de curvatura</source>
        <translation>Determines the slope parameters and curve radius</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="937"/>
        <source>Tipo vehículo</source>
        <translation>Vehicle type</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="954"/>
        <source>Todoterreno</source>
        <translation>All-terrain vehicle</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="959"/>
        <source>Camión forestal</source>
        <translation>Forestry truck</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="964"/>
        <source>Camión trailer</source>
        <translation>Tractor-trailer</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="984"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1089"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1168"/>
        <source>Ver parámetros</source>
        <translation>View parameters</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1010"/>
        <source>Influye en la frecuencia de los cambios de dirección / rasante</source>
        <translation>Affects the frequency of direction/grade changes</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1013"/>
        <source>Frecuencia cambios dirección / rasante</source>
        <translation>Frequency of direction/grade changes</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1039"/>
        <source>Alta / Alta</source>
        <translation>High / High</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1044"/>
        <source>Alta / Media</source>
        <translation>High / Medium</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1049"/>
        <source>Media / Alta</source>
        <translation>Medium / High</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1054"/>
        <source>Media / Media</source>
        <translation>Medium / Medium</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1059"/>
        <source>Medio / Baja</source>
        <translation>Medium / Low</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1064"/>
        <source>Baja / Media</source>
        <translation>Low / Medium</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1069"/>
        <source>Baja / Baja</source>
        <translation>Low / Low</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1115"/>
        <source>Determina el peso de los factores limitantes</source>
        <translation>Determine the weights of limiting factors</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1118"/>
        <source>Relación factores limitantes</source>
        <translation>Relationship between limiting factors</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1138"/>
        <source>Equilibrado</source>
        <translation>Balanced</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1143"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2228"/>
        <source>Pendiente</source>
        <translation>Grade</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1148"/>
        <source>Radio curvatura</source>
        <translation>Radius of curvature</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1180"/>
        <source>Pendiente / Radio</source>
        <translation>Grade / Radius</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1222"/>
        <source>Pendiente mínima admisible</source>
        <translation>Minimum allowable grade</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1249"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1361"/>
        <source>--º</source>
        <translation>--º</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1282"/>
        <source>Especifique el valor de pendiente mínima admisible para el diseño del trazado</source>
        <translation>Specify the minimum allowable slope for the route</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1288"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1403"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1334"/>
        <source>Pendiente máxima admisible</source>
        <translation>Maximum allowable slope</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1397"/>
        <source>Especifique el valor de pendiente máxima admisible para el diseño del trazado</source>
        <translation>Specify the maximum allowable slope for the route</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1455"/>
        <source>Radio mínimo de giro</source>
        <translation>Minimum turning radius</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1471"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2618"/>
        <source>Info</source>
        <translation>Info</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1526"/>
        <source>Desmontes</source>
        <translation>Cuttings</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1564"/>
        <source>Terraplén</source>
        <translation>Embankment</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1586"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1779"/>
        <source>H:V</source>
        <translation>H:V</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1618"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1811"/>
        <source>H</source>
        <translation>H</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1631"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1830"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1660"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1859"/>
        <source>V</source>
        <translation>V</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1679"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1878"/>
        <source> º</source>
        <translation> º</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1695"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1894"/>
        <source>Hmax</source>
        <translation>Hmax</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1722"/>
        <source>Activar opciones de desmonte / terraplén</source>
        <translation>Enable cut / fill options</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1751"/>
        <source>Desmonte</source>
        <translation>Cutting</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1927"/>
        <source>Ancho de pista</source>
        <translation>Road width</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1950"/>
        <source>Dirección / Rasante</source>
        <translation>Alignment / Gradient</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="1996"/>
        <source>Dentro de los límites establecidos en los parámetros de diseño de la vía, se puede favorecer un resultado con mayor o menor frecuencia de cambios de rasante y/o de dirección disminuyendo o aumentando los valores en estas penalizaciones</source>
        <translation>Within the limits set by the road design parameters, you can favor a result with more or fewer changes in gradient and/or alignment by decreasing or increasing the values of these penalties</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2042"/>
        <source>Especifique la penalización por cambios de dirección. A mayor valor se evitará el trazado con curvas cerradas.</source>
        <translation>Specify the penalty for changes in alignment. Higher values will discourage routes with sharp curves.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2045"/>
        <source>Penalización máx. por cambio de dirección</source>
        <translation>Maximum penalty for change in alignment</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2078"/>
        <source>Especifique el valor de la penalización para los cambios de dirección. Cada giro de 180º en el trazado penaliza el camino con el valor especificado.</source>
        <translation>Specify the penalty value for changes in alignment. Each 180º turn in the route will be penalized by the specified amount.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2142"/>
        <source>Especifique la penalización por cambios de rasante. A mayor valor se evitará el trazado con cambios de rasante.</source>
        <translation>Specify the penalty for grade changes. Higher values will discourage routes with frequent grade changes.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2145"/>
        <source>Penalización max. por cambio de rasante</source>
        <translation>Max penalty for grade change</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2178"/>
        <source>Especifique el valor de la penalización para los cambios de rasante. Cada cambio de pendiente máximo (de -pte_max a +pte_max) se penaliza con el valor especificado.</source>
        <translation>Specify the penalty value for grade changes. Each full gradient shift (from -max_slope to +max_slope) is penalized with the specified value.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2208"/>
        <source>Optimización</source>
        <translation>Optimization</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2275"/>
        <source>Radio</source>
        <translation>Radius</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2331"/>
        <source>Desmonte/Terraplén</source>
        <translation>Cutting / Embankment</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2404"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2452"/>
        <source>Especifique el factor de tolerancia para la polilínea de resultado. A menor valor la polilínea final se ajustará a los puntos de la ruta óptima.</source>
        <translation>Specify the tolerance factor for the resulting polyline. Lower values will produce a polyline more closely aligned with the optimal route points.</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2407"/>
        <source>Factor tolerancia resultado</source>
        <translation>Result tolerance factor</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2414"/>
        <source>(-)</source>
        <translation>(-)</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2521"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2559"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Especifique la longitud mínima de segmento.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Specify the minimum segment length.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2524"/>
        <source>Longitud segmento mínima</source>
        <translation>Minimum segment length</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2604"/>
        <source>Peso relativo entre los distintos factores limitantes del diseño</source>
        <translation>Relative weights between the different design limiting factors</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2637"/>
        <source>Volver</source>
        <translation>Back</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2681"/>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2713"/>
        <source>Especifique la capa vectorial (polilínea) que contiene el punto de inicio, puntos de paso (opcionales) y punto de llegada, en formato vectorial (ESRI Shapefile)</source>
        <translation>Choose the vector layer (polyline) containing the start point, optional waypoints, and the endpoint, in vector format (ESRI Shapefile)</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2684"/>
        <source>Capa vectorial de entrada con los puntos de paso (polilínea)</source>
        <translation>Input vector layer with waypoints (polyline)</translation>
    </message>
    <message>
        <location filename="../forest_road_designer_dockwidget_base.ui" line="2737"/>
        <source>Iniciar proceso por lotes</source>
        <translation>Start batch processing</translation>
    </message>
</context>
</TS>
