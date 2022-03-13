const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&appid=fdd7d38ab3c595f56e1bca0e12fb82ef";
let windChill = 0;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = Math.round(jsObject.main.temp);
    document.querySelector('#temp').textContent = temp;
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`;
    let desc = jsObject.weather[0].description;
    let windSpeed = jsObject.wind.speed;
    

    if (jsObject.main.temp <= 50 && windSpeed > 3) {
      windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
      document.querySelector('#wind-chill').textContent = `${Math.round(windChill)}°F`;
    } else {
      document.querySelector('#wind-chill').textContent = 'N/A';
    }

    desc = desc.split(' ').map(capitalize).join(' ');
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('#description').innerHTML = desc;
    document.querySelector('#wind-speed').textContent = Math.round(windSpeed);

  });

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}