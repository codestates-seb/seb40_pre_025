import Link from "next/link";
import { useRouter } from "next/router";
export default function User() {
  const tapMenuList = ["Profile", "Saves", "Setting"];
  const router = useRouter();
  const isCurrent =
    router.pathname === `/users/[id]/profile`
      ? 0
      : router.pathname === `/users/[id]/saves/qustions`
      ? 1
      : router.pathname === `/users/[id]/saves/ansers`
      ? 1
      : router.pathname === `/users/[id]/setting`
      ? 2
      : null;
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
            <div id="userName">편범준</div>
            <div className="margin-L">
              <ul className="subimfo">
                <li>기타 정보...</li>
                <li>기타 정보...</li>
                <li>기타 정보...</li>
              </ul>
            </div>
          </div>
        </div>
        {router.pathname === `/users/[id]/profile` ? (
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
        ) : null}
      </div>
      <div id="tapContainer">
        <div id="tap">
          {tapMenuList.map((name, idx) => {
            return (
              <Link
                key={idx}
                href={
                  idx === 0
                    ? `/users/${"123"}/profile`
                    : idx === 1
                    ? `/users/${"123"}/saves/qustions`
                    : idx === 2
                    ? `/users/${"123"}/setting`
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
