import Calendar from "../Common/Calendar";
import ChatPanel from "../Common/ChatPanel";
import Navbar from "./_Navbar";

export default function Desk(){
    return (
        <div
            className="
            md:grid
            grid-cols-4
            min-h-screen
            h-fit
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
        <div className=""></div>
    )
}