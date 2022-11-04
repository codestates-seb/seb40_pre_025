import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "./TopQuestion/Seo";
import SideBar from "./SideBar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="layout-container">
      <Seo />
      <Header></Header>

      <div className="content">
        <div className="sideBarBox"></div>
        {router.pathname === "/users/login" ? null : router.pathname ===
          "/users/signup" ? null : (
          <SideBar></SideBar>
        )}
        <div className="children">{children}</div>
      </div>
      {router.pathname === "/users/login" ? null : router.pathname ===
        "/users/signup" ? null : (
        <Footer></Footer>
      )}

      <style jsx>{`
        .layout-container {
          height: 100vh;
          width: 100%;
          margin: 0;
          overflow-x: hidden;
        }
        .content {
          display: flex;
          width: 100%;
        }
        .children {
          display: inline-block;
          width: 100%;
        }
        .sideBarBox {
          display: inline-block;
          top: 0;
        }
      `}</style>
    </div>
  );
}
