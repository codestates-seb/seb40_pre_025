import React from 'react'
import NavBar from '../NavBarFake';
import Questions from './Questions';
import Seo from './Seo';
import Notices from './Notices';
import HeaderFake from '../HeaderFake';

export default function TopQuestions() {
  return (
    <>
    <Seo/>
    <HeaderFake/>
<div className='container'>
   <NavBar/>
  {/* 메인  */}
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
