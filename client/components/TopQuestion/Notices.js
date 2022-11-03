import React from 'react'

export default function Notices() {
  return (
    <div className='notice_sidebar'>
    <div className='main-sidebar'>
      <div className='sidebar-box'>
          <ul className='ul'>

            <li className='li-title'>The Overflow Blog</li>
            
              <li className='blog-content'>
                <div>
                  <img src='/overflow_pencil.png' width={23} height={23}></img>
                </div>
                <div className='blog-body'>Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS conference</div>
              </li>

              <li className='blog-content'>
                <div>
                  <img src='/overflow_pencil.png' width={23} height={23}></img>
                </div>
                <div className='blog-body'>CEO update: Breaking down barriers to unlock innovation</div>
              </li>

              {/* 2번째 리스트 */}
              <li className='li-title'>Featured on Meta</li>

              <li className='blog-content'>
                <div>
                  <img src='/blue.png' width={23} height={23}></img>
                </div>
                <div className='blog-body'>The 2022 Community-a-thon has begun!</div>
              </li>

              <li className='blog-content'>
                <div>
                  <img src='/blue.png' width={23} height={23}></img>
                </div>
                <div className='blog-body'>Mobile app infrastructure being decommissioned</div>
              </li>

              <li className='blog-content'>
                <div>
                  <img src='/black.png' width={23} height={23}></img>
                </div>
                <div className='blog-body'>Staging Ground Workflow: Canned Comments</div>
              </li>

              <li className='blog-content'>
                <div>
                  <img src='/black.png' width={23} height={23}></img>
                </div>
                <div className='blog-body'>The Ask Wizard (2022) has graduated</div>
              </li>

              {/* 3번째 리스트 */}

              <li className='li-title'>Hot Meta Posts</li>
            
              <li className='blog-content'>
                <span className='num'>
                  14
                </span>
                <div className='blog-body'>What should be done about [explode]?</div>
              </li>

              <li className='blog-content'>
                <span className='num'>
                  26
                </span>
                <div className='blog-body'>Code blocks surrounded by single backtick then triple backticks</div>
              </li>
                
          </ul>

        </div>
        <style jsx>{`
        .sidebar-box {
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            border-radius: 10px;
            background-color: #fdf7e2;
            margin-top: 30%;
            border: 1px solid #f1e5bc;
      
  
         
        }
        .ul {
          list-style: none;
          margin-top: 0%;
          margin: 0;padding: 0; border: 0 none;

        }
        .li-title {
            border: 1px solid #f1e5bc;
            background-color: #fbf3d5;
            list-style: none;
            font-size: 0.8rem;
            padding: 3%;
            font-weight: bold;
            color: rgb(95, 95, 95);
            height: 20%;
            padding-left: 1rem;
  
        }
        .blog-body{
          font-size: 0.9rem;
          padding: 2%;
          display:flex;
    
        }
        .num {
          color: #6a737c;
          font-size: 0.9rem;
          margin-right: 0.4rem;
          margin-top: 0.3rem;
          margin-left: 0.4rem;
        }
        .main-sidebar {
            display: flex;
            flex-direction: column;
        }
        .notice_sidebar {
          display: flex;
        }
        .blog-content {
          display: flex;
          padding: 0.3rem;
        }
      
        @media screen and (max-width:1300px ) {
          .sidebar-box {
            display: none;
          }
      
        } 
        `}</style>
    </div>
    </div>
  )
}
