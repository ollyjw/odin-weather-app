import { isToday, isTomorrow, parseISO } from 'date-fns';
import {formatDate, formatDateAlt, formatCurrentTime, formatCurrentDay} from '../modules/formatDate';
import getForecastWeather from '../modules/getWeather.js';

export async function createWeatherElements() {
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

// Populate DOM elements with weather data
async function populateWeatherElements() {
  await createWeatherElements();

  const cityHeader = document.querySelector("#city");
  const region = document.querySelector("#region");
  const highlightIcon = document.querySelector("#icon");
  const highlightTemp = document.querySelector(".current-temp");
  const highlightDetails = document.querySelector(".current-details");
  const highlightDate = document.querySelector(".current-date");

  getForecastWeather()
    .then((resp) => {
      cityHeader.innerHTML = resp.location.name;
      region.innerHTML = resp.location.region;      
      highlightIcon.src = resp.forecast.forecastday[0].day.condition.icon;
      highlightTemp.innerHTML = `${resp.forecast.forecastday[0].day.avgtemp_c}°C`;
      highlightDetails.innerHTML = resp.forecast.forecastday[0].day.condition.text;
      const currentLastUpdated = resp.current.last_updated;

      for (let i = 0; i < 5; i++) {
        let dayI = i;
        const date = document.querySelector(`#forecast-date${i}`);
        const icon = document.querySelector(`#forecast-icon-day${i}`);
        const description = document.querySelector(
          `#forecast-description-day${i}`
        );
        const temps = document.querySelector(`#forecast-temps-day${i}`);
        const forecastDate = resp.forecast.forecastday[dayI].date;
        const todaysDate = resp.forecast.forecastday[0].date;
        // isToday / isTomorrow return boolean values
        if (isToday(parseISO(forecastDate))) {
          date.innerHTML = "Today";
        } else if (isTomorrow(parseISO(forecastDate))) {
          date.innerHTML = "Tomorrow";
        } else {
          date.innerHTML = formatDate(forecastDate);
        }

        icon.src = resp.forecast.forecastday[dayI].day.condition.icon;
        description.innerHTML = resp.forecast.forecastday[dayI].day.condition.text;
        temps.innerHTML = `<span class="temp max-temp">${resp.forecast.forecastday[dayI].day.maxtemp_c}°C</span> <span class="temp min-temp">${resp.forecast.forecastday[dayI].day.mintemp_c}°C</span>`;

        highlightDate.innerHTML = `<p class="italic">Last updated:</p><p class="time">${formatCurrentDay(currentLastUpdated)} ${formatCurrentTime(currentLastUpdated)}</p><p class="date">${formatDateAlt(todaysDate)}</p>`;
      }
    })
    .catch((err) => console.log(err));
}

export default populateWeatherElements;