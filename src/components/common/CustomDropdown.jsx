import { PiCaretDownBold } from "react-icons/pi";
import { useEffect, useRef, useState } from 'react';
import { useWeather } from "../../context/WeatherContext.jsx";
import dayjs from "dayjs";

export default function CustomDropdown({ cityInfo }) {

    const { setLocation, setTime, setTimezone } = useWeather();

    const [isOpen, setIsOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState(() => {
        
        const savedPlaceholder = JSON.parse(localStorage.getItem('savedInfo'))?.placeholder;
        if(!savedPlaceholder) return `${cityInfo[0].city}, ${cityInfo[0].country}`
        return savedPlaceholder;
    })
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    })

    return(
        <div className="dropdown-container w-full h-full relative right-collegue z-10">
            <div className={`dropdown-header w-full h-10 bg-light-tertiary ${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'} hover:cursor-pointer relative border-b-[2px] border-solid-2 
            xl:h-8`}
            onClick={() => setIsOpen(prev => !prev)}
            ref={dropdownRef}>
                <div className="text-solid-2 h-full font-custom-medium text-xs flex justify-start items-start gap-friend m-collegue
                    md:text-md
                    lg:text-xl
                    xl:text-xl">
                        <PiCaretDownBold size={30} className="fill-solid-2" />
                        <p>{placeholder}</p>
                </div>
                <div className={`dropdown-body bg-light-tertiary w-full h-25 overflow-y-scroll ${isOpen ? 'grid' : 'hidden'} grid-cols-1 absolute top-8 rounded-b-2xl`} >
                    {cityInfo.map((info, index) => {
                        return(
                            <div timezone={info.timezone}
                                key={info.key} 
                                className="option flex justify-center items-center font-custom-medium text-solid-2 text-md border-b-[1px]"
                                onClick={() => {
                                    setPlaceholder(`${info.city}, ${info.country}`);
                                    setLocation(info.city);
                                    setTimezone(info.timezone);
                                    const savedInfo = {
                                        timezone: info.timezone,
                                        location: info.city,
                                        placeholder: `${info.city}, ${info.country}`
                                    }
                                    localStorage.setItem('savedInfo', JSON.stringify(savedInfo));
                                }}>
                                    {`${info.city}, ${info.country}`}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}