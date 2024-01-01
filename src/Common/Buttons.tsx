const css_button = "flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-200 bg-neutral-100"

type btnProps = {icon?: string | undefined, label: string, color?: string | undefined, onclick?: ()=>void | undefined}

// Normal button
export function FullBtn(props: btnProps){
    return (
        <button 
            onClick={props.onclick}
            className={css_button} 
            style={props.color?{backgroundColor: props.color}:{}}>
            {props.icon && <img src={props.icon} alt="Icon" />}
            <span>{props.label}</span>
        </button>
    )
}

// Button that hides label on small screens
export function IconBtn (props: btnProps){
    return (
        <button
            onClick={props.onclick}
            className={css_button}
            style={props.color?{backgroundColor: props.color}:{}}>
            {props.icon && <img src={props.icon} alt="Icon" />}
            <span className="hidden md:block">{props.label}</span>
        </button>
    )
}