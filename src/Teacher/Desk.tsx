import { useState } from "react";
import Calendar from "../Common/Calendar";
import Card from "../Common/Card";
import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/Inputs";
import { hrsToTimeStr } from "../Common/Utils";
import { mockClassList, mockLiveSessionList } from "../Mockers";
import Navbar from "./_Navbar";
import Sidebar, { LiveSession } from "../Common/Sidebar";
import sideopen from "../assets/images/icons/sideopen_lightgray.png"
import Layout from "./_Layout";
import { useNavigate } from "react-router-dom";

export default function Desk(){

    const classData = mockClassList;

    return (
        <Layout active="desk">
            <Content classes={classData} />
        </Layout>
    )
}

type classData = any; // TODO;
function Content({classes}: {classes: classData[]}){

    const parent = "class/";

    return (
        <div className="p-3 md:px-14 m-auto mb-10">
            <SearchBar />
            <div className="flex gap-5 flex-wrap">
                {
                    classes.map(c => {
                        const days = c.days[0] 
                                    + (c.days.length>1 ? " - " + c.days[c.days.length-1] : "")
                        const startTime = hrsToTimeStr(c.startTime);
                        const endTime = hrsToTimeStr(c.startTime+c.duration);
                        
                        return (
                            <div className="max-w-64">
                            <Card
                            isHor={false}
                            link={parent+c.id}
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
                        /></div>
                        )
                    })
                }
            </div>
        </div>
    )
}