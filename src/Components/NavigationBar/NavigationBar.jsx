import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import isLoggedIn, { isLoggedInUser } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { gotTop } from "../../hooks/useTop";
import Cookies from "js-cookie";
import { getUpdatedUserData } from "../../app/Slices/userDataSlice";

function NavigationBar() {
  const { t } = useTranslation();
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname);
  const [chatCount, setChatCount] = useState(0);

  const { userConversationsCount } = useSelector((state) => state.chat);
  const location = useLocation();
  const { updatedUserData } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    if (updatedUserData?.conversationChatCounts) {
      let counter = 0;
      for (const item in updatedUserData?.conversationChatCounts) {
        counter += updatedUserData?.conversationChatCounts[item];
      }
      setChatCount(counter);
    }
  }, [updatedUserData]);
  useEffect(() => {
    dispatch(getUpdatedUserData());
  }, []);
  return (
    <div>
      <ul className="flex z-48 text-black items-center justify-around lg:hidden gap-1 fixed start-0 end-0 bg-white bottom-0 pb-1 pt-2 rounded-t-3xl text-xs sm:text-sm   px-3">
        <li>
          <Link onClick={() => setCurrentLocation("/profile")} to={"/profile"} className="flex items-center flex-col">
            {currentLocation === "/profile" ? <solarIcons.User size={23} color="#28D8AE" /> : <solarIcons.User size={23} color="#000" />}
            <span className="font-bold">{t("navigation_bar.account")}</span>
          </Link>
        </li>
        <li>
          <Link onClick={() => setCurrentLocation("/profile/mypost")} to="/profile/mypost" className="flex items-center flex-col">
            {currentLocation === "/profile/mypost" ? <solarIcons.Widget4 size={23} color="#28D8AE" /> : <solarIcons.Widget4 size={23} color="#000" />}
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
                {chatCount ? (
                  <div className="num text-white absolute top-[-7px] end-[-6px] w-5 h-5 rounded-[50%] border-2 border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center">
                    <span className="text-[10px] font-semibold"> {chatCount}</span>
                  </div>
                ) : null}
                <solarIcons.Letter size={23} color="#28D8AE" />
              </div>
            ) : (
              <div className="relative">
                {chatCount ? (
                  <div className="num text-white absolute top-[-7px] end-[-6px] w-5 h-5 rounded-[50%] border-2 border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center">
                    <span className="text-[10px] font-semibold"> {chatCount}</span>
                  </div>
                ) : null}
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
