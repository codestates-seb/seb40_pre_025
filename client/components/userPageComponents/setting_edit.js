import SubTap from "./subTap";
export default function saves_qustions() {
  return (
    <div id="main-content">
      <SubTap></SubTap>
      <div id="EditFrofile">
        <label className="Title">Edit Frofile</label>
        <div className="contentBox">
          <div id="prifileImgBox" className="d-flex_f-d">
            <div className="lable">Profile Image</div>
            <div id="imgBox">
              <img
                src="https://cdn-icons-png.flaticon.com/512/146/146007.png"
                width="100%"
                height="100%"
              ></img>
              <div>Change picture</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #imgBox {
          height: 10rem;
          width: 10rem;
          border-radius: 5px;

          background-color: hsl(27, 90%, 55%);
        }
        a {
          color: hsl(210, 8%, 45%);
          text-decoration: none;
        }
        .d-flex_f-d {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .lable {
          font-size: 1rem;
          color: black;
          font-weight: 600;
          margin-bottom: 5px;
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
        .Title {
          display: block;
          height: 2.8rem;
          margin: 4px;
          margin-right: 0;
          margin-left: 0;
          font-size: 1.8rem;
          font-family: inherit;
          color: rgb(57, 57, 57);
          font-weight: 600;
          padding: 0;
          border-bottom: 1px solid hsl(0, 0%, 78%);
        }
        .contentBox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 20px;
          color: hsl(210, 8%, 45%);
          text-align: center;
          width: auto;
          min-width: 450px;
          height: auto;
          padding: 32px;
          border: 1px solid hsl(0, 0%, 78%);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
