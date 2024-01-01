import { MouseEventHandler, ReactNode } from "react"

type btnData = {onclick: MouseEventHandler<HTMLButtonElement>|undefined, text: string, color: string}
type cardProps = {isHor: boolean, link: string, img: string|null, content:ReactNode, btns: btnData[]}


export default function Card(props: cardProps) {
    return (
        <div className={
            (!props.isHor?"flex-col max-w-72 ":"")
            + "w-full flex rounded-lg bg-slate-100 text-left overflow-hidden cursor-pointer"}
            onClick={() => {
                if(props.link){
                    location.href=props.link;
                }
            }
            }    
        >
            {props.img && <img className="w-full" src={props.img} alt="" />}
            <div className="p-6">
                {props.content}
            </div>

            {
            props.btns.map(btn => {
                return(
                    <button onClick={btn.onclick}
                    className={btn.color + " mt-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:brightness-90"}> {btn.text} </button>
                )
            })}

        </div>
    )
}