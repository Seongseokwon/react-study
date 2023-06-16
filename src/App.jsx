import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Login from "./pages/auth/Login";

function App() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    return (
        <div>

        <Login />
        </div>
    );
}

export default App;
