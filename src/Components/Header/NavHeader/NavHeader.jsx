import * as solarIcons from "solar-icon-set";
import logo from "/assets/logo.png";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import NavScroll from "./NavScroll";
import NavbarTop from "./NavbarTop";
import config from "../../../../config";
import { useDispatch } from "react-redux";
import ArrowTop from "../../arrowTop/ArrowTop";

const NavHeader = () => {
  const [makeScroll, setMakeScroll] = useState(false);
  const [location, setLocation] = useState(false);
  const locationList = config.getCityList();
  const [isTop, setIsTop] = useState(false);

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
      <nav className="pb-3 border-1 border-[#F3F4F7]  ">
        <div className="container">
          <div className="nav_top flex items-center justify-between">
            <div className=" flex items-center  flex-1 justify-between  md:justify-start gap-6">
              <div className="logo py-4">
                <img src={logo} alt="Kotobekia Logo" title="Kotobekia Logo" />
              </div>
              {/* ---------- mobile-Lang ----------*/}
              <div className="navbar-lang  flex bg-[#F3F4F7] w-10 cursor-pointer lg:hidden items-center justify-center gap-[5px] rounded-[10px]">
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
              <div className="navbar-location relative lg:hidden block h-[48px] w-[150px] rounded-[10px] py-1  cursor-pointer bg-[#F3F4F7]">
                <div className="flex justify-center items-center gap-[10px]">
                  <div className="txt" style={{ "font-family": "Noto Sans Arabic" }}>
                    {locationName ? (
                      <span className="text-[#939393] text-[12px] font-bold block">{locationName}</span>
                    ) : (
                      <span className="text-[#939393] text-[10px] font-medium block">
                        {localStorage.getItem("i18nextLng") == "en" ? "Your Location" : "موقعك"}
                      </span>
                    )}

                    {locationName ? (
                      <>
                        <span onClick={() => setLocation(true)} className="text-[#30A79F] text-[10px] font-bold underline ">
                          {localStorage.getItem("i18nextLng") == "en" ? "Change the Location" : "تغيير الموقع"}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[#30A79F] text-[10px] font-bold ">
                          {localStorage.getItem("i18nextLng") == "en" ? "Select a Location" : "أختر الموقع"}
                        </span>
                      </>
                    )}

                    <div className="arrows">
                      {!locationName ? (
                        location ? (
                          <div className="icon" onClick={() => setLocation(false)}>
                            <solarIcons.CloseSquare size={16} color="#1C274C" />
                          </div>
                        ) : (
                          <div className="icon" onClick={() => setLocation(true)}>
                            <solarIcons.AltArrowDown size={16} color="#1C274C" />
                          </div>
                        )
                      ) : null}
                    </div>
                  </div>
                  {/* ----------- Location List ----------- */}
                  {location ? (
                    <>
                      <div className=" location-list z-[999999] overflow-auto absolute top-[101%] border-1 border-[#75757569] lg:hidden flex w-[150px] justify-center items-center gap-[10px] rounded-[10px] cursor-pointer text-[#333] bg-[#F3F4F7]">
                        <ul name="" id="" className=" list-none w-full max-h-[350px] ">
                          {locationList.map((item) => (
                            <>
                              <li
                                key={item.city}
                                onClick={() => {
                                  handleLocationName(item);
                                  setLocation(false);
                                }}
                                value={item.city}
                                className="select-none transition-all hover:bg-[#e2e2e2] py-1 px-3"
                              >
                                {item.value}
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : null}
                  {/* ----------- Location List ----------- */}
                </div>
              </div>
              {/* ---------- Mobile/Tablet-Location ---------- */}
            </div>
          </div>
          {makeScroll ? (
            <NavScroll locationName={locationName} handleLocationName={handleLocationName} />
          ) : (
            <NavbarTop locationName={locationName} handleLocationName={handleLocationName} />
          )}
          <ArrowTop isTop={isTop} />
        </div>
      </nav>
    </>
  );
};

export default NavHeader;
