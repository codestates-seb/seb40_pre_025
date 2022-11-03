import React from 'react';

const TeamMemberFe = () => {
  return (
    <div>
      <div className="fe">
      <h1>Frontend developer</h1>
        <div className='member'>
          <img src="/ajs.jpg" alt="profileimage" width="70" height="70"/>
          <div>
          <b><p>👩🏻‍💻 안지수</p></b>
          <a href="https://github.com/anjigu">
              <button className="github">🖥 Github</button>
          </a>
          <a href="https://velog.io/@fejigu">
              <button className="velog">📗 Velog</button>
          </a>
          </div>
        </div>
        <div className='member'>
        <img src="/kms.jpg" alt="profileimage" width="70" height="70"/>
        <div>
        <b><p>🧑🏻‍💻 김민성</p></b>
          <a href="https://github.com/MinSeongKiim">
              <button className="github">🖥 Github</button>
          </a>
          <a href="https://velog.io/@alstjd0541">
              <button className="velog">📗 Velog</button>
          </a>
        </div>    
        </div>
        <div className='member'>
        <img src="/ysy.jpg" alt="profileimage" width="70" height="70"/>
        <div>
          <b><p>👩🏻‍💻 윤세연</p></b>
          <a href="https://github.com/sharon-youn">
              <button className="github">🖥 Github</button>
          </a>
          <a href="https://velog.io/@jos9187">
              <button className="velog">📗 Velog</button>
          </a>
          </div>
        </div>
        <div className='member'>
        <img src="/pbj.jpg" alt="profileimage" width="70" height="70"/>
        <div>
        <b><p>🧑🏻‍💻 편범준</p></b>
          <a href="https://github.com/joon-github">
              <button className="github">🖥 Github</button>
          </a>
          <a href="https://velog.io/@ehdfkd941209">
              <button className="velog">📗 Velog</button>
          </a>
        </div>
        </div>
      </div>
      
      <style jsx>{`
        .velog, .github{
          background: rgb(19,127,254);
          color: white;
          border-radius: 10px;
          font-size: 10px;
        }
        .velog:hover,
        .github:hover
        {
          background: rgb(2, 102, 216);
          cursor: pointer;
        }
        img{
          border-radius: 50px;
          margin-right: 80px;
          border: 2px solid rgb(99,99,99);
        }
        .member{
          background-color: rgb(19,127,254);
          width: 350px;
          height: 100px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          
        }
        .member:hover{
          border: 2px solid rgb(2, 102, 216);
        }
        p{
          color:white;
          margin-bottom: 5px;
          margin-top: 0px;
        }
        a{
          text-decoration-line: none;
          color:white;
        }
        .fe{
          display: grid;
          background: rgb(194,227,254);
          width: 500px;
          height: 750px;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
        }
        h1{
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }
        `}</style>
    </div>
  );
};

export default TeamMemberFe;