document.getElementById('button').addEventListener('click', geolocate);

function geolocate() {
    navigator.geolocation.getCurrentPosition(success, error);
    //this gets the location of the user and passes that object of information to two parameters.
    //if user decides yes it will go to success, it not will go to error
}

function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = 'AIzaSyBiZkpbyrgH-Hj95_aaq6SYOz97PUTi3kk'
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`

    console.log(`${latitude}, ${longitude}`);
    console.log(position);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let json = JSON.parse(this.responseText)
            console.log(json.results[4].formatted_address);
            let location = json.results[4].formatted_address;
            document.getElementById('dataOutput').innerHTML = location;

        } else if (this.status === 404) {
            console.log(`Error! 404`)
        }
    }
    xhr.send();
}

function error (position) {
    console.error('User did not provide location');
}

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBiZkpbyrgH-Hj95_aaq6SYOz97PUTi3kk