import { useRouter } from "next/router";
import Link from "next/link";
const subTap = () => {
  const router = useRouter();
  return (
    <div id="subTap">
      <div className="position">
        <Link
          href={
            router.pathname === "/users/setting/delete"
              ? `/users/setting/edit`
              : `/users/saves/qustions`
          }
        >
          <a>
            <div
              className={
                router.pathname === `/users/setting/edit`
                  ? "currentTap"
                  : router.pathname === `/users/saves/qustions`
                  ? "currentTap"
                  : "notCurrentTap"
              }
            >
              {router.pathname === `/users/setting/edit`
                ? "Edit"
                : router.pathname === `/users/setting/delete`
                ? "Edite"
                : "Questions"}
            </div>
          </a>
        </Link>
        <Link
          href={
            router.pathname === "/users/setting/edit"
              ? "/users/setting/delete"
              : `/users/saves/ansers`
          }
        >
          <a>
            <div
              className={
                router.pathname === `/users/setting/delete`
                  ? "currentTap"
                  : router.pathname === `/users/saves/ansers`
                  ? "currentTap"
                  : "notCurrentTap"
              }
            >
              {router.pathname === `/users/setting/edit`
                ? "Delete"
                : router.pathname === `/users/setting/delete`
                ? "Delete"
                : "Answers"}
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .position {
          top: 2rem;
          position: sticky;
          float: left;
        }
        a {
          color: hsl(210, 8%, 45%);
          text-decoration: none;
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
          margin-bottom: 25px;
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

        @media screen and (max-width: 1100px) {
          #subTap {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default subTap;
