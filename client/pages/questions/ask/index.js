import React, { useState } from 'react'
import AskNotice from '../../../components/question/AskNotice'
import AskTitle from '../../../components/question/AskTitle'
import AskProblem from '../../../components/question/AskProblem'
import AskTry from '../../../components/question/AskTry'
import AskTags from '../../../components/question/AskTags'
import SubmissionBtn from '../../../components/question/SubmissionBtn'
import AskSeo from '../../../components/question/AskSeo'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AskContent from '../../../components/question/AskContent'


export default function Ask() {
  // title, content 를 제어하기 위해 선언
  // const [title, setTitle] = useState('')

  // // 함수형 컴포넌트에서 useDispatch 사용을 위해 선언
  // const dispatch = useDispatch();
    

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
              <AskContent/>
              
                {/* 태그 달수 있는 곳 */}
              
                {/* 버튼부분  */}
                <SubmissionBtn
                
                />
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
