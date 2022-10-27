import React from 'react'

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
                <div className='tags-body'>
                  이게문제야 
                </div>
              </div>
              <button className='nextbtn s-btn'>Next</button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    .tags-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 53rem;
        height: 10rem;
        margin-top: 1rem;
        border-radius: 3px;

    }
    .tags-outer {
        margin: 1.5rem;
    }
    .tags-title {
      margin-bottom: 0.4rem;
    }
    .tags-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .tags-p {
        font-size: 0.8rem;
        font-weight: 400;
        color: gray;
        margin-top: 0.2rem;
    }
    .tags-body-box{
        border: 1px solid #e3e6e8;
        height: 2rem;
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
