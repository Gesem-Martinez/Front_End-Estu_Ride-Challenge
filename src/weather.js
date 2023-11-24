const weatherDisplay = document.querySelector(".weather-display");
const location = weatherDisplay.querySelector("[data-weather-location]");
const conditionIcon = weatherDisplay.querySelector("[data-weather-icon]");
const conditionText = weatherDisplay.querySelector("[data-weather-condition]");
const temperature = weatherDisplay.querySelector("[data-weather-temperature]");
const wind = weatherDisplay.querySelector("[data-weather-wind]");
const humidity = weatherDisplay.querySelector("[data-weather-humidity]");
const feels = weatherDisplay.querySelector("[data-weather-feels]");


async function getWeatherData(){
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=866165b923e84310b9624331232411&q=Guadalajara&aqi=no');
    const weatherData = await response.json();

    location.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
    conditionIcon.setAttribute("src", weatherData.current.condition.icon);
    conditionText.textContent = weatherData.current.condition.text;
    temperature.textContent = `${weatherData.current.temp_c}°C`;

    wind.textContent = `Wind: ${weatherData.current.wind_kph} km/h`;
    humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
    feels.textContent = `Feels Like: ${weatherData.current.feelslike_c}°C`;

}

export {getWeatherData};