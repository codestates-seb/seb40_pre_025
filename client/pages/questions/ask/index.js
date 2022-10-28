import React from 'react'
import AskNotice from '../../../components/question/AskNotice'
import AskTitle from '../../../components/question/AskTitle'
import AskProblem from '../../../components/question/AskProblem'
import AskTry from '../../../components/question/AskTry'
import AskTags from '../../../components/question/AskTags'
import SubmissionBtn from '../../../components/question/SubmissionBtn'
import AskSeo from '../../../components/question/AskSeo'



export default function Ask() {
  return (
    <>
    <AskSeo/>
    <div className='ask_container'>
      <div className='ask_content'>
        <div className='box-border'>
            <form className='post-form'>
              <main className='question-form'>
               <AskNotice/>
              {/* Writing a good title, title 부분  */}
                <AskTitle/>
                <AskProblem/>
                {/* try box 부분  */}
                <AskTry/>
                {/* 태그 달수 있는 곳 */}
                <AskTags/>
                {/* 버튼부분  */}
                <SubmissionBtn/>
              </main>
            </form>
        </div>
      </div>
      <style jsx>{`
       
      .ask_container {
        width: 100vw;
        overflow-x: hidden;
        background-color: rgb(248, 249, 249);
   
      }
      .ask_content {
        width: 80vw;
        overflow-y: auto;

      }
    
  
        `}</style>
    </div>
    </>
  )
  
}
