import {StyledTodoHeader} from "./styles/_Todo.styled";

import {fAuthService} from "../../firebase";

export default function TodoHeader() {
    const handleLogout = async (event) => {
        event.preventDefault();
        console.log('logout')
        await fAuthService.signOut()
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