import { useState, useRef } from "react";
import SubTap from "./subTap";
import dynamic from "next/dynamic";
export default function saves_qustions() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleClickFileInput = () => {
    fileInputRef.current.click();
  };
  const onImgSubmit = async (e) => {
    console.dir(e.target.files[0]);
    const formData = new FormData(); // formData 객체를 생성한다.
    formData.append("File", files[0]);
    console.log(formData);
    setProfileImage(formData);
  };

  const Editor = dynamic(() => import("../../components/Editor.js"), {
    ssr: false,
  });
  return (
    <div id="main-content">
      <SubTap></SubTap>

      <div id="EditFrofile">
        <label className="Title">Edit Frofile</label>
        <div className="contentBox">
          <div id="profileImgBox" className="d-flex_f-d">
            <div className="lable">Profile Image</div>
            <div id="imgBox">
              <img
                src="https://cdn-icons-png.flaticon.com/512/146/146007.png"
                width="100%"
                height="100%"
              ></img>
              <div onSubmit={(e) => onImgSubmit(e)} className="changePicure">
                <input
                  type="file"
                  className="upload"
                  ref={fileInputRef}
                  onChange={onImgSubmit}
                />
                <button
                  type="submit"
                  className="uploadBtn"
                  onClick={handleClickFileInput}
                >
                  Change picture
                </button>
              </div>
            </div>
          </div>
          <div id="inputBox">
            <label className="lable" form="email">
              Dispaly name
            </label>
            <input className="input"></input>
          </div>
          <div className="editorbox">
            <div className="lable">About</div>
            <div className="editor">
              <Editor></Editor>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #EditFrofile {
          width: 100%;
        }
        .editorbox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 40px;
        }
        .editor {
          width: auto;
        }
        .uploadBtn {
          color: white;
          background-color: rgba(255, 255, 255, 0);
          height: 100%;
          width: 100%;
          border: none;
          cursor: pointer;
        }
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
        #profileImgBox {
          width: 100%;
        }
        #inputBox {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 30px;
        }
        .upload {
          display: none;
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
          width: 100%;
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
          margin-top: 20px;
          text-align: center;
          width: 100%;
          height: auto;
          min-width: 450px;
          padding: 32px;
          border: 1px solid hsl(0, 0%, 78%);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
