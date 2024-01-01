import { ReactNode, useState } from "react";
import sideopen from "../assets/images/icons/sideopen_lightgray.png"


type sideBarType = {child: ReactNode}

export default function Sidebar({child}: sideBarType){

    const isPC = window.innerWidth > 768;
    const [showBar, setShowBar] = useState(isPC);

    return (
        <>
            <div className={(showBar?"":"hidden ")+"shadow-lg bg-gray-300 md:relative fixed right-0 min-h-screen md:w-fit w-full"}
            >
                {child}
            </div>

            {/* Sidebar Open Button */}
            <div onClick={()=>setShowBar(!showBar)} className="fixed bottom-20 right-0 py-3 px-5 pr-10 flex gap-3 bg-blue-700 shadow-lg rounded-l-lg cursor-pointer">
                <img className={(showBar?"rotate-180 ":"")+"w-6"} src={sideopen} alt="Open" />
            </div>
        </>
    )
}