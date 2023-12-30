

export default Navbar;

function Navbar(){

    return (
        <div
            className="flex justify-between py-3 px-5 md:px-16 text-base"
        >
            <p>freeLMS</p>
            <div className="flex gap-7">
                <a href="/admin/dashboard">Dashboard</a>
                <a href="/admin/design">Design</a>
                <a href="/admin/members">Members</a>
            </div>
        </div>
    )
}