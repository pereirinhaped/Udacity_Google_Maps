
var mapId = "map";
var mapHtmlElement = document.getElementById(mapId);
var map;

// Map Initial Params
var mapInitCenter = {
    lat: 38.753548, 
    lng: -9.144780
};

var mapInitParams = {
    center: mapInitCenter,
    zoom: 13
}

// Map init callback
function initMap() {
    map = new google.maps.Map(mapHtmlElement, mapInitParams);
    console.log("Map init callback ends.");
}