import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

function Category() {
  const { t } = useTranslation();

  return (
    <div className="text-black">
      {t("governorates.cairo")}

      <Button
        onClick={async () => {
          if (localStorage.getItem("i18nextLng") == "en") {
            localStorage.setItem("i18nextLng", "ar");
            window.location.reload();
            document.body.dir = "rtl";
          } else {
            localStorage.setItem("i18nextLng", "en");
            window.location.reload();
            document.body.dir = "ltr";
          }
        }}
      >
        click me!
      </Button>
    </div>
  );
}

export default Category;
