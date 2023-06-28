import React from "react";
import useInput from "../../hooks/useInput";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {fAuthService} from "../../firebase";
import {FadeLoader} from "react-spinners";
import {useRecoilState} from "recoil";
import {spinnerState} from "../../recoil/spinner/atoms";
import {useNavigate} from "react-router-dom";
import InputEncryption from "../../utils/inputEncryption";

export default function Login() {
    const authService = fAuthService;
    const navigate = useNavigate();

    const [spinnerShow, setSpinnerShow] = useRecoilState(spinnerState);
    const [{email, password}, onChange, inputReset] = useInput({
        email: "",
        password: "",
    });

    const handleLogin = async (event) => {
        event.preventDefault();

        setSpinnerShow(true);

        try {
            await signInWithEmailAndPassword(
                authService,
                email,
                InputEncryption(password)
            );
            setSpinnerShow(false);
            navigate('/todo')
        } catch (err) {
            console.log(err);
            setSpinnerShow(false);
        }
    };

    const handleGoogleLogin = async () => {
        setSpinnerShow(true);
        try {
            const userInfo = await signInWithPopup(
                authService,
                new GoogleAuthProvider()
            );
            // TODO : 저장된 사용자인지 확인해서 그렇지 않다면 FireStor에 유저정보 저장
        } catch (err) {
            console.log(err);
            setSpinnerShow(false);
        }
    };

    const moveSignup = () => {
        navigate('/signup')
    };

    return (
        <>
            {spinnerShow && <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <FadeLoader color="#36d7b7"/>
            </div>}

            <form onSubmit={handleLogin}>
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
                    <button type="submit">
                        로그인
                    </button>
                    <button type="button" onClick={handleGoogleLogin}>
                        구글 로그인
                    </button>
                    <button type="button" onClick={moveSignup}>
                        회원가입
                    </button>
                </div>
            </form>
        </>
    );
}
