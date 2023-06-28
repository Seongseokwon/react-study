import {useNavigate} from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();


    return <form>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/>
        </div>
        {/* btn group*/}
        <div>
            <button type="button" onClick={() => navigate(-1)}>이전으로</button>
            <button type="submit">완료</button>
        </div>
    </form>
}