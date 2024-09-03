import Head from 'next/head';
import WeatherForm from '../components/WeatherForm';
import ForecastDisplay from '../components/ForecastDisplay';
import { Container, Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Weather App
        </Typography>
        <WeatherForm />
        <ForecastDisplay />
      </Box>
    </Container>
  );
}
