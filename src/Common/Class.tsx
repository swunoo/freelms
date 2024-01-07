import Quill from "quill"
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react"
import { FullBtn, IconBtn } from "./Buttons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Input } from "./Inputs";
import { classModeType } from "../Teacher/Class";
import { mockClassData } from "../Mockers";
import deleteIcon from "../assets/images/icons/delete_black.png";
import ReactDOM from "react-dom";
import React from "react";

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

        if(section.type === 'quiz'){

            const newQuizzes = [...document.getElementsByClassName('quiz_data')].map(qd => {
                const id = qd.id.substring(5)
                let correctAnsIndex = 0
                const answers = [...qd.getElementsByClassName('ans_'+id)]
                                .map((ans, i) => {
                                    if((ans.querySelector('input[type="radio"]') as HTMLInputElement).checked){
                                        correctAnsIndex = i;
                                    }
                                    return (ans.querySelector('input[type="text"]') as HTMLInputElement).value
                                });
                return {
                    id: id,
                    question: (qd.querySelector('input[name="'+id+'_q"]') as HTMLInputElement).value,
                    answers: answers,
                    correctAnsIndex: correctAnsIndex
                }
            })

            section.quizzes = newQuizzes;

        } else {
            section.content = sectionValue;
        }

        section.title = (document.querySelector('input[name="section_title"]') as HTMLInputElement).value;

        toView();
    }

    const handleCancel = () => {
        toView();
    }

    const deleteQuiz = (id: string) => {
        // section.quizzes = section.quizzes.filter((q: quizType) => q.id != id);
        document.getElementById('quiz_'+id)?.remove();
    }

    const addQuiz = () => {
        const id = Date.now().toString().substring(5);
        const newQuiz = {id: id, question: '', answers: [''], correctAnsIndex: 0}
        const container = document.getElementById('quiz_container');
        const parent = document.createElement("div");
        ReactDOM.render(<Quiz q={newQuiz}/>, parent);
        container?.appendChild(parent);

    }

    const deleteAnswer = (id: string, index: number) => {
        // const quiz = section.quizzes.filter((q: quizType) => q.id===id)[0];        
        // quiz.answers = quiz.answers.filter((_: any,i: number)=>i!==index);
        document.getElementById("ans_"+id+"_"+index)?.remove();
    }

    const addAnswer = (id: string) => {
        const container = document.getElementById('quiz_' + id);
        let nextIndex = 0;
        while(document.getElementById("ans_"+id+"_"+nextIndex)){
            nextIndex ++;
        }
        const parent = document.createElement("div");
        ReactDOM.render(<QuizAns id={id} ans={''} i={nextIndex}/>, parent);
        container?.appendChild(parent);
    }

    function Quiz ({q}: {q: quizType}){
        return (<div
            className="my-5 pb-5 border-b gap-x-5 gap-y-1 quiz_data"
            id={"quiz_"+q.id}
        >
            <div className="flex gap-5 mb-5 items-center">
                <h3 className="text-lg">Quiz <span className="font-thin mx-5">id: {q.id}</span></h3>
                <FullBtn onclick={()=>deleteQuiz(q.id)} label="Delete Quiz"/>
            </div>
            <div className="grid grid-cols-6">
                <div className="mb-3 col-start-1 col-end-6">
                    <Input label="Question" name={q.id + '_q'} value={q.question} />
                </div>
                <div className="flex justify-center">
                    <FullBtn onclick={()=>addAnswer(q.id)} label="Add Answer"/>
                </div>
            </div>
            {
                q.answers.map((ans: string, i: number) => <QuizAns id={q.id} i={i} ans={ans} />)
            }
        </div>)
    }

    function QuizAns ({id, ans, i}:{id:any, ans:string, i: number}){
        return(
            <div id={"ans_"+id+"_"+i} className={"grid grid-cols-6 ans_"+id}>
                <div className="col-start-1 col-end-6">
                <Input label={"Answer "+(i+1)} name={id + '_a'+i} value={ans} /></div>
                <div className="flex justify-evenly">
                    <IconBtn onclick={()=>deleteAnswer(id, i)} icon={deleteIcon}/>
                    <input className="w-5 cursor-pointer" type="radio" name={id} value={i}/>
                </div>
            </div>
        )
    }

    return(
        <div
            className="my-10"
        >
            <Input label="Title" name="section_title" value={section.title} />

            <hr className="my-10" />

            {section.type === "quiz"

            ? <>
                <div id="quiz_container">
                    {section.quizzes.map((q: quizType) => <Quiz q={q}/>)}
                </div>
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
            <Input label="Course Title" name="section_title" value={classData.title} />
            <div className="flex justify-end gap-3 py-3 border-b">
                <FullBtn label="Add Unit"/>
            </div>
            {classData.units.map((unit: ClassUnit) => (
                <div className="rounded-xl py-3 px-5 bg-gray-200 shadow my-5">
                    <Input label="Unit Title" name="section_title" value={unit.title} />
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