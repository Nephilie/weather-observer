import { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import useWeatherStore from '../store/weatherStore';
import fetchWeatherForecast from '@/utils/fetchWeatherForecast';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const setWeatherData = useWeatherStore((state) => state.setWeatherData);
  const setForecastData = useWeatherStore((state) => state.setForecastData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city) {
      const data = await fetchWeatherForecast(city);
      if (data) {
        setWeatherData(data.list[0]); // Store current weather data if needed
        setForecastData(data); // Store 5-day forecast data
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4, px: 2 }}
      >
        <TextField
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Get Weather
        </Button>
      </Box>
    </Container>
  );
};

export default WeatherForm;
