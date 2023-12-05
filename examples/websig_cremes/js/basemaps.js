
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});


var pnoa = L.tileLayer.wms('https://www.ign.es/wms-inspire/pnoa-ma',{
    layers: 'OI.OrthoimageCoverage',
    format: 'image/png',
    transparent: true,
    attribution: '&copy; Instituto Geográfico Nacional'
});

var catastro = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
    layers: 'Catastro',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: ' <a href="http://www.catastro.meh.es/" target="_blank">Dirección General del Catastro</a>'
});

var sup_forestal500 = L.tileLayer.wms('https://geoserver.liberam.synology.me/geoserver/cremes/wms', {
  layers: 'supforest500',
  format: 'image/png',
  transparent: true,
  tiled: true,
  minZoom: 14,
  opacity: 0.7,
  attribution: '&copy; <a href="https://liberam.es">Liberam Technologies, S.L.</a>'

});

  var sup_forestal100 = L.tileLayer.wms('https://geoserver.liberam.synology.me/geoserver/cremes/wms', {
    layers: 'supforest100',
    format: 'image/png',
    transparent: true,
    tiled: true,
    minZoom: 14,
    opacity: 0.7,
    attribution: '&copy; <a href="https://liberam.es">Liberam Technologies, S.L.</a>'
  });


var sup_forestal50 = L.tileLayer.wms('https://geoserver.liberam.synology.me/geoserver/cremes/wms', {
  layers: 'supforest50',
  format: 'image/png',
  transparent: true,
  tiled: true,
  minZoom: 14,
  opacity: 0.7,
  attribution: '&copy; <a href="https://liberam.es">Liberam Technologies, S.L.</a>'

});


// var sup_forestal = L.tileLayer.wms('https://192.168.1.142:8086/geoserver/cremes/wms', {    

var sup_forestal = L.tileLayer.wms('https://geoserver.liberam.synology.me/geoserver/cremes/wms', {
  layers: 'supforest',
  format: 'image/png',
  transparent: true,
  tiled: true,
  minZoom: 14,
  opacity: 0.7,
  attribution: '&copy; <a href="https://liberam.es">Liberam Technologies, S.L.</a>'

});


var baseLayers = {
    "PNOA": pnoa,
    "OpenStreeMap": osm
};
  
  
var overLayers = {
    "Cadastre": catastro,
    "Superficie Forestal": sup_forestal,
    "Àrea afecció 50m": sup_forestal50,
    "Àrea afecció 100m": sup_forestal100,
    "Àrea afecció 500m": sup_forestal500,
};



