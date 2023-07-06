import {StyledTodoHeader} from "../todo/styles/_Todo.styled";

import {fAuthService} from "../../firebase";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const handleLogout = async (event) => {
        event.preventDefault();
        sessionStorage.removeItem('USER_INFO');
        await fAuthService.signOut();
        navigate('/');
    }



    return <StyledTodoHeader>
        <div>
            <button onClick={() => navigate('/todo')}>로고?</button></div>
        <div>
            <button type="button" onClick={() => navigate('/friends')}>친구찾기</button>
            <button type="button">알림</button>
            <button type="button">User Card</button>
            <button type="button" onClick={handleLogout}>로그아웃 1 </button>
        </div>
    </StyledTodoHeader>
}