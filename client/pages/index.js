import { useSelector } from "react-redux";
import Github from "../components/Github";
import Google from "../components/Google";

export default function Home() {
  const testState = useSelector((state) => state);
  console.log(testState);
  return (
    <div>
      <Github></Github>
      <Google></Google>
    </div>
  );
}
