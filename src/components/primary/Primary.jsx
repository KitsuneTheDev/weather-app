import { useWeather } from "../../context/WeatherContext.jsx";
import WeatherCard from '../weatherCard/WeatherCard.jsx';
import CustomDropdown from "../common/CustomDropdown.jsx";
import Graph from '../graph/Graph.jsx';
import Loading from '../common/Loading.jsx';
import { PiWind, PiSun, PiWaves, PiArrowsIn } from "react-icons/pi";



export default function Primary() {}

Primary.Default = () => {

    const { today:{headerDate, detailDate, detailDay, detailYear}, weatherData, weatherHistory, weatherForecast, isDataLoading, isHistoryLoading, isForecastError, isForecastLoading, location, cityInfo } = useWeather();
    console.log("weather data in primary -->", weatherData);
    console.log("weather history in primary -->", weatherHistory);
    console.log("weather forecast in primary -->", weatherForecast);

        return(
        <div className="primary-container h-full
        xl:h-full xl:w-50%">
            <div className="primary-header w-full h-boss border-b-[2px] box-border border-light-tertiary flex justify-between fixed top-boss
            lg:static
            xl:static ">
                <div className="date-container pl-collegue pt-collegue
                xl:left-boss xl:top-collegue">
                    <div className="date-header">
                        <h2 className="text-solid-2 font-custom-bold text-2xl
                        md:text-3xl
                        lg:text-4xl
                        xl:text-4xl">{headerDate}</h2>
                    </div>
                    <div className="date-details text-solid-2 pt-friend font-custom-medium text-md
                    md:text-lg
                    lg:text-xl
                    xl:text-xl">
                        <p>{detailDay}, {detailDate}, {detailYear}</p>
                    </div>
                </div>
                <div className="location-container h-full w-1/3
                xl:right-boss xl:top-collegue">
                    <CustomDropdown cityInfo={ cityInfo } />
                </div>
            </div>
            <div className="primary-body w-full h-[calc(100%+var(--spacing-boss))]
            lg:h-[calc(100%-var(--spacing-boss))]
            xl:h-[calc(100%-var(--spacing-boss))] ">
                <div className="cards-container w-full h-5/6 flex flex-col items-center mb-boss
                lg:h-13/20 lg:mb-0
                xl:h-13/20 xl:mb-0 ">
                    <div className="cards-header h-social
                    md:h-boss
                    lg:h-boss
                    xl:h-boss">
                        <h3 className="text-solid-2 font-custom-bold text-lg pt-collegue
                        md:text-xl
                        lg:text-2xl
                        xl:text-2xl">
                            Today overview
                        </h3>
                    </div>
                    {isDataLoading || isHistoryLoading || isForecastLoading ? <Loading /> :
                    <div className={`cards-body grid grid-cols-1 grid-rows-4 gap-friend w-[100%] h-full pl-collegue pr-collegue mb-collegue
                    md:mb-collegue md:grid-cols-1 md:grid-rows-4 md:gap-collegue
                    lg:mb-social lg:grid-cols-1 lg:grid-rows-4 lg:gap-social
                    xl:mb-social xl:grid-cols-2 xl:grid-rows-2 xl:gap-social`}>
                        <WeatherCard 
                            name={"Wind Speed"} 
                            value={weatherData?.current.wind_kph}
                            unit={"km/h"} 
                            icon={<PiWind size={30} fill="var(--color-solid-2}" />}
                            change={(weatherHistory?.forecast.forecastday[0].day.maxwind_kph - weatherData?.current.wind_kph).toFixed(2)}
                        />
                        <WeatherCard 
                            name={"Pressure"} 
                            value={weatherData?.current.pressure_in} 
                            unit={"hPa"}
                            icon={<PiArrowsIn size={30} fill="var(--color-solid-2}" />}
                            change={(weatherHistory?.forecast.forecastday[0].hour[12].pressure_mb - weatherData?.current.pressure_mb).toFixed(2)} 
                        />
                        <WeatherCard 
                            name={"Humidity"} 
                            value={weatherData?.current.humidity}
                            unit={"%"}
                            icon={<PiWaves size={30} fill="var(--color-solid-2}" />} 
                            change={(weatherHistory?.forecast.forecastday[0].day.avghumidity - weatherData?.current.humidity).toFixed(2)}
                        />
                        <WeatherCard 
                            name={"UV Index"} 
                            value={weatherData?.current.uv}
                            unit={""}
                            icon={<PiSun size={30} fill="var(--color-solid-2}" />} 
                            change={(weatherHistory?.forecast.forecastday[0].day.uv - weatherData?.current.uv).toFixed(2)}
                        />
                    </div>
                    }
                </div>
                <div className="graph-container h-[40%] w-[96%] hidden
                md:hidden
                lg:flex lg:items-center lg:mb-boss
                xl:block">
                    <Graph data={weatherForecast?.forecast.forecastday.map((day, index) => {
                        return day;
                    })} />
                </div>
            </div>
        </div>
    );
}