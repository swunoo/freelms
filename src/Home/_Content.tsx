import scr_admin from "../assets/images/Home.png";
import icon_admin from "../assets/images/icons/admin_black.svg";
import icon_teacher from "../assets/images/icons/admin_black.svg";
import icon_student from "../assets/images/icons/admin_black.svg";
import icon_staff from "../assets/images/icons/admin_black.svg";

function Content() {

    const css_summary = "flex items-center gap-5 cursor-pointer";
    const css_title = "text-3xl font-thin uppercase";
    const css_list = "ml-14 mt-5 font-light list-disc text-lg";


    return (
        <div className="
            grid
            grid-cols-2
            max-w-5xl
            m-auto
        ">
            <ul>
                <details className="my-7">
                    <summary className={css_summary}>
                        <img src={icon_admin} alt="Icon"/>
                        <span className={css_title}>
                            Admin
                        </span>
                    </summary>
                    <ul className={css_list}>
                        <li>Customize design for the LMS</li>
                        <li>Manage teachers, students and staff</li>
                        <li>View statistics in real-time</li>
                    </ul>
                </details>
                <details className="my-7">
                    <summary className={css_summary}>
                        <img src={icon_admin} alt="Icon"/>
                        <span className={css_title}>
                            Teacher
                        </span>
                    </summary>
                    <ul className={css_list}>
                        <li>Customize design for the LMS</li>
                        <li>Manage teachers, students and staff</li>
                        <li>View statistics in real-time</li>
                    </ul>
                </details>
                <details className="my-7">
                    <summary className={css_summary}>
                        <img src={icon_admin} alt="Icon"/>
                        <span className={css_title}>
                            Student
                        </span>
                    </summary>
                    <ul className={css_list}>
                        <li>Customize design for the LMS</li>
                        <li>Manage teachers, students and staff</li>
                        <li>View statistics in real-time</li>
                    </ul>
                </details>
                <details className="my-7">
                    <summary className={css_summary}>
                        <img src={icon_admin} alt="Icon"/>
                        <span className={css_title}>
                            Staff
                        </span>
                    </summary>
                    <ul className={css_list}>
                        <li>Customize design for the LMS</li>
                        <li>Manage teachers, students and staff</li>
                        <li>View statistics in real-time</li>
                    </ul>
                </details>
            </ul>
            <img src={scr_admin} alt="Admin" />
        </div>
    )
}

export default Content
