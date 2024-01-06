import Quill from "quill"
import { FormEvent, useEffect, useRef, useState } from "react"
import { FullBtn, IconBtn } from "./Buttons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Input } from "./Inputs";
import { classModeType } from "../Teacher/Class";
import { mockClassData } from "../Mockers";
import deleteIcon from "../assets/images/icons/delete_black.png";

export type classType = any; //TODO
export type sectionType = any; //TODO
export type quizType = any; //TODO
export interface ClassUnit {
    id: string,
    title: string,
    sections: sectionType []
}

const scoreTag = (t: string) => {
    const tag = document.createElement('span');
    tag.className = 'scoreTag ml-5';
    tag.textContent = t;
    return tag;
}

export function SectionContentDisplay({section, toEdit}: {section: sectionType, toEdit: ()=>void}){

    const [score, setScore] = useState('')

    useEffect(() => {
        return () => {
            setScore('')
        }
    }, [section])

    const isCorrect = (value: string, name: string) => {
        const quiz = section.quizzes.filter((q: quizType) => q.id===name)[0];        
        return value == quiz.correctAnsIndex;
    }

    const checkQuiz = (e: FormEvent) => {
        e.preventDefault();
        const formEle = e.target as HTMLFormElement;
        const inputs = formEle.querySelectorAll('input');

        // if score is not empty, it is a RETRY.
        if(score){
            [...formEle.getElementsByClassName('scoreTag')].forEach(i => i.remove());
            inputs.forEach(i => {
                i.checked = false
                i.disabled = false
            });
            setScore('')
            return;
        }

        // otherwise, it is a CHECK ANSWER.
        let correctCount = 0;
        inputs.forEach(input => {
            input.disabled = true;
            if(isCorrect(input.value, input.name)){
                input.parentElement?.appendChild(scoreTag('✓'));
                if(input.checked) correctCount++;
            } else if(input.checked) {
                input.parentElement?.appendChild(scoreTag('✗'));
            }
        })
        setScore(`You got ${correctCount} out of ${section.quizzes.length} correct.`);
    }

    return(
        <>
        <h3 className="text-bold text-3xl mb-10">{section.title}</h3>

        <FullBtn onclick={()=>toEdit()} label="Edit Section Content"/>

        {section.type === 'quiz'

        ? <form
            onSubmit={checkQuiz}
            className="my-10"
        >
            {section.quizzes.map((q: quizType) => (
                <li
                    className="text-base my-5 py-3 border-b border-gray-300 list-decimal"
                >
                    <p>{q.question}</p>
                    {q.answers.map((ans: string, i: number) => (
                        <label className="block my-3">
                            <input type="radio" name={q.id} value={i}/>
                            <span className="ml-5 cursor-pointer">{ans}</span>
                        </label>
                    ))}
                </li>
            ))}

            <div className="flex gap-5 items-center justify-between">
                <span className="font-medium">{score}</span>
                <FullBtn label={score ? "Retry" : "Check Answers"} color="#45EE85"/>
            </div>
        </form>

        : <div
            className="my-10"
            dangerouslySetInnerHTML={{ __html: section.content }}
        ></div>}
        </>
    )
}

export function SectionContentEdit({section, toView}: {section: sectionType, toView: ()=>void}){
    
    const [sectionValue, setSectionValue] = useState(section.content);

    const handleConfirm = () => {
        for(const unit of mockClassData.units){
            for(const sec of unit.sections){
                if(sec.id === section.id){
                    if(sec.type === 'quiz'){

                    } else {
                        sec.content = sectionValue;
                    }
                    toView();
                    return;
                }
            }
        }
    }

    const handleCancel = () => {
        toView();
    }

    const deleteQuiz = (id: string) => {
        section.quizzes = section.quizzes.filter((q: quizType) => q.id != id);
        document.getElementById('quiz_'+id)?.remove();
    }

    const addQuiz = () => {

    }

    const deleteAnswer = (id: string, index: number) => {
        
    }

    const addAnswer = (id: string) => {
        
    }

    return(
        <div
            className="my-10"
        >
            <Input label="Title" name="sectionTitle" value={section.title} />

            <hr className="my-10" />

            {section.type === "quiz"

            ? <>
                {section.quizzes.map((q: quizType, i: number) => (
                    <div
                        className="my-5 pb-5 border-b grid grid-cols-6 gap-x-5 gap-y-1"
                        id={"quiz_"+q.id}
                    >
                        <div className="flex gap-5 mb-5 items-center col-start-1 col-end-7">
                            <h3 className="text-lg">Quiz No. {i+1}</h3>
                            <FullBtn onclick={()=>deleteQuiz(q.id)} label="Delete Quiz"/>
                        </div>
                        <div className="col-start-1 col-end-6 mb-3">
                            <Input label="Question" name={q.name + '_q'} value={q.question} />
                        </div>
                        <FullBtn onclick={()=>addAnswer(q.id)} label="Add Answer"/>
                        {
                            q.answers.map((ans: string, i: number) => (
                                <><div className="col-start-1 col-end-6">
                                <Input label={"Answer "+(i+1)} name={q.id + '_a'+i} value={ans} /></div>
                                <div className="flex justify-evenly">
                                    <IconBtn onclick={()=>deleteAnswer(q.id, i)} icon={deleteIcon}/>
                                    <input className="w-5 cursor-pointer" type="radio" name={q.id} value={i}/>
                                </div>
                                </>
                            ))
                        }
                    </div>
                ))}
                <div className="flex justify-end my-5 pb-5 border-b">
                    <FullBtn onclick={addQuiz} label="Add Quiz"/>
                </div>

            </>

            :<ReactQuill
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
            />}

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
            <Input label="Course Title" name="sectionTitle" value={classData.title} />
            <div className="flex justify-end gap-3 py-3 border-b">
                <FullBtn label="Add Unit"/>
            </div>
            {classData.units.map((unit: ClassUnit) => (
                <div className="rounded-xl py-3 px-5 bg-gray-200 shadow my-5">
                    <Input label="Unit Title" name="sectionTitle" value={unit.title} />
                <div className="flex justify-end gap-3 py-3 border-b">
                    <FullBtn label="Delete Unit"/>
                    <FullBtn label="Add Section"/>
                </div>
                <ul className="ml-8">
                        {unit.sections.map(section => (
                            <li
                            className="list-decimal my-3 cursor-pointer flex justify-between"
                            >
                                <span>{section.title}</span>
                                <FullBtn label="Delete Section"/>
                            </li>
                        ))
                        }
                </ul>
                </div>

            ))}
        </div>
    )
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