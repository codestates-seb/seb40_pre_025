import CoreInof from "../../../components/userPageComponents/coreInfo";
const userIdLayout = ({ children }) => {
  return (
    <div className="test">
      <CoreInof></CoreInof>
      <div>{children}</div>
      <style jsx>{`
        .test {
          margin: 0;
          margin-top: 2rem;
          margin-left: 3rem;
        }
      `}</style>
    </div>
  );
};
export default userIdLayout;
