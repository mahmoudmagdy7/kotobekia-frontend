import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavCategory from "../Components/NavCategory/NavCategory";
import MainHeader from "../Components/Header/MainHeader";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
function Layout() {
  useLayoutEffect(() => {
    if (localStorage.getItem("i18nextLng") == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }
  }, []);
  return (
    <>
          <MainHeader />
      <NavCategory />
      <Outlet />
      <Footer />
      <NavigationBar />

    </>
  );
}

export default Layout;
