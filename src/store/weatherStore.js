import { create } from "zustand";

const useWeatherStore = create((set) => ({
  weatherData: null,
  setWeatherData: (data) => set({ weatherData: data }),
  setWeatherData: (data) => set({ weatherData: data }),
  setForecastData: (data) =>
    set((state) => {
      state.forecastDate = data;
    }),
}));

export default useWeatherStore;
