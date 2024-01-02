import Calendar from "../Common/Calendar"
import Sidebar, { LiveSession } from "../Common/Sidebar"
import { mockLiveSessionList } from "../Mockers";
import Layout from "./_Layout";
import Navbar from "./_Navbar"

export default function Class(){
    
    const liveSessionData = mockLiveSessionList;

    return (
        <Layout active="">
            <Content/>
        </Layout>
    )
}

function Content () {
 return (
    <div>
        Hello World
    </div>
 )
}