import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import useInput from "../hooks/useInput";

export default function Todo() {
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
                body: createTodo
            });
            inputReset();
            await fetchingTodoList();
        } catch (err) {
            console.log(err);
        }


    }

    return <div>
        {/* todo GNB영역 */}
        <div>
            GNB
        </div>
        {/* todo list 영역 */}
        <div>
            <ul>
                {todoList.map(item => (<li key={item.id}>{item.todo}</li>))}
            </ul>
        </div>

        <form onSubmit={handeSubmit}>
            <input type="text" name="todo" value={todo} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    </div>
}