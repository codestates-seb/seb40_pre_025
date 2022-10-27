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
        margin-bottom: 3rem;
        margin-top: 1rem;
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
            width: 10rem;
            height: 2.2rem;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .draftbtn{
            color: #c22e32;
            background-color: #00000000;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 10rem;
            height: 2.2rem;
            font-size: 0.9rem;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        `}</style>
  </div>
  )
}
