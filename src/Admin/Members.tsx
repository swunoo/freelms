import SearchBar from "../Common/Inputs";

import { useState } from "react";
import { IconBtn } from "../Common/Buttons";
import Modal from "../Common/Modal";
import { BaseTable, BaseTableData, BaseTableHeader, BaseTableNav } from "../Common/Table";
import { UserData, userType } from "../DataAccess";
import staff_darkgray from "../assets/images/icons/staff_darkgray.png";
import student_darkgray from "../assets/images/icons/student_darkgray.png";
import teacher_darkgray from "../assets/images/icons/teacher_darkgray.png";
import Layout from "./_Layout";

/* Members screen of Admin */
export default function Members() {
    return (
        <Layout active="members">
            <Content />
        </Layout>
    )
}

/* Memberlist Controls and Table */
function Content() {

    return (
        <div className="m-auto mt-10 px-10 md:px-20">
            <div className="flex gap-5 mb-5">
                <IconBtn icon={staff_darkgray} label={'Staff'}/>
                <IconBtn icon={teacher_darkgray} label={'Teacher'}/>
                <IconBtn icon={student_darkgray} label={'Student'}/>
            </div>
            <hr className="mb-5" />
            <SearchBar />
            <Table />
        </div>
    )
}

function Table() {

    const userObj = new UserData();

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Details');
    const [modalChild, setModalChild] = useState(<></>);

    // When a row is clicked
    const showDetails = (id: string) => {

        const user = userObj.getUser(id);

        // Modal with each item of user displayed inside.
        setModalChild(
            <div className="flex w-full justify-center gap-10 p-5 md:px-16">
                <img className="self-center flex-initial" src={user.profilePic} alt="Profile Pic" />
                <ul className="grid grid-cols-3 gap-3 text-base justify-center">
                    {(Object.keys(user) as Array<keyof userType>)
                        .map((key: keyof userType) => {
                            return (
                                <>
                                    <li className="col-start-1 col-end-2 font-light uppercase">{key + ":"}</li>
                                    <li className="col-start-2 col-end-4">{user[key]}</li>
                                </>
                            )
                    })}
                </ul>
            </div>
        )
        setModalTitle(user.id + ' - ' + user.alias);
        setShowModal(true);
    }

    const users = userObj.getUserList();
    const keys = Object.keys(users[0])

    return (
        <div className="overflow-x-auto bg-white  overflow-y-scroll">

            <BaseTable
                thead={
                    <tr>
                        {<BaseTableHeader titles={keys} />}
                    </tr>
                }
                tbody={
                    <>
                    {users.map((obj: userType) => <BaseTableData clickHandler={() => showDetails(obj.id)} data={Object.values(obj)} />)}
                    </>
                }
            />

            <BaseTableNav count={10} limit={5} />

            <Modal  child={modalChild} title={modalTitle} 
                    showModal={showModal} setShowModal={setShowModal}
            />
         
        </div> 
    )
}