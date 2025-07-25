import { LuLoaderCircle } from "react-icons/lu";

export default function Loading() {

    return(
        <div className={`loading-container text-3xl font-custom-semibold text-solid-2 flex items-center gap-friend`}>
            <LuLoaderCircle size={30} className="loading-icon" />
            <p>Loading...</p>
        </div>
    );
}