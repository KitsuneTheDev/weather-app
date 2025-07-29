import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useWeatherData } from "../components/hooks/useWeatherData.js";
import { cityInfo } from '../constant/cityInfo.js'; 
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const WeatherContext = createContext();

function WeatherProvider({ children }) {

    const { weatherData, weatherHistory, weatherForecast, isHistoryError, isHistoryLoading, isDataError, isDataLoading, isForecastError, isForecastLoading, location, setLocation } = useWeatherData();

    const [timezone, setTimezone] = useState(() => {
        const savedTimezone = JSON.parse(localStorage.getItem('savedInfo'))?.timezone;
        if(!savedTimezone) return cityInfo[0].timezone;
        return savedTimezone;
    });

    const [time, setTime] = useState(() => {
        return dayjs().tz(timezone).format('HH:mm');
    });

    const today = useMemo(() => {
        console.log("Timezone has been changed. Recalculating date...");
        const timeObj = dayjs().tz(timezone);
        return {
            headerDate: timeObj.format('MMMM YYYY'),
            detailDay: timeObj.format('dddd'),
            detailDate: timeObj.format('MMMM D'),
            detailYear: timeObj.format('YYYY'),
        }
    }, [timezone])

    useEffect(() => {
        setTime(() => dayjs().tz(timezone).format('HH:mm'));
    }, [timezone])

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setting time...");
            setTime(dayjs().tz(timezone).format('HH:mm'));
        }, 30_000);

        return () => clearInterval(intervalId);
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
        timezone,
        setLocation,
        setTime,
        setTimezone,
    };

    return (
        <WeatherContext.Provider value={values} >
            { children }
        </WeatherContext.Provider>
    );
}


const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider}