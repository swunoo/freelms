import { ReactNode, useEffect } from "react";
import { ChatBox, ChatDetails, NotiBox } from "../Common/ChatPanel";
import { mockChat, mockChatDetails, mockNoti } from "../Mockers";
import calendarIcon from "../assets/images/icons/calendar_blue.png";
import chatIcon from "../assets/images/icons/chat_blue.png";
import notiIcon from "../assets/images/icons/noti_blue.png";
import { IconBtn } from "../Common/Buttons";

export default Navbar;


/* Navbar for Admin */
function Navbar({ active, setSideBarContent }: { active: string, setSideBarContent: (r: ReactNode)=>void}) {
    const openChats = () => {
        const chatData = mockChat;
        setSideBarContent(<ChatBox data={chatData} toChatDetails={openMessageDetails} />);
    }
    
    const openMessageDetails = (id: string, name: string, photo: string) => {
        const chatDetails = mockChatDetails;
        setSideBarContent(<ChatDetails name={name} img={photo} data={chatDetails} goBack={openChats} />);
    }
    
    const openNotis = () => {
        const notiData = mockNoti;
        setSideBarContent(<NotiBox data={notiData} />);
    }
    
    useEffect(openChats, [])
    
    return (
        <div
            className="flex justify-between items-center py-2 px-5 md:px-16 text-base sticky top-0 w-full shadow-sm bg-slate-100 z-20"
        >
            <p>freeLMS</p>
            <div className="flex md:gap-7 gap-3 items-center relative">
                <a href="/admin/dashboard" className={active === 'dashboard' ? 'font-bold' : ''}>Dashboard</a>
                <a href="/admin/design" className={active === 'design' ? 'font-bold' : ''}>Design</a>
                <a href="/admin/members" className={active === 'members' ? 'font-bold' : ''}>Members</a>
    
                <div className="md:ml-7 flex md:gap-7 h-fit">
                    <IconBtn icon={chatIcon} onclick={openChats} />
                    <IconBtn icon={notiIcon} onclick={openNotis} />
                </div>
            </div>
        </div>
    )
}

