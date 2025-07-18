import { createContext, useContext, useEffect, useState } from "react";
import { useWeatherData } from "../components/hooks/useWeatherData.js";

const WeatherContext = createContext();

function WeatherProvider({ children }) {

    const { get } = useWeatherData('http://api.weatherapi.com/v1');

    const [weatherData, setWeatherData] = useState(null);

    /*useEffect(() => {
        get().then((results) => {
        
        setWeatherData(results);
    })
    }, [])*/

    console.log("weatherData -->", weatherData);

    const values = {};

    return (
        <WeatherContext.Provider value={values} >
            { children }
        </WeatherContext.Provider>
    );
}


const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider}