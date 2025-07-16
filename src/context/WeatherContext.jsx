import { createContext, useContext } from "react";

const WeatherContext = createContext();

function WeatherProvider({ children }) {

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    
    return (
        <WeatherContext.Provider value={values} >
            { children }
        </WeatherContext.Provider>
    );
}


const useWeather = useContext(WeatherContext);

export { useWeather, WeatherProvider}