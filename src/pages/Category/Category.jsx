import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

function Category() {
  const { t } = useTranslation();

  return (
    <div className="text-red-500">
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
    </div>
  );
}

export default Category;
