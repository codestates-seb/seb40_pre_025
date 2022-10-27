import { useRouter } from "next/router";
import Link from "next/link";
<<<<<<< HEAD
import SubTap from "./subTap";
=======
>>>>>>> kms
export default function saves_qustions() {
  const router = useRouter();
  return (
    <div id="main-content">
<<<<<<< HEAD
      <SubTap></SubTap>
=======
      <div id="subTap">
        <Link href={"/users/123/saves/qustions"}>
          <a>
            <div
              className={
                router.pathname === `/users/[id]/saves/qustions`
                  ? "currentTap"
                  : "notCurrentTap"
              }
            >
              Questions
            </div>
          </a>
        </Link>
        <Link href={`/users/123/saves/ansers`}>
          <a>
            <div
              className={
                router.pathname === `/users/[id]/saves/ansers`
                  ? "currentTap"
                  : "notCurrentTap"
              }
            >
              Anser
            </div>
          </a>
        </Link>
      </div>
>>>>>>> kms
      <div id="questions">
        <label className="lable">My Questions</label>
        <div className="contentBox">"bbbbbbbb"</div>
      </div>
      <style jsx>{`
        a {
          color: hsl(210, 8%, 45%);
          text-decoration: none;
        }
        #main-content {
          display: flex;
          margin: 0;
          margin-top: 40px;
          padding: 0;
          border: 0;
          font: inherit;
          font-size: 100%;
          vertical-align: baseline;
        }
        .lable {
          margin: 4px;
          margin-right: 0;
          margin-left: 0;
          font-size: 2.2rem;
          font-family: inherit;
          color: rgb(57, 57, 57);
          font-weight: 600;
          padding: 0;
        }
        .contentBox {
          margin-top: 20px;
          color: hsl(210, 8%, 45%);
          text-align: center;
          width: auto;
          min-width: 450px;
          height: 150px;
          padding: 32px;
          background-color: hsl(210, 8%, 97.5%);
          border: 1px solid hsl(0, 0%, 78%);
          border-radius: 5px;
        }
        #subTap {
          margin-right: 20px;
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
          width: 100px;
          height: 40px;
          margin-bottom: 25px;
          font-size: 18px;
          margin-right: 15px;
          border-radius: 33px;
          background-color: hsl(27, 90%, 55%);
        }
      `}</style>
    </div>
  );
}
