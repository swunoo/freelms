import { ChangeEvent, useState } from "react";
import Calendar from "../Common/Calendar";
import Card from "../Common/Card";
import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/Inputs";
import { hrsToTimeStr } from "../Common/Utils";
import { mockClassData, mockClassList, mockLiveSessionList } from "../Mockers";
import Navbar from "./_Navbar";
import Sidebar, { LiveSession } from "../Common/Sidebar";
import sideopen from "../assets/images/icons/sideopen_lightgray.png"
import Layout from "./_Layout";
import { useNavigate } from "react-router-dom";

export default function Desk(){

    return (
        <Layout active="desk">
            <Content />
        </Layout>
    )
}

type classData = any; // TODO;
function Content(){

    const parent = "class/";
    const [classes, setClasses] = useState(mockClassList);

    let searchConditions: {searchParam: string, completion: boolean|null} = {searchParam: '', completion: null};

    const refreshClassList = () => {
        const newClasses = mockClassList.filter(c => {
            return (
                (c.code.toLowerCase().includes(searchConditions.searchParam) || c.name.toLowerCase().includes(searchConditions.searchParam))
                &&
                (searchConditions.completion === null ? true : searchConditions.completion === c.isCompleted)
            )
        })
        setClasses(newClasses);
    }

    const searchHandler = (e: ChangeEvent) => {
        
        const value = (e.target as HTMLInputElement).value.toLowerCase();
        
        if(value.length >= 3){
            searchConditions.searchParam = value;
            refreshClassList();

        } else if (value.length === 0){
            searchConditions.searchParam = '';
            refreshClassList();
        }
    }

    const dropdownHandler = (e: ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value.toLowerCase();
        
        if(value === 'all') searchConditions.completion = null;
        if(value === 'inprogress') searchConditions.completion = false;
        if(value === 'completed') searchConditions.completion = true;

        refreshClassList();
    }

    return (
        <div className="p-3 md:px-14 m-auto mb-10">
            <header className="text-5xl font-thin md:mt-20 my-5 border-b pb-5">
                Welcome back, Anon!
            </header>
            <SearchBar
                searchName="Classes"
                handleSearch={searchHandler}
                dropdowns={[
                    {label: "Show", name: "classOptions", 
                    options: [
                        {value: 'all', text: 'All'},
                        {value: 'inprogress', text: 'In Progress'},
                        {value: 'completed', text: 'Completed'}
                    ], handleDropdown: dropdownHandler
                }]} 
            />
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