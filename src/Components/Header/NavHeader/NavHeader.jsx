import * as solarIcons from "solar-icon-set";
import logo from "/assets/logo.png";
import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import config from "../../../../config";
import ArrowTop from "../../arrowTop/ArrowTop";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const NavHeader = () => {
  const [makeScroll, setMakeScroll] = useState(false);
  const [location, setLocation] = useState(false);
  const locationList = config.getCityList();
  const [isTop, setIsTop] = useState(false);
  const { t } = useTranslation();
  const [locationName, setLocationName] = useState("");
  const handleLocationName = (item) => {
    localStorage.setItem("locationName", item.city);
    setLocationName(localStorage.getItem("locationName"));
    setLocation(false);
  };

  // const { isLoggedIn } = useSelector((state) => state.userData);
  // const dispatch = useDispatch();

  // const [lang, setLang] = useState(null);

  // replace useLayoutEffect to useEffect
  useEffect(() => {
    window.onscroll = () => {
      // to make navBar Fixed
      if (window.scrollY > 100) {
        setMakeScroll(true);
      } else {
        setMakeScroll(false);
      }

      // to show Arrow Top
      if (window.scrollY > 600) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    if (localStorage.getItem("i18nextLng") == "en") {
      // handleLocationName(item)
    }

    if (locationName === "" && localStorage.getItem("locationName")) {
      setLocationName(localStorage.getItem("locationName"));
    }

    // if (isLoggedIn === null && Cookies.get("userToken")) {
    //   dispatch(getIsLogged());
    // }
  }, []);

  return (
    <>
      <nav
        style={{
          background: "linear-gradient(90deg, #e0e1f5 0%, #f2f1e3 100.31%)",
        }}
        // className={`${
        //   makeScroll ? " w-full top-0 z-[9999999] py-2 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.2)] " : "block pb-3 border-1 border-[#F3F4F7]"
        //   } transition-all`}
        className={`pb-3 sticky border-1 border-[#F3F4F7] transition-all`}
      >
        <div className=" container ">
          <div className="nav_top flex items-center justify-between">
            <div className=" flex items-center flex-1 justify-between    gap-5">
              <div
                className={`logo${makeScroll ? " py-1 relative " : " py-10 "}`}
              >
                {/* <img src={logo} alt="Kotobekia Logo" title="Kotobekia Logo" className={` transition-all`} /> */}
              </div>
              {/* ---------- mobile-Lang ----------*/}
              <div
                className={`navbar-lang ${
                  makeScroll ? "hidden" : ""
                } flex bg-[#F3F4F7] w-10 cursor-pointer lg:hidden items-center justify-center gap-[5px] rounded-[10px]`}
              >
                <Button
                  size="sm"
                  className=" text-[#464646] text-[14px] font-bold w-full text-center"
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
              {/* ---------- mobile-Lang ---------- */}

              {/* ---------- Mobile/Tablet-Location ---------- */}
              <div
                className={`navbar-location ${
                  makeScroll ? "hidden" : ""
                } relative lg:hidden block h-[48px] w-[150px] rounded-[10px] py-1  cursor-pointer bg-[#F3F4F7]`}
              >
                {/* start Dropdown  */}
                <Dropdown>
                  {/* for btn  */}
                  <DropdownTrigger>
                    <div className="flex justify-center items-center gap-[10px]">
                      <div
                        className="txt"
                        style={{ "font-family": "Noto Sans Arabic" }}
                      >
                        {locationName ? (
                          <span className="text-[#939393] text-[12px] font-bold block">
                            {t(`governorates.${locationName}`)}
                          </span>
                        ) : (
                          <span className="text-[#939393] text-[10px] font-medium block">
                            {localStorage.getItem("i18nextLng") == "en"
                              ? "Your Location"
                              : "موقعك"}
                          </span>
                        )}
                        {locationName ? (
                          <span className="text-[#30A79F] text-[10px] font-bold underline ">
                            {localStorage.getItem("i18nextLng") == "en"
                              ? "Change the Location"
                              : "تغيير الموقع"}
                          </span>
                        ) : (
                          <span className="text-[#30A79F] text-[10px] font-bold ">
                            {localStorage.getItem("i18nextLng") == "en"
                              ? "Select a Location"
                              : "أختر الموقع"}
                          </span>
                        )}
                      </div>
                      <div className="arrows">
                        {!locationName ? (
                          location ? (
                            <div
                              className="icon"
                              onClick={() => setLocation(false)}
                            >
                              <solarIcons.CloseSquare
                                size={16}
                                color="#1C274C"
                              />
                            </div>
                          ) : (
                            <div
                              className="icon"
                              onClick={() => setLocation(true)}
                            >
                              <solarIcons.AltArrowDown
                                size={16}
                                color="#1C274C"
                              />
                            </div>
                          )
                        ) : null}
                      </div>
                    </div>
                  </DropdownTrigger>

                  {/* Dropdown list  */}
                  <DropdownMenu
                    aria-label=""
                    className="max-h-[400px] py-2 outline-none border-none overflow-auto "
                  >
                    {locationList.map((item) => (
                      <DropdownItem
                        key={`${item.city}`}
                        className="text-[#333]"
                        onClick={() => handleLocationName(item)}
                      >
                        {item?.value}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                {/* end Dropdown  */}
              </div>
              {/* ---------- Mobile/Tablet-Location ---------- */}
            </div>
          </div>
          <Navbar
            makeScroll={makeScroll}
            locationName={locationName}
            handleLocationName={handleLocationName}
          />
          {/* {makeScroll ? (
            <NavScroll locationName={locationName} handleLocationName={handleLocationName} />
          ) : (
          )} */}
          <ArrowTop isTop={isTop} />
        </div>
      </nav>
    </>
  );
};

export default NavHeader;
