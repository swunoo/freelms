import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { classModeType } from "../../Teacher/Class";
import { FullBtn } from "../Buttons";

export type classType = any; //TODO
export type sectionType = any; //TODO
export type quizType = any; //TODO
export interface ClassUnit {
    id: string,
    title: string,
    sections: sectionType []
}

export type classMenuType = {title: string, color: string, units: ClassUnit[], mode:classModeType, selectSection: (s: sectionType)=>void, setMode: (m: classModeType)=>void};

export function ClassMenu ({title, color, units, mode, selectSection, setMode}: classMenuType) {
    return (
        <aside className="border-r border-gray-300 min-h-screen max-w-80">
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