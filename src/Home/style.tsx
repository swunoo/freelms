import change_black from "../assets/images/icons/change_black.png";
import admin_black from "../assets/images/icons/admin_black.png";
import teacher_black from "../assets/images/icons/teacher_black.png";
import student_black from "../assets/images/icons/student_black.png";
import staff_black from "../assets/images/icons/staff_black.png";
import change_white from "../assets/images/icons/change_white.png";
import admin_white from "../assets/images/icons/admin_white.png";
import teacher_white from "../assets/images/icons/teacher_white.png";
import student_white from "../assets/images/icons/student_white.png";
import staff_white from "../assets/images/icons/staff_white.png";
import admin_lightgray from "../assets/images/icons/admin_lightgray.png";
import teacher_lightgray from "../assets/images/icons/teacher_lightgray.png";
import student_lightgray from "../assets/images/icons/student_lightgray.png";
import staff_lightgray from "../assets/images/icons/staff_lightgray.png";
import change_darkgray from "../assets/images/icons/change_darkgray.png";
import admin_darkgray from "../assets/images/icons/admin_darkgray.png";
import teacher_darkgray from "../assets/images/icons/teacher_darkgray.png";
import student_darkgray from "../assets/images/icons/student_darkgray.png";
import staff_darkgray from "../assets/images/icons/staff_darkgray.png";
import change_blue from "../assets/images/icons/change_blue.png";
import admin_blue from "../assets/images/icons/admin_blue.png";
import teacher_blue from "../assets/images/icons/teacher_blue.png";
import student_blue from "../assets/images/icons/student_blue.png";
import staff_blue from "../assets/images/icons/staff_blue.png";

export const style = {
    simple_light: {
        home_wrapper: "bg-gradient-to-r from-neutral-100 to-stone-100 text-black",
        hero_btn: "bg-slate-600 rounded text-white hover:bg-slate-500",
        hero_btn_img: change_white,
        hero_title: "font-medium text-7xl md:text-8xl",
        hero_text: "font-light",
        content_header: "text-2xl font uppercase hover:drop-shadow-md",
        content_data: "font-light list-disc text-md",
        icon_admin: admin_darkgray,
        icon_teacher: teacher_darkgray,
        icon_student: student_darkgray,
        icon_staff: staff_darkgray,
        content_img: "",
        footer_wrapper: "bg-slate-600",
        footer_content: "text-white",
        footer_title: "text-3xl uppercase",
        footer_text: "font-light md:text-lg",
        demo_btn: "md:text-lg rounded bg-slate-300 text-black hover:bg-slate-200",
        footer_copyright: "bg-neutral-700 text-slate-100 text-sm"
    },
    simple_dark: {
        home_wrapper: "bg-gradient-to-r from-slate-900 to-slate-800 text-white",
        hero_btn: "bg-neutral-100 rounded text-black shadow-lg hover:bg-neutral-200",
        hero_btn_img: change_blue,
        hero_title: "font-semibold text-7xl md:text-8xl",
        hero_text: "font-light",
        content_header: "text-3xl font-thin uppercase",
        content_data: "font-thin list-disc text-lg",
        icon_admin: admin_lightgray,
        icon_teacher: teacher_lightgray,
        icon_student: student_lightgray,
        icon_staff: staff_lightgray,
        content_img: "",
        footer_wrapper: "bg-gradient-to-r from-slate-800 to-slate-700",
        footer_content: "text-white",
        footer_title: "text-3xl uppercase",
        footer_text: "font-thin md:text-lg",
        demo_btn: "md:text-lg rounded bg-slate-900 text-white font-light hover:bg-slate-800",
        footer_copyright: "bg-slate-600 text-slate-300 text-sm"
    },
    gradient_light: {
        home_wrapper: "bg-gradient-to-r from-teal-400 to-yellow-200 text-black",
        hero_btn: "bg-orange-300 rounded-2xl text-neutral-800 shadow-lg hover:bg-orange-200 ",
        hero_btn_img: change_darkgray,
        hero_title: "font-thin text-7xl md:text-8xl",
        hero_text: "uppercase font-medium text-xs md:text-sm",
        content_header: "text-3xl font",
        content_data: "font-light list-disc text-sm",
        icon_admin: admin_black,
        icon_teacher: teacher_black,
        icon_student: student_black,
        icon_staff: staff_black,
        content_img: "rounded-3xl",
        footer_wrapper: "bg-teal-200",
        footer_content: "text-white",
        footer_title: "text-black text-3xl ",
        footer_text: "font-light text-neutral-800 md:text-lg",
        demo_btn: "md:text-lg shadow-lg rounded-xl bg-yellow-300 text-black hover:bg-yellow-200 ",
        footer_copyright: "bg-yellow-100 text-neutral-600 text-sm"
    },
    gradient_dark: {
        home_wrapper: "bg-gradient-to-r from-red-500 to-orange-500 text-white",
        hero_btn: "bg-white rounded text-black uppercase shadow-lg hover:bg-neutral-100",
        hero_btn_img: change_black,
        hero_title: "font-semibold text-7xl md:text-8xl",
        hero_text: "uppercase text-sm",
        content_header: "text-3xl font-medium capitalize",
        content_data: "font-light list-disc text-lg",
        icon_admin: admin_white,
        icon_teacher: teacher_white,
        icon_student: student_white,
        icon_staff: staff_white,
        content_img: "shadow-2xl rounded",
        footer_wrapper: "bg-neutral-900",
        footer_content: "text-white",
        footer_title: "text-3xl uppercase",
        footer_text: "font-light md:text-lg",
        demo_btn: "md:text-lg  rounded bg-teal-600 text-black shadow-lg font-medium hover:bg-teal-500",
        footer_copyright: "bg-neutral-800 text-neutral-500 text-sm"
    },
    neubrutalist: {
        home_wrapper: "bg-white",
        hero_btn: "bg-yellow-300 border-solid border-black border font-medium hover:bg-orange-300",
        hero_btn_img: change_darkgray,
        hero_title: "text-blue-900 font-black text-7xl md:text-8xl",
        hero_text: "text-neutral-700 uppercase text-sm font-medium",
        content_header: "text-blue-900 text-3xl font-bold capitalize",
        content_data: "font-medium text-neutral-700 text-md list-disc text-lg",
        icon_admin: admin_blue,
        icon_teacher: teacher_blue,
        icon_student: student_blue,
        icon_staff: staff_blue,
        content_img: "shadow-none border-solid border-blue-900 border",
        footer_wrapper: "bg-blue-900",
        footer_content: "text-white",
        footer_title: "text-5xl font-medium",
        footer_text: "font-light md:text-lg",
        demo_btn: "md:text-lg bg-yellow-300 text-black border-2 border-black font-medium hover:bg-orange-300",
        footer_copyright: "bg-neutral-700 text-neutral-200 text-sm"
    }

}
export type styleTypes = keyof typeof style;
export const styleKeys: styleTypes[] = Object.keys(style) as styleTypes[];