import React from "react";
import {StyledTodoItem, StyledTodoItemLayout, StyledTodoListLayout} from "./styles/_Todo.styled";

export default function TodoList({todoList, onUpdateTodoStatus}) {

    const handleUpdateTodoStatus = (event, item) => {
        console.log(event);
        onUpdateTodoStatus(item);

    }

    return <StyledTodoListLayout>
        <StyledTodoItemLayout>
            {todoList.map(item => (
                <StyledTodoItem key={item.id}>
                    <input type="checkbox" checked={item.completed} onChange={(e) => handleUpdateTodoStatus(e, item)}/>
                    <span style={item.completed ? {textDecoration: 'line-through'}: {}}>{item.todo}</span>
                    <button type='button'>삭제</button>
                </StyledTodoItem>))}
        </StyledTodoItemLayout>
    </StyledTodoListLayout>
}