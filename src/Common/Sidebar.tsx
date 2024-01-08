import { ReactNode, useState } from "react";
import sideopen from "../assets/images/icons/sideopen_lightgray.png"
import { hrsToTimeStr } from "./Utils";


export default function Sidebar({sideBarContent, styling}: {sideBarContent: ReactNode, styling: string}){

    const isPC = window.innerWidth > 768;
    const [showBar, setShowBar] = useState(isPC);

    return (
        <>
            <div className={(showBar?"":"hidden ")+ styling +" h-screen w-screen m-0 md:ml-auto md:m-3 md:h-fit md:static md:w-1/5 overflow-hidden fixed md:shrink-0"}
            >
                {sideBarContent}
            </div>

            {/* Sidebar Open Button */}
            <div onClick={()=>setShowBar(!showBar)} className="fixed bottom-20 right-0 py-3 px-5 pr-10 flex gap-3 bg-blue-700 shadow-lg rounded-l-lg cursor-pointer">
                <img className={(showBar?"rotate-180 ":"")+"w-6"} src={sideopen} alt="Open" />
            </div>
        </>
    )
}

type liveSessionType = any; //TODO
export function LiveSession({data, styling}: {data:liveSessionType, styling: any}){

    const startTime = hrsToTimeStr(data.startTime);
    const endTime = hrsToTimeStr(data.startTime+data.duration);
    const duration = hrsToTimeStr(data.duration, true);

    return (
        <button className={"w-full my-1 flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 " + styling['container']}>
            <span className={styling['code']} style={{backgroundColor: data.color}}>
                {data.code}
            </span>
            <span>{startTime} - {endTime}</span>
            <span className="ml-auto font-light">{duration}</span>
        </button>
    )
}