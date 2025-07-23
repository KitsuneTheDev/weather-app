import Navbar from '../navbar/Navbar.jsx';
import Primary from '../primary/Primary.jsx';
import Side from '../side/Side.jsx';
import './layout.css';

export default function Layout() {
    return(
        <div className="layout-container w-full h-full bg-light-quaternary flex flex-col
        lg:flex-row
        xl:flex-row">
            <aside className="aside-container h-[10%] w-full bg-light-tertiary flex justify-center items-center
            lg:h-full lg:w-3/18
            xl:h-full xl:w-1/9 ">
                <Navbar />
            </aside>
            <main className="main-container h-[90%] w-full bg-light-quaternary
            lg:h-full lg:w-4/9
            xl:h-full xl:w-5/9 ">
                <Primary.Default />
                <Side />
            </main>
            <section className="side-container h-[87.5%] w-full top-2/3 border-t-[2px] border-solid-2
            lg:border-none lg:h-full lg:w-7/18 
            xl:border-none xl:h-full xl:w-3/9 "></section>
        </div>
    );
}