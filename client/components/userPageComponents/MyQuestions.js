import { useEffect } from "react";
import { useSelector } from "react-redux";
import MyQusticon from "./MyQuestion";
export default function MyQusticons() {
  const dumyData = useSelector((state) => state.initialReducer.dumyData);

  return (
    <div className="MyQusticons">
      {dumyData.map((data, idx) => {
        return <MyQusticon key={idx} data={data}></MyQusticon>;
      })}
      <style jsx>{`
        .MyQusticons {
          width: 80%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
