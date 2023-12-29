function Footer() {

    const css_button = "rounded bg-slate-300 px-5 text-black";

    return (
        <>
        <div className="
            mt-64
            py-20
            px-24
            bg-slate-600
        ">
            <div className="max-w-3xl m-auto text-white w-fit">
            <h3 className="text-3xl uppercase">Demo</h3>
            <p className="my-9 w-fit">Take a quick look at freeLMS via the following links.
            <br />
            Please be aware that it is a demo and no data will be saved.
            <br />
            A real-world usable freeLMS will be released soon.</p>
            <div className="flex gap-3">
                <button className={css_button}>Admin</button>
                <button className={css_button}>Teacher</button>
                <button className={css_button}>Student</button>
            </div>
            </div>
        </div>
            <footer className="text-center text-slate-600 text-sm py-1">(c) 2024 by <a className="cursor-pointer">swunoo</a></footer>
        </>
    )
}

export default Footer
