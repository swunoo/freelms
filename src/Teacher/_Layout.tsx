import Calendar from "../Common/Calendar";
import Card from "../Common/Card";
import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/Inputs";
import { hrsToTimeStr } from "../Common/Utils";
import { mockClassList, mockLiveSessionList } from "../Mockers";
import Navbar from "./_Navbar";
import Sidebar, { LiveSession } from "../Common/Sidebar";
import { MouseEvent, ReactNode, useEffect, useState } from "react";

export default function Layout ({ children, active }: {children: ReactNode, active: string}) {

    const liveSessionData = mockLiveSessionList;

    const [box, setBox] = useState<ReactNode|undefined>(undefined);

    useEffect(() => {
        // if(box){
        //     ['desk-content', 'desk-sidebar'].forEach(id => {
        //         document.getElementById(id)?.classList.add('fixed')
        //     })
        // } else {
        //     ['desk-content', 'desk-sidebar'].forEach(id => {
        //         document.getElementById(id)?.classList.remove('fixed')
        //     })
        // }
    }, [box])

    const onContentClick = (e: MouseEvent) => {
        if(box) setBox(undefined)
    }

    return (
        <div
            className="
            bg-slate-200
            flex
        ">
            <div onClick={onContentClick} className="w-full relative">
                <Navbar active={active} box={box} setBox={setBox}/>
                <div className="min-h-screen">
                    <div id="desk-content">
                        { children }
                    </div>
                    {box &&
                    <div
                    onClick={e => e.stopPropagation()}
                    className="
                        absolute top-10 right-0 bg-gray-100 p-5 w-80 rounded-lg shadow p-0
                        ">{box}{box}{box}{box}{box}{box}{box}{box}</div>
                    }
                </div>
            </div>
                <Sidebar
                    child={
                        <div id="desk-sidebar" className="md:w-80 right-0">
                        <Calendar />
                        <div className="p-3">
                            {liveSessionData.map(d => {                        
                                return (
                                    <LiveSession data={d}/>
                                )
                            })}
                        </div>
                        </div>
                    }
                />
        </div>
    )
}