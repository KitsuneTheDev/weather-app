import { MdOutlineSpaceDashboard, MdOutlineCalendarToday } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";

export default function Navbar() {

    return(
        <div className="navbar-container w-full h-full flex flex-col gap-boss ">
            <div className="navbar-header pt-collegue pl-collegue pr-collegue flex justify-between h-boss
            xl:w-[100%]">
                <div className="header-name h-full">
                    <h1 className="font-custom-bold text-solid-2 w-[100%] text-lg pb-friend
                    md:text-xl
                    lg:text-2xl
                    xl:text-2xl ">Weather Kitsu</h1>
                    <p className='text-solid-2/80 font-custom-medium text-xs
                    md:text-sm
                    lg:text-md
                    xl:text-md'>Weather Forecast App</p>
                </div>
                <div className="navbar-elements-menu flex flex-col gap-friend pt-collegue
                lg:hidden
                xl:hidden">
                    <span className="bg-solid-2 w-[25px] h-[3px] inline-block"></span>
                    <span className="bg-solid-2 w-[25px] h-[3px] inline-block"></span>
                    <span className="bg-solid-2 w-[25px] h-[3px] inline-block"></span>
                </div>
            </div>
            <div className="navbar-elements flex-col pl-collegue pr-collegue hidden
            lg:w-[100%] lg:flex
            xl:w-[100%] xl:flex">
                <div className="navbar-item rounded-4xl mb-social flex items-center text-solid-2 
                hover:cursor-pointer hover:scale-[105%] ">
                    <MdOutlineSpaceDashboard fill="var(--color-solid-2)" size={30} className="element-icon pr-friend" />
                    <p className='font-custom-semibold text-sm 
                    md:text-md
                    lg:text-lg 
                    xl:text-lg'>Dashboard</p>
                </div>
                <div className="navbar-item rounded-4xl mb-social flex items-center
                hover:cursor-pointer hover:scale-[105%] ">
                    <FaRegMap fill="var(--color-solid-2)" size={30} className="element-icon pr-friend" />
                    <p className='font-custom-semibold text-solid-2 text-sm 
                    md:text-md
                    lg:text-lg
                    xl:text-lg'>Map</p> 
                </div>
                <div className="navbar-item rounded-4xl mb-social flex items-center
                hover:cursor-pointer hover:scale-[105%] ">
                    <MdOutlineCalendarToday fill="var(--color-solid-2)" size={28} className="element-icon pr-friend" />
                    <p className='font-custom-semibold text-solid-2 text-sm 
                    md:text-md
                    lg:text-lg 
                    xl:text-lg'>Calendar</p> 
                </div>
                <div className="footer fixed bottom-friend left-friend flex justify-start
                md:bottom-friend md:left-friend
                lg:bottom-collegue lg:left-collegue
                xl:bottom-collegue xl:left-collegue">
                    <LiaCopyrightSolid fill="var(--color-solid-2)" size={18} className="relative" />
                    <p className=" font-custom-light text-solid-2 text-xs
                    md:text-xs
                    lg:text-sm
                    xl:text-sm">All rights reserved</p>
                </div>
            </div>
        </div>
    );
}