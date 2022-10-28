import Setting_edit from "../../../../components/userPageComponents/setting_edit";
import UserIdLayout from "../User_Id_Layout";
export default function edit() {
  return (
    <div className="container">
      <div className="content">
        <Setting_edit></Setting_edit>
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
          width: 65%;
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

edit.getLayout = function getLayout(page) {
  return <UserIdLayout>{page}</UserIdLayout>;
};
