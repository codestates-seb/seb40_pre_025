import Setting_delete from "../../../components/userPageComponents/setting_delete";
import UserIdLayout from "../User_Id_Layout";
export default function deleteUsr() {
  return (
    <>
      <Setting_delete></Setting_delete>

      <style jsx>{``}</style>
    </>
  );
}

deleteUsr.getLayout = function getLayout(page) {
  return <UserIdLayout>{page}</UserIdLayout>;
};
