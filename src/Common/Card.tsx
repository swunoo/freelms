import { MouseEventHandler, ReactNode } from "react"

type btnData = {onclick: MouseEventHandler<HTMLButtonElement>|undefined, text: string, color: string}
type cardProps = {isHor: boolean, link: string, img: string|null, title:string, content:ReactNode, btns: btnData[]}


export default function Card(props: cardProps, optionals?:any) {
    return (
        <div className={
            (!props.isHor?"flex-col w-fit max-w-72 ":"")
            + "flex rounded-lg bg-slate-100 text-left overflow-hidden cursor-pointer"}
            onClick={() => {
                if(props.link){
                    location.href=props.link;
                }
            }
            }    
        >
            {props.img && <img className="w-full" src={props.img} alt="" />}
            <div className="p-6">
                <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800">
                    {props.title}
                </h5>
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