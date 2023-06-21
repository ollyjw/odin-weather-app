import Layout from './components/layout';
import './styles.css';

Layout();

async function getWeather() {
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=d9119156212d4669bee103711232006&q=London&aqi=no', {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
}

// function displayWeather(dataArray) {

// }

function searchWeather(e) {
  e.preventDefault();
  const searchTerm = document.getElementById('search-input').value;

  fetch(`https://api.weatherapi.com/v1/current.json?key=d9119156212d4669bee103711232006&q=${searchTerm}&aqi=no`).then((response) => {return response.json(); }).then((resp => {

    console.log(`${resp.location.name} is currently ${resp.current.condition.text} and ${resp.current.temp_c}°C`);

  })).catch(err => console.log(err));
}

const weatherForm = document.querySelector("#weather-form")
weatherForm.addEventListener('submit', searchWeather);



getWeather();