import Saves_qustions from "../../../../components/userPageComponents/saves_qustions";
import UserIdLayout from "../User_Id_Layout";

export default function saves_qustions() {
  return (
    <div className="container">
      <div className="content">
        <Saves_qustions></Saves_qustions>
      </div>
      <style jsx>{`
        .container {
          height: 100vh;
          width: 100%;

          display: flex;
          justify-content: space-between;
          flex: 1 0 auto;
          position: relative;
          margin: 0;
          text-align: left;
        }
        .content {
          width: 100%;
          min-width: 515px;
          padding: 24px;

          margin: 0;
          border-radius: 0;
          border-top-width: 0;
          border-bottom-width: 0;
        }
      `}</style>
    </div>
  );
}

saves_qustions.getLayout = function getLayout(page) {
  return <UserIdLayout>{page}</UserIdLayout>;
};
