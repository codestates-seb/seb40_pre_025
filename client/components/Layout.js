import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "./TopQuestion/Seo";
import SideBar from "./SideBar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="layout-container">
      <Seo />
<<<<<<< HEAD
      <Header></Header>
=======
      <Header/>

>>>>>>> d6bdddedb34d09c8d06b6d6d44d819c2a8ae37c8
      <div className="content">
        {router.pathname === "/users/login" ? null : router.pathname ===
          "/users/signup" ? null : (
          <SideBar />
        )}
        <div className="children">{children}</div>
      </div>
      {router.pathname === "/users/login" ? null : router.pathname ===
        "/users/signup" ? null : (
        <Footer />
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
