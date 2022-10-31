import React from 'react'
// /questions/ask 윗부분
// Ask a public questions ~ 안내문까지 
export default function Notice() {
  return (
    <div className='ask'>
        <div className='ask-question'>
        <h2 className='question'>Ask a public question</h2>
        <div className='img-robot'>
             <img src='/robot.png' width={550} height={130}>
              </img>
        </div>
              
         </div>
     <div className='writing'>
         <div className='notice'>  
             <h2 className='good-question'>Writing a good question</h2>
                <p>
                You’re ready to ask a programming-related question and this form will help guide you through the process.
                </p>
                <p className='p2'>
                Looking to ask a non-programming question? See the topics here to find a relevant site.
                </p>
             <h5 className='steps-title'>Steps</h5>
             <ul className='steps'>
                <li>  Summarize your problem in a one-line title.    </li>
                 <li> Describe your problem in more detail.  </li>
                <li> Describe what you tried and what you expected to happen.</li>
                <li> Add “tags” which help surface your question to members of the community.  </li>
                <li> Review your question and post it to the site.  </li>   
              </ul>
            </div>
          </div>
      <style jsx>{`
      .ask {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 3%;
      }
      .ask-question {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
      }
      .question {
        font-size: 1.8rem;
        font-weight: bold;

      }
      .writing {
        display: flex;
      }
      .notice {
        background: rgb(224, 238, 248);
        border: 1px solid rgb(156, 181, 250);
        border-radius: 3px;
        width: 70%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3%;

      }
      .good-question {
        font-size: 1.4rem;
        font-weight: 400;
        padding-bottom: 2%;
      }
      .p2 {
        padding-bottom: 2%;
      }
      .steps-title {
        font-weight: 600;
        padding-bottom: 2%;
      }
      ul {
        margin-left: 4%;
        font-size: 0.9rem;
      }
      @media screen and (max-width: 1340px) {
        .notice {
          width: 90%;
        }

      }
      @media screen and (max-width: 1000px) {
        img {
         display: none;
        }
        .ask-question {
          padding-bottom: 7%;
          display: inline-block;
          margin-top: 5%;
        }

      }
        `}</style>
    </div>
  )
}
