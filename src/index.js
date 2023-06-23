import Layout from './components/layout';
import { format, parse, isToday, isTomorrow, parseISO } from 'date-fns';
import './styles.css';

Layout();

// Fetch data from api
async function getForecastWeather() {
  const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d9119156212d4669bee103711232006&q=London&days=5&aqi=no', {mode: 'cors'});
  const weatherData = await response.json();
  return weatherData;
}

// Taking console.log out of loop for now
const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d9119156212d4669bee103711232006&q=London&days=5&aqi=no', {mode: 'cors'});
const weatherData = await response.json();
console.log(weatherData);

// Create DOM elements
async function createWeatherElements() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    const date = document.createElement("h2");
    date.classList.add("heading");
    date.id = `forecast-date${i}`;

    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.id = `forecast-icon-day${i}`;

    const description = document.createElement("p");
    description.classList.add("description");
    description.id = `forecast-description-day${i}`;

    const temps = document.createElement("p");
    temps.id = `forecast-temps-day${i}`;

    container.appendChild(weatherCard);
    weatherCard.appendChild(date);
    weatherCard.appendChild(icon);
    weatherCard.appendChild(description);
    weatherCard.appendChild(temps);
  }
}

function formatDate(date) {
  const dateParse = parse(date, "yyyy-MM-dd", new Date());
  const formattedDate = format(dateParse, "ccc, LLLL d");
  return formattedDate;
}

// Populate DOM elements
async function populateWeatherElements() {
  await createWeatherElements();

  for (let i = 0; i < 5; i++) {
    const date = document.querySelector(`#forecast-date${i}`);
    const icon = document.querySelector(`#forecast-icon-day${i}`);
    const description = document.querySelector(`#forecast-description-day${i}`);
    const temps = document.querySelector(`#forecast-temps-day${i}`);
    let dayI = i;

    getForecastWeather().then((resp) => {
      const forecastDate = resp.forecast.forecastday[dayI].date;
      // isToday / isTomorrow return boolean values
      if (isToday(parseISO(forecastDate))) {
        date.innerHTML = 'Today';
      } else if (isTomorrow(parseISO(forecastDate))) {
        date.innerHTML = 'Tomorrow';
      } else {
        date.innerHTML = formatDate(forecastDate);
      }
      
      icon.src = resp.forecast.forecastday[dayI].day.condition.icon;
      description.innerHTML = resp.forecast.forecastday[dayI].day.condition.text;
      temps.innerHTML = `<span class="temp max-temp">${resp.forecast.forecastday[dayI].day.maxtemp_c}°C</span> <span class="temp min-temp">${resp.forecast.forecastday[dayI].day.mintemp_c}°C</span>`;
    }).catch(err => console.log(err));
  }
}

populateWeatherElements();

function searchWeather(e) {
  e.preventDefault();
  const searchTerm = document.getElementById('search-input').value;

  fetch(`https://api.weatherapi.com/v1/forecast.json?key=d9119156212d4669bee103711232006&q=${searchTerm}&days=5&aqi=no`).then((response) => {return response.json(); }).then((resp => {

    console.log(`${resp.location.name} is currently ${resp.current.condition.text} and ${resp.current.temp_c}°C`);                                          

    console.log(`${resp.location.name} will be ${resp.forecast.forecastday[1].day.condition.text} and ${resp.forecast.forecastday[1].day.avgtemp_c}°C tomorrow`);
    
  })).catch(err => console.log(err));
}

const weatherForm = document.querySelector("#weather-form")
weatherForm.addEventListener('submit', searchWeather);