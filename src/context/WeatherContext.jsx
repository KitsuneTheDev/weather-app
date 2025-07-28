import { createContext, useContext, useEffect, useState } from "react";
import { useWeatherData } from "../components/hooks/useWeatherData.js";
import { cityInfo } from '../constant/cityInfo.js'; 
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const WeatherContext = createContext();

function WeatherProvider({ children }) {


    const [time, setTime] = useState(() => {
        return dayjs().tz("America/New_york").format('HH:mm');
    })
    const [today, setToday] = useState(() => {
        
        return {
            headerDate: dayjs().format('MMMM YYYY'),
            detailDay: dayjs().format('dddd'),
            detailDate: dayjs().format('MMMM D'),
            detailYear: dayjs().format('YYYY'),
        }
    })
    const { weatherData, weatherHistory, weatherForecast, isHistoryError, isHistoryLoading, isDataError, isDataLoading, isForecastError, isForecastLoading, location, setLocation } = useWeatherData();

    console.log(weatherData?.current.last_updated);
    useEffect(() => {
        console.log('today -->', today);
    }, []);

    console.log("weatherData -->", weatherData);

    const values = {
        today,
        weatherData,
        weatherHistory,
        weatherForecast,
        isDataError,
        isDataLoading,
        isHistoryError,
        isHistoryLoading,
        isForecastError,
        isForecastLoading,
        location,
        time,
        cityInfo,
        setLocation,
    };

    return (
        <WeatherContext.Provider value={values} >
            { children }
        </WeatherContext.Provider>
    );
}


const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider}