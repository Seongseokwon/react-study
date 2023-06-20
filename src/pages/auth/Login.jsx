import React from "react";
import useInput from "../../hooks/useInput";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { fAuthService } from '../../firebase'

export default function Login() {
  const authService = fAuthService;

  const [{ email, password }, onChange, inputReset] = useInput({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
        const curUserInfo = await signInWithEmailAndPassword(authService, email, password);
        console.log(curUserInfo);
    } catch(err) {
        console.log(err);
    }
  }

  const handleGoogleLogin = async () => {
    try {
        const userInfo = await signInWithRedirect(authService, new GoogleAuthProvider());
        // TODO : 저장된 사용자인지 확인해서 그렇지 않다면 FireStor에 유저정보 저장
    } catch(err) {
        console.log(err);
    }
  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        {/*  회원가입 및 로그인 버튼*/}
        <div>
          <button type="button" onClick={handleLogin}>로그인</button>
          <button type="button" onClick={handleGoogleLogin}>구글 로그인</button>
          <button type="button">회원가입</button>
        </div>
      </form>
    </>
  );
}
