import Calendar from "../Common/Calendar";
import Card from "../Common/Card";
import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/SearchBar";
import { hrsToTimeStr } from "../Common/Utils";
import { mockClassList, mockLiveSessionList } from "../Mockers";
import Navbar from "./_Navbar";
import Sidebar, { LiveSession } from "../Common/Sidebar";
import { ReactNode } from "react";

export default function Layout ({ children, active }: {children: ReactNode, active: string}) {

    const liveSessionData = mockLiveSessionList;

    return (
        <div
            className="
            flex
            bg-slate-200
        ">
            <div className="w-full relative">
                <Navbar active={active}/>
                <div className="min-h-screen">
                    { children }
                </div>
            </div>
            <Sidebar
                child={
                    <>
                    <Calendar />
                    <div className="p-3">
                        {liveSessionData.map(d => {                        
                            return (
                                <LiveSession data={d}/>
                            )
                        })}
                    </div>
                    </>
                }
            />
        </div>
    )
}