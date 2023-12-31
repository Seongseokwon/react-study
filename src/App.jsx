import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/auth/Login';
import Signup from "./pages/auth/Signup";
import Todo from "./pages/_Todo";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/todo' element={<Todo />} />
        </Routes>
    );
}

export default App;
