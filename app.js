window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })
    } else {
        h1.textContent = 'You have to accept for us to get you location'
    }
});