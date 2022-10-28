import React from "react";

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
        <a href="/questions/ask">Qusetions</a>
      </div>
      <div className="tags">
        <a href="/users/[id]/profile">Tags</a>
      </div>
      <div className="users">
        <a href="">Users</a>
      </div>
      <style jsx>
        {`
          .sidebar {
            display: inline-block;
            height: 100vh;
            width: 23%;
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
          .home:active,
          .qusetions:active,
          .tags:active,
          .users:active {
            color: black;
            background: rgb(237, 239, 240);
            border-right: 3px solid rgb(239, 109, 29);
          }
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
