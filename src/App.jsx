import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';

import Login from "./pages/auth/Login";
import { fAuthService } from './firebase'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        fAuthService.onAuthStateChanged((user) => {
            if (user) {
                console.log('유저 정보 O');
                setIsAuthenticated(true);
            } else {
                console.log('유저 정보 X');
                setIsAuthenticated(false);
            }
        })
    }, []);

    const handleLogOut = () => {
        fAuthService.signOut();
    }

    return (
        <RecoilRoot>
            {!isAuthenticated && <Login />}
            {isAuthenticated && <div>
                로그인 성공 <button type="button" onClick={handleLogOut}>로그아웃 </button></div>}
        </RecoilRoot>
    );
}

export default App;
