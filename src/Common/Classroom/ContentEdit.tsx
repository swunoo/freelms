import ReactQuill from "react-quill";
import { FullBtn, IconBtn } from "../Buttons";
import { quizType, sectionType } from "./Menu";
import { Input } from "../Inputs";
import ReactDOM from "react-dom";
import { useState } from "react";
import deleteIcon from "../../assets/images/icons/delete_black.png";

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