const highlight = async function() {
    const outerContainer = document.querySelector(".outer-container");
    
    const highlightBox = document.createElement("div");
    highlightBox.classList.add("highlight-container");

    const location = document.createElement("div");
    location.classList.add("location");

    const city = document.createElement("h1");
    city.id = "city";

    const region = document.createElement("h2");
    region.id ="region";

    const currentWeather = document.createElement("div");
    currentWeather.classList.add('current-weather');
    
    const currentWeatherIcon = document.createElement("img");
    currentWeatherIcon.id = "icon";

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temp");

    const currentDetails = document.createElement("div");
    currentDetails.classList.add("current-details");

    const currentDate = document.createElement("div");
    currentDate.classList.add("current-date");      

    outerContainer.appendChild(highlightBox);
    highlightBox.appendChild(location);
    location.appendChild(city);
    location.appendChild(region);
    highlightBox.appendChild(currentWeather);
    currentWeather.appendChild(currentWeatherIcon);
    currentWeather.appendChild(currentTemp);
    currentWeather.appendChild(currentDetails);
    currentWeather.appendChild(currentDate);
    
}

export default highlight;