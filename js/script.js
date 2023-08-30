const apiKey = "6b0273771f4ceb20f799476b62bf312c"; // Replace with your OpenWeatherMap API key
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

searchButton.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city !== "") {
    getWeatherData(city);
  }
});

async function getWeatherData(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Update weather information
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    cityName.textContent = data.name;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;
    document.querySelector(".weather").style.display ="block"
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
