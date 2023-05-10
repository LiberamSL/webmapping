
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var catastro = L.tileLayer.wms('https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
    layers: 'Catastro',
    format: 'image/jpeg',
    transparent: true,
    version: '1.1.1',
    attribution: 'Catastro de España'
    });

var pnoa = L.tileLayer.wms('https://www.ign.es/wms-inspire/pnoa-ma',{
    layers: 'OI.OrthoimageCoverage',
    format: 'image/png',
    transparent: true,
    attribution: '&copy; Instituto Geográfico Nacional'
});

// var area_100 = L.tileLayer.wms('https://liberam.synology.me:8443/geoserver/cremes/wms', {
// var area_100 = L.tileLayer.wms('https://192.168.1.142:8081/geoserver/cremes/wms', {
var area_100 = L.tileLayer.wms('http://liberam.synology.me:8600/geoserver/cremes/wms', {

  layers: 'cremes:supforest100',
  format: 'image/png',
  transparent: true,
  tiled: true,
  minZoom: 14,
  opacity: 0.7,
  attribution: '&copy; <a href="https://liberam.es">Liberam Technologies, S.L.</a>'
});

//var sup_forestal = L.tileLayer.wms('https://liberam.synology.me:8443/geoserver/cremes/wms', {
// var sup_forestal = L.tileLayer.wms('https://192.168.1.142:8081/geoserver/cremes/wms', {    
var sup_forestal = L.tileLayer.wms('http://liberam.synology.me:8600/geoserver/cremes/wms', {
  layers: 'cremes:sup_forestal',
  format: 'image/png',
  transparent: true,
  tiled: true,
  minZoom: 14,
  opacity: 0.7,
  attribution: '&copy; <a href="https://liberam.es">Liberam Technologies, S.L.</a>'

});

/*
var baseLayers = {
    "Catastro": catastro,
    "OpenStreeMap": osm
};
*/
var overLayers = {
    "Catastro": catastro,
    "OpenStreeMap": osm,
    "PNOA": pnoa,
    "Superficie Forestal": sup_forestal,
    "Àrea afecció 100m": area_100,

};


