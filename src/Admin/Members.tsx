import ChatPanel from "../Common/ChatPanel";
import SearchBar from "../Common/SearchBar";
import Navbar from "./_Navbar";

import admin_darkgray from "../assets/images/icons/admin_darkgray.png";
import teacher_darkgray from "../assets/images/icons/teacher_darkgray.png";
import student_darkgray from "../assets/images/icons/student_darkgray.png";
import staff_darkgray from "../assets/images/icons/staff_darkgray.png";
import Card from "../Common/Card";
import { createElement, useState } from "react";
import Modal from "../Common/Modal";

export default function Members() {
    return (
        <div
            className="
            md:grid
            grid-cols-4
            min-h-screen
        ">
            <div className="col-start-1 col-end-4">
                <Navbar />
                <Content />
            </div>
            <ChatPanel />
        </div>
    )
}

function Content() {
    const css_button = "flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-200 bg-neutral-100"

    return (
        <div className="m-auto mt-10 px-10 md:px-20">
            <div className="flex gap-5 mb-5">
                <button className={css_button}>
                    <img src={staff_darkgray} alt="Icon" />
                    <span className="hidden md:block">Staff</span>
                </button>
                <button className={css_button}>
                    <img src={teacher_darkgray} alt="Icon" />
                    <span className="hidden md:block">Teacher</span>
                </button>
                <button className={css_button}>
                    <img src={student_darkgray} alt="Icon" />
                    <span className="hidden md:block">Student</span>
                </button>
            </div>
            <hr className="mb-5" />
            <SearchBar />
            <Table />
        </div>
    )
}

function Table() {

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Details');
    const [modalChild, setModalChild] = useState(<></>);


    const css_button = "flex content-center items-center gap-1 md:gap-3 py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-200 bg-neutral-100"

    const showDetails = (id: string) => {
        const tmpData = {
            id: '123', alias: 'jean doe', gender: 'male', class: 'biology', age: 15 };
            console.log("clicked");
        setModalChild(
            <Card
                isHor={true}
                link='#'
                img={student_darkgray}
                title=''
                content={
                    <ul>
                        <li>Alias: {tmpData.alias}</li>
                        <li>Gender: {tmpData.gender}</li>
                        <li>Class: {tmpData.class}</li>
                        <li>Age: {tmpData.age}</li>
                    </ul>
                }
                btns={[]}
            />
        )
        setModalTitle(tmpData.id + ' - ' + tmpData.alias);
        setShowModal(true);
    }


    // tmp data
    type dataItem = { id: string, alias: string, gender: 'male' | 'female' | 'other', class: string };
    const data: dataItem[] = [
        { id: '123', alias: 'jean doe', gender: 'male', class: 'biology' },
        { id: '343', alias: 'amelia black', gender: 'female', class: 'japanese' },
        { id: '453454', alias: 'yamada taro', gender: 'male', class: 'maths' },
        { id: '34534', alias: 'john doe', gender: 'female', class: 'english' },
        { id: '54345', alias: 'dupont doe', gender: 'male', class: 'biology' },
        { id: '55434', alias: 'john dupont', gender: 'female', class: 'chemistry' },
    ];
    const keys = Object.keys(data[0])

    return (
        <div className="overflow-x-auto bg-white  overflow-y-scroll">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
                <thead className="uppercase tracking-wider sticky top-0 bg-white outline outline-2 outline-neutral-200">
                    <tr>
                        {keys.map(title => <TableHeader title={title} />)}
                    </tr>
                </thead>

                <tbody>
                    {data.map(obj => <TableRow clickHandler={() => showDetails(obj.id)} rowData={Object.values(obj)} />)}
                </tbody>

            </table>

            <nav className="my-5 flex items-center justify-between text-sm" aria-label="Page navigation">
                <p>
                    Showing <strong>1-5</strong> of <strong>10</strong>
                </p>

                <ul className="list-style-none flex">
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                            href="#"
                        >
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                            href="#"
                        >
                            1
                        </a>
                    </li>
                    <li aria-current="page">
                        <a
                            className="relative block rounded bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300"
                            href="#"
                        >
                            2
                            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                                (current)
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                            href="#"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                            href="#!"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>

            <Modal child={modalChild} title={modalTitle} showModal={showModal} setShowModal={setShowModal}/>
         
        </div>
    )
}

function TableHeader({ title }: { title: string }) {
    return (
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

        </th>
    )
}

function TableRow({ clickHandler, rowData }: { clickHandler:()=>void, rowData: string[] }) {
    return (
        <tr className="border-b hover:bg-neutral-100" onClick={clickHandler}>
            {rowData.map(data => <td className="px-6 py-4">{data}</td>)}
        </tr>
    )
}