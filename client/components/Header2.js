import React from "react";
import Image from 'next/image';

const Header = () => {
  return <div className="header">
    <Image src="/images/s.png" alt="stackoverflow" width="150" height="30"/>
    <input type="text" placeholder="🔍 Search..." onclick="this.value='';"  />
    <Image src="/images/user.png" alt="stackoverflow" width="20" height="20"/>
    <style jsx>
      {`
      input {
        width: 500px;
        height: 16px;
        font-size:10px;
      }
      `}
    </style>
  </div>;
};

export default Header;
