import {useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput";

import {createUserWithEmailAndPassword} from 'firebase/auth';
import {fAuthService, fDbService} from "../../firebase";
import {collection, setDoc, doc} from 'firebase/firestore';
import InputEncryption from "../../utils/inputEncryption";
import {StyledAuthLayout} from "../../components/styles/Auth.styled";
import {StyledCommonInputGroup} from "../../components/styles/Common.styled";

export default function Signup() {
    const navigate = useNavigate();

    const [{userName, email, password, exposed}, onChange, inputReset] = useInput({
        userName: "",
        email: "",
        password: "",
        exposed: "false"
    });
    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const regUserInfo = await createUserWithEmailAndPassword(fAuthService, email, InputEncryption(password));

            const usersRef = collection(fDbService, "users");
            await setDoc(doc(usersRef, regUserInfo.user.uid), {
                userName,
                email,
                exposed: exposed === 'true'
            });
            navigate('/signin');
        } catch (e) {
            console.log(e);
        }
    }

    return <StyledAuthLayout>
        <form onSubmit={handleSignup}>
            <StyledCommonInputGroup>
                <label htmlFor="userName">Username</label>
                <input id="userName" type="text" name="userName" value={userName} onChange={onChange}/>
            </StyledCommonInputGroup>
            <StyledCommonInputGroup>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" value={email} onChange={onChange}/>
            </StyledCommonInputGroup>
            <StyledCommonInputGroup>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" value={password} onChange={onChange}/>
            </StyledCommonInputGroup>
            <StyledCommonInputGroup>
                <label>Exposed</label>
                <label htmlFor="">노출</label><input type="radio" name="exposed" value="true" onChange={onChange} checked={exposed === 'true'}/>
                <label htmlFor="">비노출</label><input type="radio" name="exposed" value="false" onChange={onChange} checked={exposed === 'false'}/>
            </StyledCommonInputGroup>
            {/* btn group*/}
            <StyledCommonInputGroup>
                <button type="button" onClick={() => navigate(-1)}>이전으로</button>
                <button type="submit">완료</button>
            </StyledCommonInputGroup>
        </form>
    </StyledAuthLayout>
}