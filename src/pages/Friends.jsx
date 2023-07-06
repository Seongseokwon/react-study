import {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {fDbService} from "../firebase";
import useAuthentication from "../hooks/auth/useAuthentication";
import {useRecoilValue} from "recoil";
import {userStateAtom} from "../recoil/user/atoms";

export default function Friends() {
    const {userInfo} = useAuthentication();
    const [userList, setUserList] = useState(null);
    const userState = useRecoilValue(userStateAtom);

    useEffect(() => {
        if(userState) {
            fetchUserList();
        }
    }, [userState]);

    const fetchUserList = async () => {
        console.log(userInfo);
        const q =
            query(collection(fDbService, `users`),
                where("email", "!=", userInfo.email),
                where("exposed", "==", true)
            );
        const querySnapshot = await getDocs(q);
        const temp = [];
        querySnapshot.forEach((doc) => {
            temp.push(doc.data());
        })
        console.log(temp);
        setUserList(temp);
    }

    return <div>
        친구 찾기
    </div>
}