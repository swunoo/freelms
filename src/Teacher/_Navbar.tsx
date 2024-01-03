import { ReactNode, useState } from "react";
import { IconBtn } from "../Common/Buttons";
import { mockChat, mockNoti } from "../Mockers";
import chatIcon from "../assets/images/icons/chat_blue.png"
import notiIcon from "../assets/images/icons/noti_blue.png"

export default Navbar;

function Navbar({active, box, setBox}: {active: string, box: ReactNode|undefined, setBox: (r: ReactNode)=>void}){

    const openChats = () => {
        const chatData = mockChat;
        setBox(<ChatBox data={chatData} />);
    }

    const openNotis = () => {

    }

    return (
        <div
            className="flex justify-between items-center py-2 px-5 md:px-16 text-base sticky top-0 w-full shadow-sm bg-slate-100 z-20"
        >
            <p>freeLMS</p>
            <div className="flex gap-7 items-center relative">
                <a href="/teacher/desk" className=   {active==='desk'?'font-bold':''}>Desk</a>
                <a href="/teacher/members" className={active==='members'?'font-bold':''}>Members</a>

                <div className="ml-7 flex gap-7 h-fit">
                    <IconBtn icon={chatIcon} onclick={openChats}/>
                    <IconBtn icon={notiIcon} onclick={openNotis}/>

                    {/* <div className="h-auto overflow-y-auto">
                    <div
                        onWheel={(e)=>{
                            console.log('scrolled.')
                            e.stopPropagation();
                        }}
                        className="
                        absolute top-10 -left-20 bg-gray-100 p-5 w-80 rounded-lg shadow p-0 overflow-y-scroll scroll-auto
                        ">
                            {[1,2,3,4,5, 6, 7].map(n => <div>{n}<br/><br/><br/><br/><br/></div>)}
                    </div>
                    </div> */}

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

export function NotiBox(){

    const noti = mockNoti;

    return (
        <div className="absolute top-10">

        </div>
    )
}