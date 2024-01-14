import { createContext, useContext, useState } from "react"
import Content from "./_Content"
import {style, styleTypes, styleKeys} from "./style"
import open_black from "../assets/images/icons/open_black.png";
import open_white from "../assets/images/icons/open_white.png";
import { useNavigate } from "react-router-dom";


export default Home

interface ThemeContextProps {
    theme: styleTypes;
    setTheme: React.Dispatch<React.SetStateAction<styleTypes>>;
}
export const ThemeContext = createContext<ThemeContextProps>({theme: 'simple_light', setTheme:()=>{}});

function Home() {
    const [theme, setTheme] = useState<styleTypes>('simple_dark');

    return (
        <ThemeContext.Provider value = {{theme, setTheme}}>
            <div className={style[theme]['home_wrapper']+" relative"}>
                <Hero />
                <Content />
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

function Hero() {

    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        let curIndex = styleKeys.indexOf(theme);
        const nextIndex = ++curIndex >= styleKeys.length
        ? 0 : curIndex;
        
        setTheme(styleKeys[nextIndex]);
    }

    return (
        <div className="
            min-h-screen
            flex flex-col
            justify-center
            content-center
        "
        >
            <button onClick={changeTheme} className={style[theme]['hero_btn'] + " flex items-center gap-3 px-5 py-2 m-5 fixed top-0 right-0 transition"}>
                <img src={style[theme]['hero_btn_img']} alt="Icon" />
                <span>Change</span>
            </button>
            <div className=" m-auto">
                <h1 className={style[theme]['hero_title']}>freeLMS</h1>
                <p className={style[theme]['hero_text'] + " max-w-72 md:max-w-fit"}>powerful, customizable & efficient LMS, for free.</p>
            </div>
        </div>
    )
}

function Footer() {

    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();

    const css_button = style[theme]['demo_btn'] + " flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition";
    const open_btn_src = theme === 'simple_dark' ? open_white : open_black;

    return (
        <>
        <div className={style[theme]['footer_wrapper'] + " md:mt-64 md:py-20 md:px-24 mt-32 py-14 px-5"}>
            <div className={style[theme]['footer_content'] + " max-w-3xl m-auto w-fit"}>
                <h3 className={style[theme]['footer_title']}>Demo</h3>
                <p className={style[theme]['footer_text'] + " my-9 w-fit"}>Take a quick look at freeLMS via the following links.
                <br />
                Please be aware that it is a demo and no data will be saved.
                <br />
                A real-world usable freeLMS will be released soon.</p>
                <div className="flex gap-3">
                    {/* <button className={css_button} onClick={()=>navigate("/admin")}>
                        <span>Admin</span>
                        <img src={open_btn_src} alt="Icon"/>
                    </button> */}
                    <button className={css_button} onClick={()=>navigate("/teacher/desk")}>
                        <span>Teacher</span>
                        <img src={open_btn_src} alt="Icon"/>
                    </button>
                    <button className={css_button} onClick={()=>navigate("/student/desk")}>
                        <span>Student</span>
                        <img src={open_btn_src} alt="Icon"/>
                    </button>
                </div>
            </div>
        </div>
            <footer className={style[theme]['footer_copyright'] + " text-center py-1"}>(c) 2024 by <a className="cursor-pointer">swunoo</a></footer>
        </>
    )
}
