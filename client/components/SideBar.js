import React from "react";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="home">
        <a href="/">
          <b>Home</b>
        </a>
      </div>
      <div className="qusetions">
        <a href="">Qusetions</a>
      </div>
      <div className="tags">
        <a href="">Tags</a>
      </div>
      <div className="users">
        <a href="">Users</a>
      </div>
      <style jsx>
        {`
          .sidebar {
            height: 100%;
            width: 120px;
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 40px;
            background: rgb(255, 255, 255);
            border: 0.5px solid grey;
          }
          .sidebar div {
            padding: 8px;
            font-size: 12px;
            display: block;
          }
          a {
            text-decoration-line: none;
            color: rgb(64, 71, 77);
          }
          a :hover {
            color: black;
            font-weight: bold;
          }
          .home {
            background: rgb(237, 239, 240);
            border-right: 3px solid rgb(239, 109, 29);
          }
        `}
      </style>
    </div>
  );
}
