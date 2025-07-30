import { PiCaretDown } from "react-icons/pi";
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
        <div className="dropdown-container relative w-full h-full " ref={dropdownRef}>
            <div className={`dropdown-header w-[80%] h-10 bg-light-tertiary ${isOpen ? 'rounded-t-4xl' : 'rounded-4xl'} hover:cursor-pointer border-b-[2px] border-solid-2 
            xl:h-10`}
            onClick={() => setIsOpen(prev => !prev)}
            >
                <div className="text-solid-2 h-full font-custom-medium text-xs flex justify-center items-center gap-friend m-collegue
                    md:text-md
                    lg:text-xl
                    xl:text-xl">
                        <PiCaretDown size={30} className="fill-solid-2" />
                        <p>{placeholder}</p>
                </div>
            </div>
            <div className={`dropdown-body absolute z-50 bg-light-tertiary/70 w-[80%] h-30 overflow-y-scroll ${isOpen ? 'grid' : 'hidden'} grid-cols-1 rounded-b-2xl hover:cursor-pointer`} >
                {cityInfo.map((info, index) => {
                    return(
                        <div timezone={info.timezone}
                            key={index} 
                            className="option flex justify-center h-10 items-center font-custom-medium text-solid-2 text-md border-b-[1px]"
                            onClick={() => {
                                setPlaceholder(`${info.city}`);
                                setLocation(info.city);
                                setTimezone(info.timezone);
                                const savedInfo = {
                                    timezone: info.timezone,
                                    location: info.city,
                                    placeholder: `${info.city}`
                                }
                                localStorage.setItem('savedInfo', JSON.stringify(savedInfo));
                                setIsOpen(false);
                            }}>
                                {`${info.city}`}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}