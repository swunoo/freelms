const css_button = "flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition hover:brightness-110 h-fit w-fit rounded-xl "

const css_icon = "w-5 md:w-6"

type btnProps = {icon?: string | undefined, label?: string|undefined, styling?: string | undefined, onclick?: ()=>void | undefined}

// Normal button
export function FullBtn(props: btnProps){
    return (
        <button 
            onClick={props.onclick}
            className={css_button + (props.styling??'')}>
            {props.icon && <img className={css_icon} src={props.icon} alt="Icon" />}
            <span>{props.label}</span>
        </button>
    )
}

// Button that hides label on small screens
export function IconBtn (props: btnProps){
    return (
        <button
            onClick={props.onclick}
            className={css_button + (props.styling??'')}>
            {props.icon && <img className={css_icon} src={props.icon} alt="Icon" />}
            {props.label && <span className="hidden md:block">{props.label}</span>}
        </button>
    )
}