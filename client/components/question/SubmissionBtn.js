import Link from 'next/link'
import React, { useState } from 'react'





export default function SubmissionBtn() {


  return (
    <div className='button-box'>
    <div className='button-list'>
        <div className='reviewbtn'>
        <Link href="/">
      <button 
      type='button'
      className='s-btn nextbtn'>
        Review your queston
        </button>
        </Link>
      </div>
      <div className='reviewbtn'>
        <Link href="/">
      <a className='s-btn draftbtn'>Discard draft</a>
      </Link>
      </div>
    </div>
    <style jsx>{`
        .button-box{ 
        margin-bottom: 5%;
        margin-top: 4%;
        display: flex;
        flex-direction: column;
        margin-left: 3%;
        width: 100%;
      
        }
        .button-list {
            display: flex;
            width: 100%;
        }
        .nextbtn{
            color: #ffffff;
            background-color: #0a95ff;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 13vw;
            flex-basis: auto;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
           outline: 0;
           padding: 5%;
           text-decoration: none;
           cursor: pointer;    
         

        }
        .nextbtn:hover{
          background-color: #77c0f8;
          transition: 0.5s;
        }
        .draftbtn{
            color: #c22e32;
            background-color: #00000000;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 13vw;
            margin-left: 25%;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
           outline: 0;
           padding: 5%;
           text-decoration: none;
            cursor: pointer;
        }
        .draftbtn:hover{
          background-color: rgb(253, 238, 238);
          transition: 0.5s;
        }
        @media screen and (max-width: 1280px)  {
          .nextbtn, .draftbtn{
            width: 17vw;
          }
          
        }
        @media screen and (max-width: 900px)  {
          .nextbtn{
            width: 22vw;
          }
          
          .draftbtn{
            width: 17vw;

          }
         
          
        }
        @media screen and (max-width: 700px)  {
          .nextbtn{
            width: 29vw;
          }
          
          .draftbtn{
            width: 17vw;

          }
         
          
        }
        `}</style>
  </div>
  )
}
