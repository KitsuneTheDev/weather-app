import { useWeather } from "../../context/WeatherContext.jsx";
import Loading from '../common/Loading.jsx'
import { conditionIcons } from "../../constant/conditionIcons.jsx";
import AstroCard from "../weatherCard/AstroCard.jsx";
import RainChanceCard from "../weatherCard/RainChanceCard.jsx";

export default function Side() {

    const { today:{headerDate, detailDay, detailDate, detailYear }, weatherData, weatherForecast, isDataError, isDataLoading, isForecastError, isForecastLoading, location, time } = useWeather();

    if(isDataLoading || isForecastLoading) return(
        <div className="loading-container h-[calc(100%-var(--spacing-boss))] w-full mt-boss flex flex-col items-center justify-center
        lg:h-full lg:mt-0 lg:flex-col
        xl:h-full xl:mt-0 xl:flex-col ">
            <Loading />
        </div>
    );

    return(
        <div className="side-container h-full w-full flex-col mt-boss top-[calc(var(--spacing-boss)*3-var(--spacing-social)+12px)]
        md:top-[calc(var(--spacing-boss)*3)]
        lg:h-full lg:mt-0 lg:flex lg:static
        xl:h-full xl:mt-0 xl:flex xl:static ">
            <div className="side-header h-[40%] pl-collegue pr-collegue pt-boss
            lg:pl-0 lg:pr-0 lg:pt-0
            xl:pl-0 xl:pr-0 xl:pt-0">
                <div className="info-container flex pt-collegue w-full h-1/2
                lg:flex-col lg:h-1/4
                xl:flex-row xl:h-1/2">
                    <div className="info-location w-1/2 
                    lg:pl-collegue lg:h-1/4
                    xl:pl-social xl:h-1/4">
                        <h2 className="font-custom-bold text-solid-2 text-lg
                        md:text-2xl
                        lg:text-4xl
                        xl:text-4xl ">{location}</h2>
                    </div>
                    <div className="info-time w-1/2 
                    lg:pr-collegue
                    xl:pr-social">
                        <h2 className="text-end font-custom-semibold text-solid-2 text-md
                        md:text-xl
                        lg:text-2xl lg:text-start lg:pl-collegue
                        xl:text-2xl xl:text-end">{time}</h2>
                    </div>
                </div>
                <div className="weather-demo w-full h-1/2 flex flex-col justify-end pb-social">
                    <div className="demo-icon pb-friend w-fit
                    lg:pl-collegue lg:h-1/4
                    xl:pl-social xl:h-3/4">
                        {conditionIcons[weatherData.current.condition.text]}
                    </div>
                    <div className="demo-info flex justify-between pb-friend
                    md:pb-collegue
                    lg:pb-0
                    xl:pb-0">
                        <div className="temperature font-custom-semibold text-solid-2 text-2xl
                        md:text-4xl
                        lg:pl-collegue lg:text-6xl
                        xl:pl-social xl:text-6xl ">
                            {weatherData.current.temp_c}
                        </div>
                        <div className="condition font-custom-medium text-solid-2 text-lg
                        md:text-2xl
                        lg:pr-collegue lg:text-4xl lg:pl-friend
                        xl:pr-social xl:text-4xl xl:pl-0 ">
                            {weatherData.current.condition.text}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[calc(100%-(2*var(--spacing-collegue)))] ml-collegue mr-collegue hidden
            md:block md:mt-collegue
            lg:block
            xl:block " style={{color: 'var(--color-solid-2)'}} />
            <div className="side-body h-[60%] hidden
            md:block
            lg:block
            xl:block">
                <div className="rainchance-container w-full h-2/3 hidden
                lg:block
                xl:block">
                    <div className="rainchance-header w-full h-[20%]">
                        <h3 className="text-2xl font-custom-medium pl-social pt-collegue">Chance of rain</h3>
                    </div>
                    <div className="rainchance-body w-full h-[80%]">
                        <RainChanceCard />
                    </div>
                </div>
                <div className="riseset-container w-full h-1/3 pb-social hidden
                sm:grid
                md:w-[96%] md:ml-[2%] md:mt-collegue md:gap-collegue
                lg:grid-cols-1 lg:grid lg:gap-friend lg:pl-friend lg:pr-friend
                xl:grid-cols-1 xl:grid">
                    <AstroCard name={'Sun Rise'}
                        value={weatherForecast?.forecast.forecastday[0].astro.sunrise}
                        icon={conditionIcons['Sunny']}
                        change={''} />
                    <AstroCard name={'Sun Set'}
                        value={weatherForecast?.forecast.forecastday[0].astro.sunset}
                        icon={conditionIcons['Moon']}
                        change={''} />
                </div>
            </div>
        </div>
    );
}