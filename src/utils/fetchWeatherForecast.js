import axios from 'axios';

const API_KEY = "API_HERE"; 
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const fetchWeatherForecast = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export default fetchWeatherForecast;
