import "./primary.css";
import { useWeather } from "../../context/WeatherContext.jsx";
import WeatherCard from '../weatherCard/WeatherCard.jsx';
import { PiWind } from "react-icons/pi";
import { LuLoaderCircle } from "react-icons/lu";

export default function Primary() {}

Primary.Default = () => {

    const { today:{headerDate, detailDay, detailDate, detailYear}, weatherData, isPending } = useWeather();

        return(
        <div className="primary-container
        xl:h-full xl:w-50%">
            <div className="primary-header w-full h-boss border-b-[2px] box-border border-light-tertiary flex justify-between">
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
                <div className="location-container pr-collegue pt-collegue
                xl:right-boss xl:top-collegue">
                    <div className="location-header">
                        <p className="text-solid-2 font-custom-medium text-lg
                        md:text-xl
                        lg:text-2xl
                        xl:text-2xl">Ankara, Turkey</p>
                    </div>
                </div>
            </div>
            <div className="primary-body w-full h-6/7">
                <div className="cards-container w-full h-1/2 flex flex-col items-center">
                    <div className="cards-header h-boss">
                        <h3 className="text-solid-2 font-custom-bold text-lg h-boss pt-collegue
                        md:text-xl
                        lg:text-2xl
                        xl:text-2xl">
                            Today overview
                        </h3>
                    </div>
                    <div className={`loading-container text-3xl font-custom-semibold text-solid-2 ${isPending ? 'flex' : 'hidden'} items-center gap-friend`}>
                        <LuLoaderCircle size={30} className="loading-icon" />
                        <p>Loading...</p>
                    </div>
                    <div className={`cards-body ${isPending ? 'hidden' : 'grid'} grid-cols-2 grid-rows-2 gap-social w-[100%] h-full pl-collegue pr-collegue`}>
                        <WeatherCard name={"Wind Speed"} value={weatherData?.wind_kph} icon={<PiWind size={30} fill="var(--color-solid-2}" />} />
                        <WeatherCard name={"Rain Chance"} value={weatherData?.wind_kph} icon={<PiWind size={30} fill="var(--color-solid-2}" />} />
                        <WeatherCard name={"Humidity"} value={weatherData?.wind_kph} icon={<PiWind size={30} fill="var(--color-solid-2}" />} />
                        <WeatherCard name={"UV Index"} value={weatherData?.wind_kph} icon={<PiWind size={30} fill="var(--color-solid-2}" />} />
                    </div>
                </div>
                <div className="graph-container w-full h-1/2"></div>
            </div>
        </div>
    );
}