var baselayer=new ol.layer.Tile({
     source:new ol.source.MapQuest({layer:'sat'})
    }
);
var baseview=new ol.View({
  center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
  zoom: 4
})

var stroke = new ol.style.Stroke({color: 'red', width: 2});
var fill = new ol.style.Fill({color: 'red'});
var the_style=[new ol.style.Style({
  image: new ol.style.RegularShape(
      /** @type {olx.style.RegularShapeOptions} */({
        fill: fill,
        stroke: stroke,
        points: 4,
        radius: 10,
        radius2: 0,
        angle: Math.PI / 4
      }))
})]

var newarray=[];

_.forEach(data,function(point){
  var temp=new ol.Feature(new ol.geom.Point(point.coordinates));
  newarray.push(temp);
  temp.setStyle(the_style[0])
});


var source = new ol.source.Vector({
  features: newarray
});
var vectorLayer = new ol.layer.Vector({
  source: source
});


var view = new ol.View({
      center:ol.proj.transform([-79.396944,43.675833], 'EPSG:4326', 'EPSG:3857'),
  zoom: 5
})


var map = new ol.Map({
  target: 'map',
  renderer: 'canvas',
  layers: [
    baselayer,
    vectorLayer
  ],
  view: view
});

