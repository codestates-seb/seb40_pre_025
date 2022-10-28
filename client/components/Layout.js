import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "./TopQuestion/Seo";
import SideBar from "./SideBar";


export default function Layout({ children }) {
  return (
    <div className="container">
      <Seo />
      <Header></Header>

      <div className="content">
        <div className="sideBarBox"></div>
        <SideBar></SideBar>
        <div className="children">{children}</div>
      </div>
      <Footer></Footer>
      <style jsx>{`
        .container {
          height: 100vh;
          width: 100%;
          margin: 0;
          overflow-x: hidden;
        }
        .content {
          display: flex;
        }
        .children {
          display: inline-block;
          margin: 5rem;
        }
        .sideBarBox {
          display: inline-block;
          top: 0;
        }
      `}</style>
    </div>
  );
}
