import CoreInof from "../../../components/userPageComponents/coreInfo";
const userIdLayout = ({ children }) => {
  return (
    <div className="test">
      <CoreInof></CoreInof>
      {children}
      <style jsx>{`
        .test {
           {
            /* background-color: red; */
          }
        }
      `}</style>
    </div>
  );
};
export default userIdLayout;
