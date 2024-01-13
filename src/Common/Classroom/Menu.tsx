import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { classModeType } from "../../Teacher/Class";
import { FullBtn } from "../Buttons";
import { defaultFunc } from '../Utils';

export type classType = any; //TODO
export type sectionType = any; //TODO
export type quizType = any; //TODO
export interface ClassUnit {
    id: string,
    title: string,
    sections: sectionType []
}

export type classMenuType = {title: string, color: string, styling: any, units: ClassUnit[], mode:classModeType, progress?:string, selectSection: (s: sectionType)=>void, setMode?: (m: classModeType)=>void};

export function ClassMenu ({title, color, styling, units, mode, progress, selectSection, setMode}: classMenuType) {

    const isStudent = (!setMode);
    if(!setMode) setMode = defaultFunc;

    return (
        <aside className={styling.container}>

            <div className={styling.classTitle}>
                {title}
            </div>
            {isStudent
            ? <div className="bg-parchment my-3 rounded-xl w-5/6">
                <div className="h-1 rounded-xl  bottom-0 left-0" style={{backgroundColor: color, width: progress}} ></div>
            </div>
            : <hr className="border-b border-0.5 my-5 mr-5" style={{borderColor: color}}/>
            }
            {(mode==='view' && !isStudent) &&
                <FullBtn styling={styling.btnEditMeta} onclick={()=>setMode('meta-edit')} label="Edit Meta"/>
            }
            {mode==='view'
            ? <ul
                className="flex gap-2 overflow-x-scroll md:block text-base"
            >
                {units.map(unit => (
                    <details>
                    <summary
                        className={styling.unitTitle}
                    >{unit.title}</summary>
                    <ul className="ml-8">
                        {unit.sections.map(section => (
                            <li
                            className={styling.sectionTitle + (section.isCompleted?styling.completedSectionTitle:'')}
                            onClick={() => selectSection(section)}
                            >{section.title}</li>
                        ))
                        }
                    </ul>
                    </details>
                ))}
            </ul>
            : <div className="flex gap-3 px-3">
                <FullBtn styling={styling.btnBack} onclick={()=>setMode('view')} label="Cancel and Go Back"/>
            </div>
            }
        </aside>
    )
}