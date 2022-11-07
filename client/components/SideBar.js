import React from "react";
import { useState, useEffect } from "react";

export default function SideBar() {
  return (
    
    <div className="sidebar">
      <div className="home">
        <a href="/">
          <b>Home</b>
        </a>
      </div>
      <br />
      <div className="qusetions">
        <a href="../questions/ask">Qusetions</a>
      </div>
      <div className="users">
        <a href="/users/user">Users</a>
      </div>
      <div className="mypage">
        <a href="/users/profile">My page</a>
      </div>
      <style jsx>
        {`
          .sidebar {
            display: inline-block;
            height: 100vh;
            width: 15rem;
            position: sticky;
            top: 0;
            left: 0;
            padding-top: 3rem;
            background: rgb(255, 255, 255);
            border-right: 0.5px solid grey;
          }
          .sidebar div {
            padding: 8px;
            font-size: 15px;
            display: block;
          }
          a {
            text-decoration-line: none;
            color: rgb(64, 71, 77);
            padding-left: 5rem;
          }
          a :hover {
            color: black;
          }
          .mypage:active,
          .home:active,
          .qusetions:active,
          .tags:active,
          .users:active {
            color: black;
            background: rgb(237, 239, 240);
            border-right: 3px solid rgb(239, 109, 29);
          }

          .mypage:hover,
          .home:hover,
          .qusetions:hover,
          .tags:hover,
          .users:hover {
            color: black;
            background: rgb(237, 239, 240);
            border-right: 3px solid rgb(239, 109, 29);
          }
        `}
      </style>
    </div>
  );
}
