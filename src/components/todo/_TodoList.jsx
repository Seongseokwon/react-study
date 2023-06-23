import React from "react";
import {StyledTodoItem, StyledTodoItemLayout, StyledTodoListLayout} from "./styles/_Todo.styled";

export default function TodoList({todoList}) {


    return <StyledTodoListLayout>
        <StyledTodoItemLayout>
            {todoList.map(item => (
                <StyledTodoItem key={item.id}>
                    <input type="checkbox"/>
                    {item.todo}
                    <button type='button'>삭제</button>
                </StyledTodoItem>))}
        </StyledTodoItemLayout>
    </StyledTodoListLayout>
}