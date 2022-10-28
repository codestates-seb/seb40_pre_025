import Link from "next/link";

export default function MyQusticon({ data }) {
  return (
    <div className="qusticonBox">
      <div className="votes-status">
        <div className="votes-list">{`${data.votes} votes`}</div>
        <div className="votes-list plus">{`${data.ansers} ansers`}</div>
        <div className="votes-list">{`${data.views} views`}</div>
      </div>
      <div className="qusticon">
        <div className="title">
          <Link href={"/questions/123123"}>
            <a>{data.title}</a>
          </Link>
        </div>
        <div className="d-flex">
          <div className="post-tags">
            <Link href="">
              <a className="tags">tags</a>
            </Link>
          </div>
          <div className="d-flex">
            <img src="/human.png" width={15} height={15}></img>
            <Link href={""}>
              <a className="userName">{data.author}</a>
            </Link>
            <div className="asked">1,339 asked 52 secs ago</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .asked {
          color: gray;
        }
        .userName {
          font-size: 1rem;
          color: hsl(206, 100%, 40%);
          text-decoration: none;
          margin-right: 10px;
        }
        a {
          font-size: 1.2rem;
          color: hsl(206, 100%, 40%);
          text-decoration: none;
        }
        .d-flex {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: flex-end;
        }
        .qusticonBox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-top: 1px solid #e3e6e8;
          width: 100%;
        }
        .qusticon {
          display: flex;
          align-items: flex-start;
          width: 100%;
          flex-direction: column;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .votes-status {
          margin-right: 20px;
          margin-bottom: 6px;
          width: 3.5rem;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          flex-wrap: wrap;
          align-items: flex-end;
          font-size: 10px;
          color: gray;
        }
        .votes-list {
          color: black;
          font-size: 0.8rem;
          margin-bottom: 0.3rem;
        }
        .plus {
          color: #2f6f44;
          border: 1px solid #2f6f44;
          padding: 0.2rem;
        }
        .tags {
          color: #2c5877;
          background-color: #d0e3f1;
          border-color: #00000000;
          font-size: 0.8rem;
          text-decoration: none;
          display: inline-block;
          padding: 0.4em 0.5em;
          white-space: nowrap;
          text-align: center;
          border-width: 1px;
          border-style: solid;
          border-radius: 2px;
        }
        .title {
          text-align: left;
          font-weight: 500;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
