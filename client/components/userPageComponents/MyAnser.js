import Link from "next/link";

export default function MyAnser({ data }) {
  console.log(data);
  const handleClickDeleteAnser = () => {
    const headers = new Headers({
      Authorization: localStorage.getItem("accessToken"),
    });
    fetch(`/answer/${data.answerId}`, {
      method: "DELETE",
      headers,
    })
      .then((res) => {
        console.log(res);
        location.reload();
      })

      .catch((err) => console.log(err));
  };
  return (
    <div className="anser">
      <div className="votes-status">
        <div className="votes-list">{`${data.voteCount} votes`}</div>
        <div className="votes-list">{`${data.readCount} views`}</div>
      </div>
      <div className="qusticon">
        <div className="content">
          <div className="body">{data.body}</div>
          <div className="deleteAnser" onClick={handleClickDeleteAnser}>
            <div>삭제</div>
          </div>
        </div>
        <div className="d-flex">
          <div className="createdAt">{`${data.createdAt.date.year}.${data.createdAt.date.month}.${data.createdAt.date.day}`}</div>
        </div>
      </div>
      <style jsx>{`
        .deleteAnser {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 25px;
          color: rgb(255, 128, 128);
          border: 1.5px solid rgb(255, 128, 128);
          border-radius: 10px;
        }
        .deleteAnser:hover {
          background-color: rgba(255, 197, 197, 0.502);
          cursor: pointer;
        }
        .createdAt {
          color: gray;
        }

        .userName {
          font-size: 1rem;
          color: hsl(206, 100%, 40%);
          text-decoration: none;
          margin-right: 10px;
        }
        .body {
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
        .anser {
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
        .content {
          display: flex;
          justify-content: space-between;
          text-align: left;
          font-weight: 500;
          margin-bottom: 1rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
