import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


export default function answer() {
    const [question, setQuestion] = useState({title:""})
    const [answer, setAnswer] = useState({body:""})
    const [value, setValue] = useState([]);
    

    const router = useRouter();
    const {id} = router.query;
  
  
 //get 
    useEffect(()=> {
        (async () => {
         const {data} = await (
          await fetch(
            `http://54.180.175.144:8080/post/${id}?page=1&size=5`
          )
          ).json()
          setQuestion(data)
          const [obj] = data.answer.data

          setAnswer(obj)
          // console.log(obj.body)
          // console.log("body" in data)
        })()
      }, [])

        const onClickAddAnswer =()=>{
          let body = {
            body: body,
            userId: localStorage.getItem("user")
          } 
            fetch(`http://54.180.175.144:8080/answer/${localStorage.getItem("user")}/${id}`, {
                  method: "POST",
                  headers : new Headers({"Content-Type": "text/xml" }),
                  body: JSON.stringify(body),
                  })
                .then((response) => {
                  console.log(response)
                  location.reload()
                })
        }
        
       
       
        


        useEffect(()=>{console.log(localStorage.getItem("user"))},[])



  return (
    <div>

      <div>
        <h1 className="questionTitle"> {question.title}</h1>
      </div>

      <div className="qusetionInfoContainer">
            <div className="sub-c">
              <span className="fc-light">CreatAt</span>
            </div>
            <div>
              <span className="fc-light">VoteCount</span>
            </div>
            <div>
              <span className="fc-light">ReadCount</span>

            </div>
          </div>

      <hr className="bar" />
      <div>
      <h1 className="questionComentBox">{question.body}</h1>
      </div>
      <hr className="bar" />
      <div>
        <h1 className="answerCount">Answer</h1>  
      </div>
      <hr className="bar" />
      <div>
      <h1 className="questionComentBox">{answer.body}</h1>
      </div>
      <hr className="bar" />
      <div>
        <h1 className="youAnswertitle">Your Answer</h1>
      </div>
      <div>
      <div className="editorContainer">
          
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="editor"
          />
          
          <div>
            <div
              onClick={onClickAddAnswer}
              className="answerPostButton"
            >
              Post Your Answer
            </div>
          </div>
        </div>
        </div>
      
      
      <style jsx>{`
          .questionTitle{
            font-weight: 400;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: flex-start;
            padding: 3%;
          }
          .qusetionInfoContainer {
          display: flex;
          justify-content: space-between;
          width: 50%;
          margin-bottom: 40px;
        }

        .sub-c {
          margin-right: 30px;
        }
        .fc-light {
          color: gray;
          margin: 30px;
        }

        .questionComentBox {
            display: block;
            font-size: 15px;
            margin: 20px;
        }
        .answerCount {
          font-weight: 400;
           display: block;
            margin: 20px;
        }
        .youAnswertitle{
          font-size: 22px;
          margin: 20px;
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
          margin-right: 30px;
          margin-left: 30px;
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
          margin: 20px;

        }

        .answerPostButton:hover {
          background-color: hsl(206deg 100% 40%);
        }
       

      
        .bar {
          width: 95%;
        }
          
        `}
      </style>
    </div>
  )
}
//dasdasdas