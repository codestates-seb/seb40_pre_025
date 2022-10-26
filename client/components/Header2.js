import React from "react";
import Image from 'next/image';

const Header = () => {
  return <div className="header">
    <header>
    <nav>
    <ul>
    <li><a href=""><Image src="/images/s.png" alt="stackoverflow" width="150" height="30"/></a></li>
    <li><a href=""><input type="text" placeholder="🔍 Search..." onClick="this.value='';"  /></a></li>
    <li><a href=""><Image src="/images/user.png" alt="stackoverflow" width="20" height="20"/></a></li>
    </ul>
    <style jsx>
      {`
      input {
        width: 500px;
        height: 16px;
        font-size:10px;
      }
      header {
        background: rgb(246,248,247);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
      }
      ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: center;
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
