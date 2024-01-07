import { ReactNode, useState } from "react";
import Sidebar from "../Common/Sidebar";
import Navbar from "./_Navbar";

export default function Layout({ children, active }: { children: ReactNode, active: string }) {

    const [sideBarContent, setSideBarContent] = useState<ReactNode | undefined>(undefined);

    return (
        <div>
            <div className="w-full relative">
                <Navbar active={active} setSideBarContent={setSideBarContent} />
                <div className="min-h-screen flex bg-white">
                    <div id="desk-content" className="w-full">
                        {children}
                    </div>

                    <Sidebar sideBarContent={sideBarContent}/>
                </div>

            </div>
        </div>
    )
}