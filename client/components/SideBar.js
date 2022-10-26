import React from 'react'

export default function SideBar() {
  return (
    <div className='sidebar'>
    <div className='main-sidebar'>
      <div className='sidebar-box'>
          <ul className='d-block p0 m0'>
            <li className='li-title'>The Overflow Blog</li>
            <div>
            </div>
          </ul>

        </div>
        <style jsx>{`
        .sidebar-box {
            border:1px solid red;
            width: 320px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-color: #f1e5bc;
            background-color: #fdf7e2;
            margin-top: 28px;
            margin-right: 120px;
            border-radius: 5px;
        }
        .li-title {
            border-color: #f1e5bc;
            background-color: #fbf3d5;
            list-style: none;
            font-size: 15px;
            font-weight: bold;
        }
        .main-sidebar {
            display: flex;
        }
        .sidebar {
          display: flex;
        }
        `}</style>
    </div>
    </div>
  )
}
