import Calendar from "../Common/Calendar";
import Card from "../Common/Card";
import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/Inputs";
import { hrsToTimeStr } from "../Common/Utils";
import { mockClassList, mockLiveSessionList } from "../Mockers";
import Navbar from "./_Navbar";
import Sidebar, { LiveSession } from "../Common/Sidebar";
import { MouseEvent, ReactNode, useEffect, useState } from "react";

export default function Layout({ children, active }: { children: ReactNode, active: string }) {

    const [sideBarContent, setSideBarContent] = useState<ReactNode | undefined>(undefined);

    return (
        <div>
            <div className="w-full relative">
                <Navbar active={active} setSideBarContent={setSideBarContent} />
                <div className="min-h-screen flex bg-white">
                    <div id="desk-content" className="">
                        {children}
                    </div>

                    <Sidebar sideBarContent={sideBarContent}/>
                </div>

            </div>
        </div>
    )
}