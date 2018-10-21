// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 42.352271, lng: -71.05524200000001},
  zoom: 13
});
infoWindow = new google.maps.InfoWindow;


var features = [
  {
    position: new google.maps.LatLng(42.352271, -71.05524200000001),
    type: 'station',
    name: 'South Station'
  },
  {
    position: new google.maps.LatLng(42.330154, -71.057655),
    type: 'station',
    name: 'Andrew'
  },
  {
    position: new google.maps.LatLng(42.3884, -71.11914899999999),
    type: 'station',
    name: 'Porter Square'
  },
  {
    position: new google.maps.LatLng(42.373362, -71.118956),
    type: 'station',
    name: 'Harvard Square'
  },
  {
    position: new google.maps.LatLng(42.320685, -71.052391),
    type: 'station',
    name: 'JFK/UMass'
  },
  {
    position: new google.maps.LatLng(42.31129, -71.053331),
    type: 'station',
    name: 'Savin Hill'
  },
  {
    position: new google.maps.LatLng(42.35639457, -71.0624242),
    type: 'station',
    name: 'Park Street'
  },
  {
    position: new google.maps.LatLng(42.342622, -71.056967),
    type: 'station',
    name: 'Broadway'
  },
  {
    position: new google.maps.LatLng(42.275275, -71.029583),
    type: 'station',
    name: 'North Quincy'
  },
  {
    position: new google.maps.LatLng(42.29312583, -71.06573796000001),
    type: 'station',
    name: 'Shawmut'
  },
  {
    position: new google.maps.LatLng(42.39674, -71.121815),
    type: 'station',
    name: 'Davis'
  },
  {
    position: new google.maps.LatLng(42.395428, -71.142483),
    type: 'station',
    name: 'Alewife'
  },
  {
    position: new google.maps.LatLng(42.36249079, -71.08617653),
    type: 'station',
    name: 'Kendall/MIT'
  },
  {
    position: new google.maps.LatLng(42.361166, -71.070628),
    type: 'station',
    name: 'Charles/MGH'
  },
  {
    position: new google.maps.LatLng(42.355518, -71.060225),
    type: 'station',
    name: 'Downtown Crossing'
  },
  {
    position: new google.maps.LatLng(42.251809, -71.005409),
    type: 'station',
    name: 'Quincy Center'
  },
  {
    position: new google.maps.LatLng(42.233391, -71.007153),
    type: 'station',
    name: 'Quincy Adams'
  },
  {
    position: new google.maps.LatLng(42.284652, -71.06448899999999),
    type: 'station',
    name: 'Ashmont'
  },
  {
    position: new google.maps.LatLng(42.2665139, -71.0203369),
    type: 'station',
    name: 'Wollaston'
  },
  {
    position: new google.maps.LatLng(42.300093, -71.061667),
    type: 'station',
    name: 'Fields Corner'
  },
  {
    position: new google.maps.LatLng(42.365486, -71.103802),
    type: 'station',
    name: 'Central Square'
  },
  {
    position: new google.maps.LatLng(42.2078543, -71.0011385),
    type: 'station',
    name: 'Braintree'
  },

];

//Create markers.
features.forEach(function(feature) {
  var marker = new google.maps.Marker(
  {
    position: feature.position,
    icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png',
    map: map
  })
});




// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}


// Show the information for a store when its marker is clicked.
// map.data.addListener('click', event => {

// let name = event.feature.getProperty('name');
// let description = event.feature.getProperty('description');
// let hours = event.feature.getProperty('hours');
// let phone = event.feature.getProperty('phone');
// let position = event.feature.getGeometry().get();
// let content = `
//         <img style="float:left; width:200px; margin-top:30px" src="img/logo_${category}.png">
//         <div style="margin-left:220px; margin-bottom:20px;">
//         <h2>${name}</h2><p>${description}</p>
//         <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
//         <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
//       </div>
// `
// infoWindow.setContent(content);
// infoWindow.setPosition(position);
// infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
// infoWindow.open(map);
// });






