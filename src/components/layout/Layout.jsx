import Navbar from '../navbar/Navbar.jsx';
import Primary from '../primary/Primary.jsx';
import Side from '../side/Side.jsx';
import './layout.css';

export default function Layout() {
    return(
        <div className="layout-container w-full h-full flex flex-col
        lg:flex-row
        xl:flex-row">
            <aside className="aside-container h-[10%] w-full flex justify-center items-center border-b-2px border-light-tertiary
            lg:h-full lg:w-3/18 lg:border-b-0 lg:border-r-[2px]
            xl:h-full xl:w-1/9 xl:border-b-0 xl:border-r-[2px] ">
                <Navbar />
            </aside>
            <main className="main-container h-[90%] w-full flex flex-col
            lg:h-full lg:w-5/9
            xl:h-full xl:w-5/9 ">
                <Primary.Default />
            </main>
            <section className="side-container h-[87.5%] w-full top-2/3 border-t-[2px] border-light-tertiary
            lg:h-full lg:w-5/18 lg:border-l-[2px] lg:border-t-0
            xl:h-full xl:w-3/9 xl:border-l-[2px] xl:border-t-0 "></section>
        </div>
    );
}