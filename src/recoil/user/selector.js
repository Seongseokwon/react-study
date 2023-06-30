import {selector} from "recoil";
import {userStateAtom} from "./atoms";

export const userStateSelector = selector({
    key: 'userStateAtom',
    get: ({get}) => {
        return get(userStateAtom);
    }
})