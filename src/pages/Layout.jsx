import Cookies from "js-cookie";
import { useLayoutEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainHeader from "../Components/Header/MainHeader";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import NavCategory from "../Components/Header/NavCategory/NavCategory";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, handleLoggedOut } from "../app/Slices/userDataSlice";
import { getCategory } from "../app/Slices/categorySlice";
import { useSocket } from "../app/SocketContext";
import ArrowTop from "../Components/arrowTop/ArrowTop";
import axios from "axios";
import isLoggedIn from "../hooks/useAuth";
import config from "../../config";
function Layout() {
  const router = useNavigate();
  const socket = useSocket();
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const params = useParams();

  const [isTop, setIsTop] = useState(false);
  const checkingValidation = async () => {
    if (isLoggedIn) {
      try {
        const { data } = await axios(`${config.bseUrl}/api/v1/user/verify`, {
          method: "POST",
          headers: {
            token: Cookies.get("userToken"),
          },
        });
      } catch (error) {
        console.log(error);
        dispatch(handleLoggedOut());
        router("/auth/login");
      }
    }
  };
  useLayoutEffect(() => {
    if (localStorage.getItem("i18nextLng") == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }

    checkingValidation();
    if (!userData && Cookies.get("userToken")) {
      dispatch(getUserData());
    }
    // dispatch(getCategory("655b4ec133dd362ae53081f7", 1));
    window.onscroll = () => {
      if (window.scrollY > 600) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
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
      <ArrowTop isTop={isTop} />
      <Footer />
      <NavigationBar />
    </>
  );
}

export default Layout;
