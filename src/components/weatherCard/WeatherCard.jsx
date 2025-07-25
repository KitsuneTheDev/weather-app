import { PiCaretCircleDownFill, PiCaretCircleUpFill } from "react-icons/pi";

export default function WeatherCard({name, value, unit, icon, change}) {

    return(
        <div className="weather-card-container glass flex items-center w-full h-full rounded-md text-solid-2">
            <div className="icon-container pl-collegue w-[20%]">
                {icon}
            </div>
            <div className="card-body h-full flex flex-col justify-center w-[50%]">
                <p className="text-sm font-custom-light pl-friend 
                md:text-md md:pl-friend
                lg:text-lg lg:pl-social
                xl:text-lg xl:pl-social">{name}</p>
                <span className="card-content flex pl-friend
                md:pl-friend
                lg:pl-social
                xl:pl-social">
                    <p className="text-lg font-custom-bold
                    md:text-xl
                    lg:text-2xl
                    xl:text-2xl">{`${value}` ? value : "N/A"}</p>
                    <p className="text-lg font-custom-semibold pl-friend
                    md:text-xl
                    lg:text-2xl
                    xl:text-2xl">{unit}</p>
                </span>
            </div>
            <div className="change-container font-custom-light text-sm pr-friend w-[30%] flex justify-start items-center
            md:text-md md:pr-friend
            lg:text-lg lg:pr-collegue
            xl:text-lg xl:pr-collegue">
                <span className="pr-friend">
                    {
                        change < 0 ? <PiCaretCircleDownFill 
                                            fill="var(--color-solid-2)" 
                                            size={30} /> : 
                                        <PiCaretCircleUpFill 
                                            fill="var(--color-light-tertiary)" 
                                            size={30} />
                    }
                </span>
                <p className="font-custom-medium text-md text-end">{`${change}` ? Math.abs(change) : "N/A"}</p>
            </div>
        </div>
    );
} 