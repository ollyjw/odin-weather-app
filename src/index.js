import Layout from './components/layout';
import populateWeatherElements from './components/weatherDOM';
import './styles.css';

Layout().then(() => {
  populateWeatherElements("london");
}).catch((error) => {
  console.debug(error);
});

// Taking console.log out of loop for now
const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d9119156212d4669bee103711232006&q=London&days=5&aqi=no', {mode: 'cors'});
const weatherData = await response.json();
console.log(weatherData);