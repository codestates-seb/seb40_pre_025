import Saves_ansers from "../../../../components/userPageComponents/saves_ansers";
import UserIdLayout from "../User_Id_Layout";

export default function saves_ansers() {
  return (
    <div className="container">
      <div className="content">
        <Saves_ansers></Saves_ansers>
        <style jsx>{`
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
    </div>
  );
}

saves_ansers.getLayout = function getLayout(page) {
  return <UserIdLayout>{page}</UserIdLayout>;
};
