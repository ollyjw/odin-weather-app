import alertPopup from "./alert";

export function getCity() {
    let city = document.querySelector('#search-input').value;
    if (city === "") {
        city = "London";
    }
    return city;
}

// Fetch data from api
const getForecastWeather = async function() {
    let error;
    let weatherData;
    const input = document.querySelector('#search-input');

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d9119156212d4669bee103711232006&q=${getCity()}&days=5&aqi=no`, {mode: 'cors'});
    weatherData = await response.json();

    if (weatherData.error) {
        alertPopup();
        input.setAttribute("placeholder", weatherData.error.message);
        error = true;
    } else {
        error = false;
        input.setAttribute("placeholder", getCity());
        const popup = document.querySelector("#popup");
        if (popup) {
            setTimeout(() => {
                popup.remove();
            }, 3000)
        }
        return weatherData;
    }
}

export default getForecastWeather;