



// Note: This requires that you consent to location sharing when
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

// Set location for each station.
var features = [
  {
    position: new google.maps.LatLng(42.352271, -71.05524200000001),
    type: 'station',
    name: 'South Station',
    id: 'place-sstat'
  },
  {
    position: new google.maps.LatLng(42.330154, -71.057655),
    type: 'station',
    name: 'Andrew',
    id: 'place-andrw'
  },
  {
    position: new google.maps.LatLng(42.3884, -71.11914899999999),
    type: 'station',
    name: 'Porter Square',
    id: 'place-portr'
  },
  {
    position: new google.maps.LatLng(42.373362, -71.118956),
    type: 'station',
    name: 'Harvard Square',
    id: 'place-harsq'
  },
  {
    position: new google.maps.LatLng(42.320685, -71.052391),
    type: 'station',
    name: 'JFK/UMass',
    id: 'place-jfk'
  },
  {
    position: new google.maps.LatLng(42.31129, -71.053331),
    type: 'station',
    name: 'Savin Hill',
    id: 'place-shmnl'
  },
  {
    position: new google.maps.LatLng(42.35639457, -71.0624242),
    type: 'station',
    name: 'Park Street',
    id: 'place-pktrm'
  },
  {
    position: new google.maps.LatLng(42.342622, -71.056967),
    type: 'station',
    name: 'Broadway',
    id: 'place-brdwy'
  },
  {
    position: new google.maps.LatLng(42.275275, -71.029583),
    type: 'station',
    name: 'North Quincy',
    id: 'place-nqncy'
  },
  {
    position: new google.maps.LatLng(42.29312583, -71.06573796000001),
    type: 'station',
    name: 'Shawmut',
    id: 'place-smmnl'
  },
  {
    position: new google.maps.LatLng(42.39674, -71.121815),
    type: 'station',
    name: 'Davis',
    id: 'place-davis'
  },
  {
    position: new google.maps.LatLng(42.395428, -71.142483),
    type: 'station',
    name: 'Alewife',
    id: 'place-alfcl'
  },
  {
    position: new google.maps.LatLng(42.36249079, -71.08617653),
    type: 'station',
    name: 'Kendall/MIT',
    id: 'place-knncl'
  },
  {
    position: new google.maps.LatLng(42.361166, -71.070628),
    type: 'station',
    name: 'Charles/MGH',
    id: 'place-chmnl'
  },
  {
    position: new google.maps.LatLng(42.355518, -71.060225),
    type: 'station',
    name: 'Downtown Crossing',
    id: 'place-dwnxg'
  },
  {
    position: new google.maps.LatLng(42.251809, -71.005409),
    type: 'station',
    name: 'Quincy Center',
    id: 'place-qnctr'
  },
  {
    position: new google.maps.LatLng(42.233391, -71.007153),
    type: 'station',
    name: 'Quincy Adams',
    id: 'place-qamnl'
  },
  {
    position: new google.maps.LatLng(42.284652, -71.06448899999999),
    type: 'station',
    name: 'Ashmont',
    id: 'place-asmnl'
  },
  {
    position: new google.maps.LatLng(42.2665139, -71.0203369),
    type: 'station',
    name: 'Wollaston',
    id: 'place-wlsta'
  },
  {
    position: new google.maps.LatLng(42.300093, -71.061667),
    type: 'station',
    name: 'Fields Corner',
    id: 'place-fldcr'
  },
  {
    position: new google.maps.LatLng(42.365486, -71.103802),
    type: 'station',
    name: 'Central Square',
    id: 'place-cntsq'
  },
  {
    position: new google.maps.LatLng(42.2078543, -71.0011385),
    type: 'station',
    name: 'Braintree',
    id: 'place-brntn'
  },

];


// Content window for station schedule
var contentString;
var infowindowClick = new google.maps.InfoWindow;

// Create station markers.
features.forEach(function(feature) {
  var marker = new google.maps.Marker(
  {
    position: feature.position,
    icon: 'marker.png',
    map: map
  });
  // Info window displaying schedule is displayed when the user clicks on staiton marker
  marker.addListener('click', function() {
  var stop_id = feature.id;
  var request = new XMLHttpRequest();
  request.open("GET", "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=" + stop_id, true);
  request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
                var theData = request.responseText;
                var schedule = JSON.parse(theData);
                contentString = schedule.data;
                console.log(contentString);
                infowindowClick.setContent("<div>" + contentString + "</div>");
                infowindowClick.open(map, marker);
        }
  }
  request.send();
});
});



// Creates a 2-pixel-wide red polyline connection the red line route.
var stationCoordinates = [
  {lat: 42.2078543, lng: -71.0011385},
  {lat: 42.233391, lng: -71.007153},
  {lat: 42.251809, lng: -71.005409},
  {lat: 42.251809, lng: -71.005409},
  {lat: 42.275275, lng: -71.029583},
  {lat: 42.31129, lng: -71.053331},
  {lat: 42.320685, lng: -71.052391},
  {lat: 42.330154, lng: -71.057655},
  {lat: 42.342622, lng: -71.056967},
  {lat: 42.352271, lng: -71.05524200000001},
  {lat: 42.355518, lng: -71.060225},
  {lat: 42.35639457, lng: -71.0624242},
  {lat: 42.361166, lng: -71.070628},
  {lat: 42.36249079, lng: -71.08617653},
  {lat: 42.365486, lng: -71.103802},
  {lat: 42.373362, lng: -71.118956},
  {lat: 42.3884, lng: -71.11914899999999},
  {lat: 42.39674, lng: -71.121815},
  {lat: 42.395428, lng: -71.142483}
];
var route = new google.maps.Polyline({
  path: stationCoordinates,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2
});
route.setMap(map);

// A separate red polyline connection for Ashmont branch.
var coordinatesToAshmont = [
  {lat: 42.320685, lng: -71.052391},
  {lat: 42.31129, lng: -71.053331},
  {lat: 42.300093, lng: -71.061667},
  {lat: 42.29312583, lng: -71.06573796000001},
  {lat: 42.284652, lng: -71.06448899999999}
];
var ashmontBranch = new google.maps.Polyline({
  path: coordinatesToAshmont,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2
});
ashmontBranch.setMap(map);



// HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
var geomarker = new google.maps.Marker(
  {
    position: pos,
    icon: 'geomarker.png',
    map: map
  });
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

