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

// Load the stations GeoJSON onto the map
map.data.loadGeoJson('stations.json');

// Define the custom marker icons.
map.data.setStyle(function(feature) {
  var icon=null;
  if (feature.getProperty('icon')) {
    icon = feature.getProperty('icon');
  }
  return /** @type {google.maps.Data.StyleOptions} */({
    icon: icon
  });
});



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



// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('TO DO: place icon here');
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
