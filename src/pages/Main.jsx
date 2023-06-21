import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fAuthService } from '../firebase'

export default function Main() {
    useEffect(() => {
        fAuthService.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                console.log('유저 정보 O');
                // setIsAuthenticated(true);
            } else {
                console.log('유저 정보 X');
                // setIsAuthenticated(false);
            }
        })
    }, []);

    const handleLogOut = () => {
        fAuthService.signOut();
    }
    return (
        <div>
            Main 입니다.
            <Link to="signin"> 시작하기</Link>


        </div>
    );
}

