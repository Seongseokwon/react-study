import React, {useEffect} from 'react';

import {Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/auth/Login';
import Signup from "./pages/auth/Signup";
import Todo from "./pages/_Todo";
import {StyledLayout} from "./components/styles/Main.styled";
import Header from "./components/layouts/Header";
import Friends from "./pages/Friends";

function App() {
    return (
        <StyledLayout>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/friends' element={<Friends />}/>
                <Route path='/signin' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/todo' element={<Todo/>}/>
            </Routes>
        </StyledLayout>
    );
}

export default App;
