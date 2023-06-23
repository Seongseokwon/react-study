import useInput from "../../hooks/useInput";

export default function TodoInput({onSubmit}) {

    const [{todo}, onChange, inputReset] = useInput({todo: ""});

    return <form onSubmit={onSubmit}>
        <input type="text" name="todo" value={todo} onChange={onChange}/>
        <button type="submit">등록</button>
    </form>
}