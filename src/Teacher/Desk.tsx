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
            <div className="overflow-y-scroll min-h-screen shadow-lg">
                <Calendar />
                <ChatPanel />
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
                            <hr className="my-3 border-neutral-500" />
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
                            <hr className="my-3 border-neutral-500" />
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
                            <hr className="my-3 border-neutral-500" />
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
                            <hr className="my-3 border-neutral-500" />
                            <p className="uppercase text-xs">Thu-Fri 11:00-13:30</p>
                        </>
                    }
                    btns={[]}
                />
            </div>
        </div>
    )
}