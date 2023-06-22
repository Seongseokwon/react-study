import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/auth/Login';

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
            
        </Routes>
    );
}

export default App;
