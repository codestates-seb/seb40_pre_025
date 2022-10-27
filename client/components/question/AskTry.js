import React from 'react'

export default function AskTry() {
  return (
    <div className='try-box'>
    <div className='try-outer'>
      <div>
        <div className='try-margin'>
          <div className='try-content'>
            {/* try 제목 */}
              <div className='try-title'>
                <label className='try-name'>
                What did you try and what were you expecting?
                <p className='try-p'>
                Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
                </p>
                </label>
                </div>
              {/* try 내용  */}
              <div className='try-body-box'>
                <div className='try-body'>
                  이게문제야 
                </div>
              </div>
              <button className='nextbtn s-btn'>Next</button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    .try-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 53rem;
        height: 18rem;
        margin-top: 1rem;
        border-radius: 3px;

    }
    .try-outer {
        margin: 1.5rem;
    }
    .try-title {
      margin-bottom: 0.4rem;
    }
    .try-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .try-p {
        font-size: 0.8rem;
        font-weight: 400;
        color: gray;
        margin-top: 0.2rem;
    }
    .try-body-box{
        border: 1px solid #e3e6e8;
        height: 10rem;
        color: white;
        
    }
    .nextbtn{
            color: #ffffff;
            background-color: #0a95ff;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 3rem;
            height: 2.2rem;
            font-size: 0.8rem;
            margin-top: 0.5rem;
        }
    `}</style>
  </div>
  )
}
