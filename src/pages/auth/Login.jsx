import React from "react";
import useInput from "../../hooks/useInput";

export default function Login() {
    const [{ email, password}, onChange, inputReset] = useInput({email: '', password: ''})



    return <>
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" onChange={onChange}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" onChange={onChange}/>
            </div>
        </form>
    </>
}