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
            width: 10vw;
            height: 90%;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
           outline: 0;
           padding: 5%;
         

        }
        .nextbtn:hover{
          background-color: #77c0f8;
          transition: 0.5s;
        }
        .draftbtn{
            color: #c22e32;
            background-color: #00000000;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 9vw;
            height: 90%;
            margin-left: 25%;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
           outline: 0;
        }
        .draftbtn:hover{
          background-color: rgb(253, 238, 238);
          transition: 0.5s;
        }
        
        `}</style>
  </div>
  )
}
