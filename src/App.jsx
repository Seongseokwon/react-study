import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/auth/Login';

function App() {


    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Login />} />
            
        </Routes>
    );
}

export default App;
