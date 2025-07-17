import { useState } from "react";

export function useWeatherData(baseUrl) {

const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [controller, setController] = useState(null);

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const location = 'Eskisehir';
function get() {
    if(controller) {
        controller.abort();
    }

    const newController = new AbortController();
    setController(newController);
    const signal = newController.signal;

    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/current.json?key=${apiKey}&q=${location}&aqi=no`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            signal: signal,
        }).then(response => {
            if(!response.ok) {
                return reject(response.status);
            }

            return response.json();
        }).then(data => {
            if(!data) {
                return reject(data);
            }
            console.log("Fetched data -->", data);
            const newResults = data;
            console.log("newResults", newResults);
            return resolve(newResults);
        }).catch(error => {
            return reject(error);
        }).finally(() => {
            return;
        })
    })
}

    return {get}

}
