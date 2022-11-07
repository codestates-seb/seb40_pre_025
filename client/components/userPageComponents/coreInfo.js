import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function User() {
  const [userData, setUserData] = useState({ userName: "" });
  const tapMenuList = ["Profile", "Saves", "Setting"];
  const router = useRouter();
  const isCurrent =
    router.pathname === `/users/profile`
      ? 0
      : router.pathname === `/users/saves/qustions`
      ? 1
      : router.pathname === `/users/saves/ansers`
      ? 1
      : router.pathname === `/users/setting/edit`
      ? 2
      : router.pathname === `/users/setting/delete`
      ? 2
      : null;
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "text/xml",
    });
    fetch(`/user/${localStorage.getItem("user")}`, {
      headers,
    })
      .then((res) => res.json())
      .then((ansers) => {
        console.log(ansers);
        setUserData(ansers.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(userData);
  return (
    <div id="mainbar-full">
      <div id="coreprofile">
        <div id="name-photo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/146/146007.png"
            width="96px"
            height="96px"
          ></img>
          <div>
            <div id="userName">{userData.userName}</div>
            <div className="margin-L">
              <ul className="subimfo">
                <li className="d-flex">
                  <svg className="d-flex flex_center" width="18" height="18">
                    <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path>
                  </svg>
                  <div className="d-flex flex_center">Member for 6 days</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* {router.pathname === `/users/profile` ? (
          <div id="editBtn">
            <Link href={"/"}>
              <a>
                <div id="editProfile">
                  <svg
                    className="icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z"></path>
                  </svg>
                  {` Edit profile`}
                </div>
              </a>
            </Link>
          </div>
        ) : null} */}
      </div>
      <div id="tapContainer">
        <div id="tap">
          {tapMenuList.map((name, idx) => {
            return (
              <Link
                key={idx}
                href={
                  idx === 0
                    ? `/users/profile`
                    : idx === 1
                    ? `/users/saves/qustions`
                    : idx === 2
                    ? `/users/setting/edit`
                    : null
                }
              >
                <a
                  className={isCurrent === idx ? "currentTap" : "notCurrentTap"}
                  idx={idx}
                >
                  <div>{name}</div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .container {
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
          padding-bottom: 0;
          margin: 0;
          border-radius: 0;
          border-top-width: 0;
          border-bottom-width: 0;
        }
        img {
          margin: 10px;
        }
        .d-ib {
          display: inline-block;
        }
        .fw-normal {
          font-weight: 400 !important;
          font-size: 15px;
        }
        .fc-light {
          color: hsl(210, 8%, 45%);
          font-size: 15px;
        }
        a {
          color: hsl(210, 8%, 45%);
          text-decoration: none;
        }
        .jc-space-between {
          justify-content: space-between !important;
        }
        .ai-center {
          align-items: center !important;
        }
        .margin-T-B {
          margin-top: 5px;
          margin-bottom: 15px;
        }
        .m-tb6 {
          margin-top: 6px;
          margin-bottom: 6px;
        }
        .margin-T {
          margin-top: 18px;
        }
        .margin-B {
          margin-bottom: 24px;
        }
        .margin-L {
          margin-left: 4px;
        }
        .icon {
          margin-right: 8px;
        }
        .ta-center {
          text-align: center !important;
          font-size: 1.61538462rem;
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
        }
        .svg-icon {
          vertical-align: bottom;
        }
        .fd-column {
          flex-direction: column;
        }
        .d-flex {
          display: flex;
        }
        .flex_center {
          justify-content: center;
          align-items: center;
        }

        #mainbar-full {
          width: 100%;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
          border: 0;
          font: inherit;
          font-size: 100%;
          vertical-align: baseline;
        }
        #coreprofile {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin-bottom: 16px;
        }
        .lable {
          margin: 4px;
          margin-right: 0;
          margin-left: 0;
          font-size: 1.15384615rem;
          font-family: inherit;
          color: black;
          font-weight: 600;
          padding: 0;
        }
        #name-photo {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: -8px;
        }
        #userName {
          margin: 4px;
          font-size: 2.61538461rem;
          margin-bottom: 12px;
        }
        .subimfo {
          display: flex;
          list-style: none;
          margin-left: 4;
          margin: 0;
          padding: 0;
          color: hsl(210, 8%, 45%);
          flex-wrap: wrap;
        }
        #editProfile {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 40px;
          border: 1px solid hsl(210, 8%, 65%);
          border-radius: 3px;
        }
        #editProfile :hover {
          background-color: rgb(225, 225, 225);
        }
        #tapContainer {
          margin-top: 30px;
          height: 40px;
          width: 300px;
        }
        #tap {
          display: grid;
          height: 100%;
          grid-template-columns: 33% 33% 33%;
        }
        .notCurrentTap {
          display: flex;
          justify-content: center;
          align-items: center;
          color: gray;
          font-size: 18px;
          margin-right: 15px;
          border-radius: 33px;
        }
        .currentTap {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 18px;
          margin-right: 15px;
          border-radius: 33px;
          background-color: hsl(27, 90%, 55%);
        }
      `}</style>
    </div>
  );
}
