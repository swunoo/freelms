import { useParams } from "react-router-dom";
import Calendar from "../Common/Calendar"
import Sidebar, { LiveSession } from "../Common/Sidebar"
import { mockClassData, mockLiveSessionList } from "../Mockers";
import Layout from "./_Layout";
import Navbar from "./_Navbar"
import { useState } from "react";
import { ClassMenu, ClassMetaEdit, Section, SectionContentDisplay, SectionContentEdit } from "../Common/Class";

export default function Class(){
    
    const {id} = useParams();

    return (
        <Layout active="">
            <Content/>
        </Layout>
    )
}

export type classModeType = 'meta-edit'|'edit'|'view';

function Content () {

    const classData = mockClassData;

    const [section, setSection] = useState<Section>(classData.units[0].sections[0]);
    const [mode, setMode] = useState<classModeType>('view')

    return (
        <div className="
            md:grid grid-cols-4 gap-8
            p-3
            md:p-5
        ">
            <ClassMenu 
                title={classData.title}
                color={classData.color}
                units={classData.units}
                selectSection={setSection}
                mode={mode}
                setMode={setMode}
            />
            <main className="
                col-start-2
                col-end-5
                px-8
            ">
            {(()=>{
                switch(mode){
                    case 'view':
                        return <SectionContentDisplay content={section.content} title={section.title} toEdit={()=>setMode('edit')} />
                    case 'edit':
                        return <SectionContentEdit content={section.content} title={section.title} toView={()=>setMode('view')} />
                    case 'meta-edit':
                        return <ClassMetaEdit classData={classData} />
            }})()}
            </main>
        </div>
    )
}