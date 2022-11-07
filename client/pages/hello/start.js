import TeamMemberFe from "../../components/TeamMemberFe";
import TeamMemberBe from "../../components/TeamMemberBe";
import CS25 from "../../components/CS25";
export default function Hello() {
  return (
    <div className="mainContant">
      <div className="d-f-c">
        <div id="LogoBox">
          <img id="Logo" src="https://ifh.cc/g/PCxy2T.png" border="0"></img>
        </div>
      </div>
      <div id="introductionBox">
        <CS25></CS25>
      </div>
      <div className="d-f-c f-d stackBox">
        <div className="title">Front End</div>
        <div className="stackIntroduction">
          <div className="imgBox">
            <img className="img" src="https://ifh.cc/g/RA6aQG.png"></img>
            <div className="labelBox">
              <label>Next JS</label>
            </div>
          </div>
          <div className="imgBox">
            <img className="img" src="https://ifh.cc/g/NCP6pm.png"></img>
            <div className="labelBox">
              <label>Css</label>
            </div>
          </div>
          <div className="imgBox">
            <img className="img" src="https://ifh.cc/g/ARPrnt.png"></img>
            <div className="labelBox">
              <label>React</label>
            </div>
          </div>
          <div className="imgBox">
            <img className="img" src="https://ifh.cc/g/4M8h73.png"></img>
            <div className="labelBox">
              <label>React Rdux</label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-f-c f-d stackBox">
        <div className="title">Back End</div>
        <div className="stackIntroduction">
          <div className="d-f-c imgBox">
            <img className="img" src="https://ifh.cc/g/8p06lK.png"></img>
            <div className="labelBox">
              <label>Spring</label>
            </div>
          </div>
          <div className="imgBox">
            <img className="img" src="https://ifh.cc/g/L3HmBt.png"></img>
            <div className="labelBox">
              <label>Spring Boot</label>
            </div>
          </div>
          <div className="imgBox">
            <img className="img" src="https://ifh.cc/g/A2vPFV.png"></img>
            <div className="labelBox">
              <label>Spring Data JPA</label>
            </div>
          </div>
          <div className="imgBox">
            <img className="img" src="https://ifh.cc/g/Ajy4w7.png"></img>
            <div className="labelBox">
              <label>H2 Data Base</label>
            </div>
          </div>
        </div>
      </div>
      <div id="TeamMemberFe">
        <TeamMemberFe></TeamMemberFe>
      </div>
      <div id="TeamMemberBe">
        <TeamMemberBe></TeamMemberBe>
      </div>
      <style jsx>{`
        #TeamMemberFe {
          margin: 10%;
        }
        #TeamMemberBe {
          display: flex;
          justify-content: flex-end;
          margin-right: 10%;
          margin-bottom: 10%;
        }
        .labelBox {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          border: 1px solid orange;
          border-radius: 15px;
        }
        label {
          font-size: x-large;
          color: orange;
        }
        .mainContant {
          height: 100%;
          background-color: rgb(24, 24, 24);
        }
        .stackBox {
          height: auto;
          padding-top: 70px;
          padding-bottom: 100px;
          margin-top: 100px;
        }
        .stackIntroduction {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
        }
        .imgBox {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: end;
          width: auto;
          height: 250px;
          margin-right: 20px;
          margin-left: 20px;
        }
        .img {
          height: auto;
          width: 250px;
          overflow: hidden;
        }

        .f-d {
          flex-direction: column;
        }

        .d-f-c {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #LogoBox {
          margin-top: 40px;
          border: 1px solid rgb(133, 133, 133);
          background-color: aliceblue;
          border-radius: 50px;
          box-shadow: 1px 1px 25px 4px rgb(255, 255, 255);
        }
        #introductionBox {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          margin: 40px;
        }
        .title {
          color: aliceblue;
          text-align: center;
          margin-bottom: 30px;
          font-weight: 600;
          font-size: 3rem;
          padding-bottom: 5px;
          border-bottom: 3px solid rgb(210, 210, 210);
        }
        @media screen and (max-width: 1200px) {
          .stackIntroduction {
            flex-direction: column;
            margin-bottom: 100px;
          }
          .imgBox {
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
        @media screen and (max-width: 720px) {
        }
      `}</style>
    </div>
  );
}
