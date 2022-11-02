import React from 'react';

const TeamMember = () => {
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
          <a href="https://www.notion.so/e5b1b134d83c4ab59e44a3bc1ee69c00">
              <button className="velog">📕 Notion</button>
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
      <div className="be">
        <h1>Backend developer</h1>
        <div className='member2'>
        <img src="/.jpg" alt="profileimage" width="70" height="70"/>
          <div>
          <b><p>🧑🏻‍💻 김정민</p></b>
          <a href="https://github.com/jaybknd">
              <button className="github2">🖥 Github</button>
            </a>
          <a href="">
              <button className="velog2">📗 Velog</button>
          </a>
        </div>
        </div>
        <div className='member2'>
        <img src="/.jpg" alt="profileimage" width="70" height="70"/>
        <div>
          <b><p>🧑🏻‍💻 김효준</p></b>
          <a href="https://github.com/hyojoonm">
              <button className="github2">🖥 Github</button>
          </a>
          <a href="">
              <button className="velog2">📗 Velog</button>
          </a>
        </div>
        </div>
        <div className='member2'>
        <img src="/.jpg" alt="profileimage" width="70" height="70"/>
          <div>
          <b><p>🧑🏻‍💻 허준오</p></b>
          <a href="https://github.com/junohheo">
              <button className="github2">🖥 Github</button>
          </a>
          <a href="">
              <button className="velog2">📗 Velog</button>
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
        .velog2, .github2{
          background:rgb(236,94,15);
          color: white;
          border-radius: 10px;
          font-size: 10px;
        }
        img{
          border-radius: 50px;
          margin-right: 80px;
          border: 2px solid rgb(99,99,99);
        }
        .member2{
          background-color: rgb(236,94,15);
          width: 350px;
          height: 100px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
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
        p{
          color:white;
          margin-bottom: 5px;
          margin-top: 0px;
        }
        a{
          text-decoration-line: none;
          color:white;
        }
        .be{
          display: grid;
          background: rgb(254,220,194);
          width: 500px;
          height: 550px;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
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

export default TeamMember;