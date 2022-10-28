import React from 'react'
import Questions from './Questions';
import Notices from './Notices';


export default function TopQuestions() {
  return (
    <>

<div className='container'>
  {/* 메인  */}
 <div id="content">
  <Questions/>
    <Notices/>
  </div>
  <style jsx>{`
    .container {
        width: 100%;
        overflow-x: hidden;
      display: flex;
      margin-top: -5%;
      margin-left: -7%;
      }
      #content {
        display: flex;
        width: 100%;
      } 
    `}</style>
    
  </div>
  </>
  )
}
