import { useState } from "react";
import SubTap from "./subTap";
export default function saves_qustions() {
  const [isCheck, setIsCheck] = useState(false);
  const handleClickCheckBox = () => {
    setIsCheck(!isCheck);
  };
  return (
    <div id="main-content">
      <SubTap></SubTap>
      <div id="delete">
        <label className="Title">Edit Frofile</label>
        <div className="">
          <p>
            Before confirming that you would like your profile deleted, we'd
            like to take a moment to explain the implications of deletion:
          </p>
          <ul>
            <li>
              Deletion is irreversible, and you will have no way to regain any
              of your original content, should this deletion be carried out and
              you change your mind later on.
            </li>
            <li>
              Your questions and answers will remain on the site, but will be
              disassociated and anonymized (the author will be listed as
              "user20319358") and will not indicate your authorship even if you
              later return to the site.
            </li>
          </ul>
          <p></p>

          <p>
            Confirming deletion will only delete your profile on Stack Overflow
            - it will not affect any of your other profiles on the Stack
            Exchange network. If you want to delete multiple profiles, you'll
            need to visit each site separately and request deletion of those
            individual profiles.
          </p>

          <form className="" action="" method="post">
            <fieldset className="check">
              <div className="d-flex">
                <div className="">
                  <input
                    className=""
                    type="checkbox"
                    onClick={handleClickCheckBox}
                  />
                </div>
                <label className="" form="delete-terms">
                  I have read the information stated above and understand the
                  implications of having my profile deleted. I wish to proceed
                  with the deletion of my profile.
                </label>
              </div>
            </fieldset>
            <button className={isCheck ? "onCheck" : "offCheck"} disabled="">
              Delete profile
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .onCheck {
          background-color: hsl(358, 62%, 52%);
          border: none;
          color: white;
          height: 2rem;
          border-radius: 2px;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 10px;
          cursor: pointer;
        }
        .offCheck {
          cursor: not-allowed;
          background-color: hsla(358, 62%, 52%, 0.379);
          border: none;
          color: white;
          height: 2rem;
          border-radius: 2px;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 10px;
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
        #main-content {
          display: flex;
          margin: 0;
          margin-top: 40px;
          padding: 0;
          border: 0;
          font: inherit;
          vertical-align: baseline;
          color: rgb(101, 101, 101);
          font-weight: 500;
        }
        .check {
          border: none;
          margin: 0;
          margin-bottom: 1rem;
          padding: 0;
        }
        .d-flex {
          display: flex;
        }
      `}</style>
    </div>
  );
}
