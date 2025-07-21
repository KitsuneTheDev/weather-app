export default function Primary() {}

Primary.Default = () => {
        return(
        <div className="primary-container bg-solid-1
        xl:h-full xl:w-50%">
            <div className="primary-header w-full h-1/7"></div>
            <div className="primary-body w-full h-6/7 bg-amber-200">
                <div className="cards-container w-full h-1/2"></div>
                <div className="graph-container w-full h-1/2 bg-amber-950"></div>
            </div>
        </div>
    );
}