import { ReactNode, useEffect, useState } from "react";
import { IconBtn } from "../Common/Buttons";
import Calendar from "../Common/Calendar";
import { ChatBox, ChatDetails, NotiBox } from "../Common/ChatPanel";
import { LiveSession } from "../Common/Sidebar";
import { ChatData, LiveData, NotiData, liveSessionType } from "../DataAccess";
import calendarIcon from "../assets/images/icons/calendar_material.png";
import chatIcon from "../assets/images/icons/chat_material.png";
import notiIcon from "../assets/images/icons/noti_material.png";
import { navStyle, sideBarStyle } from "./style";

export default Navbar;


function Navbar({active, setSideBarContent}: {active: string, setSideBarContent: (r: ReactNode)=>void}){


    const [activeTab, setActiveTab] = useState('');

    const brand = "freelms"
    const navTabStyle = (tab: string) => navStyle['nav_tab'] + (tab === activeTab ? navStyle['active_tab'] : '');
    const liveSessionObj = new LiveData();
    const chatObj = new ChatData();
    const notiObj = new NotiData();

    const openCalendar = () => {
        setActiveTab('calendar')

        const liveSessionData = liveSessionObj.getLiveSessionList();
        setSideBarContent(
        <>
            <Calendar styling={sideBarStyle['calendar']}  />
            <div className="p-3">
                {liveSessionData.map((d: liveSessionType) => {
                    return (
                        <LiveSession data={d} styling={sideBarStyle['liveSession']} />
                    )
                })}
            </div>
        </>);
    }

    const openChats = () => {
        setActiveTab('chat')

        const chatData = chatObj.getChatList();
        setSideBarContent(<ChatBox data={chatData} styling={sideBarStyle['chat']} toChatDetails={openMessageDetails}/>);
    }

    const openMessageDetails = (id: string, name: string, photo: string) => {
        setActiveTab('chat')

        const chatDetails = chatObj.getChatDetails(id);
        setSideBarContent(<ChatDetails name={name} img={photo} data={chatDetails} styling={sideBarStyle['chat']} goBack={openChats}/>);
    }

    const openNotis = () => {
        setActiveTab('noti')

        const notiData = notiObj.getNotiList();
        setSideBarContent(<NotiBox data={notiData} styling={sideBarStyle['noti']} />);
    }

    useEffect(() => {if(window.innerWidth > 768) openCalendar()},[]);

    return (
        <div
            className={"flex justify-between items-center py-2 px-5 md:px-16 sticky top-0 w-full z-20 " + navStyle['nav_container']}
        >
            <p>{brand}</p>
            <div className="flex md:gap-7 gap-3 items-center relative">
                <a href="/student/desk" className={(active==='desk'?navStyle['active_link']:'')+navStyle['nav_link']}>Desk</a>

                {active !== "desk" &&
                    <p className={navStyle['active_link'] + navStyle['nav_link']}>{active}</p>
                }

                <div className="md:ml-7 flex md:gap-7 h-fit">
                    <IconBtn styling={navTabStyle('calendar')} icon={calendarIcon} onclick={openCalendar}/>
                    <IconBtn styling={navTabStyle('chat')} icon={chatIcon} onclick={openChats}/>
                    <IconBtn styling={navTabStyle('noti')} icon={notiIcon} onclick={openNotis}/>
                </div>
            </div>
        </div>
    )
}
