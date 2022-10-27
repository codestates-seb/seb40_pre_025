import Link  from 'next/link';
import React, { useEffect, useState } from 'react'
import agoraStatesDiscussions from '../static/dummydata';


export default function Questions() {
  const [movies, setMovies] = useState([])
  // useEffect(()=> {
  //   (async () => {
  //    const {results} = await (
  //     await fetch('/api/movies'
  //     )
  //     ).json()
  //     setMovies(results)
  //   })()
  // }, [])

  
  return (
    <div id="mainbar">
    {/* Top Questions 부분  */}
      <div className='top'>
        <h1 className='top_h1'>Top Questions</h1>
            <div className="ask">
              <Link href="/questions/ask">
              <a className='askQ'>Ask Question</a>
              </Link>
            </div>
        </div>
    {/* Interesting, Hot~ 버튼들  */}
      <div className='main_filter'>
        <div className='filter_space'></div>
        <div className='filter-box'>
          <div className='filter'>
            <Link href="/?tab=interesting">
            <a className='filterbtn filter_radius'>Interesting</a>
            </Link>
            <Link href="/?tab=hot">
            <a className='filterbtn'>Hot</a>
            </Link>
            <Link href="/?tab=week">
            <a className='filterbtn'>Week</a>
            </Link>
            <Link href="/?tab=month">
            <a className='filterbtn filter_radius2'>Month</a>
            </Link>
          </div>
        </div>
      </div>
    {/* 밑에 질문들 map으로 깔아주기  */}
    <div id="qlist-wrapper" className='flush-left'>
      <div id="question-mini-list">
           <div>
               {agoraStatesDiscussions.map((tweet) => (
               <div key={tweet.id} className="post-main">
                {/* 투표수, 답변수, views 일단 하드코딩  */}
                 <div className='votes-status'>
                  <div className='votes-list vote'>
                    <span className='votes-item'>10</span>
                    <span className='votes-name'>votes</span>
                  </div>
                  <div className='votes-list plus'>
                    <span className='votes-item'>20</span>
                    <span className='votes-name'>answers</span>
                  </div>
                  <div className='votes-list'>
                    <span className='votes-item'>30</span>
                    <span className='votes-name'>views</span>
                  </div>
                </div> 
                 
                {/* 질문들 나오는 곳  */}
                <div className='post-content'>
                  <h3 className='post-title'>
                    <Link href="">
                  <a className='post-link'>{tweet.title}</a>
                    </Link>
                  </h3>
                  {/* 태그, 작성자 */}
                  <div className='post-meta'>
                      <div className='post-tags'>
                          <Link href="">
                          <a className='tags'>tags</a>
                          </Link>
                        </div>
                        <div className='usercard'>
                            <div className='human_img'> 
                            <img src="/human.png" width={15} height={15}></img>
                            </div>
                        {tweet.author}
                        <div className='asked'>
                         1,339 asked 52 secs ago
                         </div>
                        </div>
                    </div>
                  </div>
                </div>
               ))}
          </div> 
       </div>
      </div>
      <style jsx>{`
      #mainbar{
          display: flex;
          flex-direction: column;
          flex: 1 1 0;
          padding: 20px;
        }
      .top {
          display:flex;
          flex-direction: row;
        }
        .top_h1 {
          font-size: 2rem;
        }
      .ask {
        width: 7rem;
        height: 2.5rem; 
        background-color:#0a95ff;
        color: white;
        box-shadow: inset 0 0.2rem rgba(198, 194, 194, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
      }
      .ask:hover {
        background-color: #076ab6;
        transition: 0.5s;
      }
      .askQ {
        display: flex;
        align-items: center;
        justify-content: center;
  
      }
      h1 {
        flex: 1 1 0;
        font-size: 1.5rem;
        font-weight:400;
      }

      .filterbtn{
        border: 1px solid #838c95;
        padding: 0.7rem;
        flex-basis: auto;
        font-size: 13px;
        border-right: none;
        color: rgb(118, 118, 118);
      }
      .filterbtn:hover {
        background-color: rgb(207, 205, 205);
        transition: 0.5s;
      }
      .filter_radius {
        border-radius:5px 0 0 5px ;
      }
      .filter_radius2 {
        border-radius: 0 5px 5px 0;
        border-right: 1px solid #838c95;
      }
        
     .filter_space {
      flex: 1 auto !important;
      }  
    .main-filter {
          display: flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      .filter {
          display: flex;
          justify-content: flex-end;
        }

        .qlist-wrapper{
          clear: both;
        }
       .flush-left{
        margin-top: 20px;
        border-top: 1px solid #e3e6e8; 
        margin-left: -20px;
       }
      .votes-status {
          gap: 10;
          margin-right: 10px;
          margin-bottom: 6px;
          width: 100px;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          flex-wrap: wrap;
          align-items: flex-end;
          font-size: 10px;
          color: gray;
        }
        .votes-list {
          font-size: 0.8rem;
          margin-bottom: 0.3rem;
        }
        .votes-item {
          margin-right: 0.2rem;
        }
        .plus {
          color: #2f6f44;
         border: 1px solid #2f6f44;
         padding: 0.2rem;
        }
        .vote {
          color: black;
        }
        
       .post-title {
          flex-grow: 1;
         max-width: 100%;
         color: #0074cc;
         margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
        }
        .post-main {
          position: relative;
          display: flex;
          border-bottom: 1px solid #e3e6e8;
          padding: 1.2rem;
          padding-left: 3.2rem;
          font-size: 1.2rem;
          
        }
        .post-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 0.6rem;
          width: 40rem;
        }
        .post-link:hover {
          color: #49acf7;
        }
        .usercard{
          display: flex;
          font-size: 0.8rem;
          color: #0074cc;
        
        }
        .human_img {
          margin-right: 0.3rem;
        }
        .tags {
          color:#2c5877;
          background-color: #d0e3f1;
          border-color: #00000000;
          font-size: 0.8rem;
          text-decoration: none;
          display: inline-block;
          padding: 0.4em 0.5em;
          white-space: nowrap;
          text-align: center;
          border-width: 1px;
          border-style: solid;  
          border-radius: 2px;
        }
        .asked {
          color: gray;
          margin-left: 1rem;
        }
        `}</style>
    </div>
  )
}
