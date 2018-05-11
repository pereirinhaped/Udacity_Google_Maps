var road_color = '#bfbfbf';

var nightly_style = {
  styles: [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    }
  ],
  name: 'Nightly'
};

//
// Roads and Streets Only
//
var roadOutline_style = {
  styles: [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'labels.text',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'labels.text.fill',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.stroke',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text.fill',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        { visibility: 'on' },
        { color: '#ffffff' }
      ]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { visibility: 'on' },
        { color: road_color }
      ]
    }
  ],
  name: 'RoadAndStreet'
};

//
// Auxiliary map styles functions
//
function getMappedStyleType(style) {
  return new google.maps.StyledMapType(
    style.styles,
    {name: style.name}
  );
}