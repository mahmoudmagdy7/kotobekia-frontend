import * as solarIcons from "solar-icon-set";
import logo from "/assets/logo.png";
import { useLayoutEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import NavScroll from "./NavScroll";
import NavbarTop from "./NavbarTop";

const NavHeader = () => {
  const [makeScroll, setMakeScroll] = useState(false);

  // const [lang, setLang] = useState(null);

  useLayoutEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setMakeScroll(true);
      } else {
        setMakeScroll(false);
      }
    };
  }, []);

  return (
    <>
      <nav className="pb-3 border-1 border-[#F3F4F7]  ">
        <div className="container">
          <div className="nav_top flex items-center justify-between">
            <div className=" flex items-center  flex-1 justify-between  md:justify-start gap-6">
              <div className="logo py-4">
                <img src={logo} alt="Kotobekia Logo" title="Kotobekia Logo" />
              </div>
              {/* mobile-Lang */}

              <div
                className="navbar-lang  flex items-center    bg-[#F3F4F7] w-10 cursor-pointer lg:flex items-center justify-center gap-[5px] rounded-[10px]"
                style={{ fontFamily: "Noto Sans Arabic" }}
              >
                <Button
                  size="sm"
                  className=" text-[#464646] text-[14px] font-bold w-full text-center items-center"
                  onClick={() => {
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
                  color="#F3F4F7"
                >
                  {localStorage.getItem("i18nextLng") == "en" ? "AR" : "EN"}
                </Button>
              </div>
              {/* Mobile-Location */}
              <div className="navbar-location ms-auto  px-4  flex lg:hidden w-[150px] justify-center items-center gap-[10px] rounded-[8px] py-1  cursor-pointer bg-[#F3F4F7]">
                <div className="txt">
                  <span className="text-[#939393] text-[10px] font-medium block">
                    Your Location
                  </span>
                  <span className="text-[#30A79F] text-[10px] font-bold ">
                    Select a Location
                  </span>
                </div>

                <div className="arrows">
                  <solarIcons.AltArrowDown size={16} color="#1C274C" />
                </div>
              </div>
              {/* Mobile-Location */}
            </div>
          </div>
          {makeScroll ? <NavScroll /> : <NavbarTop />}
        </div>
      </nav>
    </>
  );
};

export default NavHeader;
