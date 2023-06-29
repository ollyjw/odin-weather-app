import getForecastWeather from '../modules/getWeather.js';
import populateWeatherElements from './weatherDOM.js';
import getCity from '../modules/getWeather.js';

function searchWeather(e) {
    e.preventDefault();
    getForecastWeather().then(() => {
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
        const city = getCity();
        if (city === "" || city === undefined || city === null) {
            return;
        } else {
            searchWeather(e);
        }        
    });
}

export default Form;