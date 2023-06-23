import {useEffect, useState} from "react";
import TodoHeader from "../components/todo/_TodoHeader";
import TodoInput from "../components/todo/_TodoInput";
import TodoList from "../components/todo/_TodoList";
import {StyledTodoLayout} from "../components/todo/styles/_Todo.styled";

export default function _Todo() {
    const [todoList, setTodoList] = useState([]);

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

    const onRegisterTodo = async (newTodo) => {
        try {
            await fetch('/todo', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTodo)
            });
            await fetchingTodoList();
        } catch (err) {
            console.log(err);
        }
    }

    return <StyledTodoLayout>
        <TodoHeader/>
        <TodoList todoList={todoList}/>
        <TodoInput onRegisterTodo={onRegisterTodo}/>
    </StyledTodoLayout>
}


/*
<Style.TodoLayout>
    <TodoHeader />
    <TodoContent />
    <TodoInput />
</Style.TodoLayout>
*/
