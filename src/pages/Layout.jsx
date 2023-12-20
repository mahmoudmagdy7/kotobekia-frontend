import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainHeader from "../Components/Header/MainHeader";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import NavCategory from "../Components/Header/NavCategory/NavCategory";
import  { Toaster } from "react-hot-toast";
function Layout() {
  useLayoutEffect(() => {
    if (localStorage.getItem("i18nextLng") == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }
  }, []);

  const toastOption = {

    // Default options for specific types
    success: {
      duration: 1500,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
    error: {
      duration: 2000,
      theme: {
        primary: 'red',
        secondary: 'white',
      },
    },
  }


  return (
    <>
      <div className=" fixed w-[400px] z-[9999999999999999999] bg-green-400 text-white">
        <Toaster   toastOptions={toastOption}  />
      </div>
      <MainHeader />
      <NavCategory />
      <Outlet />
      <Footer />
      <NavigationBar />
    </>
  );
}

export default Layout;
