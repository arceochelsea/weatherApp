document.addEventListener('DOMContentLoaded', function() {

    let latText = document.getElementById("latitude");
    let longText = document.getElementById("longitude");
    
    document.getElementById('getLocation').addEventListener('click', getLocation);
    function getLocation() {
        navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
    
        latText.innerText = lat.toFixed(2);
        longText.innerText = long.toFixed(2);

        document.getElementById('getTemp').addEventListener('click', getWeather);
        function getWeather() {
    
                //http://api.openweathermap.org/data/2.5/weather?lat=41.82&lon=-71.47&appid=97fafd7bd762d05a50b781f04baa379d
    
                const url = 'http://api.openweathermap.org/data/2.5/weather';
                const qlat = '?lat=';
                const lat = latText.innerText;
                const amp = '&';
                const qlong = 'lon=';
                const long = longText.innerText;
                const appid = '&appid=';
                const apiKey = '97fafd7bd762d05a50b781f04baa379d';
                
                const combinedUrl = url+qlat+lat+amp+qlong+long+appid+apiKey;
    
                const xhr = new XMLHttpRequest();
    
                xhr.open('GET', combinedUrl, true);
    
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
                        document.getElementById('temp').innerHTML = tempOutput;
    
                    } else if (this.status === 404) {
                        console.log('404 Error!');
                    }
                }
                xhr.send();
            }
      });
    }
});


// const successCallBack = (position) => {
//     console.log(position);
// };

// const errorCallback = (error) => {
//     console.error(error);
// };

// navigator.geolocation.getCurrentPosition(successCallBack, errorCallback);

// console.log('1. new HTTPRequest')
// console.log(xhr.readyState);
// console.log(xhr.status);
// console.log('--------------');

// console.log('2. xhr.open')
// console.log(xhr.readyState);
// console.log(xhr.status);
// console.log('--------------');

// console.log('3. xhr.unload')
// console.log(xhr.readyState);
// console.log(xhr.status);
// console.log('--------------');

// console.log('4. xhr.send')
// console.log(xhr.readyState);
// console.log(xhr.status);
// console.log('--------------');