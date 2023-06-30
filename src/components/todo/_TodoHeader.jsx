import {StyledTodoHeader} from "./styles/_Todo.styled";

import {fAuthService} from "../../firebase";
import {useNavigate} from "react-router-dom";

export default function TodoHeader() {
    const navigate = useNavigate();
    const handleLogout = async (event) => {
        event.preventDefault();
        sessionStorage.removeItem('USER_INFO');
        await fAuthService.signOut();
        navigate('/');

    }

    return <StyledTodoHeader>
        <div>로고?</div>
        <div>
            <button type="button">알림</button>
            <button type="button">User Card</button>
            <button type="button" onClick={handleLogout}>로그아웃 1 </button>
        </div>
    </StyledTodoHeader>
}