import React from 'react'

export default function FakeSide() {
  return (
    <div className='nav'>
        <div className='ask'>
        Navbar 에용

        </div>
      <style jsx>{`
        .nav{
          width: 10%;
        }
        .ask {
            background-color: rgb(255, 255, 255);

            height:40rem
        }
        @media screen and (max-width: 1340px) {
          .nav{
           width: 5%;
          }
          .ask {
            display: none;
          }
        }

        `}</style>  
    </div>
  )
}
