import dynamic from 'next/dynamic';
import React from 'react'
import NextBtn from './NextBtn'


const Editor = dynamic(() => import ("../Editor.js"), {
  ssr: false,
});
// editor server-side-rendering  off 로직??

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
                <Editor/>
              </div>
              <NextBtn/>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    .problem-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 70%;
        height: 100%;
        margin-top:  2.5%;
        border-radius: 3px;
        margin-left: 3%;

    }
    .problem-outer {
        margin: 3% 3% 1% 3%;
    }
    .problem-title {
      margin-bottom: 1.5%;
    }
    .title-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .problem-p {
        font-size: 0.8rem;
        font-weight: 400;
        color: gray;
        margin-top: 0.5%;
    }

    .problem-content {
      height: 100%;
    }
    .problem-body-box{
        border: 1px solid #e3e6e8;
        height: 100%;
    }
    .problem-body {
      width: 100%;
      border: 1px solid #e3e6e8;
      height: 100%;
      padding-bottom: 20%;

    }
  
        @media screen and (max-width: 1340px) {
          .problem-box {
            width: 90%;
          }
        }
    `}</style>
  </div>
  )
}
