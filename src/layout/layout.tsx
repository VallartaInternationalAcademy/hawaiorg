import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MenuHeader from "../components/MenuHeader";

const Layout = () => {
  return (
    <>
      <MenuHeader />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
