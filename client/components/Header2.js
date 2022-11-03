import React from "react";
import Image from 'next/image';

const Header = () => {
  return <div className="header">
    <header>
    <nav>
    <ul>
    <li><a href="/"><Image src="/images/s.png" alt="stackoverflow" width="150" height="30"/></a></li>
    <li><a href=""><input type="text" placeholder="  🔍 Search..." onClick=""  /></a></li>
    <li><a href="/users/login"><Image src="/images/user.png" alt="stackoverflow" width="20" height="20"/></a></li>
    <li><a href="/users/signup"><button className="logout">Log out</button></a></li>
    </ul>
    <style jsx>
      {`
      .logout {
        cursor: pointer;
        background: rgb(218,232,241);
        color: rgb(45,95,139);
        padding: 7px 12px 7px 12px;
        border: 1px solid rgb(158,190,214);
        border-radius: 3px;
        box-shadow: 0.5px black;
        font-size: 10px;
        margin-left: 10px;
      }
      .logout :hover {
        background: rgb(164,201,229);
        color: rgb(19,60,92);
        border: 1px solid rgb(83,138,179);
      }
      input {
        width: 950px;
        height: 25px;
        font-size: 13px;
        margin-left: 60px;
        margin-right: 50px;
      }
      header {
        background: rgb(246,248,247);
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
      }
      li {
        display: inline-block;
      }
      nav {
        background: rgb(246,248,247);
      }
      `}
    </style>
    </nav>
    </header>
  </div>;
};

export default Header;
