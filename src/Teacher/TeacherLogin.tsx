import { FormEvent } from "react";
import { AuthForm, AuthLayout } from "../Common/Auth";

export default function TeacherLogin () {
    const loginInputs = [
        {label: 'Email', name: 'email', type: "email"},
        {label: 'Password', name: 'password', type: "password"},
    ];
    const signupInputs = [
        {label: 'Name', name: 'name', type: "text"},
        {label: 'Email', name: 'email', type: "email"},
        {label: 'Password', name: 'password', type: "password"},
        {label: 'Date of Birth', name: 'dob', type: "date"}
    ]

    const loginHandler = (e: FormEvent) => {
        e.preventDefault()
        console.log("logged in");
    }
    const signupHandler = (e: FormEvent) => {
        e.preventDefault()
        console.log("signed up");
    }

    return (
        <AuthLayout
            Login = {<AuthForm submitHandler={loginHandler} title="Welcome Back" inputs={loginInputs}/>}
            Signup = {<AuthForm submitHandler={signupHandler} title="Welcome" inputs={signupInputs}/>}
            startWithLogin = {true}
        />
    )
}