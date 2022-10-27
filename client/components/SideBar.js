import React from "react";

const SideBar = () => {
  return <div className="sidebar">
    <div className="home"><a href="/"><b>Home</b></a></div><br />
    <div className="qusetions"><a href="">Qusetions</a></div>
    <div className="tags"><a href="">Tags</a></div>
    <div className="users"><a href="">Users</a></div>
    <style jsx>
      {`
      .sidebar {
        height: 1000px;
        width: 154px;
        top: 0;
        left: 0;
        padding-top: 40px;
        background: rgb(255,255,255);
        border-right: 0.5px solid grey;
        margin-left: 70px;
        }
        .sidebar div {
        padding: 8px;
        font-size: 15px;
        
        }
        a {
          text-decoration-line: none;
          color: rgb(64,71,77);
        }
        a :hover {
          color: black;
        }
        .home:active, 
        .qusetions:active, 
        .tags:active, 
        .users :active {
          background: rgb(237,239,240);
          border-right: 3px solid rgb(239,109,29);
        }
        .home:visited, 
        .qusetions:visited, 
        .tags:visited, 
        .users:visited {
          background: rgb(237,239,240);
          border-right: 3px solid rgb(239,109,29);
        }
        .home{
          background: rgb(237,239,240);
          border-right: 3px solid rgb(239,109,29);
        }
      `}
    </style>
  </div>;
};

export default SideBar;
