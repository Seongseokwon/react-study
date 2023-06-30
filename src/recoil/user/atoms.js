import {atom} from "recoil";

export const userStateAtom = atom({
    key: 'userStateAtom',
    default: {
        uid: '',
        email: '',
        userName: '',
        exposed: false
    }
})