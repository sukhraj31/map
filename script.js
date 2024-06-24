function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 49.1320, lng: -122.8714 }, 
        zoom: 13
    });

    libraryLocation = new google.maps.Marker({
        position: { lat: 49.1320, lng: -122.8714 },
        map: map,
    });

    userLocation = new google.maps.Marker({
        position: { lat: 0, lng: 0 },
        map: map,
    });
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            userLocation.setPosition({ lat: lat, lng: lng });

            var libraryLatLng = new google.maps.LatLng(49.1320, -122.8714);
            var currentLatLng = new google.maps.LatLng(lat, lng);
            var distance = google.maps.geometry.spherical.computeDistanceBetween(libraryLatLng, currentLatLng);
            var distanceInKm = (distance / 1000).toFixed(2); 

            var distanceText = document.getElementById('distance');
            distanceText.textContent = `Distance to KPU Surrey Library: ${distanceInKm} km`;
        });
    }
}

initMap();
getCurrentLocation();

