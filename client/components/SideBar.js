import React from 'react'

export default function SideBar() {
  return (
    <div className='sidebar'>
    <div className='main-sidebar'>
      <div className='sidebar-box'>
          <ul className='d-block p0 m0'>

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
            border:1px solid red;
            width: 19rem;
            height: 30rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

            border-color: #f1e5bc;
            background-color: #fdf7e2;
            margin-top: 28px;
            margin-right: 120px;
            border-radius: 5px;
        }
        .li-title {
            border: 1px solid #f1e5bc;
            background-color: #fbf3d5;
            list-style: none;
            font-size: 0.8rem;
            font-weight: bold;
            height: 2.4rem;
            color: rgb(95, 95, 95);
            display: flex;
            align-items: center;
            padding-left: 1rem;
  
        }
        .blog-body{
          font-size: 0.8rem;
          padding: 0.3rem;
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
        }
        .sidebar {
          display: flex;
        }
        .blog-content {
          display: flex;
          padding: 0.3rem;
        }
        `}</style>
    </div>
    </div>
  )
}
