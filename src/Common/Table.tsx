import { ReactNode, useState } from "react";

type baseTableType = { thead: ReactNode, tbody: ReactNode };
type baseNavType = { count: number, limit: number };

export function BaseTable({ thead, tbody }: baseTableType) {
    return (
        <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider sticky top-0 bg-white outline outline-2 outline-neutral-200">
                {thead}
            </thead>

            <tbody>
                {tbody}
            </tbody>
        </table>
    )
}

export function BaseTableHeader({ titles }: { titles: string[] }) {
    
    return (
        <>
            {titles.map((title: string) => {
                return(
                <th scope="col" className="px-6 py-4">
                {title}
                <a href="" className="inline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                        fill="currentColor"
                    >
                        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                    </svg>
                </a>
                </th>)
            })}
        </>
    )
}

export function BaseTableData({ clickHandler, data }: { clickHandler:()=>void, data: string[] }) {
    return (
        <tr className="border-b hover:bg-neutral-100" onClick={clickHandler}>
            {data.map((data, index) => {
             return <td className={(index===0?"font-bold ":"") + "px-6 py-4"}>{data}</td>})}
        </tr>
    )
}

export function BaseTableNav({count, limit}: baseNavType) {

    const [curPage, setCurPage] = useState(0);

    const numOfPages = Math.ceil(count/limit);

    const changePage = (toPage: number) => {
        setCurPage(toPage);
    }

    return (
        <nav className="my-5 flex items-center justify-between text-sm" aria-label="Page navigation">
            <p>
                Showing <strong>{(limit*curPage)+1} - {limit*(curPage+1)}</strong>
                {" of "} <strong>{count}</strong>
            </p>

            <ul className="list-style-none flex">
                {curPage !== 0 &&
                    <PageBtnLi
                        handler={()=>changePage(curPage-1)}
                        label="Prev"
                        isActive={false}/>
                }
                {
                    Array.from({ length: numOfPages }).map((_, index) => {
                        return (
                        <PageBtnLi
                            handler={()=>changePage(index)}
                            label={(index+1).toString()}
                            isActive={index === curPage}/>
                    )
                    })
                }
                {curPage !== numOfPages-1 &&
                    <PageBtnLi
                        handler={()=>changePage(curPage+1)}
                        label="Next"
                        isActive={false}/>
                }
            </ul>
        </nav>
    )
}

/*Utils*/
type pageBtnType = { handler:()=>void, label:string, isActive:boolean };
function PageBtnLi({handler, label, isActive}: pageBtnType){

    return (
        <li>
        <button
            onClick={handler}
            className={
                (isActive ? "font-black " : "")
                +"relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"}
        >{label}</button>
    </li>
    )
}