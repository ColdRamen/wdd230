let temp = document.getElementById("temp").textContent;
let windSpeed = document.getElementById("wind-speed").textContent;
let windChill = 0;

if (temp <= 50 && windSpeed > 3) {
    windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}

document.getElementById("wind-chill").textContent = windChill.toFixed(1);