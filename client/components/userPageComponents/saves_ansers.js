import MyQusticons from "./MyQuestions";
import SubTap from "./subTap";
export default function saves_qustions() {
  return (
    <div id="main-content">
      <SubTap></SubTap>

      <div id="ansers">
        <label className="lable">My Ansers</label>
        <div className="contentBox">
          <MyQusticons></MyQusticons>
        </div>
      </div>
      <style jsx>{`
        #ansers {
          width: 100%;
          margin-left: 1rem;
        }
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
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 20px;
          text-align: center;
          width: 65%;
          min-width: 700px;
          height: auto;
          padding: 5px;
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
