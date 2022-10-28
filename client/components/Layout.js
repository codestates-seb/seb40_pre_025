import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "./TopQuestion/Seo";
import SideBar from "./SideBar";
export default function Layout({ children }) {
  return (
    <>
      <Seo/>
      <div>{children}</div>
      <Footer />
    </>
  );
}
