var map = L.map('map').setView([ 30.4500,-91.145688], 12);
		var bm =L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

var busroute = L.tileLayer.wms("https://maps.brgov.com/gis/services/Transportation/Bus_Route/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
var parks = L.tileLayer.wms("https://maps.brgov.com/gis/services/Infrastructure/BREC_Park/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
var busstop = L.tileLayer.wms("https://maps.brgov.com/gis/services/Transportation/Bus_Stop/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
var hospital = L.tileLayer.wms("https://maps.brgov.com/gis/services/Infrastructure/Hospital/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "EBR"
}).addTo(map);
//create control layers selection
var baseLayers = {
    "Basemap": bm
};
var overlays = {
    "Bus Route": busroute,
    "Parks": parks,
	"Bus Stop": busstop,
	"Hospitals": hospital
};
L.control.layers(baseLayers, overlays).addTo(map);