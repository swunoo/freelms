export default Navbar;

function Navbar({active}: {active: string}){

    return (
        <div
            className="flex justify-between py-3 px-5 md:px-16 text-base"
        >
            <p>freeLMS</p>
            <div className="flex gap-7">
                <a href="/teacher/desk" className=   {active==='desk'?'font-bold':''}>Desk</a>
                <a href="/teacher/members" className={active==='members'?'font-bold':''}>Members</a>
            </div>
        </div>
    )
}