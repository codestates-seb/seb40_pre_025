import React from 'react'
import Link  from 'next/link';


export default function TopHeader() {
  return (
    <div className='top'>
        <h1 className='top_h1'>Top Questions</h1>
            <div className="ask">
              <Link href="/questions/ask">
              <a className='askQ'>Ask Question</a>
              </Link>
            </div>
            <style jsx>{`
            .top {
                display:flex;
                flex-direction: row;
                margin-top: 2% ;

            }
            .top_h1 {
                font-size: 1.6rem;
                flex: 1 1 0;
                font-weight:400;
            }
            
            .ask {
                flex-basis: auto;
                width: 13%;
                height: 55%; 
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
                font-size: 0.9rem;
        
            }
        @media screen (max-width:1330px ) {
            .ask {
                 width: 15%; 
            }
      
                 } 
         @media screen (max-width:1200px ) {
            .ask {
                 width: 17%; 
            }
      
                 }  
                `}</style>
        </div>
  )
}
