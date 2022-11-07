import Link from "next/link";
import UserIdLayout from "./User_Id_Layout";
import { useState, useEffect } from "react";

export default function profile() {
  const [anserCount, setAnserCount] = useState(0);
  const [qustionCount, setQustionCount] = useState(0);
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "text/xml",
    });
    fetch(`/answer/user/${localStorage.getItem("user")}?page=1&size=5`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => setAnserCount(data.data.answers.pageInfo.totalElements))
      .catch((err) => console.log(err));
    fetch(`/post/user/${localStorage.getItem("user")}?page=1&size=5`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => setQustionCount(data.data.posts.pageInfo.totalElements))
      .catch((err) => console.log(err));
    fetch(`/user/${localStorage.getItem("user")}`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => setAbouts(data.data.about))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div id="main-content">
          <div id="states">
            <label className="lable">Stats</label>
            <div className="statsBox">
              <div className="state">
                <div className="color-B">{anserCount}</div>answers
              </div>
              <div className="state">
                <div className="color-B">{qustionCount}</div>questions
              </div>
            </div>
          </div>
          <div id="about">
            <label className="lable">About</label>
            <div className="contentBox">
              {abouts === "" ? (
                <div>
                  {`Your about me section is currently blank. Would you like to
                  add one? `}
                  <Link href={"/users/setting/edit"}>
                    <a>Edit profile</a>
                  </Link>
                </div>
              ) : (
                abouts
              )}
            </div>
          </div>
        </div>
        <style jsx>{`
          #about {
            margin-bottom: 5rem;
          }
          .color-B {
            color: black;
            font-weight: 600;
            margin-bottom: 5px;
          }
          a {
            color: hsl(206, 100%, 40%);
            text-decoration: none;
          }
          #main-content {
            margin: 0;
            margin-top: 40px;
            padding: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            vertical-align: baseline;
          }
          .container {
            height: 100vh;
            width: 100vh;
            display: flex;
            justify-content: space-between;
            flex: 1 0 auto;
            position: relative;
            margin: 0;
            text-align: left;
          }
          .content {
            width: 50%;
            min-width: 515px;
            padding: 24px;
            margin: 0;
            border-radius: 0;
            border-top-width: 0;
            border-bottom-width: 0;
          }
          .lable {
            margin: 4px;
            margin-right: 0;
            margin-left: 0;

            font-size: 1.5rem;
            font-family: inherit;
            color: rgb(57, 57, 57);
            font-weight: 600;
            padding: 0;
          }
          .contentBox {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5px;
            color: hsl(0, 0%, 22%);
            text-align: center;
            width: auto;
            min-width: 450px;
            height: 150px;
            padding: 32px;
            background-color: hsl(210, 8%, 97.5%);
            border: 1px solid hsl(0, 0%, 78%);
            border-radius: 5px;
          }
          .statsBox {
            display: grid;
            grid-template-columns: 50% 50%;
            border: 1px solid hsl(0, 0%, 78%);
            border-radius: 5px;
            margin-top: 5px;
            width: auto;
            height: 4.5rem;
            margin-bottom: 50px;
            display: grid;
          }
          .state {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 10px;
            color: gray;
          }
        `}</style>
      </div>
    </div>
  );
}

profile.getLayout = function getLayout(page) {
  return <UserIdLayout>{page}</UserIdLayout>;
};
