import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="center">
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
            <input type="text" placeholder="  🔍 Search..." onClick={()=>{}} />
          </div>
          <div className="center">
            <a href="/users/signup">
              <button className="logout">Log out</button>
            </a>
          </div>
        </div>
        <style jsx>
          {`
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
            img {
              min-width: 150px;
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
            .logout {
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

export default Header;