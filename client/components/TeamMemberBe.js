import React from 'react';

const TeamMemberBe = () => {
  return (
    <div className="be">
        <h1>Backend developer</h1>
        <div className='member2'>
        <img src="/kjm.jpg" alt="profileimage" width="70" height="70"/>
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
        <img src="/khj.jpg" alt="profileimage" width="70" height="70"/>
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
        <img src="/hjo.jpg" alt="profileimage" width="70" height="70"/>
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
        <style jsx>{`
        .velog2:hover,
        .github2:hover
        {
          background: rgb(207, 72, 0);
          cursor: pointer;
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
    
        .member2:hover{
          border: 2px solid  rgb(207, 72, 0);
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

export default TeamMemberBe;