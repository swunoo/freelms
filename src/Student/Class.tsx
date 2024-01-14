import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SectionContentDisplay } from "../Common/Classroom/ContentDisplay";
import { SectionContentEdit } from "../Common/Classroom/ContentEdit";
import { ClassMenu, sectionType } from "../Common/Classroom/Menu";
import { ClassMetaEdit } from "../Common/Classroom/MetaEdit";
import { ClassData } from "../DataAccess";
import Layout from "./_Layout";
import Error from "../Error";
import { classStyle as style } from "./style";
import { FullBtn } from "../Common/Buttons";

export function Class(){

    const {id} = useParams();
    const classObj = new ClassData()
    const code = id ? classObj.getClass(id)['code'] : ''

    return (
        <Layout active={code}>
            {id ? <Content classId={id} classObj={classObj}/> : <Error/>}
        </Layout>
    )
}

function Content ({classId, classObj}: {classId: string, classObj: any}) {

    const classData = classObj.getClass(classId);
    
    const [section, setSection] = useState<sectionType>(classData.units[0].sections[0]);

    const [prevNext, setPrevNext] = useState({prev: undefined, next: undefined});

    useEffect(() => {
        let prev = classObj.getPreviousSection(section.id);
        let next = classObj.getNextSection(section.id);
        setPrevNext({prev, next});
    }, [section]);

    const toggleCompletion = (section: sectionType) => {
        const newSection = classObj.toggleSectionCompletion(section);
        setSection(newSection);
    }

    return (
        <div className={"md:grid grid-cols-4 gap-8 p-3 md:p-5 " + style.container}>
            <ClassMenu 
                title={classData.title}
                color={classData.color}
                styling={style.menu}
                units={classData.units}
                selectSection={setSection}
                mode={'view'}
            />
            
            <main className="
                col-start-2
                col-end-5
                px-3 md:px-8
            ">
            
                <SectionContentDisplay section={section} styling={style.contentDisplay} />

                <div className="flex w-full items-center">
                    {prevNext.prev && 
                    <FullBtn onclick={() => setSection(prevNext.prev)} styling={style.contentDisplay.btnMove + ' mr-auto'} label="Previous"/>}
                    <FullBtn onclick={()=>toggleCompletion(section)} styling={style.contentDisplay[section.isCompleted ? 'btnUncomplete' : 'btnComplete']} label={section.isCompleted ? "Mark As Incomplete" : "Mark As Complete"}/>
                    {prevNext.next && <FullBtn onclick={() => setSection(prevNext.next)} styling={style.contentDisplay.btnMove + ' ml-auto'} label="Next"/>}
                </div>

            </main>
        </div>
    )
}