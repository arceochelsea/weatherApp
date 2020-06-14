document.addEventListener('DOMContentLoaded', function () {

const successCallback = (position) => {
    console.log(position);

    //http://api.openweathermap.org/data/2.5/weather?lat=41.82&lon=-71.47&appid=97fafd7bd762d05a50b781f04baa379d

    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const apiKey = '97fafd7bd762d05a50b781f04baa379d';

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {

            const parseResponseText = JSON.parse(this.responseText);
            console.log(parseResponseText.name);
            const cityName = parseResponseText.name;

            const OK = parseResponseText.main.temp;
            const fTemp = Math.round(((OK - 273.15) * 9/5 + 32).toFixed(2));
            console.log(`${fTemp}°`);

            const description = parseResponseText.weather[0].description;
            console.log(description);

            const tempOutput = `<p>The temperature in ${cityName} is ${fTemp}°F with ${description}.</p>`;
            document.getElementById('dataOutput').innerHTML = tempOutput;

        } else if (this.status === 404) {
            console.log('404 Error!');
        }
    }
    xhr.send();
};

    const errorCallback = (position) => {
    console.error(position);
    
    if (position.code === 1) {
        console.log('PERMISSION DENIED!')
    } else if (position.code === 2) {
        console.log('POSITION UNAVAILABLE!')
    } else if (Geoloca.code === 3) { 
        console.log('TIMEOUT')
    }
    
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
    enableHighAccuracy: true,
});

});