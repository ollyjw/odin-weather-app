import getForecastWeather from '../modules/getWeather.js';
import populateWeatherElements from './weatherDOM.js';
import getCity from '../modules/getWeather.js';

function searchWeather(e) {
    e.preventDefault();
    getForecastWeather().then((resp) => {

        console.log(`${resp.location.name} is currently ${resp.current.condition.text} and ${resp.current.temp_c}°C`);
        console.log(`${resp.location.name} will be ${resp.forecast.forecastday[1].day.condition.text} and ${resp.forecast.forecastday[1].day.avgtemp_c}°C tomorrow`);

        populateWeatherElements();
        
    }).catch(err => console.log(err));
}

const Form = async function() {
    const headerInner = document.querySelector(".header-inner");

    const form = document.createElement("form");
    form.id = "weather-form";
    
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "search-input");
    input.setAttribute("placeholder", "Enter town/city");
    
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerHTML = "Search";

    headerInner.appendChild(form);
    form.appendChild(input);
    form.appendChild(submit);

    submit.addEventListener("click", async (e) => {
        searchWeather(e);
        const city = getCity();
        if (city === "") {
            return;
        }        
      });
}

export default Form;