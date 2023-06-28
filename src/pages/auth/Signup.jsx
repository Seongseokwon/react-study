import {useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput";

import {createUserWithEmailAndPassword} from 'firebase/auth';
import {fAuthService, fDbService} from "../../firebase";
import {collection, setDoc, doc, addDoc} from 'firebase/firestore';
import InputEncryption from "../../utils/inputEncryption";

export default function Signup() {
    const navigate = useNavigate();

    const [{userName, email, password}, onChange, inputReset] = useInput({
        userName: "",
        email: "",
        password: "",
    });
    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const regUserInfo = await createUserWithEmailAndPassword(fAuthService, email, InputEncryption(password));

            const usersRef = collection(fDbService, "users");
            await setDoc(doc(usersRef, regUserInfo.user.uid), {
                userName,
                email
            });
            navigate(-1);
        } catch (e) {
            console.log(e);
        }
    }

    return <form onSubmit={handleSignup}>
        <div>
            <label htmlFor="userName">Username</label>
            <input id="userName" type="text" name="userName" value={userName} onChange={onChange}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" value={email} onChange={onChange}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={password} onChange={onChange}/>
        </div>
        {/* btn group*/}
        <div>
            <button type="button" onClick={() => navigate(-1)}>이전으로</button>
            <button type="submit">완료</button>
        </div>
    </form>
}