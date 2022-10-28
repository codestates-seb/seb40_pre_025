import React from 'react'

export default function FooterFake() {
  return (
    <div>
      <div className='footer'>
        footer에용
      </div>
      <style jsx>{`
        .footer {
            height: 20rem;
            width: 100rem;
            background-color: rgb(209, 167, 206);
        }
        `}</style>
    </div>
  )
}
