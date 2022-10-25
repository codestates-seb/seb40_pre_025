import React from 'react';

const Google = () => {
  return (
    <div>
      <button type="signin">
      <img src="./image/Google.png" />
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
        }
        `}
      </style>
    </div>
  );
};

export default Google;