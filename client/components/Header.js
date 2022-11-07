import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header2 from "./Header2";



export default function Header(){

  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return (
    <header>
      <div className="center border-B start">
        <div className="grid">
          <div className="center">
            <a href="/">
              <Image
                src="/images/s.png"
                alt="stackoverflow"
                width="150"
                height="30"
              />
            </a>
          </div>
          <div className="center w100">
            <input type="text" placeholder="  🔍 Search..." />
          </div>
          <div className="center">
          {  !login 
          ? 
          <>
          <a href="/users/login">
              <button className="login">Log in</button>
          </a>
          <a href="/users/signup">
              <button className="signup">Sign up</button>
          </a>
          </>
          : 
          <>
          <div className="person">
              <img
                src={`https://picsum.photos/seed/picsum/200/200`}
                alt="image"
                className="people"
              />
            </div>
          <a href="/">
            <button onClick={onClickLogOut} className="logout">
              Log out
            </button>
          </a>
          </>
            }
          </div>
        </div>
        <style jsx>
          {`
          .logout {
                cursor: pointer;
                background: rgb(218, 232, 241);
                color: rgb(45, 95, 139);
                padding: 7px 12px 7px 12px;
                border: 1px solid rgb(158, 190, 214);
                border-radius: 3px;
                box-shadow: 0.5px black;
                font-size: 10px;
                margin-left: 10px;
              }
              .logout :hover {
              background: rgb(164, 201, 229);
              color: rgb(19, 60, 92);
              border: 1px solid rgb(83, 138, 179);
            }
          .people{
            width: 100%;
            height: 100%;
          }
          .person{
            width: 27px;
            height: 27px;
          }
            .border-B {
              box-shadow: 1px 1px 10px 1px rgb(228, 228, 228);
            }
            .modal {
              background: white;
              border: 1px solid grey;
              display: flex;
              flex-direction: row;
            }
            .div {
              justify-content: center;
            }
            .divbar__menu {
              flex-direction: center;
            }
            .grid {
              display: grid;
              min-width: 1380px;
              width: 70%;
              grid-template-columns: 25% 50% 25%;
            }
            .w100 {
              width: 100%;
            }
            button {
              width: 60px;
            }
            .center {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            Image :hover {
              background: rgb(221, 224, 227);
            }
            input:focus {
              border-color: #0982f0;
            }
            .login {
              cursor: pointer;
              background: rgb(218, 232, 241);
              color: rgb(45, 95, 139);
              padding: 7px 12px 7px 12px;
              border: 1px solid rgb(158, 190, 214);
              border-radius: 3px;
              box-shadow: 0.5px black;
              font-size: 10px;
              margin-right: 5px;
            }
            .login :hover {
              background: rgb(164, 201, 229);
              color: rgb(19, 60, 92);
              border: 1px solid rgb(83, 138, 179);
            }
            .signup {
              cursor: pointer;
              background: rgb(19, 127, 254);
              color: rgb(255, 255, 255);
              padding: 8px 15px 8px 15px;
              border: 1px solid rgb(158, 190, 214);
              border-radius: 3px;
              box-shadow: 0.5px black;
              font-size: 10px;
              width: 75px;
              height: 28px;
            }
            .signup :hover {
              background: rgb(10, 93, 193);
              color: rgb(255, 255, 255);
              border: 1px solid rgb(0, 81, 190);
            }
            input {
              width: 100%;
              min-width: 200px;
              height: 25px;
              font-size: 13px;
              margin-left: 60px;
              margin-right: 50px;
            }
            header {
              background: rgb(246, 248, 247);
              display: flex;
              margin: 0px 80.5px 0px 80.5px;
              align-items: center;
              position: sticky;
              top: 0;
            }
            div {
              background: rgb(246, 248, 247);
              list-style-type: none;
              display: flex;
              align-items: center;
              margin: 0;
              height: 3.2rem;
            }
            @media screen and (max-width: 760px) {
              .divbar__menu {
                flex-direction: column;
              }
              input {
                width: 800px;
              }
              input {
                display: none;
              }
            }
          `}
        </style>
      </div>
    </header>
  );
};