import React, {useCallback} from "react";

import {v4 as uuidV4} from 'uuid';

import useInput from "../../hooks/useInput";

export default function TodoInput({onRegisterTodo}) {

    const [{todo}, onChange, inputReset] = useInput({todo: ""});

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        const newTodo = {id: uuidV4(), todo}
        onRegisterTodo(newTodo);

        inputReset();
    }, [ todo ])

    return <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={todo} onChange={onChange}/>
        <button type="submit">등록</button>
    </form>
}