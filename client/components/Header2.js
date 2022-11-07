import React from "react";
import Image from "next/image";

const Header2 = () => {
  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };
  return (
    <div className="header">
      <header>
        <nav>
          <div className="grid">
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
            <div className="btn2">
            <a href="/users/profile">
              <img
                src={`https://picsum.photos/seed/picsum/200/200`}
                alt="image"
                width="27"
                height="27"
                className="image"
              />
            </a>
            <li>
              <a href="/">
                <button onClick={onClickLogOut} className="logout">
                  Log out
                </button>
              </a>
            </li>
            </div>
          </div>
          <style jsx>
            {`
            .grid{
              text-align: center;
              justify-content: center;
              display: grid;
              min-width: 1380px;
              width: 100%;
              grid-template-columns: 25% 50% 25%;
            }
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
              }
              ul {
                list-style-type: none;
                display: flex;
                align-items: center;
              }
              li {
                display: inline-block;

              }
              nav {
                background: rgb(246, 248, 247);
                

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
        </nav>
      </header>
    </div>
  );
};

export default Header2;