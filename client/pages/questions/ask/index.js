import React from 'react'
import AskNotice from '../../../components/question/AskNotice'
import AskTitle from '../../../components/question/AskTitle'
import AskProblem from '../../../components/question/AskProblem'
import AskTry from '../../../components/question/AskTry'
import AskTags from '../../../components/question/AskTags'
import SubmissionBtn from '../../../components/question/SubmissionBtn'
import AskSeo from '../../../components/question/AskSeo'
import Header from '../../../components/Header'
import SideBar from '../../../components/SideBar'


export default function Ask() {
  return (
    <>
    <AskSeo/>
   <Header/>
    <div className='container'>
      <SideBar/>
      <div className='content'>
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
       
      .container {
        background-color: rgb(248, 249, 249);
        flex: 1 1 0;
        display: flex;
        width: 100%;
        overflow-x: hidden;
      }
      .content {
        width: 75rem;
        height: 100%;
        overflow-y: auto;

      }
  
        `}</style>
    </div>
    </>
  )
  
}
