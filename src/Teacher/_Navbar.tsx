import { ReactNode, useEffect } from "react";
import { IconBtn } from "../Common/Buttons";
import Calendar from "../Common/Calendar";
import { ChatBox, ChatDetails, NotiBox } from "../Common/ChatPanel";
import { LiveSession } from "../Common/Sidebar";
import { ChatData, LiveData, NotiData, liveSessionType } from "../Data";
import calendarIcon from "../assets/images/icons/calendar_blue.png";
import chatIcon from "../assets/images/icons/chat_blue.png";
import notiIcon from "../assets/images/icons/noti_blue.png";

export default Navbar;

function Navbar({active, setSideBarContent}: {active: string, setSideBarContent: (r: ReactNode)=>void}){

    const liveSessionObj = new LiveData();
    const chatObj = new ChatData();
    const notiObj = new NotiData();

    const openCalendar = () => {
        const liveSessionData = liveSessionObj.getLiveSessionList();

        setSideBarContent(
        <>
            <Calendar />
            <div className="p-3">
                {liveSessionData.map((d: liveSessionType) => {
                    return (
                        <LiveSession data={d} />
                    )
                })}
            </div>
        </>);
    }

    const openChats = () => {
        const chatData = chatObj.getChatList();
        setSideBarContent(<ChatBox data={chatData} toChatDetails={openMessageDetails}/>);
    }

    const openMessageDetails = (id: string, name: string, photo: string) => {
        const chatDetails = chatObj.getChatDetails(id);
        setSideBarContent(<ChatDetails name={name} img={photo} data={chatDetails} goBack={openChats}/>);
    }

    const openNotis = () => {
        const notiData = notiObj.getNotiList();
        setSideBarContent(<NotiBox data={notiData} />);
    }

    useEffect(openCalendar,[])

    return (
        <div
            className="flex justify-between items-center py-2 px-5 md:px-16 text-base sticky top-0 w-full shadow-sm bg-slate-100 z-20"
        >
            <p>freeLMS</p>
            <div className="flex md:gap-7 gap-3 items-center relative">
                <a href="/teacher/desk" className=   {active==='desk'?'font-bold':''}>Desk</a>
                <a href="/teacher/members" className={active==='members'?'font-bold':''}>Members</a>

                <div className="md:ml-7 flex md:gap-7 h-fit">
                    <IconBtn icon={calendarIcon} onclick={openCalendar}/>
                    <IconBtn icon={chatIcon} onclick={openChats}/>
                    <IconBtn icon={notiIcon} onclick={openNotis}/>
                </div>
            </div>
        </div>
    )
}
