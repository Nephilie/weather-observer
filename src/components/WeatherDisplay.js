import { Container, Typography, Box, Paper } from '@mui/material';
import useWeatherStore from '../store/weatherStore';

const WeatherDisplay = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);

  if (!weatherData) return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Typography variant="body1" color="textSecondary" align="center">
        No weather data available. Please search for a location.
      </Typography>
    </Container>
  );

  // Extract weather icon code
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Current Weather for {weatherData.name}
          </Typography>
          <img src={iconUrl} alt={weatherData.weather[0].description} />
          <Typography variant="h6">Temperature: {weatherData.main.temp} °C</Typography>
          <Typography variant="h6">Weather: {weatherData.weather[0].description}</Typography>
          <Typography variant="h6">Humidity: {weatherData.main.humidity}%</Typography>
          <Typography variant="h6">Wind Speed: {weatherData.wind.speed} m/s</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default WeatherDisplay;
