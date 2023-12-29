import { EventHandler, useEffect, useState } from "react";
import scr_admin from "../assets/images/Home.png";
import scr_teacher from "../assets/images/Home.png";
import scr_student from "../assets/images/Home.png";
import scr_staff from "../assets/images/Home.png";
import icon_admin from "../assets/images/icons/admin_black.svg";
import icon_teacher from "../assets/images/icons/admin_black.svg";
import icon_student from "../assets/images/icons/admin_black.svg";
import icon_staff from "../assets/images/icons/admin_black.svg";

function Content() {

    type site = "admin"|"teacher"|"student"|"staff";
    const screenImages = {
        'admin': scr_admin,
        'teacher': scr_teacher,
        'student': scr_student,
        'staff': scr_staff
    };

    const [selected, setSelected] = useState<site>('admin');
    
    
    useEffect(() => {
        console.log(selected);

    }, [selected])


    return (
        <div className="
            grid
            grid-cols-2
            max-w-5xl
            m-auto
        ">
            <ul>
                <Details
                    title="admin"
                    text={[
                        "Customize design for the LMS",
                        "Manage teachers, students and staff",
                        "View statistics in real-time"
                    ]}
                    icon = {icon_admin}
                    open = {selected === 'admin'}
                    changeSite={() => setSelected('admin')}
                />
                <Details
                    title="teacher"
                    text={[
                        "Customize design for the LMS",
                        "Manage teachers, students and staff",
                        "View statistics in real-time"
                    ]}
                    icon = {icon_teacher}
                    open = {selected === 'teacher'}
                    changeSite={() => setSelected('teacher')}
                />
                <Details
                    title="student"
                    text={[
                        "Customize design for the LMS",
                        "Manage teachers, students and staff",
                        "View statistics in real-time"
                    ]}
                    icon = {icon_student}
                    open = {selected === 'student'}
                    changeSite={() => setSelected('student')}
                />
                <Details
                    title="staff"
                    text={[
                        "Customize design for the LMS",
                        "Manage teachers, students and staff",
                        "View statistics in real-time"
                    ]}
                    icon = {icon_staff}
                    open = {selected === 'staff'}
                    changeSite={() => setSelected('staff')}
                />
            </ul>
            <img src={screenImages[selected]} alt="Admin" />
        </div>
    )
}

function Details({title, text, icon, open, changeSite}: {title: string, text: string[], icon:string, open: boolean, changeSite: EventHandler<any>}) {
    const css_summary = "flex items-center gap-5 cursor-pointer";
    const css_title = "text-3xl font-thin uppercase";
    const css_list = "ml-14 mt-5 font-light list-disc text-lg";

    
    return (
        <details onClick={e => e.preventDefault()} className="my-7" open={open}>
            <summary onClick={changeSite} className={css_summary}>
                <img src={icon} alt="Icon" />
                <span className={css_title}>
                    {title}
                </span>
            </summary>
            <ul className={css_list}>
                {text.map(t => <li>{t}</li>)}
            </ul>
        </details>
    );
}

export default Content
