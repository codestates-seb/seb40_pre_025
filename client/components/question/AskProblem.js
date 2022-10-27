import React from 'react'

export default function AskProblem() {
  return (
 <div className='problem-box'>
    <div className='problem-outer'>
      <div>
        <div className='problem-margin'>
          <div className='problem-content'>
            {/* problem 제목 */}
              <div className='problem-title'>
                <label className='title-name'>
                What are the details of your problem?
                <p className='problem-p'>
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                </p>
                </label>
                </div>
              {/* problem 내용  */}
              <div className='problem-body-box'>
                <div className='problem-body'>
                  이게문제야 
                </div>
              </div>
              <button className='nextbtn s-btn'>Next</button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    .problem-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 53rem;
        height: 18rem;
        margin-top: 1rem;
        border-radius: 3px;

    }
    .problem-outer {
        margin: 1.5rem;
    }
    .problem-title {
      margin-bottom: 0.4rem;
    }
    .title-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .problem-p {
        font-size: 0.8rem;
        font-weight: 400;
        color: gray;
        margin-top: 0.2rem;
    }
    .problem-body-box{
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
