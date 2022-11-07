import Setting_edit from "../../../components/userPageComponents/setting_edit";
import UserIdLayout from "../User_Id_Layout";
export default function edit() {
  return (
    <div className="editBox">
      <Setting_edit></Setting_edit>

      <style jsx>{`
        .editBox {
          width: 80%;
        }
      `}</style>
    </div>
  );
}

edit.getLayout = function getLayout(page) {
  return <UserIdLayout>{page}</UserIdLayout>;
};
