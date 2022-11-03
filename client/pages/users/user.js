import React from 'react';

const user = () => {
  return (
    <div className='title'>
      Users
      <div className='input'>
      <input type="text" placeholder="🔍  Filter by user"/>
      </div>
      <div className='grid'>
      <div className='profile'>
        <img src="https://picsum.photos/200" alt="image" width="48" height="48"/>
        <div>
          <div className='userid'></div>
          <div className='email'></div>
          <div className='userName'></div>
          </div>
      </div>
      </div>
      <style jsx>{`
        .profile{
          margin-top: 70px;
          border: 1px solid grey;
          width: 254px;
          height: 82px;
      
        }
        .grid{
          display: grid;
          grid-template-columns: 25% 25% 25% 25%;
        }
        .title{
          font-size: 27px;
          margin: 34px 24px 24px 34px;
        }
        .input{
          margin-top: 10px;
          color:rgb(215,217,219);
        }
        input{
          padding: 7px 12px 7px 9px;
          border: 1px solid rgb(172,178,183);
        }
        `}</style>
    </div>
 
  );
};



export default user;