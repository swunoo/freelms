import { ReactNode, useEffect, useState } from "react";
import { FullBtn, IconBtn } from "../Common/Buttons";
import { mockChat, mockChatDetails, mockLiveSessionList, mockNoti } from "../Mockers";
import chatIcon from "../assets/images/icons/chat_blue.png"
import notiIcon from "../assets/images/icons/noti_blue.png"
import calendarIcon from "../assets/images/icons/calendar_blue.png"
import Calendar from "../Common/Calendar";
import { LiveSession } from "../Common/Sidebar";
import { Input } from "../Common/Inputs";

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
        setSideBarContent(<ChatBox data={chatData} toChatDetails={openMessageDetails}/>);
    }

    const openMessageDetails = (id: string, name: string, photo: string) => {
        const chatDetails = mockChatDetails;
        setSideBarContent(<ChatDetails name={name} img={photo} data={chatDetails} goBack={openChats}/>);
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

type chatInter = any; // TODO;
function ChatBox({data, toChatDetails}: {data: chatInter[], toChatDetails: (i:string, n:string, p:string)=>void}){
    return (
        <>
            {data.map(c => (
                <div onClick={() => toChatDetails(c.id, c.name, c.img)} className="grid grid-cols-6 gap-3 border-b border-gray-300 p-3 cursor-pointer hover:bg-gray-200">
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

type chatDetailInter = any; // TODO;
function ChatDetails({name, img, data, goBack}: {name: string, img: string, data: chatDetailInter[], goBack: ()=>void}){
    return (
        <div
            className="relative w-full overflow-scroll"
        >
            <div className="flex gap-3 h-16 items-center border-b-2 border-gray-300 px-2 sticky top-0 bg-white">
                <IconBtn icon={chatIcon} onclick={goBack}/>
                <div className="flex gap-3 items-center">
                    <img className="h-12" src={img}/>
                    <p className="font-bold text-base">{name}</p>
                </div>
            </div>


            <div className="overflow-y-scroll bg-yellow-300 h-[30rem] md:h-96">
                {data.map(c => (
                        <p className={
                            (!c.isReceived ? "ml-auto bg-gray-200" : "bg-blue-100")
                            + " w-3/4 rounded-xl p-2 m-3"
                        }>
                            {c.msg}
                            <span className="font-thin text-xs block text-right">{c.datetime}</span>
                        </p>
                ))
                }
            </div>


            <div className="border flex gap-3 p-2 bg-gray-300 justify-center m-auto sticky bottom-0">
                <input name={name} type="text" className="w-48 rounded-lg py-2 pl-3 border text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                <FullBtn label="Send"/>
            </div>

        </div>
    )
}



type notiInter = any; // TODO;
function NotiBox({data}: {data: notiInter[]}){

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