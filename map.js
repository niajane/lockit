// Create map 
var map = L.map('map').setView([0, 0], 13);

// Add OSM tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Get current location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    // Set map center to current location
    map.panTo(new L.LatLng(lat, lng));

    // Add marker at current location
    L.marker([lat, lng]).addTo(map);
  });
}
