import {create} from "zustand"

const useWeatherStore = create ((set) => ({
    weatherData: null,
    setWeatherData: (data) => set({weatherData: data}),
}))

export default useWeatherStore;