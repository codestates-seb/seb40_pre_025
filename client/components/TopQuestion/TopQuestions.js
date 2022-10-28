import React from 'react'
import Questions from './Questions';
import Notices from './Notices';
import SideBar from '../SideBar';
import Header from '../Header';


export default function TopQuestions() {
  return (
    <>
   <Header/>
<div className='container'>
  {/* 메인  */}
  <SideBar/>
 <div id="content">
  <Questions/>
    <Notices/>
  </div>
  <style jsx>{`
    .container {
        width: 100%;
      display: flex;
      }
      #content {
        display: flex;
      }
    `}</style>
    
  </div>
  </>
  )
}
