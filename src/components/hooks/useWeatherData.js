import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export function useWeatherData() {

    const [location, setLocation] = useState("Ankara");
    const [isToday, setIsToday] = useState(0);

    const baseUrl = 'http://api.weatherapi.com/v1';
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const {
        data: weatherData,
        isError,
        isPending,
    } = useQuery({
        queryKey: ["fetchWeather", { location }],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}&aqi=no`);
            const weatherData = await response.json();
            return weatherData;
        }
    });

    return { weatherData, isError, isPending, setLocation, setIsToday, isPending };

}
