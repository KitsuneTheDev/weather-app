
export default function Navbar() {

    return(
        <div className="navbar-container w-full h-[100%]">
            <div className="navbar-header ml-collegue mt-collegue mb-boss
            xl:w-[100%]">
                <h1 className="text-2xl font-custom-bold text-solid-4 w-[100%]">Weather | Kitsu</h1>
                <p className='text-solid-4/80 font-custom-medium pt-friend'>Weather Forecast App</p>
            </div>
            <div className="navbar-elements ml-collegue
            xl:w-[100%]">
                <div className="navbar-item rounded-4xl mb-social flex items-center
                hover:cursor-pointer hover:scale-[105%] ">
                    <img src="/icons/menu.png" alt="menu icon" />
                    <p className='text-lg font-custom-semibold text-solid-4'>Menu</p>
                </div>
                <div className="navbar-item rounded-4xl mb-social flex items-center
                hover:cursor-pointer hover:scale-[105%] ">
                    <img src="/icons/list.png" alt="menu icon" />
                    <p className='text-lg font-custom-semibold text-solid-4'>List</p> 
                </div>
                <div className="navbar-item rounded-4xl mb-social flex items-center
                hover:cursor-pointer hover:scale-[105%] ">
                    <img src="/icons/map.png" alt="menu icon" />
                    <p className='text-lg font-custom-semibold text-solid-4'>Map</p> 
                </div>
            </div>
        </div>
    );
}