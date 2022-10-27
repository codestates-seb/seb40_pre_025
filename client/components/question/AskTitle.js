import React from 'react'

export default function AskTitle() {
  return (
    <div className='title'>
          {/* Title 글씨 */}
        <div className='title-box'>
          <div className='title-content'>
              <div className='title-head'>
                  <div className='title-name'>
                          <label className='title-label'>Title</label>
                  </div>
                  <div className='title-detail'>
                    <div>
                      <label className='detail-label'>
                      Be specific and imagine you’re asking a question to another person.
                      </label>
                    </div>

                  </div>
             </div>
            {/* Title input*/}
              <div>
                 <input className='title-input' placeholder='e.g. Is there an R function for finding the index of an element in a vector?'></input>
             </div>
           </div>

         <button className='nextbtn s-btn'>Next</button>
       </div>
       {/* writing box  */}
       <div className='writing-box'>
            <div className='writing-name'>
                  Writing a good title
             </div>
             <div className='writing-content'>
               <div className='writing-img'>
                  <img src="/good-title.png" width={70} height={60} />
                  </div>

                <div className='writing-content'>
                <div>Your title should summarize the problem.
         You might find that you have a better idea of your title after writing out the rest of the question.</div>
                </div>
            </div>
         </div>
          <style jsx>{`
        .title {
         display: flex;
         justify-content: space-between;
         margin-top: 2rem;
        }
        .title-box{
            border: 1px solid #e3e6e8;
            width: 53rem;
            height: 10rem;
            background-color: #ffffff;
            padding-top: 1rem;
            padding-left: 1rem;
            border-radius: 3px;
         
        }
        .title-content {
            display: flex;
            flex-direction: column;
        
        }
        .title-label {
            font-size: 1rem;
            font-weight: 700;
        }
        .detail-label{
            font-size: 0.8rem;
        }
        .title-input{
            width: 45rem;
            height: 2rem;
            border: 1px solid #babfc4;
            color: black;
            padding: 0.6rem 0.7rem;
            border-radius: 2px;
            margin-top: 0.3rem;
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
        
        .writing-box{
            border: 1px solid #d6d9dc;
            border-radius: 2px;
            background-color: #ffffff;
            width: 20rem;
            height: 10rem;
            display: flex;
            flex-direction: column;
            box-shadow: 0 1px 2pxhsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
        
        }
     
        .writing-name {
            background-color: #f8f9f9;
            border-bottom: 1px solid #d6d9dc;
            height: 2.7rem;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
        }
        .writing-content {
            display: flex;
            font-size: 0.8rem;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;

        }
          `}</style>
        </div>

  )
}
