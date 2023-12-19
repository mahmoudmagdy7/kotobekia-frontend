import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import isLoggedIn from "../../hooks/useAuth";

function NavigationBar() {
  const { t } = useTranslation();
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname);

  return (
    <div>
      <ul className="flex z-[999999] text-black items-center justify-around lg:hidden gap-1 fixed start-0 end-0 bg-white bottom-0 pb-1 pt-2 rounded-t-3xl text-xs sm:text-sm   px-3">
        <li>
          <Link onClick={() => setCurrentLocation("/account/id")} to={"/account/id"} className="flex items-center flex-col">
            {currentLocation === "/account/id" ? <solarIcons.User size={23} color="#28D8AE" /> : <solarIcons.User size={23} color="#000" />}
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
          <Button as={Link} to="/book/new" isIconOnly variant="flat" color="transparent" className="p-0">
            <solarIcons.AddSquare size={35} color="#28D8AE" />
          </Button>
        </li>
        <li>
          {isLoggedIn ? (
            <Link onClick={() => setCurrentLocation("/chat")} to="/chat" className="flex items-center flex-col">
              {currentLocation === "/chat" ? <solarIcons.Letter size={23} color="#28D8AE" /> : <solarIcons.Letter size={23} color="#000" />}
              <span className="font-bold">{t("navigation_bar.messages")}</span>
            </Link>
          ) : (
            <Link to="/auth/login" className="flex items-center flex-col">
              {currentLocation === "/chat" ? <solarIcons.Letter size={23} color="#28D8AE" /> : <solarIcons.Letter size={23} color="#000" />}
              <span className="font-bold">{t("navigation_bar.messages")}</span>
            </Link>
          )}
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
