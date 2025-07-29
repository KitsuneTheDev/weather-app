import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { cityInfo } from "../../constant/cityInfo.js";

export function useWeatherData() {

    const [location, setLocation] = useState(() => {
        const savedLocation = JSON.parse(localStorage.getItem('savedInfo'))?.location;
        if(!savedLocation) return cityInfo[0].city;
        return savedLocation;
    });
    const [today, setToday] = useState(0);
    const [yesterday, setYesterday] = useState(() => {
        return dayjs().subtract(1, "day").format("YYYY-MM-DD");
    });

    useEffect(() => {
        setYesterday(dayjs().subtract(1, "day").format("YYYY-MM-DD"));
        setToday(dayjs().format("YYYY-MM-DD"));
    }, [])

    console.log("yesterday in useWeatherData -->", yesterday);

    const baseUrl = 'http://api.weatherapi.com/v1';
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const {
        data: weatherData,
        isError: isDataError,
        isLoading: isDataLoading,
    } = useQuery({
        queryKey: ["fetchWeather", { location, today }],
        queryFn: async () => {
            console.log("fetching...");
            const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}&aqi=no`);
            const weatherData = await response.json();
            return weatherData;
        }
    });

    const {
        data: weatherHistory,
        isError: isHistoryError,
        isLoading: isHistoryLoading, 
    } = useQuery({
        queryKey: ["fetchHistory", { location, yesterday }],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/history.json?key=${apiKey}&q=${location}&dt=${yesterday}`);
            const weatherHistory = await response.json();
            return weatherHistory;
        }
    });

    const {
        data: weatherForecast,
        isError: isForecastError,
        isLoading: isForecastLoading,
    } = useQuery({
        queryKey: ["fetchForecast", { location, today }],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/forecast.json?key=${apiKey}&q=${location}&days=14&aqi=no&alerts=no`);
            const weatherForeCast = await response.json();
            return weatherForeCast;
        }
    })


    return { weatherData, weatherHistory, weatherForecast, isDataError, isDataLoading, isHistoryError, isHistoryLoading, isForecastError, isForecastLoading, location, setLocation };

}
