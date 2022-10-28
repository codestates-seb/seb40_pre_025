import dynamic from "next/dynamic";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";


const Editor = dynamic(() => import("../../components/Editor.js"), {
  ssr: false,
});
// editor server-side-rendering  off 로직

export default function AskDetail() {
  const [isBtnClick, setIsBtnClick] = useState(false);

  return (
    <>
      
      <div className="answermaincontainer">
        <h1 className="questionTitle">질문 제목</h1>
        <div className="questionContainer">
          <div className="qusetionInfoContainer">
            <span> Asked day</span>
            <span> Modified today</span>
            <span>Viewed 1 times </span>
          </div>
          <div className="questionComentBox">
            <span className="questionComent">질문 내용</span>
          </div>
          <div className="questionUpdate">
            <span>edited 1 min ago</span>
          </div>
        </div>
        <hr className="bar" />
        <div className="answerContainer">
          <h1 className="answerCount">1 Answer</h1>
          <div
            className="iconContainer"
            onClick={() => setIsBtnClick((prev) => !prev)}
          >
            {/* useState 훅의 두번째 인자인 set()은 함수로 사용할때 첫번째 
          인자로 기존 값을 제공한다... 반전하는 간단한 함수로 토글모드 만들었다. */}
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="icon"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </i>
          </div>
          <div className="answerCommentBox">
            <span className="answerComment">답변 내용</span>
          </div>
          <div className="answerGroup">
            <div className="answerButtonContainer">
              <button className="editButton">Edit</button>
              <button className="deleteButton">Delete</button>
            </div>
            <span className="answerUpdate">edited 2 min ago</span>
          </div>
        </div>
        <hr className="bar" />
        <div className="editorContainer">
          <span className="editorTitle">Your Answer</span>
          <Editor />
        </div>
        <div className="answerPostButtonContainer">
          <button className="answerPostButton">Post Your Answer</button>
        </div>
      </div>
      <style jsx>{`
        {
          /* isBtnClick 상태의 따라 색상이 바뀌도록 삼항 연산자로 작성. */
        }
        .container {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .editorContainer {
          width: 68%;
          margin-left: 10%
        }
        .questionTitle {
          font-weight: 400;
          margin-left: -550px;
        }
        .questionContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
          height: 300px;
        }
        .qusetionInfoContainer {
          display: flex;
          justify-content: space-between;
          width: 50%;
          margin-bottom: 40px;
          margin-left: -150px;
        }
        .questionComentBox {
          width: 60%;
          height: 100%;
          background-color: #ecf0f1;
        }
        .questionComent {
          font-size: 20px;
          margin: 20px;
        }
        .questionUpdate {
          display: flex;
          justify-content: end;
          width: 100%;
          margin-right: 300px;
          margin-top: 20px;
        }
        .bar {
          width: 70%;
          margin: 5px 95px;
        }
        .answerContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 70%;
        }
        .answerCount {
          margin-left: -650px;
          font-weight: 300;
        }
        .icon {
          width: 13%;
          height: 100%;
          margin-left: -30%;
          
          fill: ${isBtnClick ? "green" : "gray"};
          cursor: pointer;
        }
        .answerCommentBox {
          width: 550px;
          height: 200px;
          background-color: #ecf0f1;
        }
        .answerComment {
          font-size: 16px;
          margin: 10px;
        }
        .answerGroup {
          display: flex;
          justify-content: space-between;
          width: 60%;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .answerButtonContainer {
          display: flex;
          justify-content: start;
          width: 50%;
        
        }
        .deleteButton {
          margin-left: 10px;
        }
        .iconContainer {
          display: flex;
          justify-content: start;
          width: 75%;
        }
        .editorTitle {
          font-size: 22px;
          height: 10px;
        }
        .answerPostButtonContainer {
          display: flex;
          justify-content: start;
          width: 60%;
          margin-top: 30px;
        }
        .answerPostButton {
          font-size: 24px;
          font-weight: 400;
          color: white;
          border: solid #67b9f3 1px;
          background-color: #67b9f3;
          padding: 1% 3%;
          margin-left: 17%;
          border-radius: 7px;
          cursor: pointer;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}