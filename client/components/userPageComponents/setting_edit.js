import { useState, useRef } from "react";
import SubTap from "./subTap";
export default function saves_qustions() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const handleClickFileInput = () => {
    console.log(profileImage);
    fileInputRef.current.click();
  };
  const onImgChange = async (event) => {
    const fileList = event.target.files;
    const url = URL.createObjectURL(fileList[0]);
    setProfileImage({
      file: fileList[0],
      thumbnail: url,
      type: fileList[0].type.slice(0, 5),
    });
  };
  console.log(profileImage);
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
              <div className="changePicure">
                <div>Change picture</div>
                <input
                  type="file"
                  className="upload"
                  ref={fileInputRef}
                  onChange={onImgChange}
                />
              </div>
            </div>
          </div>
          <div id="inputBox">
            <label className="lable" for="email">
              Dispaly name
            </label>
            <input className="input"></input>
          </div>
          <button onClick={handleClickFileInput}>aaaaaaa</button>
        </div>
      </div>
      <style jsx>{`
        .lable {
          margin: 4px;
          margin-right: 0;
          margin-left: 0;
          font-size: 1rem;
          font-family: inherit;
          color: black;
          font-weight: 600;
          padding: 0;
        }
        .input {
          border: 1px solid rgba(111, 111, 111, 0.497);
          border-radius: 3px;
          width: 70%;
          height: 25px;
        }
        #prifileImgBox {
          width: 100%;
          margin-bottom: 10px;
        }
        #inputBox {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
        }
        .upload {
          color: white;
          background-color: rgba(255, 255, 255, 0);
          height: 100%;
          width: 100%;
          border: none;
        }
        .changePicure {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(58, 58, 58, 0.497);
          position: relative;
          height: 1.5rem;
          bottom: 18%;
        }
        #imgBox {
          position: relative;
          height: 10rem;
          width: 10rem;
          border-radius: 5px;
           {
            /* background-color: hsl(27, 90%, 55%); */
          }
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
