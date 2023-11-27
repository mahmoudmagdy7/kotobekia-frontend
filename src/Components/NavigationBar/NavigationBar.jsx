import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import * as solarIcons from "solar-icon-set";

function NavigationBar() {
  const { t } = useTranslation();
  return (
    <div>
      <ul className="flex z-[9999999999] text-black items-center justify-around lg:hidden gap-1 fixed start-0 end-0 bg-white bottom-0 pb-1 pt-2 rounded-t-3xl text-xs sm:text-sm   px-3">
        <li className="flex items-center flex-col">
          <solarIcons.User size={23} color="#28D8AE" />
          <span className="font-bold">{t("navigation_bar.account")}</span>{" "}
        </li>{" "}
        <li className="flex items-center flex-col">
          <solarIcons.Widget4 size={23} color="#28D8AE" />
          <span className="font-bold">{t("navigation_bar.my_posts")}</span>
        </li>{" "}
        <li className="flex items-center flex-col bottom-4 relative home-icon">
          <Button isIconOnly variant="flat" color="transparent" className="p-0">
            <solarIcons.AddSquare size={35} color="#28D8AE" />
          </Button>{" "}
        </li>{" "}
        <li className="flex items-center flex-col">
          <solarIcons.Letter size={23} color="#28D8AE" />
          <span className="font-bold">{t("navigation_bar.messages")}</span>
        </li>{" "}
        <li className="flex items-center flex-col">
          <solarIcons.Home size={23} color="#28D8AE" />
          <span className="font-bold">{t("navigation_bar.home")}</span>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
