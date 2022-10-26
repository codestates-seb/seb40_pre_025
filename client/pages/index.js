import { useSelector } from "react-redux";
import Github from "../components/Github";
import Google from "../components/Google";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function Home() {
  const testState = useSelector((state) => state);
  console.log(testState);
  return (
    <div>
      <Header />
      <Header2 />
      <Google />
      <Github />
      {/* <SideBar /> */}
      <Footer />
    </div>
  );
}
