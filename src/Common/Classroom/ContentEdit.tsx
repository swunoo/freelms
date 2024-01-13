import { useState } from "react";
import ReactDOM from "react-dom";
import ReactQuill from "react-quill";
import { ClassData } from "../../Data";
import deleteIcon from "../../assets/images/icons/delete_black.png";
import { FullBtn, IconBtn } from "../Buttons";
import { Input, Textarea } from "../Inputs";
import { quizType, sectionType } from "./Menu";

export function SectionContentEdit({section, styling, toView}: {section: sectionType, styling:any, toView: ()=>void}){
    
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

        const classObj = new ClassData();
        classObj.updateSection(section);
        toView();
    }

    const handleCancel = () => {
        toView();
    }

    const addQuiz = () => {
        const id = Date.now().toString().substring(5);
        const newQuiz = {id: id, question: '', answers: [''], correctAnsIndex: 0}
        const container = document.getElementById('quiz_container');
        const parent = document.createElement("div");
        ReactDOM.render(<Quiz q={newQuiz}/>, parent);
        container?.appendChild(parent);
    }

    const deleteQuiz = (id: string) => {
        document.getElementById('quiz_'+id)?.remove();
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

    const deleteAnswer = (id: string, index: number) => {
        document.getElementById("ans_"+id+"_"+index)?.remove();
    }

    function Quiz ({q}: {q: quizType}){
        return (<div
            className={"quiz_data " + styling.quizContainer}
            id={"quiz_"+q.id}
        >
            <div className="flex justify-between md:justify-start gap-5 mb-5 items-center">
                <h3 className={styling.quizTitle}>Quiz <span className={styling.quizId}>id: {q.id}</span></h3>
                <FullBtn styling={styling.btnDeleteQuiz} onclick={()=>deleteQuiz(q.id)} label="Delete Quiz"/>
            </div>
            <div className="md:grid grid-cols-6">
                <div className="mb-3 col-start-1 col-end-6">
                    <Textarea styling={styling.quizQ} label="Question" name={q.id + '_q'} value={q.question} />
                </div>
                <div className="flex justify-end md:justify-center">
                    <FullBtn styling={styling.btnAddAns} onclick={()=>addAnswer(q.id)} label="Add Answer"/>
                </div>
            </div>
            {
                q.answers.map((ans: string, i: number) => <QuizAns id={q.id} i={i} ans={ans} />)
            }
        </div>)
    }

    function QuizAns ({id, ans, i}:{id:any, ans:string, i: number}){
        return(
            <div id={"ans_"+id+"_"+i} className={"mt-5 mb-2 md:mt-0 md:mb-0 items-center grid grid-cols-6 ans_"+id}>
                <div className="col-start-1 col-end-7 md:col-end-6">
                <Textarea styling={styling.quizA} label={"Answer "+(i+1)} name={id + '_a'+i} value={ans} /></div>
                <div className="flex justify-end gap-5 mt-3 md:justify-evenly items-center col-start-1 md:col-start-6 col-end-7">
                    <IconBtn styling={styling.btnDeleteAns} onclick={()=>deleteAnswer(id, i)} icon={deleteIcon}/>
                    <input className={styling.quizCorrectAns} type="radio" name={id} value={i}/>
                </div>
            </div>
        )
    }

    return(
        <div
            className="my-10"
        >
            <Input styling={styling.sectionTitle} label="Title" name="section_title" value={section.title} />

            <hr className="my-10" />

            {section.type === "quiz"

            ? <>
                <div id="quiz_container">
                    {section.quizzes.map((q: quizType) => <Quiz q={q}/>)}
                </div>
                <div className="flex justify-end my-5 pb-5 border-b">
                    <FullBtn styling={styling.btnAddQuiz} onclick={addQuiz} label="Add Quiz"/>
                </div>
            </>

            :<ReactQuill
                value={sectionValue}
                onChange={(value) => setSectionValue(value)}
                className={styling.quillComponent}
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
                <FullBtn styling={styling.btnCancel} label="Cancel" onclick={handleCancel}/>
                <FullBtn styling={styling.btnConfirm} label="Confirm" onclick={handleConfirm} />
            </div>
        </div>
    )
}