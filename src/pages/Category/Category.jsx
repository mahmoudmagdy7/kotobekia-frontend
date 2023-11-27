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
        onClick={() => {
          window.location.reload();

          if (Cookies.get("i18next") == "en") {
            Cookies.set("i18next", "ar");
            document.body.dir = "rtl";
          } else {
            Cookies.set("i18next", "en");
            document.body.dir = "ltr";
          }
        }}
      >
        click me!
      </Button>

      {/* <Button
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
      </Button> */}
      <NavigationBar />
    </div>
  );
}

export default Category;
