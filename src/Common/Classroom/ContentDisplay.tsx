import { FormEvent, useEffect, useState } from "react"
import { quizType, sectionType } from "./Menu"
import { FullBtn } from "../Buttons";

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