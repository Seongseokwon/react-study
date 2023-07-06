import {useEffect, useState} from "react";
import TodoInput from "../components/todo/_TodoInput";
import TodoList from "../components/todo/_TodoList";
import {StyledTodoLayout} from "../components/todo/styles/_Todo.styled";
import {doc, setDoc, getDocs, collection, query, where, orderBy, updateDoc} from 'firebase/firestore'
import {fDbService} from "../firebase";
import {useRecoilValue} from "recoil";
import {userStateAtom} from "../recoil/user/atoms";
import useAuthentication from "../hooks/auth/useAuthentication";

export default function Todo() {
    const {userInfo} = useAuthentication();
    const userState = useRecoilValue(userStateAtom);
    const [todoList, setTodoList] = useState([]);

    const fetchingTodoList = async () => {

        const q = query(collection(fDbService, `users/${userInfo.uid}/todos`), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q)
        const tempData = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tempData.push(doc.data());
        });
        setTodoList(tempData);
    }

    useEffect(() => {
        console.log(userState);
        if (userInfo) {
            fetchingTodoList();
        }
    }, [userState])

    const optimisticTodoStatusUpdate = (todo, flag) => {
        setTodoList(prev => prev.map(prevTodo => prevTodo.id === todo.id ? {
            ...prevTodo,
            completed: flag ? !todo.completed : todo.completed
        } : prevTodo))
    }

    const onUpdateTodoStatus = async (todo) => {
        try {
            optimisticTodoStatusUpdate(todo, true);
            const todoRef = doc(fDbService, `users/${userInfo.uid}/todos/${todo.id}`);
            await updateDoc(todoRef, {
                completed: !todo.completed
            })
        } catch (err) {
            console.log(err);
            optimisticTodoStatusUpdate(todo, false);

        }

    }

    const onRegisterTodo = async (newTodo) => {
        try {
            await setDoc(doc(fDbService, `users/${userInfo.uid}/todos/${newTodo.id}`), newTodo);
            fetchingTodoList();
        } catch (err) {
            console.log(err);
        }
    }

    return <StyledTodoLayout>
        <TodoList todoList={todoList} onUpdateTodoStatus={onUpdateTodoStatus}/>
        <TodoInput onRegisterTodo={onRegisterTodo}/>
    </StyledTodoLayout>
}