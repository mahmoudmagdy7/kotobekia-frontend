import * as solarIcons from "solar-icon-set";
import logo from "/assets/logo.png";

import userAvatar from "../../../../public/assets/images/user.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import config from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../Search/Search";
import NotificationList from "../Notification/NotificationList";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { getUpdatedUserData } from "../../../app/Slices/userDataSlice";

const Navbar = ({ locationName, handleLocationName, makeScroll }) => {
  // to show location list
  const [location, setLocation] = useState(false);
  const [chatCount, setChatCount] = useState(0);
  // get data of location to append in location list
  const locationList = config.getCityList();

  const { t } = useTranslation();

  // get user data form redux
  const { userData, updatedUserData } = useSelector((state) => state.userData);
  const { userConversationsCount } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  /**
   * =================================================================================================
   *
   * if you want to change the behaviour of the navbar
   * you can just change the position of it with sticky or fixed
   * so if the user scroll down and the scrolling position is more than 200px then hide the navbar
   *
   * =================================================================================================
   *
   * */

  useEffect(() => {
    dispatch(getUpdatedUserData());
  }, []);

  useEffect(() => {
    if (updatedUserData?.conversationChatCounts) {
      let counter = 0;
      for (const item in updatedUserData?.conversationChatCounts) {
        counter += updatedUserData?.conversationChatCounts[item];
      }
      setChatCount(counter);
    }
  }, [updatedUserData]);
  return (
    <>
      <div
        // this is the classes can be used if you want to change the behaviour
        // className={`navBar flex items-center gap-5 fixed transition-all  duration-1000 ${scrollPosition == "down" ? "-translate-y-full" : "translate-y-full"}`}
        className={`navBar flex items-center `}
      >
        {/* ------------ Add Book btn ------------ */}
        <div className="navbar-btn hidden lg:block me-5">
          <Link to={"/book/new"}>
            <button
              style={{
                "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
              }}
              className={`bg-[#28D8AE] ${makeScroll ? "w-fit px-5" : ""} w-[142px] rounded-[14px] text-[16px] h-12 flex items-center justify-center gap-1`}
            >
              <solarIcons.AddCircle size={26} />
              {makeScroll ? null : <span className="text-base">Add Book</span>}
            </button>
          </Link>
        </div>
        {/* ------------ Add Book btn ------------ */}

        {/* Desktop-Location */}
        <div className="navbar-location me-5 relative hidden lg:block h-[48px] w-[150px] rounded-[10px] py-1  cursor-pointer bg-[#F3F4F7]">
          {/* start Dropdown  */}
          <Dropdown>
            {/* for btn  */}
            <DropdownTrigger>
              <div className="flex justify-center items-center gap-[10px]">
                <div className="txt" style={{ "font-family": "Noto Sans Arabic" }}>
                  {locationName ? (
                    <span className="text-[#939393] text-[12px] font-bold block">{t(`governorates.${locationName}`)}</span>
                  ) : (
                    <span className="text-[#939393] text-[10px] font-medium block">
                      {localStorage.getItem("i18nextLng") == "en" ? "Your Location" : "موقعك"}
                    </span>
                  )}
                  {locationName ? (
                    <span className="text-[#30A79F] text-[10px] font-bold underline ">
                      {localStorage.getItem("i18nextLng") == "en" ? "Change the Location" : "تغيير الموقع"}
                    </span>
                  ) : (
                    <span className="text-[#30A79F] text-[10px] font-bold ">
                      {localStorage.getItem("i18nextLng") == "en" ? "Select a Location" : "أختر الموقع"}
                    </span>
                  )}
                </div>
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
            </DropdownTrigger>

            {/* Dropdown list  */}
            <DropdownMenu aria-label="" className="max-h-[400px] py-2 outline-none border-none overflow-auto ">
              {locationList.map((item) => (
                <DropdownItem key={`${item.city}`} className="text-[#333]" onClick={() => handleLocationName(item)}>
                  {item?.value}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {/* end Dropdown  */}
        </div>
        {/* Desktop-Location */}

        {/* ------------ Search ------------ */}
        <div className="navbar-form md:me-5 flex-1 md:lg:w-[590px] lg:lg:w-[600px] rounded-[12px] ">
          <Search />
        </div>
        {/* ------------ Search ------------ */}

        {/* ------------ Mobile / Tablet Setting ------------*/}
        {userData ? (
          <div className="navbar-setting lg:hidden  flex items-center gap-1 cursor-pointer">
            {/********      notifications list items           *********/}
            <NotificationList />
            {/* </div> */}
          </div>
        ) : null}
        {/* ------------ Mobile Setting ------------ */}

        {/* ------------ Desktop-Lang ------------ */}
        <div
          className="navbar-lang me-5 h-[48px] hidden   bg-[#F3F4F7] max-w-[45px] cursor-pointer lg:flex items-center justify-center gap-[5px] rounded-[10px]"
          style={{ fontFamily: "Noto Sans Arabic" }}
        >
          <Button
            size="sm"
            className=" text-[#464646] text-[14px] font-bold w-full"
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
        {/* ------------ Desktop-Lang ------------ */}

        {userData ? (
          <>
            {/* ------------ Desktop user ------------ */}
            <div className="user me-5 hidden lg:flex items-center gap-3">
              <img src={userAvatar} alt="User" />
              <div className="name text-[12px]">
                <span className="block text-[#464646] ">hello , {userData.fullName}</span>
                <Link to={"/profile"} className="text-[#1F292F] font-semibold">
                  Your account
                </Link>
              </div>
            </div>
            {/* ------------ Desktop user ------------ */}

            {/* ------------ Desktop notifications ------------ */}
            <div className="notifications  hidden lg:flex items-center cursor-pointer gap-4">
              <Link to={"/chat"} className="alarm relative">
                <div className="msg relative fill-[#1C274C]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                    <path
                      d="M9.44083 0.385437H13.725C15.6394 0.385421 17.1556 0.385408 18.3423 0.544953C19.5636 0.709149 20.5521 1.0551 21.3316 1.83465C22.1112 2.61419 22.4571 3.60268 22.6213 4.82396C22.7809 6.01064 22.7809 7.52693 22.7808 9.44126V9.55878C22.7809 11.4731 22.7809 12.9894 22.6213 14.1761C22.4571 15.3974 22.1112 16.3858 21.3316 17.1654C20.5521 17.9449 19.5636 18.2909 18.3423 18.4551C17.1556 18.6146 15.6394 18.6146 13.725 18.6146H9.44083C7.5265 18.6146 6.01021 18.6146 4.82353 18.4551C3.60225 18.2909 2.61377 17.9449 1.83422 17.1654C1.05468 16.3858 0.708721 15.3974 0.544526 14.1761C0.38498 12.9894 0.384994 11.4731 0.38501 9.55879V9.44125C0.384994 7.52692 0.38498 6.01064 0.544526 4.82396C0.708721 3.60268 1.05468 2.61419 1.83422 1.83465C2.61377 1.0551 3.60226 0.709149 4.82353 0.544953C6.01021 0.385408 7.52649 0.385421 9.44083 0.385437ZM5.03173 2.09352C3.98372 2.23442 3.37992 2.49866 2.93908 2.9395C2.49823 3.38035 2.23399 3.98415 2.09309 5.03216C1.94917 6.10264 1.94751 7.51375 1.94751 9.50002C1.94751 11.4863 1.94917 12.8974 2.09309 13.9679C2.23399 15.0159 2.49823 15.6197 2.93908 16.0605C3.37992 16.5014 3.98372 16.7656 5.03173 16.9065C6.10221 17.0504 7.51332 17.0521 9.49959 17.0521H13.6663C15.6525 17.0521 17.0636 17.0504 18.1341 16.9065C19.1821 16.7656 19.7859 16.5014 20.2268 16.0605C20.6676 15.6197 20.9319 15.0159 21.0728 13.9679C21.2167 12.8974 21.2183 11.4863 21.2183 9.50002C21.2183 7.51375 21.2167 6.10264 21.0728 5.03216C20.9319 3.98415 20.6676 3.38035 20.2268 2.9395C19.7859 2.49866 19.1821 2.23442 18.1341 2.09352C17.0636 1.9496 15.6525 1.94794 13.6663 1.94794H9.49959C7.51332 1.94794 6.10221 1.9496 5.03173 2.09352ZM4.73275 4.83321C5.00898 4.50174 5.5016 4.45696 5.83307 4.73318L8.08192 6.60722C9.05375 7.41708 9.72848 7.97754 10.2981 8.34391C10.8495 8.69855 11.2235 8.8176 11.5829 8.8176C11.9424 8.8176 12.3163 8.69855 12.8677 8.34391C13.4374 7.97754 14.1121 7.41708 15.0839 6.60722L17.3328 4.73318C17.6642 4.45696 18.1569 4.50174 18.4331 4.83321C18.7093 5.16468 18.6645 5.65731 18.3331 5.93353L16.0451 7.8402C15.1218 8.60964 14.3734 9.23327 13.713 9.65807C13.0249 10.1006 12.3549 10.3801 11.5829 10.3801C10.811 10.3801 10.1409 10.1006 9.4529 9.65807C8.79242 9.23327 8.04409 8.60964 7.1208 7.84021L4.83278 5.93353C4.50132 5.65731 4.45653 5.16468 4.73275 4.83321Z"
                      fill="#1C274C"
                    />
                  </svg>
                  {chatCount ? (
                    <div className="num absolute top-[-7px] end-[-4px] w-4 h-4 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center">
                      <span className="text-[10px] font-semibold">{chatCount}</span>
                    </div>
                  ) : null}
                </div>
              </Link>
              {/********      notifications list items           *********/}

              <NotificationList />
            </div>
          </>
        ) : (
          <Link className="text-[#464646] font-semibold underline " to={"/auth/login"}>
            login
          </Link>
        )}
        {/* ------------ Desktop notifications ------------ */}
      </div>
    </>
  );
};

export default Navbar;
