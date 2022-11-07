import { useState, useEffect } from "react";
import MyAnser from "./MyAnser";
export default function MyAnsers() {
  const [myAnsers, setMyAnsers] = useState({
    data: { answers: { data: [], pageInfo: { totalPages: 1 } } },
  });
  const [crrentPage, setCrrentPage] = useState(1);
  const pageNavRender = () => {
    const result = [];

    for (let i = 1; i <= myAnsers.data.answers.pageInfo.totalPages; i++) {
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
    <div className="MyAnsers">
      <div>
        {myAnsers.data.answers.data.length === 0 ? (
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
          width: 80%;
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
