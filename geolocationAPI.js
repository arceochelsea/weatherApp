document.addEventListener('DOMContentLoaded', function(){

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

const url = 'http://api.openweathermap.org/data/2.5/weather';




});

const successCallBack = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.error(error);
};

navigator.geolocation.getCurrentPosition(successCallBack, errorCallback);