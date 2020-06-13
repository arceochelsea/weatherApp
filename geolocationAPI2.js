document.addEventListener('DOMContentLoaded', function () {

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

const successCallback = (position) => {
    console.log(position);

    //executes weather API
    //4 step XMLHttpRequest Process

}

const errorCallback = (position) => {
    console.log(position);
    
    //404 error will return to user
    //nothing?
    //tell user they can't recieve weather until location shared?
    
}

});