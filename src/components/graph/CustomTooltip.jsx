export default function CustomTooltip({payload}) {

    return(
        <div className="tooltip-container glass w-20 h-10 flex justify-center items-center rounded-xl">
            <p className="font-custom-bold text-xl text-solid-4">{payload[0]?.value} °C</p>
        </div>
    );
}