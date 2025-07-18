export default function Layout() {
    return(
        <div className="layout-container w-full h-full relative
        xl:flex xl:flex-row">
            <aside className="aside-container h-[12.5%] w-full bg-darks-quaternary
            xl:h-full xl:w-[12.5%] xl:static "></aside>
            <main className="main-container h-[87.5%] w-full absolute bg-dark-tertiary
            xl:h-full xl:w-[43.75%] xl:static "></main>
            <section className="side-container h-[87.5%] w-full top-2/3 absolute bg-dark-tertiary
            xl:h-full xl:w-[43.75%] xl:static "></section>
        </div>
    );
}