import React from 'react';
import Image from 'next/image';

const Google = () => {
  return (
    <div>
      <button type="signin">
      <Image src="/images/google.png" alt="google" width="15" height="15"/>
      <a href="348796123545-cu5d85hhiu4uk2e1dnne51dapc0anlcl.apps.googleusercontent.com">
        Sign in with Google</a>
       </button>
      <style jsx>
        {`
        a {
          margin-left: 5px;
        }
        .image{
          margin-right: 5px;
        }
        button {
          background: white;
          color: black;
          width: 290px;
          padding: 10px 0px 10px 0px;
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