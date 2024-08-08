const KEY = process.env.KEY;
const LATITUDE = process.env.LATITUDE;
const LONGITUDE = process.env.LONGITUDE;

const tempElement = document.querySelector(".temperature-value span");

// App data
const weather = {};
weather.temperature = {
  unit: "celsius",
};

// Change to 'F' for Fahrenheit
var tempUnit = "C";

const KELVIN = 273.15;

// Set Position function
setPosition();

function setPosition(position) {
  // Here you can change your position
  // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
  getWeather(LATITUDE, LONGITUDE);
}

// Get the Weather data
function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${KEY}`;

  console.log(api);

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      let celsius = Math.floor(data.main.temp - KELVIN);
      weather.temperature.value =
        tempUnit == "C" ? celsius : (celsius * 9) / 5 + 32;
    })
    .then(function () {
      displayWeather();
    });
}

// Display Weather info
function displayWeather() {
  tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
}
