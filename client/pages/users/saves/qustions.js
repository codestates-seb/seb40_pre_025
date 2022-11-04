import Saves_qustions from "../../../components/userPageComponents/saves_qustions";
import UserIdLayout from "../User_Id_Layout";

export default function saves_qustions() {
  return (
    <>
      <Saves_qustions></Saves_qustions>

      <style jsx>{``}</style>
    </>
  );
}

saves_qustions.getLayout = function getLayout(page) {
  return <UserIdLayout>{page}</UserIdLayout>;
};
