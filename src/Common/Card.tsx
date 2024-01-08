import { MouseEventHandler, ReactNode } from "react"
import { FullBtn } from "./Buttons";

type btnData = {onclick: MouseEventHandler<HTMLButtonElement>|undefined, text: string, color: string}
type cardProps = {isHor: boolean, styling:string, link: string, img: string|null, content:ReactNode, btns: btnData[]}


export default function Card(props: cardProps) {
    return (
        <div className={
            (!props.isHor?"flex-col max-w-72 ":"")
            + props.styling}
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
                    <FullBtn label={btn.text} icon={undefined} />
                )
            })}

        </div>
    )
}