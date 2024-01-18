import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import isLoggedIn, { isLoggedInUser } from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { gotTop } from "../../hooks/useTop";
import Cookies from "js-cookie";

function NavigationBar() {
  const { t } = useTranslation();
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname);
  const { userConversationsCount } = useSelector((state) => state.chat);
  const location = useLocation();
  useEffect(() => {
    setCurrentLocation(location.pathname);
    console.log(currentLocation);
    console.log(isLoggedInUser());
  }, [location]);
  return (
    <div>
      <ul className="flex z-50 text-black items-center justify-around lg:hidden gap-1 fixed start-0 end-0 bg-white bottom-0 pb-1 pt-2 rounded-t-3xl text-xs sm:text-sm   px-3">
        <li>
          <Link onClick={() => setCurrentLocation("/profile")} to={"/profile"} className="flex items-center flex-col">
            {currentLocation === "/profile" ? <solarIcons.User size={23} color="#28D8AE" /> : <solarIcons.User size={23} color="#000" />}
            <span className="font-bold">{t("navigation_bar.account")}</span>
          </Link>
        </li>
        <li>
          <Link onClick={() => setCurrentLocation("/user-posts")} to="/user-posts" className="flex items-center flex-col">
            {currentLocation === "/user-posts" ? <solarIcons.Widget4 size={23} color="#28D8AE" /> : <solarIcons.Widget4 size={23} color="#000" />}
            <span className="font-bold">{t("navigation_bar.my_posts")}</span>
          </Link>
        </li>
        <li>
          <Button onClick={() => gotTop()} as={Link} to="/book/new" isIconOnly variant="flat" color="transparent" className="p-0">
            <solarIcons.AddSquare size={35} color="#28D8AE" />
          </Button>
        </li>
        <li>
          <Link
            onClick={!isLoggedInUser() ? null : () => setCurrentLocation("/chat")}
            to={!isLoggedInUser() ? "/auth/login" : "/chat"}
            className="flex items-center flex-col"
          >
            {currentLocation === "/chat" ? (
              <div className="relative">
                <div className="num absolute top-[-7px] end-[-4px] w-4 h-4 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center text-white">
                  <span className="text-[10px] font-semibold"> {userConversationsCount}</span>
                </div>
                <solarIcons.Letter size={23} color="#28D8AE" />
              </div>
            ) : (
              <div className="relative">
                <div className="num absolute top-[-7px] end-[-4px] w-4 h-4 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center">
                  <span className="text-[10px] font-semibold"> {userConversationsCount}</span>
                </div>
                <solarIcons.Letter size={23} color="#000" />
              </div>
            )}
            <span className="font-bold">{t("navigation_bar.messages")}</span>
          </Link>
        </li>
        <li>
          <Link onClick={() => setCurrentLocation("/")} to="/" className="flex items-center flex-col">
            {currentLocation === "/" ? <solarIcons.Home size={23} color="#28D8AE" /> : <solarIcons.Home size={23} color="#000" />}
            <span className="font-bold">{t("navigation_bar.home")}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
