export function getCity() {
    let city = document.querySelector('#search-input').value;

    if (city === "") {
        city = "London";
    }
    return city;
}

// Fetch data from api
const getForecastWeather = async function() {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d9119156212d4669bee103711232006&q=${getCity()}&days=5&aqi=no`, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

export default getForecastWeather;