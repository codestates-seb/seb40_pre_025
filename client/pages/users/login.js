import Link from "next/link";
import Google from "../../components/social/GoogleLogin";
import Github2 from "../../components/social/Github2";
import { useState } from "react";
export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userEmailReg, setUserEmailReg] = useState(true);
  const [userPw, setUserPw] = useState("");
  const [userPwReg, setUserPwReg] = useState(true);
  const emailReg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const validation = () => {
    emailReg.test(userEmail) ? setUserEmailReg(true) : setUserEmailReg(false);
    userPw.length > 0 ? setUserPwReg(true) : setUserPwReg(false);
    if (emailReg.test(userEmail) & (userPw.length > 0)) {
      alert("로그인 요청");
    }
  };
  const handleClickSignUp = (e) => {
    e.preventDefault();
    validation();
  };
  return (
    <div id="loginBox" className="flexItem">
      <div className="ta-center">
        <div className="logo">
          <Link href="/">
            <a>
              <svg
                className="svg-icon"
                width="32"
                height="37"
                viewBox="0 0 32 37"
              >
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="socialLogin">
        <div className="socialLoginBtn">
          <Google />
        </div>
        <div className="socialLoginBtn2">
          <Github2 />
        </div>
      </div>
      <div className="formContainer">
        <form id="login-form" className="d-flex fd-column">
          <div id="input" className="d-flex fd-column">
            <label className="lable" form="email">
              Email
            </label>
            <input
              className={userEmailReg ? "input" : "failed"}
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
            <div className="failedWord">
              {userEmailReg
                ? null
                : userEmail.length > 0
                ? "The email is not a valid email address."
                : "Email cannot be empty."}
            </div>
          </div>
          <div className="d-flex fd-column">
            <div className="d-flex ai-center jc-space-between">
              <label className="lable">Password</label>
              <Link href="/">
                <a>Forgot password?</a>
              </Link>
            </div>
            <input
              className={userPwReg ? "input" : "failed"}
              onChange={(e) => setUserPw(e.target.value)}
            ></input>
            <div className="failedWord">
              {userPwReg ? null : "Password cannot be empty."}
            </div>
          </div>
          <button className="s-btn" onClick={handleClickSignUp}>
            Log in
          </button>
        </form>
      </div>
      <div className="assistance">
        <div className="margin-T-B">
          {`Don't have an account? `}
          <Link href="/users/signup">
            <a>Sign up</a>
          </Link>
        </div>
        <div className="margin-T-B">
          {`Are you an employer? `}
          <Link href="/">
            <a>
              Sign up on Talent
              <svg id="footIcon" width="14" height="14" viewBox="0 0 14 14">
                <path
                  d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"
                  fill="#3399ff"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .failedWord {
          color: red;
          height: 15px;
          margin-top: 5px;
          font-size: small;
        }
        .failed {
          -webkit-appearance: none;
          width: auto;
          margin: 0;
          padding: 0.6em 0.7em;
          border-radius: 3px;
          border: 1px solid red;
          font-size: 1rem;
        }
        .socialLogin {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
        }
        .socialLoginBtn {
          margin-top: 4px;
          margin-bottom: 8px;
        }
        #footIcon {
          text-align: center;
          color: hsl(206, 100%, 40%);
          vertical-align: text-bottom !important;
          overflow: hidden;
        }
        a {
          color: hsl(206, 100%, 40%);
          text-decoration: none;
        }
        .jc-space-between {
          justify-content: space-between !important;
        }
        .ai-center {
          align-items: center !important;
        }
        .margin-T-B {
          margin-top: 5px;
          margin-bottom: 15px;
        }
        .ta-center {
          text-align: center !important;
          font-size: 1rem;
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
        }
        .svg-icon {
          vertical-align: bottom;
        }
        .fd-column {
          flex-direction: column;
        }
        .d-flex {
          display: flex;
        }
        .flex_center {
          justify-content: center;
          align-items: center;
        }
        .logincontainer {
          height: 100vh;
          background-color: rgb(241 242 243);
          display: flex;
          justify-content: center;
          margin: 0;
        }
        #loginContent {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 24px;
          margin: 0;
          border-top-width: 0;
          border-bottom-width: 0;
          border-radius: 0;
          box-sizing: border-box;
        }
        .formContainer {
          box-sizing: border-box;
          box-shadow: 1px 1px 10px 2px rgb(233, 233, 233);
          width: 290px;
          background-color: white;
          border-radius: 7px;
          padding: 12px;
          margin-top: 4px;
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
        }
        #login-form {
          margin: 12px;
        }
        .lable {
          margin: 4px;
          margin-right: 0;
          margin-left: 0;
          font-size: 1rem;
          font-family: inherit;
          color: black;
          font-weight: 600;
          padding: 0;
        }
        .input {
          -webkit-appearance: none;
          width: auto;
          margin: 0;
          padding: 0.6em 0.7em;
          border: 1px solid rgb(192, 191, 191);
          border-radius: 3px;
          font-size: 1rem;
        }
        .s-btn {
          color: white;
          margin-top: 10px;
          margin-right: 0;
          margin-left: 0;
          background-color: hsl(206, 100%, 52%);
          box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
          position: relative;
          display: inline-block;
          padding: 0.8em;
          border: 1px solid transparent;
          border-radius: 3px;
          outline: none;
          font-family: inherit;
          font-weight: normal;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
        }
        .assistance {
          width: 290px;
          height: 78px;
          text-align: center;
          font-size: 1rem;
          padding: 16px;
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
        }
        #loginBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 20px;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
