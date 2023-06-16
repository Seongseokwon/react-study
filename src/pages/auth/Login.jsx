import React from "react";

export default function Login() {
    return <>
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text"/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
            </div>
        </form>
    </>
}