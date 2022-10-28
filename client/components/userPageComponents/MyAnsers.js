import { useSelector } from "react-redux";
import MyAnser from "./MyAnser";
export default function MyQusticons() {
  const dumyData = useSelector((state) => state.initialReducer.dumyData);
  console.log(dumyData);
  return (
    <div className="MyQusticons">
      {dumyData.map((data, idx) => {
        return <MyAnser key={idx} data={data}></MyAnser>;
      })}
      <style jsx>{`
        .MyQusticons {
          width: 80%;
        }
      `}</style>
    </div>
  );
}
