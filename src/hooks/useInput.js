import {useCallback, useState} from "react";

const useInput = (value) => {
    const [inputs, setInputs] = useState(value);

    const onChange = useCallback(event => {
        const {name, value} = event.target;
        setInputs(prev => ({...prev, [name]: value}));
    }, [])

    const inputReset = useCallback(() => setInputs(value), [value]);

    return [inputs, onChange, inputReset];
}

export default useInput;