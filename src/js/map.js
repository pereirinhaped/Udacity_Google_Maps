
// Map document constants
var mapElementId = "map";
var mapHtmlElement = document.getElementById(mapElementId);

// Will hold the Map object
var map;

// Some test markers
var reservoirs = [
    {
        position: {
            lat: 38.765246,
            lng: -9.102585
        },
        label: "R1",
        title: "Reservatório Av. Berlim"
    }, {
        position: {
            lat: 38.762610,
            lng: -9.124741
        },
        label: "R2",
        title: "Reservatório Olivais Sul"
    }, {
        position: {
            lat: 38.750095,
            lng: -9.114399
        },
        label: "R3",
        title: "Reservatório Chelas"
    }
];

// Map Initial Params
var mapInitCenter = {
    lat: 38.765246,
    lng: -9.102585
};
var mapInitZoom = 15;

var mapInitParams = {
    center: mapInitCenter,
    zoom: mapInitZoom
};


// Map init callback
function initMap() {
    loadMap(mapHtmlElement, mapInitParams);
    
    loadMarkers(map, reservoirs);
}

// Google Maps API access
function loadMarkers(map, markers) {
    for (var i = 0; i < markers.length; i++)
        getNewMarker(map, markers[i]);
}

function getNewMarker(map, marker) {
    return new google.maps.Marker(
        {
            position: marker.position,
            label: marker.label,
            map: map,
            title: marker.title
        }
    );
}

function loadMap(element, params) {
    map = new google.maps.Map(
        element, 
        params
    );
}