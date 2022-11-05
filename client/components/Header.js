import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="page">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">
                <Image
                  src="/images/s.png"
                  alt="stackoverflow"
                  width="150"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a href="">
                <input type="text" placeholder="  🔍 Search..." onClick="" />
              </a>
            </li>
            <li>
              <a href="/users/login">
                <button className="login">Log in</button>
              </a>
            </li>
            <li>
              <a href="/users/signup">
                <button className="signup">Sign up</button>
              </a>
            </li>
          </ul>
          <style jsx>
            {`
            .nav{
              background: blue;
              justify-content: center;
            }
            .navbar__menu{
              flex-direction: center;
              border: 1px solid red;
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
                padding: 7px 12px 7px 12px;
                border: 1px solid rgb(158, 190, 214);
                border-radius: 3px;
                box-shadow: 0.5px black;
                font-size: 10px;
              }
              .signup :hover {
                background: rgb(10, 93, 193);
                color: rgb(255, 255, 255);
                border: 1px solid rgb(0, 81, 190);
              }
              input {
                width: 950px;
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
              ul {
                list-style-type: none;
                display: flex;
                align-items: center;
                margin: 0;
                height: 3.2rem;
              }
              li {
                display: inline-block;
              }
              nav {
                background: rgb(246, 248, 247);
              }
              @media screen and (max-width: 968px) {
                .navbar__menu {
                  flex-direction: column;
                }
                input {
                  width: 800px;
                }
                button {
                  display: none;
                }
              }
            `}
          </style>
        </nav>
      </header>
    </div>
  );
};

export default Header;
