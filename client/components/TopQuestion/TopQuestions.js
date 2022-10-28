import React from 'react'
import Questions from './Questions';
import Notices from './Notices';


export default function TopQuestions() {
  return (
    <>

<div className='top_container'>
  {/* 메인  */}
 <div id="top_content">
  <Questions/>
    <Notices/>
  </div>
  <style jsx>{`
    .top_container {
        width: 100%;
        overflow-x: hidden;
        display: flex;
       padding-left: -7%;
       padding-top: -3%;
      }
      #top_content{
        display: flex;
        width: 100%;
      } 
    `}</style>
    
  </div>
  </>
  )
}
