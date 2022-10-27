import CoreInfo from "./coreInfo";
export default function profile() {
  return (
    <div className="container">
      <div className="content">
        <CoreInfo></CoreInfo>
        <div id="main-content">
          <div id="about">
            <label className="lable">About</label>
            <div className="contentBox"></div>
          </div>
        </div>
        <style jsx>{`
          #main-content {
            margin: 0;
            margin-top: 40px;
            padding: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            vertical-align: baseline;
          }
          .container {
            height: 100vh;
            width: 100vh;
            display: flex;
            justify-content: space-between;
            flex: 1 0 auto;
            position: relative;
            margin: 0;
            text-align: left;
          }
          .content {
            width: 50%;
            min-width: 515px;
            padding: 24px;
            margin: 0;
            border-radius: 0;
            border-top-width: 0;
            border-bottom-width: 0;
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
        `}</style>
      </div>
    </div>
  );
}
