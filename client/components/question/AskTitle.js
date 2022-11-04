import React from 'react'
import NextBtn from './NextBtn'

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

         <NextBtn/>
       </div>
       {/* writing box  */}
       <div className='writing-box'>
            <div className='writing-name'>
                  Writing a good title
             </div>
             <div className='writing-content'>
              <img className='writing-img' src="/good-title.png" width={50} height={50} />
               
              <li className='writing-list'>
                <div className='writing-body idea2'>Your title should summarize the problem.</div>
              </li>

              <li className='writing-list'>
                <div className='writing-body idea'>You might find that you have a better idea of your title after writing out the rest of the question.</div>
              </li>
                
            </div>
         </div>
          <style jsx>{`

        .title {
         display: flex;
         justify-content: space-between;
         margin-top: 2.5%;
         margin-left: 3%;
        }
        .title-box{
            border: 1px solid #e3e6e8;
            width: 72%;
            background-color: #ffffff;
            padding-top: 1.5%;
            padding-left: 1.5%;
            border-radius: 3px;
         
        }
        .title-content {
            display: flex;
            flex-direction: column;
        
        }
        .title-label {
            font-size: 1rem;
            font-weight: 800;
        }
        .detail-label{
            font-size: 0.8rem;
        }
        .title-input{
            width: 95%;
            border: 1px solid #babfc4;
            color: black;
            padding: 1% 1%;
            border-radius: 2px;
            margin-top: 1%;
        }
        .nextbtn{
            color: #ffffff;
            background-color: #0a95ff;
            box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
            width: 6%;
            font-size: 0.8rem;
            margin-top: 1.4%;
            margin-bottom: 2%;
        }
        .nextbtn:hover{
          background-color: #77c0f8;
          transition: 0.5s;
        }
        .writing-box{
            border: 1px solid #d6d9dc;
            border-radius: 2px;
            background-color: #ffffff;
            width: 25%;
            display: flex;
            flex-direction: column;        
        }
       
        .writing-name {
            background-color: #f8f9f9;
            border-bottom: 1px solid #d6d9dc;
            height: 30%;
            padding: 5% 8%;
            display: flex;
            align-items: center;
        }
        .writing-body {
          display: flex;
        }
        .writing-list {
          list-style: none;
        }
        .writing-content {
            display: flex;
            font-size: 0.8rem;
            align-items: center;
            justify-content: center;
            padding-right: 2%;
            flex-wrap: wrap;

        }
        .idea {
          margin-left: 23%;
          margin-top: -4%;
        }
        @media screen and (max-width: 1340px) {
          .title {
            display:flex;
            flex-direction: column-reverse;
          }
          .title-box {
            width: 93%;
          }
          .writing-box {
            width: 93%;
            margin-bottom: 3%;
          }
          .writing-name {
            padding: 1% 2%;
    
          }
          .writing-content {
            padding: -4% -4%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: flex-start;
          }
          .writing-list {
            padding: 3%;
            font-size: 0.9rem;
          }
          .writing-body {
            margin-bottom: -4%;

          }
          img {
         display: none;
        }
      
        .idea {
          margin: 0;
          padding: 0;
        }
        .idea2 {
          margin: 0;
          padding: 0;
          margin-bottom: -10%;
        }
      
        }

      

          `}</style>
        </div>

  )
}
