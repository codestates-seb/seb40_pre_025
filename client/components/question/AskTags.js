import React from 'react'
import NextBtn from './NextBtn'

export default function AskTags() {
  return (
    <div className='tags-box'>
    <div className='tags-outer'>
      <div>
        <div className='tags-margin'>
          <div className='tags-content'>
            {/* tags 제목 */}
              <div className='tags-title'>
                <label className='tags-name'>
                Tags
                <p className='tags-p'>
                Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                </p>
                </label>
                </div>
              {/* tags 내용  */}
              <div className='tags-body-box'>
                <input className='tags-body' placeholder='태그를 써주세요'>
                </input>
              </div>
              <NextBtn/>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    .tags-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 70%;
        height: 100%;
        margin-top:  2.5%;
        border-radius: 3px;
        margin-left: 3%;

    }
    .tags-outer {
      margin: 3% 3% 1% 3%;
    }
    .tags-title {
      margin-bottom: 1.5%;
    }
    .tags-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .tags-p {
        font-size: 0.8rem;
        font-weight: 400;
        color: gray;
        margin-top: 0.5%;
    }
    .try-content {
      height: 100%;
    }
    .tags-body-box{
        border: 1px solid #e3e6e8;
        height: 100%;
        color: white;
        
    }
    .tags-body {
      height: 100%;
      width: 100%;
      border: 1px solid #e3e6e8;
      padding: 1% 1%;
    }
    
        @media screen and (max-width: 1340px) {
          .tags-box {
            width: 90%;
          }
        }
      
    `}</style>
  </div>
  )
}
