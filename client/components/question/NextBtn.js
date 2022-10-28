import React from 'react'

export default function NextBtn() {
  return (
    <>
      <button className='nextbtn s-btn'>Next</button>
      <style jsx>{`
      .nextbtn{
        flex-basis: auto;
        color: #ffffff;
        background-color: #0a95ff;
        box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
        font-size: 0.8rem;
        margin-top: 1.4%;
        padding: 1.3%;
        margin-bottom: 1%;
        border: 0;
        outline: 0;
        }
    .nextbtn:hover{
      background-color: #77c0f8;
      transition: 0.5s;
    }
  
      `}</style>
      </>
    
  )
}
