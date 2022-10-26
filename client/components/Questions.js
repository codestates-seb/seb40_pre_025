import Link  from 'next/link';
import React, { useEffect, useState } from 'react'


export default function Questions() {
  const [movies, setMovies] = useState([])
  useEffect(()=> {
    (async () => {
     const {results} = await (
      await fetch('/api/movies'
      )
      ).json()
      setMovies(results)
    })()
  }, [])
  return (
    <div id="mainbar">
    {/* Top Questions 부분  */}
      <div className='top'>
        <h1>Top Questions</h1>
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
               {movies.map((movie) => (
               <div key={movie.id} className="post-main">
                {/* 투표수, 답변수, views 일단 하드코딩  */}
                 <div className='votes'>
                  <div className=''>
                    <span className=''>0</span>
                    <span className=''>votes</span>
                  </div>
                  <div className=''>
                    <span className=''>0</span>
                    <span className=''>answers</span>
                  </div>
                  <div className=''>
                    <span className=''>0</span>
                    <span className=''>views</span>
                  </div>
                </div> 
                 
                {/* 질문들 나오는 곳  */}
                <div className='post-content'>
                  <h3 className='post-title'>
                  <a className='post-link'>{movie.original_title}</a>
                  </h3>
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
      .ask {
        width: 6rem;
        height: 2rem; 
        background-color:#0a95ff;
        color: white;
        box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
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
        font-size: 13px;
      }
      h1 {
        flex: 1 1 0;
        font-size: 1.5rem;
        font-weight:400;
      }

      .filterbtn{
        border: 1px solid #838c95;
        padding: 8px;
        flex-basis: auto;
        font-size: 13px;
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
    .votes {
          gap: 10;
          margin-right: 10px;
          margin-bottom: 6px;
          width: 100px;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          flex-wrap: wrap;
          align-items: flex-end;
          font-size: 5px;
          color: gray;
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
          padding: 16px;;
        }
        
        `}</style>
    </div>
  )
}
