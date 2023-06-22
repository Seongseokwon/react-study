import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/auth/Login';
import Signup from "./pages/auth/Signup";
import _Todo from "./pages/_Todo";

function App() {

    useEffect(() => {
        fetch('/todos')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }) 
    })
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/todo' element={<_Todo />} />
        </Routes>
    );
}

export default App;
