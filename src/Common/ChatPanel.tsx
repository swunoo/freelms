import chat_icon from "../assets/images/icons/chat_gray.png";
import chatIcon from "../assets/images/icons/chat_blue.png"
import { FullBtn, IconBtn } from "./Buttons";

type chatInter = any; // TODO;
export function ChatBox({data, styling, toChatDetails}: {data: chatInter[], styling: any, toChatDetails: (i:string, n:string, p:string)=>void}){
    return (
        <>
            {data.map(c => (
                <div onClick={() => toChatDetails(c.id, c.name, c.img)} className={"grid grid-cols-6 gap-3 p-3 cursor-pointer " + styling.container}>
                    <img src={c.img}/>
                    <div className="col-start-2 col-end-7">
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
export function ChatDetails({name, img, data, styling, goBack}: {name: string, img: string, data: chatDetailInter[], styling: any, goBack: ()=>void}){
    return (
        <div
            className="relative w-full overflow-scroll"
        >
            <div className={"flex gap-3 h-16 items-center px-2 sticky top-0 "+styling.header}>
                <IconBtn styling={styling.headerIcon} icon={chatIcon} onclick={goBack}/>
                <div className="flex gap-3 items-center">
                    <img className="h-12" src={img}/>
                    <p className={styling.headerText}>{name}</p>
                </div>
            </div>

            <div className={"overflow-y-scroll h-[30rem] md:h-full "+styling.chatBackground}>
                {data.map(c => (
                    <>
                        <span className={"mx-3 mt-3 mb-2 font-thin text-xs block " + (!c.isReceived?"text-right":"text-left")}>{c.datetime}</span>
                        <p className={
                            (c.isReceived ? styling.chatReceived : styling.chatSent)
                            + " w-3/4 rounded-xl p-3 mx-3 my-3"
                        }>
                            {c.msg}
                        </p>
                    </>
                ))
                }
            </div>


            <div className="border flex gap-3 p-2 bg-vanilla justify-center m-auto sticky bottom-0">
                <input name={name} type="text" className="w-48 rounded-lg py-2 pl-3 border text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                <FullBtn styling="bg-eggshell" label="Send"/>
            </div>

        </div>
    )
}


type notiInter = any; // TODO;
export function NotiBox({data, styling}: {data: notiInter[], styling: any}){

    return (
        <>
            {data.map(n => (
                <div className={styling.container}>
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