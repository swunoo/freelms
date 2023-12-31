const css_button = "flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-200 bg-neutral-100"

type btnProps = {icon: string | undefined, label: string}

export function FullBtn(props: btnProps){
    return (
        <button className={css_button}>
            {props.icon && <img src={props.icon} alt="Icon" />}
            <span className="hidden md:block">{props.label}</span>
        </button>
    )
}

export function IconBtn (props: btnProps){
    return (
        <button className={css_button}>
            {props.icon && <img src={props.icon} alt="Icon" />}
            <span className="hidden md:block">{props.label}</span>
        </button>
    )
}