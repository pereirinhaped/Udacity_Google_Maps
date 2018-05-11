
// Map document constants
var mapElementId = "map_canvas";
var mapHtmlElement = document.getElementById(mapElementId);

// Will hold the Map object
var myMap;
var c1Layer;

// Map Initial Params
var mapInitCenter = {
    lat: 38.765246,
    lng: -9.102585
};
var mapInitZoom = 15;

var mapInitParams = {
    center: mapInitCenter,
    zoom: mapInitZoom,
    mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'Road', 'Nightly']
    }
};

var markers = [];

// Map init callback
function initMap() {
    loadMap(mapHtmlElement, mapInitParams);
    
    loadGeoDataToMarkersArray(markers, networkAssets.reservoirs);

    document.getElementById("show-reservoirs").addEventListener("click", showMarkers);
    document.getElementById("hide-reservoirs").addEventListener("click", hideMarkers);
    document.getElementById("show-pipes").addEventListener("click", showPipes);
    document.getElementById("hide-pipes").addEventListener("click", hidePipes);
}

// Google Maps API access
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
      infowindow.setContent(
          '<div><h3>' + marker.title + '</h3>' +
          '<p> Latitude: ' + truncateCoordinate(marker.position.lat(), 5) + '</p>' +
          '<p> Longitude: ' + truncateCoordinate(marker.position.lng(), 5) + '</p></div>'
        );
      infowindow.open(myMap, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
    }
}

function truncateCoordinate(coord, dec) {
    var decimals = Math.pow(10, dec);
    return Math.round(coord * decimals) / decimals;
}

function loadMap(element, params) {
    myMap = new google.maps.Map(
        element, 
        params
    );
    // Load Map Styles
    myMap.mapTypes.set('Nightly', getMappedStyleType(nightly_style));
    myMap.mapTypes.set('Road', getMappedStyleType(roadOutline_style));


    c1Layer = new google.maps.KmlLayer({
        url: 'http://pereirinhaped.github.io/paths/C1.kml',
      });
}

//
// Map window auxiliary functions
//
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

function showPipes() {
    c1Layer.setMap(myMap);
}

function hidePipes() {
    c1Layer.setMap(null);
}