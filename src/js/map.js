
// Map document constants
var mapElementId = "map_canvas";
var mapHtmlElement = document.getElementById(mapElementId);

// Will hold the Map object
var myMap;

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
    zoom: mapInitZoom,
    mapTypeControl: false
};

var markers = [];

// Map init callback
function initMap() {
    loadMap(mapHtmlElement, mapInitParams);
    
    loadGeoDataToMarkersArray(markers, reservoirs);

    document.getElementById("show-reservoirs").addEventListener("click", showMarkers);
    document.getElementById("hide-reservoirs").addEventListener("click", hideMarkers);
}

// Google Maps API access
function showMarkers() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(myMap);
        bounds.extend(markers[i].position);
    }
    myMap.fitBounds(bounds);
}

function hideMarkers() {
    for (var i = 0; i < markers.length; i++)
        markers[i].setMap(null);
}

function loadGeoDataToMarkersArray(markersArr, reservoirs) {
    var infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < reservoirs.length; i++) {
        markersArr.push( getNewMarker( reservoirs[i], "R" + i ));
        markersArr[i].addListener(
            'click', function() {
                populateInfoWindow(this, infowindow)
            }
        );
    }
}

function getNewMarker(marker, id) {
    return new google.maps.Marker(
        {
            position: marker.position,
            label: marker.label,
            title: marker.title,
            id: id
        }
    );
}

function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<div>' + marker.title + '</div>');
      infowindow.open(myMap, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
    }
  }

function loadMap(element, params) {
    myMap = new google.maps.Map(
        element, 
        params
    );
}