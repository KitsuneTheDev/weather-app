import Loading from "../common/Loading.jsx";
import './graph.css';
import CustomTooltip from "./CustomTooltip.jsx";
import dayjs from "dayjs";
import '../../css/fonts/fonts.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Area, ResponsiveContainer, AreaChart, Tooltip } from 'recharts';

export default function Graph({ data }) {

    console.log("data in graph -->", data);
    if(!data) return(
        <div className="chart-container glass h-[75%] w-[96%] flex justify-center items-center ml-[2%]">
            <Loading />
        </div>
    );

    return(
        <div className="chart-container h-[75%] w-[96%] flex justify-center items-center ml-[2%] ">
            <ResponsiveContainer width="100%" height="100%" >
                <AreaChart data={data} margin={{top:8}} >

                    <defs>
                        <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1" >
                            <stop offset="5%" stopColor="#1F1D47" stopOpacity={0.5} />    
                            <stop offset="95%" stopColor="transparent" stopOpacity={0} />    
                        </ linearGradient>
                    </defs>

                    <Area 
                        type="monotone"
                        dataKey="day.avgtemp_c"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorArea)"
                    />

                    <CartesianGrid 
                        stroke="#C4C4C6" strokeDasharray="10 10" strokeWidth={1} vertical={false}
                    />

                    <XAxis 
                        height={20}
                        dataKey="date" tickFormatter={(tick) => dayjs(tick).format('ddd')}  stroke="#1F1D47"
                        tick={{fill: "#E0D9FF", fontSize: "15px", fontFamily: "Quicksand, sans-serif", fontWeight: "bold"}}
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis 
                        width={55}
                        tick={{fontSize: "15px", fill: "#E0D9FF", fontFamily: "Quicksand, sans-serif", fontWeight: "bold"}}
                        domain={[dataMin => Math.floor((dataMin - 20) / 10), dataMax => Math.ceil((dataMax + 20) / 10) * 10]}
                        tickCount={6}
                        tickLine={false}
                        axisLine={false}
                        unit=" °C"
                    />

                    <Tooltip 
                        cursor={{ strokeDasharray: '10 10', stroke: '#E0D9FF', strokeWidth: 3}} 
                        content={<CustomTooltip />}
                    />

                    <Line 
                        type="monotone" dataKey="day.avgtemp_c" stroke="#1F1D47" strokeWidth={5} name="Average Temperature - Celcius" dot={false}
                    />

                </ AreaChart>
            </ResponsiveContainer>
        </div>
    );
}