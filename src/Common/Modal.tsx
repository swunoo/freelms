import { ReactNode } from "react";
import { FullBtn } from "./Buttons";


export default function Modal({child, title, showModal, setShowModal}: {child: ReactNode, title: string, showModal: boolean, setShowModal: (b: boolean)=>void}) {

  return (
    <>
      {showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                  <h3 className="text-3xl font-light p-3 md:px-10 md:py-5">
                    {title}
                  </h3>
                {/*body*/}
                <div className="relative flex justify-center p-3">
                  {child}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-5">
                  <FullBtn
                    label='Close'
                    onclick={()=>setShowModal(false)}
                  />
                  <FullBtn
                    label='Edit'
                    onclick={()=>setShowModal(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
