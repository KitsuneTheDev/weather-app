export default function AstroCard({name, value, unit, icon}) {

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
        </div>
    );
} 