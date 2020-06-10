document.addEventListener('DOMContentLoaded', function() {

//http://api.openweathermap.org/data/2.5/weather?zip=02906,us&appid=97fafd7bd762d05a50b781f04baa379d

// const url = 'https://api.github.com/users';

const url = 'http://api.openweathermap.org/data/2.5/weather';


    document.getElementById('button').addEventListener('click', getWeather);


    function getWeather() {


    const zeq = '?zip='
    const zipCode = document.getElementById('zipCode').value;

    if (zipCode.length === 5) {
       
        console.log(zipCode);

        const countryCode = ',us';
    
        const appid = '&appid=';
        const apiKey = '97fafd7bd762d05a50b781f04baa379d';
        
        const city = '4930956';
        
        const combinedUrl = url+zeq+zipCode+countryCode+appid+apiKey;
    
            const xhr = new XMLHttpRequest();
    
            xhr.open('GET', combinedUrl, true);
    
            xhr.onload = function() {
                if (this.status === 200 && this.readyState === 4) {
                    const parseResponseText = JSON.parse(this.responseText);

                    console.log(parseResponseText);

                    console.log(parseResponseText.name);
                    const cityName = parseResponseText.name;

                    //(0K − 273.15) × 9/5 + 32
                    const OK = parseResponseText.main.temp;
                    const fTemp = ((OK - 273.15) * 9/5 + 32).toFixed(2);

                    console.log(fTemp);

                    const tempOutput = `<h1>The temperature in ${cityName} is ${fTemp}F </h1>`;
                    document.getElementById('currentWeather').innerHTML = tempOutput;

    
                } else if (this.status === 404) {
                    console.log('404 Error!');
                }
            }
    
            xhr.send();
    } else {
        alert('Please enter a 5 digit zip code only!')
    }

    }

}); 