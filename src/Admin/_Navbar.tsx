

export default Navbar;

type links = 'dashboard' | 'design' | 'members';

/* Navbar for Admin */
function Navbar({active}: {active: links}){

    return (
        <div
            className="flex justify-between py-3 px-5 md:px-16 text-base"
        >
            <p>freeLMS</p>
            <div className="flex gap-7">
                <a href="/admin/dashboard" className={active==='dashboard'?'font-bold':''}>Dashboard</a>
                <a href="/admin/design" className={active==='design'?'font-bold':''}>Design</a>
                <a href="/admin/members" className={active==='members'?'font-bold':''}>Members</a>
            </div>
        </div>
    )
}