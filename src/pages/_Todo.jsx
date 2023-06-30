import {useEffect, useState} from "react";
import TodoHeader from "../components/todo/_TodoHeader";
import TodoInput from "../components/todo/_TodoInput";
import TodoList from "../components/todo/_TodoList";
import {StyledTodoLayout} from "../components/todo/styles/_Todo.styled";
import {doc, setDoc, collection} from 'firebase/firestore'
import {fDbService} from "../firebase";
import {useRecoilValue} from "recoil";
import {userStateAtom} from "../recoil/user/atoms";

export default function Todo() {
    const [userInfo, setUserInfo] = useState(null);
    const [todoList, setTodoList] = useState([]);
    const userState = useRecoilValue(userStateAtom);

    const fetchingTodoList = async () => {
        /*try {
            const response = await fetch('http://localhost:5000/api/todo');
            const data = await response.json();
            setTodoList(data);
        } catch (err) {
            console.log(err);
        }*/
    }

    useEffect(() => {
        fetchingTodoList();
        getUserInfo();
    }, [])

    const getUserInfo = () => {
        if (JSON.parse(sessionStorage.getItem('USER_INFO'))) {
            const {userInfo} = JSON.parse(sessionStorage.getItem('USER_INFO'));
            setUserInfo(prev => ({...prev, ...userInfo}));
        } else {
            setUserInfo(prev => ({...prev, ...userState}));
        }
    }
    const onUpdateTodoStatus = async (todo) => {
        console.log(todo);
        setTodoList(prev => prev.map(prevTodo => prevTodo.id === todo.id ? {
            ...prevTodo,
            completed: !todo.completed
        } : prevTodo))
        try {
            const response = await fetch('http://localhost:5000/api/todo', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(todo)
            })
            if (!response.ok) {
                throw new Error(JSON.stringify(response));
            }
        } catch (err) {
            console.log(err);
            setTimeout(() => {
                setTodoList(prev => prev.map(prevTodo => prevTodo.id === todo.id ? {
                    ...prevTodo,
                    completed: todo.completed
                } : prevTodo))
            }, 1000)

        }
    }

    const onRegisterTodo = async (newTodo) => {
        try {
            // await setDoc(doc(fDbService, "todos", userInfo.uid), newTodo);
            const todosRef = doc(collection(fDbService, "users/" + userInfo.uid + "/todos"));

            await setDoc(todosRef, newTodo);
        } catch (err) {
            console.log(err);
        }
    }

    return <StyledTodoLayout>
        <TodoHeader/>
        <TodoList todoList={todoList} onUpdateTodoStatus={onUpdateTodoStatus}/>
        <TodoInput onRegisterTodo={onRegisterTodo}/>
    </StyledTodoLayout>
}