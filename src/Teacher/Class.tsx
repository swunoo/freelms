import { useParams } from "react-router-dom";
import Calendar from "../Common/Calendar"
import Sidebar, { LiveSession } from "../Common/Sidebar"
import { mockClassData, mockLiveSessionList } from "../Mockers";
import Layout from "./_Layout";
import Navbar from "./_Navbar"
import { useState } from "react";
import { SectionContentDisplay, SectionContentEdit } from "../Common/Class";

export default function Class(){
    
    const {id} = useParams();

    return (
        <Layout active="">
            <Content/>
        </Layout>
    )
}

interface Section {
    id: string;
    title: string;
    content: string;
}

interface ClassUnit {
    id: string;
    title: string;
    sections: Section[]
}

function Content () {

    const classData = mockClassData;

    const [section, setSection] = useState<Section>(classData.units[0].sections[0]);

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
            />
            <main className="
                col-start-2
                col-end-5
                px-8
            ">
                <h3 className="text-bold text-3xl">{section.title}</h3>
                <SectionContentEdit content={section.content}/>
            </main>
        </div>
    )
}

type classMenuType = {title: string, color: string, units: ClassUnit[], selectSection: (s: Section)=>void};

function ClassMenu ({title, color, units, selectSection}: classMenuType) {
    return (
        <aside className="border-r border-gray-300 min-h-screen">
            <div className="font-thin text-lg uppercase">
                {title}
            </div>
            <hr className="border-b border-0.5 my-5 mr-5" style={{borderColor: color}}/>
            <ul
                className="text-base"
            >
                {units.map(unit => (
                    <details>
                    <summary
                        className="mt-5 cursor-pointer text-lg font-light"
                    >{unit.title}</summary>
                    <ul className="ml-8">
                        {unit.sections.map(section => (
                            <li
                            className="list-decimal my-3 cursor-pointer"
                            onClick={() => selectSection(section)}
                            >{section.title}</li>
                        ))
                        }
                    </ul>
                    </details>
                ))}
            </ul>
        </aside>
    )
}