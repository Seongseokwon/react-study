import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {fAuthService, fDbService} from '../firebase'
import {doc, getDoc} from 'firebase/firestore'
import {StyledMainLayout} from "../components/styles/Main.styled";
import {useSetRecoilState} from "recoil";
import {userStateAtom} from "../recoil/user/atoms";

export default function Main() {
    const navigate = useNavigate();
    const setUserState = useSetRecoilState(userStateAtom)

    useEffect(() => {
        fAuthService.onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
                console.log('유저 정보 O');
                setUserInformation(user.uid);
            }
        })
    }, []);

    const setUserInformation = async (uid) =>{
        const userRef = doc(fDbService, "users", uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userInfo = {...userSnap.data(), uid}
            console.log(userInfo);
            setUserState(prev => ({...prev, ...userInfo}))
            sessionStorage.setItem("USER_INFO", JSON.stringify(userInfo));
            navigate('/todo');
        } else {
            console.log('no match data');
        }
    }

    return (
        <StyledMainLayout>
            <h1> Today Todo 지금 시작해보세요 </h1>
            <Link to="signin"> 시작하기</Link>
        </StyledMainLayout>
    );
}

