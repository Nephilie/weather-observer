import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import useWeatherStore from '../store/weatherStore';

const ForecastDisplay = () => {
  const forecastData = useWeatherStore((state) => state.forecastData);

  if (!forecastData) return (
    <Container maxWidth={false} sx={{ mt: 4 }}>
      <Typography variant="body1" color="textSecondary" align="center">
        No forecast data available. Please search for a location.
      </Typography>
    </Container>
  );

  // Group data by day
  const groupedByDay = forecastData.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000);
    const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    if (!acc[day]) acc[day] = [];
    acc[day].push(item);
    return acc;
  }, {});

  // Get days and sort them
  const days = Object.keys(groupedByDay).sort();

  return (
    <Container maxWidth={false} sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {days.map(day => (
          <Grid item xs={12} sm={6} md={4} key={day}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                {day}
              </Typography>
              {groupedByDay[day].map((item) => {
                const iconCode = item.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
                return (
                  <Box key={item.dt} sx={{ mb: 2 }}>
                    <img src={iconUrl} alt={item.weather[0].description} />
                    <Typography variant="body1">Temperature: {item.main.temp} °C</Typography>
                    <Typography variant="body1">Weather: {item.weather[0].description}</Typography>
                  </Box>
                );
              })}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ForecastDisplay;
