import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as solarIcons from "solar-icon-set";

function NavigationBar() {
  const { t } = useTranslation();
  return (
    <div>
      <ul className="flex z-[9999999999] text-black items-center justify-around lg:hidden gap-1 fixed start-0 end-0 bg-white bottom-0 pb-1 pt-2 rounded-t-3xl text-xs sm:text-sm   px-3">
        <li>
          <Link to={"/account/id"} className="flex items-center flex-col">
            <solarIcons.User size={23} color="#28D8AE" />
            <span className="font-bold">{t("navigation_bar.account")}</span>
          </Link>
        </li>
        <li>
          <Link to="/user-posts" className="flex items-center flex-col">
            <solarIcons.Widget4 size={23} color="#28D8AE" />
            <span className="font-bold">{t("navigation_bar.my_posts")}</span>
          </Link>
        </li>
        <li>
          <Button as={Link} to="/post/new" isIconOnly variant="flat" color="transparent" className="p-0">
            <solarIcons.AddSquare size={35} color="#28D8AE" />
          </Button>
        </li>
        <li>
          <Link to="/chats" className="flex items-center flex-col">
            <solarIcons.Letter size={23} color="#28D8AE" />
            <span className="font-bold">{t("navigation_bar.messages")}</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center flex-col">
            <solarIcons.Home size={23} color="#28D8AE" />
            <span className="font-bold">{t("navigation_bar.home")}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
