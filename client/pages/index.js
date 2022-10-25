import { useSelector } from "react-redux";

export default function Home() {
  const testState = useSelector((state) => state);
  console.log(testState);
  return (
    <div>
      <button type="button">버튼3</button>
    </div>
  );
}
