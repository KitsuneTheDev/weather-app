import { useWeather } from "../../context/WeatherContext.jsx";
import Loading from '../common/Loading.jsx'

export default function Side() {

    const { today:{headerDate, detailDay, detailDate, detailYear }, weatherData, weatherForeCast, isDataError, isDataLoading, isForecastError, isForecastLoading, location, time } = useWeather();

    if(isDataLoading || isForecastLoading) return(
        <div className="loading-container h-[calc(100%-var(--spacing-boss))] w-full mt-boss flex flex-col items-center justify-center
        lg:h-full lg:mt-0 lg:flex-col
        xl:h-full xl:mt-0 xl:flex-col ">
            <Loading />
        </div>
    );

    return(
        <div className="side-container h-[calc(100%-var(--spacing-boss))] w-full mt-boss flex flex-col
        lg:h-full lg:mt-0
        xl:h-full xl:mt-0 ">
            <div className="side-header bg-amber-300 h-[40%] mt-collegue">
                <div className="info-container">
                    <div className="info-location">
                        <h2>{location}</h2>
                    </div>
                    <div className="info-time">
                        <h2>{time}</h2>
                    </div>
                </div>
                <div className="weather-demo"></div>
            </div>
            <div className="side-body bg-amber-700 h-[60%] ">
                BODY
            </div>
        </div>
    );
}