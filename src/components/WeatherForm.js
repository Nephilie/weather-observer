import { useState } from 'react';
import { TextField, Button, Container, Box, Grid } from '@mui/material';
import useWeatherStore from '../store/weatherStore';
import fetchCurrentWeather from '../utils/fetchWeather';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const setWeatherData = useWeatherStore((state) => state.setWeatherData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city) {
      const data = await fetchCurrentWeather(city);
      if (data) setWeatherData(data);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 4,
          px: 2
        }}
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
