import * as solarIcons from "solar-icon-set";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@nextui-org/react";
import { handleLoggedOut } from "../../../app/Slices/userDataSlice";
import { Link } from "react-router-dom";

const PersonalDataMobile = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.userData);
  console.log(userData);
  return (
    <>
      <div className="parent md:hidden">
        {/* personal data  */}
        <div className="personal-user cursor-pointer mb-6">
          {/* User Image  */}
          <div className="user-img mx-auto mb-4 w-[96px] h-[96px] relative flex justify-center items-center bg-[#D9D9D9] rounded-full">
            <div className="img ">
              <solarIcons.User size={60} color="#1C274C" />
              <div className="cheack absolute bottom-[-5px] start-4 bg-white rounded-full w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    stroke="#EFEFEF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z"
                    fill="#08B1E7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* User Image  */}
          {/* Information data for user  */}
          <div className="user-data">
            <h2 className="text-black text-xl text-center mb-1">
              {userData.fullName}
            </h2>
            <span className="text-black text-xs text-center block">
              {userData.email}
            </span>
          </div>
          {/* Information data for user  */}
        </div>
        {/* personal data  */}
        {/* notifcation data */}
        <div className="notif-data grid grid-cols-3 bg-white py-3 rounded-xl">
          <div className=" border-e-2 text-center border-[#D9D9D9]">
            <span className="block text-[#131313] text-sm font-medium">
              عدد المحادثات
            </span>
            <span className="text-[#747474] text-xs">13 محادثة</span>
          </div>
          <div className="border-e-2 text-center border-[#D9D9D9]">
            <span className="block text-[#131313] text-sm font-medium">
              عدد المنشورات
            </span>
            <span className="text-[#747474] text-xs">7 إعلانات</span>
          </div>
          <div className="border-e-2 text-center border-[#D9D9D9]">
            <span className="block text-[#131313] text-sm font-medium mb-1">
              الاوسمة الخاصة
            </span>
            <span className="text-[#747474] text-xs">
              <solarIcons.MedalRibbonStar size={18} color="#1C274C" />
              <solarIcons.MedalRibbonsStar size={18} color="#1C274C" />
            </span>
          </div>
        </div>
        {/* notifcation data */}
        {/* data setting  */}
        <div className="data-setting  my-5 pt-3 pb-1 bg-white rounded-xl">
          <div className="parent px-3 ">
            {/* Ubdata data  */}
            <Link to={"ubdate"}>
            <div className="Ubdate-user cursor-pointer py-3 flex items-center gap-1 border-b-2  border-[#EDEDED]">
              <solarIcons.User size={23} color="#747474" />
              <span className="text-[#131313] font-medium text-sm">
                {" "}
                تعديل الملف الشخصي
              </span>
            </div>
            </Link>
            {/* Ubdate data  */}
            {/* Ads  */}
            <Link to={"/profile/fav"}>
              <div className="Ads cursor-pointer py-3 flex items-center gap-1 border-b-2  border-[#EDEDED]">
                <solarIcons.Heart size={24} color="#747474" />
                <span className="text-[#131313] font-medium text-sm">
                  الاعلانات المفضلة
                </span>
              </div>
            </Link>
            {/* Ads  */}
            {/* Langauge */}
            <div className="lang cursor-pointer py-3 flex items-center gap-1 border-b-2  border-[#EDEDED]">
              <solarIcons.TextSquare size={24} color="#747474" />
              <span className="text-[#131313] font-medium text-sm">اللغة</span>
            </div>
            {/* Langauge */}
            {/* dark mode  */}
            <div className="dark-mode cursor-pointer py-3 flex items-center justify-between gap-1 border-b-2  border-[#EDEDED]">
              <span className="text-[#131313] flex items-center font-medium text-sm">
                <solarIcons.Sun size={24} color="#747474" />
                الوضع الليلي
              </span>
              <Switch defaultSelected color="#E5E5E5"></Switch>
            </div>
            {/* dark mode  */}
            {/* Helps  */}
            <div className="help cursor-pointer py-3 flex items-center gap-1 border-b-2  border-[#EDEDED]">
              <solarIcons.InfoSquare size={24} color="#28D8AE" />
              <span className="text-[#131313] font-medium text-sm">مساعدة</span>
            </div>
            {/* Helps  */}
            {/* problem  */}
            <div className="problem cursor-pointer py-3 flex items-center gap-1">
              <solarIcons.ShieldWarning size={24} color="#FA5057" />
              <span className="text-[#131313] font-medium text-sm">
                التبليغ عن مشكلة
              </span>
            </div>
            {/* problem  */}
          </div>
        </div>
        {/* data setting  */}
        {/* data setting  */}
        <div
          className="logout cursor-pointer my-5 py-4 px-3 border-b-2 bg-white border-[#EDEDED] rounded-xl flex gap-2"
          onClick={() => {
            dispatch(handleLoggedOut());
          }}
        >
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M8.30013 1.14551C9.55374 1.14549 10.5642 1.14547 11.3589 1.25232C12.184 1.36325 12.8787 1.60057 13.4305 2.15233C13.9117 2.63352 14.1548 3.22483 14.2825 3.91966C14.4065 4.59485 14.4302 5.42111 14.4357 6.41252C14.4378 6.79221 14.1317 7.10172 13.7521 7.10383C13.3724 7.10595 13.0629 6.79986 13.0607 6.42017C13.0552 5.4178 13.0291 4.7073 12.9301 4.16808C12.8346 3.6485 12.6814 3.34777 12.4582 3.1246C12.2045 2.8709 11.8483 2.70549 11.1757 2.61506C10.4833 2.52197 9.56562 2.52051 8.24982 2.52051H7.33316C6.01736 2.52051 5.09967 2.52197 4.40727 2.61506C3.73464 2.70549 3.37845 2.8709 3.12475 3.1246C2.87105 3.3783 2.70564 3.73449 2.61521 4.40712C2.52212 5.09952 2.52066 6.01721 2.52066 7.33301V14.6663C2.52066 15.9821 2.52212 16.8998 2.61521 17.5922C2.70564 18.2649 2.87105 18.6211 3.12475 18.8748C3.37845 19.1285 3.73464 19.2939 4.40727 19.3843C5.09967 19.4774 6.01736 19.4788 7.33316 19.4788H8.24982C9.56562 19.4788 10.4833 19.4774 11.1757 19.3843C11.8483 19.2939 12.2045 19.1285 12.4582 18.8748C12.6814 18.6516 12.8346 18.3509 12.9301 17.8313C13.0291 17.292 13.0552 16.5816 13.0607 15.5792C13.0629 15.1995 13.3724 14.8934 13.7521 14.8955C14.1317 14.8976 14.4378 15.2071 14.4357 15.5868C14.4302 16.5782 14.4065 17.4045 14.2825 18.0797C14.1548 18.7745 13.9117 19.3658 13.4305 19.847C12.8787 20.3988 12.184 20.6361 11.3589 20.747C10.5642 20.8539 9.55375 20.8539 8.30012 20.8538H7.28286C6.02923 20.8539 5.01877 20.8539 4.22405 20.747C3.39895 20.6361 2.70423 20.3988 2.15248 19.847C1.60072 19.2953 1.3634 18.6005 1.25247 17.7754C1.14562 16.9807 1.14564 15.9703 1.14566 14.7166V7.28271C1.14564 6.02909 1.14562 5.01863 1.25247 4.2239C1.3634 3.3988 1.60072 2.70409 2.15248 2.15233C2.70423 1.60057 3.39895 1.36325 4.22405 1.25232C5.01877 1.14547 6.02922 1.14549 7.28284 1.14551H8.30013Z"
                fill="#FA5057"
              />
              <path
                d="M8.25002 10.3122C7.87033 10.3122 7.56252 10.62 7.56252 10.9997C7.56252 11.3794 7.87033 11.6872 8.25002 11.6872H18.3082L16.5109 13.2277C16.2226 13.4748 16.1893 13.9088 16.4364 14.1971C16.6835 14.4854 17.1175 14.5188 17.4058 14.2717L20.6141 11.5217C20.7665 11.3911 20.8542 11.2004 20.8542 10.9997C20.8542 10.799 20.7665 10.6083 20.6141 10.4777L17.4058 7.72769C17.1175 7.48058 16.6835 7.51397 16.4364 7.80226C16.1893 8.09054 16.2226 8.52456 16.5109 8.77167L18.3082 10.3122H8.25002Z"
                fill="#FA5057"
              />
            </svg>
          </div>
          <span className="text-sm text-[#FA5057] font-medium">
            تسجيل الخروج
          </span>
        </div>
        {/* data setting  */}
      </div>
    </>
  );
};

export default PersonalDataMobile;
