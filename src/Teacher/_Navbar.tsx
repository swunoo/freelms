import { ReactNode, useEffect, useState } from "react";
import { IconBtn } from "../Common/Buttons";
import { mockChat, mockLiveSessionList, mockNoti } from "../Mockers";
import chatIcon from "../assets/images/icons/chat_blue.png"
import notiIcon from "../assets/images/icons/noti_blue.png"
import calendarIcon from "../assets/images/icons/calendar_blue.png"
import Calendar from "../Common/Calendar";
import { LiveSession } from "../Common/Sidebar";

export default Navbar;

function Navbar({active, setSideBarContent}: {active: string, setSideBarContent: (r: ReactNode)=>void}){

    const openCalendar = () => {
        const liveSessionData = mockLiveSessionList;

        setSideBarContent(
        <>
            <Calendar />
            <div className="p-3">
                {liveSessionData.map(d => {
                    return (
                        <LiveSession data={d} />
                    )
                })}
            </div>
        </>);
    }

    const openChats = () => {
        const chatData = mockChat;
        setSideBarContent(<ChatBox data={chatData} />);
    }

    const openNotis = () => {
        const notiData = mockNoti;
        setSideBarContent(<NotiBox data={notiData} />);
    }

    useEffect(openCalendar,[])

    return (
        <div
            className="flex justify-between items-center py-2 px-5 md:px-16 text-base sticky top-0 w-full shadow-sm bg-slate-100 z-20"
        >
            <p>freeLMS</p>
            <div className="flex gap-7 items-center relative">
                <a href="/teacher/desk" className=   {active==='desk'?'font-bold':''}>Desk</a>
                <a href="/teacher/members" className={active==='members'?'font-bold':''}>Members</a>

                <div className="ml-7 flex gap-7 h-fit">
                    <IconBtn icon={calendarIcon} onclick={openCalendar}/>
                    <IconBtn icon={chatIcon} onclick={openChats}/>
                    <IconBtn icon={notiIcon} onclick={openNotis}/>
                </div>
            </div>
        </div>
    )
}

type chatInter = any; // TODO;
export function ChatBox({data}: {data: chatInter[]}){
    return (
        <>
            {data.map(c => (
                <div className="grid grid-cols-6 gap-3 border-b border-gray-300 p-3 cursor-pointer hover:bg-gray-200">
                    <img src={c.img}/>
                    <div className="col-start-2 col-end-7 ">
                        <div className="grid grid-cols-4">
                            <p className="font-bold col-start-1 col-end-4">{c.name}</p>
                            <p className="font-thin text-xs text-right">{c.datetime}</p>
                        </div>
                        <p className="overflow-x-hidden font-light text-sm whitespace-nowrap text-ellipsis">{c.msg}</p>
                    </div>
                </div>
            ))
            }
        </>
    )
}

type notiInter = any; // TODO;
export function NotiBox({data}: {data: notiInter[]}){

    return (
        <>
            {data.map(n => (
                <div className="border-b border-gray-300 p-3 cursor-pointer hover:bg-gray-200">
                    <div className="">
                        <div className="grid grid-cols-4">
                            <p className="font-bold col-start-1 col-end-4">{n.title}</p>
                            <p className="font-thin text-xs text-right">{n.datetime}</p>
                        </div>
                        <p className="font-light text-sm">{n.content}</p>
                    </div>
                </div>
            ))
            }
        </>
    )
}