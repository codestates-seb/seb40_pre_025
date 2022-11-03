import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  changeInputAction,
  resetInputAction,
} from "../../reducers/answerReducer";
import dummydata from "../../static/dummydata";

export default function AskDetail() {
  // state
  const [admit, setAdmit] = useState([]);
  const [contents, setContents] = useState({});
  const [answers, setAnswers] = useState({
    answers: [],
  });

  //redux
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.anwserReducer);

  //router
  const router = useRouter();
  const {id} = router.query
  console.log(id)

  // 리덕스 이용해서 답글 내용 저장
  const onChangeTextarea = e => {
    dispatch(changeInputAction(e.target.value));
  };

  // 답글 추가히기
  const postAnswer = e => {
    setAnswers(prev => ({
      ...prev,
      answers: [...prev.answers, e],
    }));

    // 답글 추가하고 textarea글 비워주기
    dispatch(resetInputAction());
  };

  // 답글 삭제하기
  const deleteAnswer = index => {
    setAnswers(prev => {
      answers.answers.splice(index, 1);

      return {
        ...prev,
        answers: answers.answers,
      };
    });
  };
  useEffect(() => {
    const data = dummydata.filter(dummy => dummy.id === router.query.id);
    setContents(data[0]);
  }, [router]);

  const [question, setQuestion] = useState([])
  const [answer, setAnswer] = useState([])

  
  useEffect(()=> {
    (async () => {
     const {data} = await (
      await fetch(
        `http://54.180.175.144:8080/post/${id}?page=1&size=5`
      )
      ).json()
      setQuestion(data)
      setAnswer(data.answers.data)
      console.log(data.answers.data)
    })()
  }, [])



  return (
    <>
      <div className="answermaincontainer">
        
          <div>
          <h1 className="questionTitle">
            {question.title}
          </h1>
          <div className="qusetionInfoContainer">
            <div className="sub-c">
              <span className="fc-light">Asked</span>
            </div>
            <div>
              <span className="fc-light">Vote</span>
              {/* vote가 dummyData 존재하지 않을때 1 넣어줌 */}
              <span>{contents?.vote ?? "1"}</span>
            </div>
            <div>
              <span className="fc-light">Read</span>
              {/* read dummyData 존재하지 않을때 1 넣어줌 */}
              <span>{contents?.read ?? "1"}</span>
            </div>
          </div>
          </div>
      
       


        <hr className="bar" />
        <div className="questionContainer">
          <div className="questionComentBox">
            
            {question.body}
            <div dangerouslySetInnerHTML={{ __html: contents?.bodyHTML }} />
          </div>
          <div className="questionUpdate"></div>
        </div>
        <hr className="bar" />
        <div className="answerContainer">
          <h1 className="answerCount">{`Answer`}</h1>
          <div className="answerCommentBoxs">
            {/* contents에 answer이 null or undefined가 아니면 보여주기 */}
            {contents?.answer && (
              <>
                {/* 답글 구분선 */}
                <hr className="bar" />
                <div className="answerBox">
                  <div
                    className="iconContainer"
                    onClick={() => {
                      // 인증글 변경 가능하게 바꿈
                      setAdmit([0]);
                    }}
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ fill: admit[0] === 0 ? "green" : "gray" }}
                        className="icon"
                      >
                        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </i>
                  </div>
                  
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contents?.answer?.bodyHTML,
                    }}
                  />
                </div>
              </>
            )}
          
            {answers.answers ? (
              answers?.answers?.map((answer, i) => (
                <div key={`답변: ${i}`}>
                  {/* 답글 구분선 */}
          
                  <hr className="bar" />
                  <div key={`answer: ${i}`} className="answerBox">
                    
                    <div
                      className="iconContainer"
                      onClick={() => {
                        // 인증글 변경 가능하게 바꿈
                        // 0번째는 dummydata answer
                        setAdmit([i + 1]);
                      }}
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{
                            fill: admit[0] === i + 1 ? "green" : "gray",
                          }}
                          className="icon"
                        >
                          <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </i>
                    </div>
                  안녕하세요
                  {}
                    {/* <Answer
                      i={i}
                      setAnswers={setAnswers}
                      answer={answer}
                      deleteAnswer={deleteAnswer}
                    /> */}
                  
                  </div>
                </div>
              ))
            ) : (
              <>
  
              </>
            )}
          </div>
        </div>
        <hr className="bar" />
        <div className="editorContainer">
          <span className="editorTitle">Your Answer</span>
          <textarea
            value={value}
            onChange={onChangeTextarea}
            className="editor"
          />
          <div>
            <button
              onClick={() => postAnswer(value)}
              className="answerPostButton"
            >
              Post Your Answer
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
         {
          /* isBtnClick 상태의 따라 색상이 바뀌도록 삼항 연산자로 작성. */
        }
        .answermaincontainer {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          padding: 3%;
        }
        .questionTitle {
          font-weight: 400;
        }

        .questionContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
        }
        .qusetionInfoContainer {
          display: flex;
          justify-content: space-between;
          width: 50%;
          margin-bottom: 40px;
        }
        .questionComentBox {
          width: 100%;
          height: auto;
        }

        .questionComent {
          font-size: 20px;
          margin: 20px;
        }
        .questionUpdate {
          display: flex;
          justify-content: end;
          width: 100%;
        }
        .bar {
          width: 100%;
        }

        .sub-c {
          margin-right: 10px;
        }

        .fc-light {
          color: gray;
          margin-right: 10px;
        }

        .answerContainer {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          width: 70%;
        }
        .answerCount {
          font-weight: 300;
        }
        .icon {
          width: 40px;
          cursor: pointer;
        }
        .answerCommentBoxs {
          width: 550px;
        }

        .answerBox {
          display: flex;
          width: 100%;
        }
        .answerComment {
          font-size: 16px;
          margin: 10px;
        }
        .answerGroup {
          display: flex;
          flex-direction: column;
          width: 60%;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .deleteButton {
          margin-left: 10px;
        }

        .iconContainer {
          display: flex;
          justify-content: start;
          width: auto;
        }

        .editorContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .editor {
          width: 100%;
          min-width: 10rem;
          height: 15rem;
          resize: none;
          margin-bottom: 10px;
        }

        .editorTitle {
          font-size: 22px;
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
          width: auto;
          border: solid #67b9f3 1px;
          background-color: #67b9f3;
          padding: 1% 3%;
          border-radius: 7px;
          cursor: pointer;
        }

        .answerPostButton:hover {
          background-color: hsl(206deg 100% 40%);
        }
      `}</style>
    </>
  );
}

// props로 index, answer = 답글 내용, setAnswers = 답글글 수정, deleteAnswer 답글삭제 함수
function Answer({ i, answer, setAnswers, deleteAnswer }) {
  //state
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(answer);

  const onChangeTextarea = e => {
    setValue(e.target.value);
  };

  return (
    <div className="answerContainer">
      <div className="answer">{answer}</div>
      <button
        onClick={() => {
          setIsEdit(prev => !prev);
        }}
        className="btn"
      >
        Edit
      </button>
      <button onClick={() => deleteAnswer(i)} className="btn">
        Delete
      </button>
      {/* 수정하기 클릭하면 보여주고 아닐때는 안보여주기 */}
      {isEdit ? (
        <div className="editorContainer">
          <textarea
            value={value}
            onChange={onChangeTextarea}
            className="editor"
          />
          <div>
            <button
              onClick={() => {
                setAnswers(prev => {
                  prev.answers.splice(i, 1, value);

                  return {
                    ...prev,
                    answers: prev.answers,
                  };
                });
                setIsEdit(false);
              }}
              className="answerPostButton"
            >
              submit
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <style jsx>{`
         {
          .editorContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .editor {
            width: 100%;
            min-width: 10rem;
            height: 15rem;
            resize: none;
            margin-bottom: 10px;
          }
          .answerContainer {
            flex: 1;
            padding: 3%;
          }

          .btn {
            width: 3rem;
            height: 2rem;
            background-color: #67b9f3;
            color: white;
            border: none;
            border-radius: 7px;
            margin-right: 10px;
            cursor: pointer;
          }

          .btn:hover {
            background-color: hsl(206deg 100% 40%);
          }
        }
      `}</style>
    </div>
  );
}
