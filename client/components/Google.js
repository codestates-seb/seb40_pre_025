import React from 'react';
import Image from 'next/image';

const Google = () => {
  return (
    <div>
      <button type="signin">
      <Image src="/images/google.png" alt="google" width="15" height="15"/>
      Sign in with Google
       </button>
      <style jsx>
        {`
        button {
          background: white;
          color: black;
          width: 290px;
          padding: 7px 0px 7px 0px;
          cursor: pointer;
          border-radius: 5px;
          border: 0.5px solid grey;
        }
        `}
      </style>
    </div>
  );
};

export default Google;