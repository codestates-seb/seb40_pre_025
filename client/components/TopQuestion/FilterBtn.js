import React from 'react'
import Link  from 'next/link';

export default function FilterBtn() {
  return (
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
        <style jsx>{`
        .filterbtn{
        border: 1px solid #838c95;
        padding: 1.5%;
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
      flex: 1 auto;
      }  
    .main-filter {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .filter {
        display: flex;
        justify-content: flex-end;
    }
      a{
    text-align: center;
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: inherit;
  }
            
            `}</style>
      </div>
  )
}
