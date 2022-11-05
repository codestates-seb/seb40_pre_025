import React from 'react';
import { useState, useEffect } from "react";


export default function user() {
  const [user, setUser] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNavRender = () => {
    const result = [];
    for (let i = 1; i <= myAnsers.pageInfo.totalPages; i++) {
      result.push(
        <div
          key={i}
          className="pageNav"
          onClick={(e) => {
            setCurrentPage(e.target.innerText);
          }}
        >
          <span>{i}</span>
          <style jsx>{`
            .pageNav {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 5px;
              width: 20px;
              height: 20px;
              border: 1px solid black;
              cursor: pointer;
            }
            .pageNav:hover {
              background-color: rgb(230, 230, 230);
            }
          `}</style>
        </div>
      );
    }
    return result;
  };
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "text/xml",
    });
    fetch(
      `http://54.180.175.144:8080/user?page=1&size=36`,
    )
      .then((res) => res.json())
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
     <div className='title'>
      Users
      <div className='input'>
      <input type="text" placeholder="🔍  Filter by user"/>
      </div>

      <div className='grid'>
        {user?.map((person) =>
        <div className='profile' key={person.userId}>
        <img src={`https://picsum.photos/${person.userId}/200`} alt="image" width="70" height="70"/>
        <div>
          <div className='userName'>{person.userName}</div>
          <div className='email'>{person.email}</div>
        </div>
      </div>)}
      </div>
      <style jsx>{`
        img:hover{
          cursor: pointer;
        }
        .userName{
          display: flex;
          font-size: 15px;
          color: rgb(46,93,192);
          display: flex;
          align-items: center;
          justify-content: left;
          margin-left: 20px;
        }
        .userName:hover{
          color: rgb(0, 51, 162);
        }
        .email:hover{
          color: black;
        }
        .email{
          display: flex;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 20px;
          color: rgb(98,98,98);
        }
        .profile{
          margin-top: 70px;
          width: 254px;
          height: 82px;
          display: flex;
        }
        .profile:hover{
          background-color: rgb(244,246,245);
        }
        .grid{
          display: grid;
          width: 80%;
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
}
