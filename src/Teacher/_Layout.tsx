import { ReactNode, useState } from "react";
import Sidebar from "../Common/Sidebar";
import Navbar from "./_Navbar";
import { sideBarStyle as style } from "./style";

export default function Layout({ children, active }: { children: ReactNode, active: string }) {

    const [sideBarContent, setSideBarContent] = useState<ReactNode | undefined>(undefined);

    return (
            <div className="w-full relative">
                <Navbar active={active} setSideBarContent={setSideBarContent} />
                <div className={style['wrapper']}>
                    <div id="desk-content" className="w-full">
                        {children}
                    </div>

                    <Sidebar sideBarContent={sideBarContent} styling={style['container']}/>
                </div>
            </div>
    )
}