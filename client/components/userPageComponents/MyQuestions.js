import { useState, useEffect } from "react";
import MyQusticon from "./MyQuestion";
export default function MyQusticons() {
  const [myQuestions, setMyQuestions] = useState({
    data: { posts: { data: [], pageInfo: { totalPages: 1 } } },
  });
  const [crrentPage, setCrrentPage] = useState(1);
  const pageNavRender = () => {
    const result = [];

    for (let i = 1; i <= myQuestions.data.posts.pageInfo.totalPages; i++) {
      result.push(
        <div
          key={i}
          className={Number(crrentPage) === i ? "pageNav creetPage" : "pageNav"}
          onClick={(e) => {
            setCrrentPage(e.target.innerText);
          }}
        >
          <span>{i}</span>
          <style jsx>{`
            .creetPage {
              background-color: #8080805f;
            }
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
      `/post/user/${localStorage.getItem("user")}?page=${crrentPage}&size=4`,
      {
        headers,
      }
    )
      .then((res) => res.json())
      .then((ansers) => setMyQuestions(ansers))
      .catch((err) => console.log(err));
  }, [crrentPage]);
  return (
    <div className="MyQusticons">
      <div>
        {myQuestions.data.posts.data.length === 0 ? (
          <div id="null">질문한 내역이 없습니다.</div>
        ) : (
          myQuestions.data.posts.data.map((data) => {
            return <MyQusticon key={data.postId} data={data}></MyQusticon>;
          })
        )}
      </div>
      <div id="pageNavs">{pageNavRender()}</div>
      <style jsx>{`
        .MyQusticons {
          width: 80%;
          height: 100%;
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
