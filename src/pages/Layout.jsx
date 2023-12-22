import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainHeader from "../Components/Header/MainHeader";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import NavCategory from "../Components/Header/NavCategory/NavCategory";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../app/Slices/userDataSlice";
function Layout() {
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (localStorage.getItem("i18nextLng") == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }

    if (!userData && Cookies.get("userToken")) {
      dispatch(dispatch(getUserData()));
    }
  }, []);

  const toastOption = {
    // Default options for specific types
    success: {
      duration: 1500,
      theme: {
        primary: "green",
        secondary: "black",
      },
    },
    error: {
      duration: 2000,
      theme: {
        primary: "red",
        secondary: "white",
      },
    },
  };

  return (
    <>
      <div className=" fixed w-[400px] z-[9999999999999999999]">
        <Toaster toastOptions={toastOption} />
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
