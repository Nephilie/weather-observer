import create from 'zustand';

const useWeatherStore = create((set) => ({
  weatherData: null,
  forecastData: null,
  setWeatherData: (data) => set({ weatherData: data }),
  setForecastData: (data) => set({ forecastData: data }),
}));

export default useWeatherStore;
