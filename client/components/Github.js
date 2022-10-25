import React from 'react';


const Github = () => {
  return (
    <div>
      <button type="signin">
      <img src="./image/Github.png" />
       Sign in with Github
       </button>
      <style jsx>
        {`
        button {
          background: black;
          color: white;
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

export default Github;

