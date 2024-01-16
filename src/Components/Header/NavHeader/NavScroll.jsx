import { Button } from "@nextui-org/react";
import userAvatar from "../../../../public/assets/images/user.png";
import logo from "/assets/logo.png";
import * as solarIcons from "solar-icon-set";
import { Link } from "react-router-dom";
import { changeSiteLang, siteLanguage } from "../../../hooks/useLocale";
import { useState } from "react";
import config from "../../../../config";
import { useSelector } from "react-redux";
import { gotTop } from "../../../hooks/useTop";

const NavScroll = () => {
  /**
   * From < Mojanad >
   * ===========================================================
   *
   * Set the click in the whole field of the location selection
   * Save the user location in the local storage
   * Change "select a location" to => the user location
   * When the user click any where close the list
   *
   * ============================================================
   */

  // to show location list
  const [location, setLocation] = useState(false);
  // get data of location to append in location list
  const locationList = config.getCityList();
  const { userConversationsCount } = useSelector((state) => state.chat);
  // get user data form redux
  const { userData } = useSelector((state) => state.userData);

  return (
    <>
      <div
        style={{
          background: "linear-gradient(90deg, #e0e1f5 0%, #f2f1e3 100.31%)",
        }}
        className=" fixed z-[9999999]  w-full top-0 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.2)]  start-0 transition-all"
      >
        <div className="container navBar flex items-center gap-5 py-3">
          <div className="logo hidden sm:block">
            <img src={logo} alt="Kotobekia Logo" title="Kotobekia Logo" />
          </div>
          <Link to={"/book/new"} onClick={() => gotTop()} className="navbar-btn hidden lg:block">
            <button
              style={{
                "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
              }}
              className="bg-[#28D8AE] p-3  rounded-[14px] text-[16px]  flex items-center justify-center gap-1"
            >
              <solarIcons.AddCircle size={26} />
            </button>
          </Link>

          {/* Desktop-Location */}
          <div className="navbar-location h-[48px] hidden lg:block w-[150px] relative rounded-[10px] py-1  cursor-pointer bg-[#F3F4F7]">
            <div className="flex justify-center items-center gap-[10px]">
              <div className="txt" style={{ "font-family": "Noto Sans Arabic" }}>
                <span className="text-[#939393] text-[10px] font-medium block">{localStorage.getItem("i18nextLng") == "en" ? "Your Location" : "موقعك"}</span>
                <span className="text-[#30A79F] text-[10px] font-bold ">
                  {localStorage.getItem("i18nextLng") == "en" ? "Select a Location" : "اختر الموقع"}
                </span>
              </div>
              <div className="arrows">
                {location ? (
                  <div className="icon" onClick={() => setLocation(false)}>
                    <solarIcons.CloseSquare size={16} color="#1C274C" />
                  </div>
                ) : (
                  <div className="icon" onClick={() => setLocation(true)}>
                    <solarIcons.AltArrowDown size={16} color="#1C274C" />
                  </div>
                )}
              </div>
            </div>
            {/* ----------- Location List ----------- */}
            {location ? (
              <>
                <div className=" location-list z-[999999] overflow-auto absolute top-[101%] border-1 border-[#75757569] hidden lg:flex w-[150px] justify-center items-center gap-[10px] rounded-[10px] cursor-pointer text-[#333] bg-[#F3F4F7]">
                  <ul name="" id="" className=" list-none w-full max-h-[350px] ">
                    {locationList.map((item) => (
                      <>
                        <li value={item.city} className="select-none transition-all hover:bg-[#e2e2e2] py-1 px-3">
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
          {/* Desktop-Location */}

          <div className="navbar-form bg-[#F3F4F7] flex-1 md:lg:w-[590px] lg:w-[600px] rounded-[12px] ">
            <div className="input relative ">
              <input
                type="text"
                placeholder="Search for books"
                className="input  block ps-4 h-[48px]  text-[#939393] bg-transparent  outline-none w-full" //fixed the overflow with adding w-full to input _ Mojanad
              />
              <div className="icon absolute top-1/2 -translate-y-1/2 end-[16px]">
                <solarIcons.Magnifer size={20} color="#939393" />
              </div>
            </div>
          </div>

          {/* Mobile / Tablet Setting  */}
          {userData ? (
            <div className="navbar-setting lg:hidden  flex items-center gap-1 cursor-pointer">
              <solarIcons.Tuning size={26} color="#1C274C" />
              <div className="alarm relative">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "40", width: "41" }} viewBox="0 0 41 40" fill="none">
                  <rect opacity="0.1" x="0.38501" width="40" style={{ height: "40" }} rx="20" fill="#FA5057" />
                  <path
                    d="M20.13 12C16.8429 12 14.1782 14.6647 14.1782 17.9518V18.4925C14.1782 19.0277 14.0198 19.551 13.7229 19.9963L12.8408 21.3194C11.817 22.8551 12.5986 24.9425 14.3792 25.4281C14.9595 25.5864 15.5447 25.7202 16.1333 25.8297L16.1347 25.8336C16.7253 27.4094 18.3037 28.5114 20.13 28.5114C21.9562 28.5114 23.5346 27.4094 24.1252 25.8336L24.1266 25.8297C24.7152 25.7202 25.3005 25.5864 25.8808 25.4281C27.6614 24.9425 28.443 22.8551 27.4192 21.3194L26.5371 19.9963C26.2402 19.551 26.0818 19.0277 26.0818 18.4925V17.9518C26.0818 14.6647 23.4171 12 20.13 12ZM22.723 26.0439C21.0005 26.2497 19.2594 26.2497 17.5369 26.0439C18.0829 26.8284 19.0326 27.3594 20.13 27.3594C21.2274 27.3594 22.177 26.8284 22.723 26.0439ZM15.3302 17.9518C15.3302 15.3009 17.4791 13.152 20.13 13.152C22.7809 13.152 24.9298 15.3009 24.9298 17.9518V18.4925C24.9298 19.2552 25.1556 20.0007 25.5786 20.6353L26.4607 21.9584C27.0483 22.8399 26.5997 24.038 25.5777 24.3167C22.011 25.2895 18.249 25.2895 14.6823 24.3167C13.6603 24.038 13.2117 22.8399 13.7993 21.9584L14.6814 20.6353C15.1044 20.0007 15.3302 19.2552 15.3302 18.4925V17.9518Z"
                    fill="#FA5057"
                  />
                </svg>
                <div className="num absolute top-[-7px] end-[-4px] w-4 h-4 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center">
                  <span className="text-[10px] font-semibold">0</span>
                </div>
              </div>
            </div>
          ) : null}
          {/* Mobile Setting  */}

          {/* Desktop-Lang */}
          <div
            className="navbar-lang h-[48px] hidden   bg-[#F3F4F7] max-w-[45px] cursor-pointer lg:flex items-center justify-center gap-[5px] rounded-[10px]"
            style={{ fontFamily: "Noto Sans Arabic" }}
          >
            {/* <span className="text-[#464646] text-[12px] font-bold">
                    </span> */}
            <Button size="sm" className=" text-[#464646] text-[14px] font-bold w-full uppercase" onClick={changeSiteLang} color="#F3F4F7">
              {siteLanguage == "en" ? "ar" : "en"}
            </Button>

            {/* <solarIcons.AltArrowDown size={16} color="#1C274C" /> */}
          </div>
          {/* Desktop-Lang */}

          {userData ? (
            <>
              {/* Desktop user  */}
              <div className="user hidden lg:flex items-center gap-3">
                <img src={userAvatar} alt="User" />
                <div className="name text-[12px]">
                  <span className="block text-[#464646] ">hello , {userData.fullName}</span>
                  <Link to={"/profile"} className="text-[#1F292F] font-semibold">
                    Your account
                  </Link>
                </div>
              </div>
              {/* Desktop user  */}
              {/* Desktop notifcations */}
              <div className="notifcations hidden lg:flex items-center cursor-pointer gap-4">
                <div className="msg relative fill-[#1C274C]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" style={{ height: "40" }} viewBox="0 0 23 19" fill="none">
                    <path
                      d="M9.44083 0.385437H13.725C15.6394 0.385421 17.1556 0.385408 18.3423 0.544953C19.5636 0.709149 20.5521 1.0551 21.3316 1.83465C22.1112 2.61419 22.4571 3.60268 22.6213 4.82396C22.7809 6.01064 22.7809 7.52693 22.7808 9.44126V9.55878C22.7809 11.4731 22.7809 12.9894 22.6213 14.1761C22.4571 15.3974 22.1112 16.3858 21.3316 17.1654C20.5521 17.9449 19.5636 18.2909 18.3423 18.4551C17.1556 18.6146 15.6394 18.6146 13.725 18.6146H9.44083C7.5265 18.6146 6.01021 18.6146 4.82353 18.4551C3.60225 18.2909 2.61377 17.9449 1.83422 17.1654C1.05468 16.3858 0.708721 15.3974 0.544526 14.1761C0.38498 12.9894 0.384994 11.4731 0.38501 9.55879V9.44125C0.384994 7.52692 0.38498 6.01064 0.544526 4.82396C0.708721 3.60268 1.05468 2.61419 1.83422 1.83465C2.61377 1.0551 3.60226 0.709149 4.82353 0.544953C6.01021 0.385408 7.52649 0.385421 9.44083 0.385437ZM5.03173 2.09352C3.98372 2.23442 3.37992 2.49866 2.93908 2.9395C2.49823 3.38035 2.23399 3.98415 2.09309 5.03216C1.94917 6.10264 1.94751 7.51375 1.94751 9.50002C1.94751 11.4863 1.94917 12.8974 2.09309 13.9679C2.23399 15.0159 2.49823 15.6197 2.93908 16.0605C3.37992 16.5014 3.98372 16.7656 5.03173 16.9065C6.10221 17.0504 7.51332 17.0521 9.49959 17.0521H13.6663C15.6525 17.0521 17.0636 17.0504 18.1341 16.9065C19.1821 16.7656 19.7859 16.5014 20.2268 16.0605C20.6676 15.6197 20.9319 15.0159 21.0728 13.9679C21.2167 12.8974 21.2183 11.4863 21.2183 9.50002C21.2183 7.51375 21.2167 6.10264 21.0728 5.03216C20.9319 3.98415 20.6676 3.38035 20.2268 2.9395C19.7859 2.49866 19.1821 2.23442 18.1341 2.09352C17.0636 1.9496 15.6525 1.94794 13.6663 1.94794H9.49959C7.51332 1.94794 6.10221 1.9496 5.03173 2.09352ZM4.73275 4.83321C5.00898 4.50174 5.5016 4.45696 5.83307 4.73318L8.08192 6.60722C9.05375 7.41708 9.72848 7.97754 10.2981 8.34391C10.8495 8.69855 11.2235 8.8176 11.5829 8.8176C11.9424 8.8176 12.3163 8.69855 12.8677 8.34391C13.4374 7.97754 14.1121 7.41708 15.0839 6.60722L17.3328 4.73318C17.6642 4.45696 18.1569 4.50174 18.4331 4.83321C18.7093 5.16468 18.6645 5.65731 18.3331 5.93353L16.0451 7.8402C15.1218 8.60964 14.3734 9.23327 13.713 9.65807C13.0249 10.1006 12.3549 10.3801 11.5829 10.3801C10.811 10.3801 10.1409 10.1006 9.4529 9.65807C8.79242 9.23327 8.04409 8.60964 7.1208 7.84021L4.83278 5.93353C4.50132 5.65731 4.45653 5.16468 4.73275 4.83321Z"
                      fill="#1C274C"
                    />
                  </svg>
                  <div className="num absolute top-[-7px] end-[-4px] w-4 h-4 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center">
                    <span className="text-[10px] font-semibold">{userConversationsCount}</span>
                  </div>
                </div>
                <div className="alarm relative">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "40", width: "41" }} viewBox="0 0 41 40" fill="none">
                    <rect opacity="0.1" x="0.38501" style={{ height: "40", width: "40" }} rx="20" fill="#FA5057" />
                    <path
                      d="M20.13 12C16.8429 12 14.1782 14.6647 14.1782 17.9518V18.4925C14.1782 19.0277 14.0198 19.551 13.7229 19.9963L12.8408 21.3194C11.817 22.8551 12.5986 24.9425 14.3792 25.4281C14.9595 25.5864 15.5447 25.7202 16.1333 25.8297L16.1347 25.8336C16.7253 27.4094 18.3037 28.5114 20.13 28.5114C21.9562 28.5114 23.5346 27.4094 24.1252 25.8336L24.1266 25.8297C24.7152 25.7202 25.3005 25.5864 25.8808 25.4281C27.6614 24.9425 28.443 22.8551 27.4192 21.3194L26.5371 19.9963C26.2402 19.551 26.0818 19.0277 26.0818 18.4925V17.9518C26.0818 14.6647 23.4171 12 20.13 12ZM22.723 26.0439C21.0005 26.2497 19.2594 26.2497 17.5369 26.0439C18.0829 26.8284 19.0326 27.3594 20.13 27.3594C21.2274 27.3594 22.177 26.8284 22.723 26.0439ZM15.3302 17.9518C15.3302 15.3009 17.4791 13.152 20.13 13.152C22.7809 13.152 24.9298 15.3009 24.9298 17.9518V18.4925C24.9298 19.2552 25.1556 20.0007 25.5786 20.6353L26.4607 21.9584C27.0483 22.8399 26.5997 24.038 25.5777 24.3167C22.011 25.2895 18.249 25.2895 14.6823 24.3167C13.6603 24.038 13.2117 22.8399 13.7993 21.9584L14.6814 20.6353C15.1044 20.0007 15.3302 19.2552 15.3302 18.4925V17.9518Z"
                      fill="#FA5057"
                    />
                  </svg>
                  <div className="num absolute top-[-5px] end-[-4px] w-4 h-4 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center">
                    <span className="text-[10px] font-semibold">0</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link className="text-[#464646] font-semibold underline " to={"/auth/login"}>
              login
            </Link>
          )}
          {/* Desktop notifcations */}
        </div>
      </div>
    </>
  );
};

export default NavScroll;
