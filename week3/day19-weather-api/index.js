//day 19
//weather api -- open weather map api -- get weather data of any city
//api key -- unique identifier for authentication -- get from open weather map website
//fetch api -- make http request to server and get response

const citynm = document.getElementById("citynm");
const weatherBtn = document.getElementById("weatherBtn");
const weatherInfo = document.getElementById("weatherInfo");
async function getWeather() {
  const city = citynm.value;
  try {
    let url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed9b0275ce9fdbeb1830d51f3bfe9d51&units=metric`,
    );
    let data = await url.json();
    console.log(data);
    weatherInfo.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Humidity: ${data.main.humidity} %</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.log(error);
  }
  citynm.value = "";
}

weatherBtn.addEventListener("click", getWeather);
