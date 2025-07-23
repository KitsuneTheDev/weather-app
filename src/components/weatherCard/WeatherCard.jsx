export default function WeatherCard({name, value, icon}) {

    return(
        <div className="weather-card-container flex items-center w-full h-full bg-light-tertiary rounded-md">
            <div className="icon-container pl-collegue">
                {icon}
            </div>
            <div className="card-body pl-social h-full flex flex-col justify-center">
                <p className="text-sm font-custom-light
                md:text-md
                lg:text-lg
                xl:text-lg">{name}</p>
                <p className="text-lg font-custom-bold
                md:text-xl
                lg:text-2xl
                xl:text-2xl">{value ? value : "N/A"}</p>
            </div>
            <div className="change-container pl-social font-custom-light text-sm
            md:text-md
            lg:text-lg
            xl:text-lg">
                N/A
            </div>
        </div>
    );
} 