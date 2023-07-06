import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {userStateAtom} from "../../recoil/user/atoms";


const useAuthentication = () => {
    const [userInfo, setUserInfo] = useRecoilState(userStateAtom);

    useEffect(() => {
        console.log(sessionStorage.getItem('USER_INFO'));
        if (sessionStorage.getItem('USER_INFO')) {
            const uInfo = JSON.parse(sessionStorage.getItem('USER_INFO'));
            setUserInfo(prev => ({...prev, ...uInfo}));
        }
    },[])

    return {userInfo};
}

export default useAuthentication;