import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  useLayoutEffect(() => {
    if (Cookies.get("i18next") == "en") {
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
