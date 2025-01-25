var size = 0;
var placement = 'point';

var style_70MHzkielletytkunnat_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAMEFIN") !== null) {
        labelText = String(feature.get("NAMEFIN"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80, 80, 80, 1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.5}),fill: new ol.style.Fill({color: 'rgba(227,26,28,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
