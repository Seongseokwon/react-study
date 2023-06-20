import { useState, useCallback } from "react";

const useAuthentication = (value) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onLoginSuccess = useCallback((userInfo) => {
        console.log(userInfo);
        window.sessionStorage.setItem('')
    });

    const onLogOut = useCallback(() => {

    });

    return [onLoginSuccess, onLogOut];
}

export default useAuthentication;