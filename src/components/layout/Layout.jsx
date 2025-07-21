import Navbar from '../navbar/Navbar.jsx';
import Primary from '../primary/Primary.jsx';
import Side from '../side/Side.jsx';

export default function Layout() {
    return(
        <div className="layout-container w-full h-full relative bg-solid-4
        xl:flex xl:flex-row">
            <aside className="aside-container h-[12.5%] w-full bg-solid-2 flex justify-center items-center
            xl:h-full xl:w-[12.5%] xl:static ">
                <Navbar />
            </aside>
            <main className="main-container h-[87.5%] w-full absolute
            xl:h-full xl:w-[43.75%] xl:static ">
                <Primary.Default />
                <Side />
            </main>
            <section className="side-container h-[87.5%] w-full top-2/3 absolute
            xl:h-full xl:w-[43.75%] xl:static "></section>
        </div>
    );
}