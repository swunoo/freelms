import { useState } from "react";
import { useParams } from "react-router-dom";
import { SectionContentDisplay } from "../Common/Classroom/ContentDisplay";
import { SectionContentEdit } from "../Common/Classroom/ContentEdit";
import { ClassMenu, sectionType } from "../Common/Classroom/Menu";
import { ClassMetaEdit } from "../Common/Classroom/MetaEdit";
import { ClassData } from "../Data";
import Layout from "./_Layout";
import Error from "../Error";
import { classStyle as style } from "./style";

export default function Class(){

    const {id} = useParams();
    const classObj = new ClassData()

    return (
        <Layout active="">
            {id ? <Content classId={id} classObj={classObj}/> : <Error/>}
        </Layout>
    )
}

export type classModeType = 'meta-edit'|'edit'|'view';

function Content ({classId, classObj}: {classId: string, classObj: any}) {

    const classData = classObj.getClass(classId);
    
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
                styling={style.menu}
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
                        return <SectionContentDisplay section={section} styling={style.contentDisplay} toEdit={()=>setMode('edit')} />
                    case 'edit':
                        return <SectionContentEdit section={section} styling={style.contentEdit} toView={()=>setMode('view')} />
                    case 'meta-edit':
                        return <ClassMetaEdit classData={classData} styling={style.metaEdit} toView={()=>setMode('view')} />
            }})()}
            </main>
        </div>
    )
}