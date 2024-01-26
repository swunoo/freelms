import { EventHandler, useContext, useState } from "react";
import scr_admin from "../assets/images/admin_members.png";
import scr_teacher from "../assets/images/teacher_desk.png";
import scr_student from "../assets/images/student_class.png";
import { style } from "./style";
import { ThemeContext } from "./Home";

type site = "admin"|"teacher"|"student";

function Content() {

    const {theme} = useContext(ThemeContext);

    const screenImages = {
        'admin': scr_admin,
        'teacher': scr_teacher,
        'student': scr_student
    };

    const [selected, setSelected] = useState<site>('admin');

    return (
        <div className="
            md:grid
            grid-cols-2
            max-w-5xl
            m-auto
            px-10
            items-center
        ">
            <img
                className={style[theme]['content_img'] + " md:order-last shadow-md"} 
                src={screenImages[selected]} alt="Admin" />
            <ul>
                <Details
                    title="admin"
                    text={[
                        "Customize design for the LMS",
                        "Manage teachers, students and staff",
                        "View statistics in real-time"
                    ]}
                    open = {selected === 'admin'}
                    changeSite={() => setSelected('admin')}
                />
                <Details
                    title="teacher"
                    text={[
                        "Create and edit lecture content and quizzes",
                        "Use feature-rich editors with multimedia support",
                        "Monitor and manage student progress"
                    ]}
                    open = {selected === 'teacher'}
                    changeSite={() => setSelected('teacher')}
                />
                <Details
                    title="student"
                    text={[
                        "Join multiple classes",
                        "Take part in lectures and quizzes",
                        "Learn in a self-paced manner"
                    ]}
                    open = {selected === 'student'}
                    changeSite={() => setSelected('student')}
                />
                {/* <Details
                    title="staff"
                    text={[
                        "Customize design for the LMS",
                        "Manage teachers, students and staff",
                        "View statistics in real-time"
                    ]}
                    open = {selected === 'staff'}
                    changeSite={() => setSelected('staff')}
                /> */}
            </ul>
        </div>
    )
}

function Details({title, text, open, changeSite}: {title: site, text: string[], open: boolean, changeSite: EventHandler<any>}) {

    const {theme} = useContext(ThemeContext);
    
    return (
        <details onClick={e => e.preventDefault()} className="my-7" open={open}>
            <summary
                onClick={changeSite}
                className="flex items-center gap-5 cursor-pointer">
                <img src={style[theme][`icon_${title}`]} alt="Icon" />
                <span className={style[theme]['content_header']}>
                    {title}
                </span>
            </summary>
            <ul className={style[theme]['content_data'] + " ml-14 mt-5"}>
                {text.map(t => <li>{t}</li>)}
            </ul>
        </details>
    );
}

export default Content
