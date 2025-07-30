import { useWeather } from "../../context/WeatherContext";
import dayjs from "dayjs";
import Loading from "../common/Loading.jsx";

export default function RainChanceCard() {

    const { weatherForecast, isForecastLoading, isForecastError} = useWeather();

    if(isForecastLoading) return(
        <div className="raincard-container w-full h-full flex justify-center items-center">
            <Loading />
        </div>
    );

    if(isForecastError) return(
        <div className="raincard-container w-full h-full flex justify-center items-center">
            <p className="text-xl font-custom-medium text-solid-2">No rain chance data available</p>
        </div>
    );

    const { timezone } = useWeather();
    const now = dayjs().tz(timezone);
    const hourIndex = now.hour();
    console.log("HOUR INDEX ------------>", hourIndex);
    const dayIndex = 0;
    const chance = [];

    let targetHourIndex = hourIndex;
    let targetDayIndex = dayIndex;
    for(let i = 0; i < 4; i++) {
        
        if(targetHourIndex >= 24) {
            targetDayIndex += 1;
            targetHourIndex -= 24;
        }

        chance.push({
            time: targetHourIndex > 12 ? `${targetHourIndex - 12} PM` : `${targetHourIndex} AM`,
            rc: weatherForecast.forecast.forecastday[targetDayIndex].hour[targetHourIndex].chance_of_rain,
        });

        targetHourIndex += 1;
    }

    console.log("DEMO --------------->", chance);

    return(
        <div className="raincard-container w-full h-full">
            {chance.map((c, i) => {
                return(<div key={i} className="bar-container w-[full] h-[25%] flex items-center pl-social">
                    <div className="time-container w-[10%] text-lg font-custom-semibold text-solid-2">{c.time}</div>
                    <div className="chance-container relative h-[40%] w-[70%] bg-light-secondary/50 rounded-2xl">
                        <span className={`chance-bar absolute h-full bg-solid-2 rounded-2xl z-10 transition-[width] duration-500 ease-in-out `}
                        style={{width: `${c.rc}%`}} ></span>
                    </div>
                    <div className="value-container text-lg font-custom-semibold text-solid-2 pl-friend">{c.rc}%</div>
                </div>)
            })}
        </div>
    )
}