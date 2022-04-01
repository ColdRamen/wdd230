const current_apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&appid=fdd7d38ab3c595f56e1bca0e12fb82ef";
const forecast_apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=41.7355&lon=-111.8344&units=imperial&appid=fdd7d38ab3c595f56e1bca0e12fb82ef";
let windChill = 0;


fetch(current_apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    let temp = Math.round(jsObject.main.temp);
    document.querySelector('#current-weather-temp').textContent = `${temp}°F`;
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`;
    let desc = jsObject.weather[0].description;    

    desc = desc.split(' ').map(capitalize).join(' ');
    document.querySelector('#current-weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#current-weather-icon').setAttribute('alt', desc);
    document.querySelector('#current-weather-desc').innerHTML = desc;

});

fetch(forecast_apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log(jsObject);

    let oneDay = document.querySelector('#one-day');
    let twoDays = document.querySelector('#two-days');
    let threeDays = document.querySelector('#three-days');
    let oneDayTemp = document.querySelector('#one-day-temp');
    let twoDaysTemp = document.querySelector('#two-days-temp');
    let threeDaysTemp = document.querySelector('#three-days-temp');

    let date = new Date();
    let weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    if (date.getDay() === 4) {
      oneDay.textContent = weekdays[5];
      twoDays.textContent = weekdays[6];
      threeDays.textContent = weekdays[0];
    } else if (date.getDay() === 5) {
      oneDay.textContent = weekdays[6];
      twoDays.textContent = weekdays[0];
      threeDays.textContent = weekdays[1];
    } else if (date.getDay() === 6) {
      oneDay.textContent = weekdays[0];
      twoDays.textContent = weekdays[1];
      threeDays.textContent = weekdays[2];
    } else {
      oneDay.textContent = weekdays[date.getDay() + 1];
      twoDays.textContent = weekdays[date.getDay() + 2];
      threeDays.textContent = weekdays[date.getDay() + 3];
    }
      

    oneDayTemp.textContent = `${Math.round(jsObject.daily[1].temp.day)}°F`;
    twoDaysTemp.textContent = `${Math.round(jsObject.daily[2].temp.day)}°F`;
    threeDaysTemp.textContent = `${Math.round(jsObject.daily[3].temp.day)}°F`;

});

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

function myDate() {
  
  document.getElementById("myId").innerHTML = r;
}