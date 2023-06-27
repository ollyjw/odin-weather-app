const highlight = async function() {
    const outerContainer = document.querySelector(".outer-container");
    
    const highlightContainer = document.createElement("div");
    highlightContainer.classList.add("highlight-container");

    const highlightBox = document.createElement("div");
    highlightBox.classList.add("highlight-box");

    const location = document.createElement("div");
    location.classList.add("location");

    const city = document.createElement("h1");
    city.id = "city";

    const region = document.createElement("h3");
    region.id ="region";

    const currentInfo = document.createElement("div");
    currentInfo.classList.add("current-info");

    const currentWeather = document.createElement("div");
    currentWeather.classList.add('current-weather');

    const iconCircle = document.createElement("div");
    iconCircle.classList.add('icon-circle');
    
    const currentWeatherIcon = document.createElement("img");
    currentWeatherIcon.id = "icon";

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temp");

    const currentDetails = document.createElement("div");
    currentDetails.classList.add("current-details");

    const currentDate = document.createElement("div");
    currentDate.classList.add("current-date");      

    outerContainer.appendChild(highlightContainer);
    highlightContainer.appendChild(highlightBox);
    highlightBox.appendChild(location);
    highlightBox.appendChild(currentInfo);
    location.appendChild(city);
    location.appendChild(region);
    currentInfo.appendChild(currentWeather);
    currentWeather.appendChild(iconCircle);
    iconCircle.appendChild(currentWeatherIcon);
    currentWeather.appendChild(currentTemp);
    currentWeather.appendChild(currentDetails);
    currentInfo.appendChild(currentDate);    
}

export default highlight;