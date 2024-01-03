import Quill from "quill"
import { useEffect, useRef, useState } from "react"
import { FullBtn } from "./Buttons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Input } from "./Inputs";
import { classModeType } from "../Teacher/Class";

export interface Section {
    id: string;
    title: string;
    content: string;
}

export interface ClassUnit {
    id: string;
    title: string;
    sections: Section[]
}

type classType = any; //TODO



export function SectionContentDisplay({content, title, toEdit}: {content: string, title: string, toEdit: ()=>void}){
    return(
        <>
        <h3 className="text-bold text-3xl mb-10">{title}</h3>
        <FullBtn onclick={()=>toEdit()} label="Edit Section Content"/>
        <div
            className="my-10"
            dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        </>
    )
}

export function SectionContentEdit({content, title, toView}: {content: string, title: string, toView: ()=>void}){
    
    const [sectionValue, setSectionValue] = useState(content);

    const handleConfirm = () => {
        console.log(sectionValue);
    }

    const handleCancel = () => {
        toView();
    }

    return(
        <div
            className="my-10"
        >
            <Input label="Title" name="sectionTitle" value={title} />
            <ReactQuill
                value={sectionValue}
                onChange={(value) => setSectionValue(value)}
                className="bg-white my-5"
                modules={{
                    toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block'],
                    ['link']
                    ]
                }}
                theme="snow"
            />

            <div className="flex gap-3 px-3">
                <FullBtn label="Cancel" onclick={handleCancel}/>
                <FullBtn label="Confirm" onclick={handleConfirm} />
            </div>
        </div>
    )
}

export function ClassMetaEdit({classData}: classType){
    return (
        <div className="">

        </div>
    )
}

export type classMenuType = {title: string, color: string, units: ClassUnit[], mode:classModeType, selectSection: (s: Section)=>void, setMode: (m: classModeType)=>void};

export function ClassMenu ({title, color, units, mode, selectSection, setMode}: classMenuType) {
    return (
        <aside className="border-r border-gray-300 min-h-screen">
            <div className="font-thin text-lg uppercase">
                {title}
            </div>
            <hr className="border-b border-0.5 my-5 mr-5" style={{borderColor: color}}/>
            {mode==='meta-edit' && (
            <div className="flex gap-3 px-3">
                <FullBtn label="Confirm"/>
                <FullBtn onclick={()=>setMode('view')} label="Cancel"/>
            </div>)}
            {mode==='view' &&
            <FullBtn onclick={()=>setMode('meta-edit')} label="Edit Meta"/>
            }
            {mode!=='meta-edit' &&
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
            </ul>}
        </aside>
    )
}