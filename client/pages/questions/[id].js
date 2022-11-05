import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function answer() {
    const [question, setQuestion] = useState([])
    const [answer, setAnswer] = useState([])

    const router = useRouter();
    const {id} = router.query
    console.log(id)

    useEffect(()=> {
        (async () => {
         const {data} = await (
          await fetch(
            `http://54.180.175.144:8080/post/${id}?page=1&size=5`
          )
          ).json()
          setQuestion(data)
          const [obj] = data.answers.data
    
          setAnswer(obj)
          // console.log(obj.body)
          // console.log("body" in data)
        })()
      }, [])
   

  return (
    <div>
      <div>
        <h1>글제목</h1>
        {question.title}
      </div>
      <div>
      <h1>글내용</h1>

        {question.body}
      </div>
      <div>
        <h1>답변내용</h1>
        {answer.body}
      </div>
    </div>
  )
}
