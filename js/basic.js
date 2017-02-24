var APPID = "5b5679716bb98722f6ef49d25de425f6";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
var APIkey = "AIzaSyDHw_6CQTPkYWZe0A5UqFRKME4pZRjBi1A";

function update(weather) {
    alert(weather.description);
    document.getElementById("description").innerHTML = weather.description;
    document.getElementById("humidity").innerHTML = weather.humidity;
    document.getElementById("wind").innerHTML = weather.wind;
    document.getElementById("direction").innerHTML = weather.direction;
    document.getElementById("location").innerHTML = weather.location;
    document.getElementById("temperature").innerHTML = weather.temp;
}

function updateByCityName(location) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "q=" + location +
        "&APPID=" + APPID;
    sendRequest(url);
}

function geolocationMap() {
    var url="https://maps.googleapis.com/maps/api/js?" +
    "key=" + APIkey
    "&callback=initMap";
    
    sendRequest(url);
}
