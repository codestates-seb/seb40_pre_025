import CoreInof from "../../../components/userPageComponents/coreInfo";
const userIdLayout = ({ children }) => {
  return (
    <div className="test">
      <CoreInof></CoreInof>
      {children}
      <style jsx>{`
        .test {
          margin: 0;
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
};
export default userIdLayout;
