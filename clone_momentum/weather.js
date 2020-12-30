//API from : https://openweathermap.org/
const weather = document.querySelector(".js-weather");

const API_KEY = "c7284743f85084d862c2eedc2cf2fd49";
const COORDS = "coords";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp}℃ @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitiude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitiude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitiude,longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitiude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();