import { RecoilRoot } from 'recoil';
import './App.css';
import Login from "./pages/auth/Login";
import { useEffect } from 'react';


function App() {
    useEffect(() => {
        
    }, []);

    return (
        <RecoilRoot>
            <Login />
        </RecoilRoot>
    );
}

export default App;
