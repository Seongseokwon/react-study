import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {fAuthService, fDbService} from '../firebase'
import {doc, getDoc} from 'firebase/firestore'
import {StyledMainLayout} from "../components/styles/Main.styled";
export default function Main() {
    const navigate = useNavigate();


    useEffect(() => {
        fAuthService.onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
                console.log('유저 정보 O');
                setUserInformation(user.uid);
            } else {
                console.log('유저 정보 X');
                navigate('/');
            }
        })
    }, []);

    const setUserInformation = async (uid) =>{
        const userRef = doc(fDbService, "users", uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            console.log(userSnap.data())
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

