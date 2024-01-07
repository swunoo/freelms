import { useState } from "react";
import { useParams } from "react-router-dom";
import { SectionContentDisplay } from "../Common/Classroom/ContentDisplay";
import { SectionContentEdit } from "../Common/Classroom/ContentEdit";
import { ClassMenu, sectionType } from "../Common/Classroom/Menu";
import { ClassMetaEdit } from "../Common/Classroom/MetaEdit";
import { mockClassData } from "../Mockers";
import Layout from "./_Layout";

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

    const [section, setSection] = useState<sectionType>(classData.units[0].sections[0]);
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
                        return <SectionContentDisplay section={section} toEdit={()=>setMode('edit')} />
                    case 'edit':
                        return <SectionContentEdit section={section} toView={()=>setMode('view')} />
                    case 'meta-edit':
                        return <ClassMetaEdit classData={classData} />
            }})()}
            </main>
        </div>
    )
}