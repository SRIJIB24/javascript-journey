//day 21
//local storage -- web storage api -- store data in browser -- key value pair -- persist even after page refresh
//setItem -- store data in local storage -- key value pair -- value must be string
//getItem -- retrieve data from local storage -- key -- return value
//removeItem -- remove data from local storage -- key
//clear -- clear all data from local storage

//task 1
const citynm = document.getElementById("citynm");
const weatherBtn = document.getElementById("weatherBtn");
const weatherInfo = document.getElementById("weatherInfo");

function displayWeather(weatherData) {
  weatherInfo.innerHTML = `
    <h2>${weatherData.name}</h2>
    <p>🌡 Temperature: ${weatherData.main.temp}°C</p>
    <p>🌥 Weather: ${weatherData.weather[0].description}</p>
  `;
}

async function getData() {
  const city = citynm.value.trim();

  if (!city) {
    weatherInfo.innerHTML = "<p>Please Enter City Name</p>";
    return;
  }

  const cityKey = city.toLowerCase();
  const ONE_HOUR = 1 * 60 * 60 * 1000;

  const storedData = localStorage.getItem(`weather_${cityKey}`);

  if (storedData) {
    const parsed = JSON.parse(storedData);

    if (Date.now() - parsed.time < ONE_HOUR) {
      displayWeather(parsed.data);
      return;
    }
  }

  try {
    weatherInfo.innerHTML = "<p>Loading...</p>";

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed9b0275ce9fdbeb1830d51f3bfe9d51&units=metric`,
    );

    let data = await res.json();

    if (data.cod !== 200) {
      weatherInfo.innerHTML = `<p>${data.message}</p>`;
      return;
    }

    localStorage.setItem(
      `weather_${cityKey}`,
      JSON.stringify({ data: data, time: Date.now() }),
    );
    localStorage.setItem("lastCity", cityKey);

    displayWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = "<p>Error fetching weather data</p>";
  }
}

window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");

  if (!lastCity) return;

  const storedData = localStorage.getItem(`weather_${lastCity}`);

  if (storedData) {
    const parsed = JSON.parse(storedData);
    displayWeather(parsed.data);
  }
});

weatherBtn.addEventListener("click", getData);
