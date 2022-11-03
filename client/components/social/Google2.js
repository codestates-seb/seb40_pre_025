import React from 'react';
import Image from 'next/image';

const Google = () => {
  return (
    <div>
      <button type="signin">
      <Image src="/images/google.png" alt="google" width="15" height="15"/>
      <a>Log in with Google</a>
       </button>
      <style jsx>
        {`
        a {
          margin-left: 5px;
        }
        button {
          background: white;
          color: black;
          width: 290px;
          padding: 7px 0px 7px 0px;
          cursor: pointer;
          border-radius: 5px;
          border: 0.5px solid grey;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
        }
        button :hover {
          background: rgb(246,248,247);
        }
        `}
      </style>
    </div>
  );
};

export default Google;