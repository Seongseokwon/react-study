import React from "react";
import useInput from "../../hooks/useInput";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth'
import { firebaseApp } from "../../firebase";
import useAuthentication from "../../hooks/auth/useAuthentication";

export default function Login() {
  const firebaseAuth = getAuth(firebaseApp);

  const [{ email, password }, onChange, inputReset] = useInput({
    email: "",
    password: "",
  });

  const [onLoginSuccess] = useAuthentication();

  const handleLogin = async () => {
    try {
        const curUserInfo = await signInWithEmailAndPassword(firebaseAuth, email, password);
        console.log(curUserInfo);
    } catch(err) {
        console.log(err);
    }
  }

  const handleGoogleLogin = async () => {
    try {
        const auth = getAuth();
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        onLoginSuccess(result);
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
