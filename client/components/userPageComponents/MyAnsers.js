import { useState, useEffect } from "react";
import MyAnser from "./MyAnser";
export default function MyQusticons() {
  const [myAnsers, setMyAnsers] = useState([]);
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "text/xml",
    });
    fetch("http://54.180.175.144:8080/answer/user/1?page=1&size=3", {
      headers,
    })
      .then((res) => res.json())
      .then((ansers) => setMyAnsers(ansers.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="MyAnsers">
      {myAnsers === 0 ? (
        <div id="null">답변한 내역이 없습니다.</div>
      ) : (
        myAnsers.map((data) => {
          return <MyAnser key={data.answerId} data={data}></MyAnser>;
        })
      )}
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
