import Loading from "../common/Loading.jsx";

export default function Graph({ data }) {

    console.log("data in graph -->", data);
    if(true) return(
        <div className="chart-container glass h-[75%] w-[96%] flex justify-center items-center ml-[2%]">
            <Loading />
        </div>
    );
}