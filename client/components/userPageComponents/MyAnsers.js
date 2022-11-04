import { useState, useEffect } from "react";
import MyAnser from "./MyAnser";
export default function MyAnsers() {
  const [myAnsers, setMyAnsers] = useState({
    data: { answers: { data: [], pageInfo: { totalPages: 1 } } },
  });
  const [crrentPage, setCrrentPage] = useState(1);
  const pageNavRender = () => {
    const result = [];
<<<<<<< HEAD
<<<<<<< HEAD
    for (let i = 1; i <= myAnsers.pageInfo.totalPages; i++) {
=======

    for (let i = 1; i <= myAnsers.data.answers.pageInfo.totalPages; i++) {
>>>>>>> b1568bd76b0bbc4914ab4a8e1ee559d9b7d1a09f
=======

    for (let i = 1; i <= myAnsers.data.answers.pageInfo.totalPages; i++) {
>>>>>>> 97679563dd91f3076c1da7b8090df840bce8d7d7
      result.push(
        <div
          key={i}
          className="pageNav"
          onClick={(e) => {
            setCrrentPage(e.target.innerText);
          }}
        >
          <span>{i}</span>
          <style jsx>{`
            .pageNav {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 5px;
              width: 20px;
              height: 20px;
              border: 1px solid black;
              cursor: pointer;
            }
            .pageNav:hover {
              background-color: rgb(230, 230, 230);
            }
          `}</style>
        </div>
      );
    }
    return result;
  };
  useEffect(() => {
    const headers = new Headers({
      Authorization: localStorage.getItem("accessToken"),
    });
    fetch(
      `/answer/user/${localStorage.getItem("user")}?page=${crrentPage}&size=4`,
      {
        headers,
      }
    )
      .then((res) => res.json())
      .then((ansers) => setMyAnsers(ansers))
      .catch((err) => console.log(err));
  }, [crrentPage]);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
      <div className="MyAnsers">
        {myAnsers.data === 0 ? (
=======
    <div className="MyAnsers">
      <div>
        {myAnsers.data.answers.data.length === 0 ? (
>>>>>>> b1568bd76b0bbc4914ab4a8e1ee559d9b7d1a09f
=======
    <div className="MyAnsers">
      <div>
        {myAnsers.data.answers.data.length === 0 ? (
>>>>>>> 97679563dd91f3076c1da7b8090df840bce8d7d7
          <div id="null">답변한 내역이 없습니다.</div>
        ) : (
          myAnsers.data.answers.data.map((data) => {
            return <MyAnser key={data.answerId} data={data}></MyAnser>;
          })
        )}
      </div>
      <div id="pageNavs">{pageNavRender()}</div>
      <style jsx>{`
        #pageNavs {
          display: flex;
          width: 100%;
        }
        .MyAnsers {
          display: flex;
          flex-direction: column;
          justify-content: start;
          height: 450px;
        }
        #null {
          margin-top: 40px;
          font-size: larger;
          color: gray;
        }
      `}</style>
    </div>
  );
}
