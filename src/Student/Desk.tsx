import { ChangeEvent, useEffect, useState } from "react";
import Card from "../Common/Card";
import SearchBar from "../Common/Inputs";
import { hrsToTimeStr } from "../Common/Utils";
import { ClassData } from "../Data";
import Layout from "./_Layout";
import { deskStyle as style } from "./style";

export function Desk(){

    return (
        <Layout active="desk">
            <Content />
        </Layout>
    )
}

type classData = any; // TODO;
function Content(){

    const classObj = new ClassData();
    const classList = classObj.getClassList();

    const parent = "class/";
    const [classes, setClasses] = useState(classList);

    type SearchConditions = {searchParam: string, completion: boolean|null};
    const [searcher, setSearcher] = useState<SearchConditions>({searchParam: '', completion: null})

    // Refresh Class List
    useEffect(() => {        
        const newClasses = classList.filter((c: classData) => {
            return (
                (c.code.toLowerCase().includes(searcher.searchParam) || c.title.toLowerCase().includes(searcher.searchParam))
                &&
                (searcher.completion === null 
                    ? true 
                    : (searcher.completion === c.isCompleted))
            )
        })
        setClasses(newClasses);
        

    }, [searcher]);

    const searchHandler = (e: ChangeEvent) => {
        
        const value = (e.target as HTMLInputElement).value.toLowerCase();
        
        if(value.length >= 3){
            setSearcher({...searcher, searchParam: value})

        } else if (value.length === 0){
            setSearcher({...searcher, searchParam: ''})
        }
    }

    const dropdownHandler = (value: string) => {
        
        let status = null;
        if(value === 'inprogress') status = false;
        else if(value === 'completed') status = true;

        setSearcher({...searcher, completion: status})
    }

    return (
        <div className={"p-3 md:px-14 m-auto mb-10 h-full " + style['container']}>
            <header className={style['header']}>
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
                    classes.map((c: classData) => {
                        const days = c.days[0] 
                                    + (c.days.length>1 ? " - " + c.days[c.days.length-1] : "")
                        const startTime = hrsToTimeStr(c.startTime);
                        const endTime = hrsToTimeStr(c.startTime+c.duration);
                        
                        return (
                            <div className="max-w-64">
                            <Card
                            isHor={false}
                            styling={style['card']}
                            link={parent+c.id}
                            img={c.img}
                            content={
                                <>
                                    <h3 className={style['class_title']}>
                                        {c.code}<br/>{c.title}
                                    </h3>
                                    <div className="bg-eggshell my-3 rounded-xl">
                                            <div className="h-1 rounded-xl  bottom-0 left-0" style={{backgroundColor: c.color, width: c.progress}} ></div>
                                    </div>
                                    <p className={style['class_schedule']}>
                                        <span>{days + " "}</span>
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