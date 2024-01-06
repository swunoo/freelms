import { FormEventHandler, ReactNode, useState } from "react";
import { FullBtn } from "./Buttons";

export function AuthLayout ({Login, Signup, startWithLogin}: {Login: ReactNode, Signup: ReactNode, startWithLogin: boolean}) {

    const [isLogin, setIsLogin] = useState(startWithLogin);

    return (
        <div
            className="md:grid grid-cols-3 min-h-screen"
        >
            <div className="col-start-1 col-end-3 flex justify-center items-center">
                <div className="font-bold">
                    <h1 className="text-6xl">Your Institution's Name</h1>
                    <p className="text-xl mt-5 uppercase">Your Tagline</p>
                </div>
            </div>
            <div className="flex flex-col justify-center bg-gray-100 items-center ">
                {isLogin ? Login : Signup}
                <div className="flex flex-col items-center gap-5 mt-10">
                    <p>{isLogin ? "Do not have an account yet?" : "Already have an account?"}</p>
                    <button 
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="w-fit py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-300 bg-neutral-200">
                        <span>{isLogin ? "Sign Up" : "Log In"}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

type inputType = {label: string, name: string, value?:string, type:string};
type AuthFormType = {submitHandler: FormEventHandler, title?: string, inputs: inputType[]}
export function AuthForm ({submitHandler, title, inputs}: AuthFormType) {
    return(
        <form
            className=""
            onSubmit={submitHandler}>
            {title &&<h3 className="font-medium text-xl text-center my-16">
                {title}
            </h3>}

            {inputs.map(i => (
                <label className="grid grid-cols-3 items-center  rounded text-neutral-800 bg-gray-100 border-neutral-300 border my-1 md:w-96">
                    <p className="w-full text-center">{i.label}</p>
                    <input name={i.name} value={i.value??""} type={i.type} className="w-full py-2 pl-3 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 col-start-2 col-end-4" />
                </label>
            ))}

            <div className="flex justify-end my-5">
                <button 
                    type="submit"
                    className="py-2 md:px-5 px-3 transition rounded-xl hover:bg-neutral-500 bg-neutral-800 text-white">
                    <span>Submit</span>
                </button>
            </div>
        </form>
    )
}