import { useState } from "react";
import Calendar from "../Common/Calendar";
import Card from "../Common/Card";
import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/SearchBar";
import { hrsToTimeStr } from "../Common/Utils";
import { mockClassList, mockLiveSessionList } from "../Mockers";
import Navbar from "./_Navbar";
import Sidebar from "../Common/Sidebar";
import sideopen from "../assets/images/icons/sideopen_lightgray.png"

export default function Desk(){

    const classData = mockClassList;
    const liveSessionData = mockLiveSessionList;



    return (
        <div
            className="
            flex
            min-h-screen
            bg-slate-200
            relative
        ">
            <div className="m-auto">
                <Navbar />
                <Content classes={classData} />
            </div>
            <Sidebar
                child={
                    <>
                    <Calendar />
                    <div className="p-3">
                        {liveSessionData.map(d => {                        
                            return (
                                <LiveSession data={d}/>
                            )
                        })}
                    </div>
                    </>
                }
            />
        </div>
    )
}
type classData = any; // TODO;
function Content({classes}: {classes: classData[]}){
    return (
        <div className="p-3 md:px-20 m-auto mb-10">
            <SearchBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
                {
                    classes.map(c => {
                        const days = c.days[0] 
                                    + (c.days.length>1 ? " - " + c.days[c.days.length-1] : "")
                        const startTime = hrsToTimeStr(c.startTime);
                        const endTime = hrsToTimeStr(c.startTime+c.duration);
                        
                        return (
                            <Card
                            isHor={false}
                            link='#'
                            img={c.img}
                            content={
                                <>
                                    <h3 className="text-lg font-bold w-full">
                                        {c.code}<br/>{c.name}
                                    </h3>
                                    <hr className="my-3 border-2" style={{borderColor: c.color}} />
                                    <p className="uppercase text-xs">
                                        <span className="capitalize">{days + " "}</span>
                                        <span>{startTime} - {endTime}</span>
                                    </p>
                                </>
                            }
                            btns={[]}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}

type liveSessionType = any; //TODO
function LiveSession({data}: {data:liveSessionType}){
    const css_live_session = "flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-200 bg-neutral-100 w-full my-1"

    const startTime = hrsToTimeStr(data.startTime);
    const endTime = hrsToTimeStr(data.startTime+data.duration);
    const duration = hrsToTimeStr(data.duration, true);

    return (
        <button className={css_live_session}>
            <span className="p-1 rounded-md text-neutral-900" style={{backgroundColor: data.color}}>
                {data.code}
            </span>
            <span>{startTime} - {endTime}</span>
            <span className="ml-auto font-light">{duration}</span>
        </button>
    )
}