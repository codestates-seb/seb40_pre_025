import React from 'react'

export default function SubmissionBtn() {
  return (
    <div className='button-box'>
    <div className='button-list'>
        <div className='reviewbtn'>
      <button className='s-btn nextbtn'>Review your queston</button>
      </div>
      <div>
      <button className='s-btn draftbtn'>Discard draft</button>
      </div>
    </div>
    <style jsx>{`
        .button-box{ 
        margin-bottom: 5%;
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        }
        .button-list {
            display: flex;
        }
        .nextbtn{
            color: #ffffff;
            background-color: #0a95ff;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 100%;
            height: 80%;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .nextbtn:hover{
          background-color: #77c0f8;
          transition: 0.5s;
        }
        .draftbtn{
            color: #c22e32;
            background-color: #00000000;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 100%;
            height: 80%;
            margin-left: 25%;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .draftbtn:hover{
          background-color: rgb(244, 219, 219);
          transition: 0.5s;
        }
        
        `}</style>
  </div>
  )
}
