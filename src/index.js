import Layout from './components/layout';
import populateWeatherElements from './components/weatherDOM';
import './styles.css';

Layout().then(() => {
  populateWeatherElements();
}).catch((error) => {
  console.debug(error);
});