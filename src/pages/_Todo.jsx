import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import useInput from "../hooks/useInput";
import TodoHeader from "../components/todo/_TodoHeader";
import TodoInput from "../components/todo/_TodoInput";
import TodoList from "../components/todo/_TodoList";
import {StyleTodoLayout} from "../components/todo/styles/_Todo.styled";

export default function _Todo() {
    const [todoList, setTodoList] = useState([]);
    const [{todo}, onChange, inputReset] = useInput({todo: ""});

    useEffect(() => {
        fetchingTodoList();
    }, [])

    const fetchingTodoList = async () => {
        try {
            const response = await fetch('/todos');
            const data = await response.json();
            setTodoList(data);
        } catch (err) {
            console.log(err);
        }
    }

    const handeSubmit = async (event) => {
        event.preventDefault();
        try {
            const createTodo = {id: uuidv4(), todo};
            await fetch('/todo', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(createTodo)
            });
            inputReset();
            await fetchingTodoList();
        } catch (err) {
            console.log(err);
        }
    }

    return <StyleTodoLayout>
        <TodoHeader/>
        <TodoList />
        <TodoInput onSubmit={handeSubmit}/>
    </StyleTodoLayout>
}


/*
<Style.TodoLayout>
    <TodoHeader />
    <TodoContent />
    <TodoInput />
</Style.TodoLayout>
*/
