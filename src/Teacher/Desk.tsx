import Calendar from "../Common/Calendar";
import Card from "../Common/Card";
import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/SearchBar";
import Navbar from "./_Navbar";

export default function Desk(){
    return (
        <div
            className="
            md:grid
            grid-cols-4
            min-h-screen
            h-fit
            bg-slate-200
        ">
            <div className="col-start-1 col-end-4">
                <Navbar />
                <Content />
            </div>
            <div className="shadow-lg">
                <Calendar />
                <ClassPanel />
            </div>
        </div>
    )
}

function Content(){
    return (
        <div className="p-3 max-w-4xl m-auto mb-10">
            <SearchBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-around">
                <Card
                    isHor={false}
                    link='#'
                    img={"https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg"}
                    title=''
                    content={
                        <>
                            <h3 className="text-lg font-bold">
                                CS 2401-01 
                                <br/>Software Engineering 1
                            </h3>
                            <hr className="my-3 border-2 border-blue-300" />
                            <p className="uppercase text-xs">Mon-Thu 15:00-17:30</p>
                        </>
                    }
                    btns={[]}
                />
                <Card
                    isHor={false}
                    link='#'
                    img={"https://my.uopeople.edu/pluginfile.php/1808023/course/overviewfiles/CS2204.jpg"}
                    title=''
                    content={
                        <>
                            <h3 className="text-lg font-bold">
                                CS 2204-01 
                                <br/>Communications and Networking
                            </h3>
                            <hr className="my-3 border-2 border-yellow-300" />
                            <p className="uppercase text-xs">Thu-Fri 11:00-13:30</p>
                        </>
                    }
                    btns={[]}
                />
                <Card
                    isHor={false}
                    link='#'
                    img={"https://my.uopeople.edu/pluginfile.php/1803753/course/overviewfiles/BIOL1301.jpg"}
                    title=''
                    content={
                        <>
                            <h3 className="text-lg font-bold">
                                BIOL 1301-01
                                <br/>Introduction to Biology
                            </h3>
                            <hr className="my-3 border-2 border-green-300" />
                            <p className="uppercase text-xs">Mon-Fri 09:00-10:00</p>
                        </>
                    }
                    btns={[]}
                />
                <Card
                    isHor={false}
                    link='#'
                    img={"https://my.uopeople.edu/pluginfile.php/1808023/course/overviewfiles/CS2204.jpg"}
                    title=''
                    content={
                        <>
                            <h3 className="text-lg font-bold">
                                CS 2204-01 
                                <br/>Communications and Networking
                            </h3>
                            <hr className="my-3 border-2 border-pink-300" />
                            <p className="uppercase text-xs">Thu-Fri 11:00-13:30</p>
                        </>
                    }
                    btns={[]}
                />
                <Card
                    isHor={false}
                    link='#'
                    img={"https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg"}
                    title=''
                    content={
                        <>
                            <h3 className="text-lg font-bold">
                                CS 2401-01 
                                <br/>Software Engineering 1
                            </h3>
                            <hr className="my-3 border-2 border-rose-300" />
                            <p className="uppercase text-xs">Mon-Thu 15:00-17:30</p>
                        </>
                    }
                    btns={[]}
                />
            </div>
        </div>
    )
}

function ClassPanel(){
    const css_button_class = "flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-200 bg-neutral-100 w-full my-1"

    return (
        <div className="p-3">
            <button className={css_button_class}>
                <span className="bg-blue-300 p-1 rounded-md text-neutral-900">CS2401</span>
                <span>15:00 - 15:30</span>
                <span className="ml-auto font-light">30 m</span>
            </button>
            <button className={css_button_class}>
                <span className="bg-green-300 p-1 rounded-md text-neutral-900">BIOL 1301-01</span>
                <span>16:00 - 17:00</span>
                <span className="ml-auto font-light">1 h</span>
            </button>
            <button className={css_button_class}>
                <span className="bg-blue-300 p-1 rounded-md text-neutral-900">CS2401</span>
                <span>THU 16:00 - 17:00</span>
                <span className="ml-auto font-light">1 d</span>
            </button>
        </div>
    )
}