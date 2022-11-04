import React from 'react';
import Image from 'next/image';

const Github = () => {
  return (
    <div>
      <button type="signin">
      <Image src="/images/g.png" alt="google" width="15" height="15"/>
       <a>Sign in with Github</a>
       </button>
      <style jsx>
        {`
        a {
          margin-left: 5px;
        }
        button {
          background: rgb(36,38,42);
          color: white;
          width: 290px;
          padding: 7px 0px 7px 0px;
          cursor: pointer;
          border-radius: 5px;
          border: 0.5px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
        }
        button :hover {
          background: black;
        }    
        `}
      </style>
    </div>
  );
};

export default Github;

