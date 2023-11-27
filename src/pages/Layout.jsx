import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  useLayoutEffect(() => {
    if (localStorage.getItem("i18nextLng") == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
