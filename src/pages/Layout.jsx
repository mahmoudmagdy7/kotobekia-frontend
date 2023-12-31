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
import { getCategory } from "../app/Slices/categorySlice";
import Slider from "../Components/slider/Slider";
import { useSocket } from "../app/SocketContext";
function Layout() {
  const socket = useSocket();
  const { userData } = useSelector((state) => state.userData);
  const { value } = useSelector((state) => state.category);
  const dispatch = useDispatch();

 


  useLayoutEffect(() => {
     console.log(value);
    if (localStorage.getItem("i18nextLng") == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }

    if (!userData && Cookies.get("userToken")) {
      dispatch(dispatch(getUserData()));
    }

    dispatch(getCategory("655b4ec133dd362ae53081f7" , 1));
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

      {/* <Slider/> */}

      <Outlet />
      <Footer />
      <NavigationBar />
    </>
  );
}

export default Layout;
