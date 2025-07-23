import { createContext, useContext, useEffect, useState } from "react";
import { useWeatherData } from "../components/hooks/useWeatherData.js";
import dayjs from "dayjs";

const WeatherContext = createContext();

function WeatherProvider({ children }) {

    const [today, setToday] = useState(() => {
        
        return {
            headerDate: dayjs().format('MMMM YYYY'),
            detailDay: dayjs().format('dddd'),
            detailDate: dayjs().format('MMMM D'),
            detailYear: dayjs().format('YYYY'),
        }
    })
    const { weatherData, isError, isPending, setLocation, setIsToday } = useWeatherData();

    console.log(weatherData, isError, isPending);

    console.log(weatherData?.current.last_updated);
    useEffect(() => {
        console.log('today -->', today);
    }, []);

    console.log("weatherData -->", weatherData);

    const values = {
        today,
    };

    return (
        <WeatherContext.Provider value={values} >
            { children }
        </WeatherContext.Provider>
    );
}


const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider}