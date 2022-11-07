import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


export default function answer() {
  // 프리랜더 하기 전에 그 값과 똑같이 처음 선언하는 것이 중요!! 
    const [question, setQuestion] = useState({title:"",body:"",answers:{data:[]}})
    const [answer, setAnswer] = useState([])

    const [value, setValue] = useState([]);
    

    const router = useRouter();
    // console.log(router.query)
    const {id} = router.query
    const idNum = Number(id)
    console.log(idNum)
    

 //get 
    useEffect(()=> {
        (async () => {
         const {data} = await (
          await fetch(
            `http://54.180.175.144:8080/post/${idNum}?page=1&size=5`
          )
          ).json()
          setQuestion(data)
          // setAnswer(data.answers.data)
          // const obj = data.answers.data
            // console.log(data.title)
          // setAnswer(data.answers)
          // console.log(obj)
// console.log(data.answers.data)
        
          // console.log("body" in data)
        })()
      }, [id])

        const onClickAddAnswer =()=>{
          let body = {
            body: value,
            userId: localStorage.getItem("user")
          } 
            fetch(`http://54.180.175.144:8080/answer/${localStorage.getItem("user")}/${idNum}`, {
                  method: "POST",
                  headers : new Headers({"Content-Type": "application/json" }),
                  body: JSON.stringify(body),
                  })
                .then((response) => {
                  console.log(response)
                  location.reload()
                })
        };
        
       
       
        console.log(question)

        // useEffect(()=>{console.log(localStorage.getItem("user"))},[])



  return (
    <div>

      <div>
        <h1 className="questionTitle"> {question ? question.title : null}</h1>
      </div>

      <div className="qusetionInfoContainer">
            <div className="sub-c">
              <span className="fc-light"></span>
            </div>
            <div>
              <span className="fc-light"></span>
            </div>
            <div>
              <span className="fc-light"></span>

            </div>
          </div>

      <hr className="bar" />
      <div>
      <h1 className="questionComentBox">{question? question.body:null}</h1>
      </div>
      <hr className="bar" />
      <div>
        <h1 className="answerCount">Answer</h1>  
      </div>
     
      <div>
      <div className="questionComentBox">{question ? question.answers.data.map((el)=> {
        
          return <div className='answerCss'>
            {el ? el.body : "a"}
          </div>
      }) : null}</div>
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

        

        .questionComentBox {
            display: block;
            font-size: 15px;
            margin: 5%;
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
        .answerCss {
          padding: 2%;
          border-bottom: 1px dashed gray;
          width: 80%;
        }

        .editorContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .editor {
          width: 80%;
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
          width: 5%;
          margin-top: 30px;
        }

        .answerPostButton {
          font-size: 24px;
          font-weight: 400;
          color: white;
          width: 12%;
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
