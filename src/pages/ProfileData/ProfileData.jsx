import Cookies from "js-cookie";
import * as SolaIcons from "solar-icon-set";
import { useSelector } from "react-redux";
import { useAutho } from "../../hooks/useAutho";

const ProfileData = () => {
  
  const {data} = useSelector((state) => state.userData);




  // Logout Function
  const handleLogout = () => {
    Cookies.remove("userToken");
    window.location.reload();
  };
  // Logout Function


if(data){
  console.log(data);
}


  return (
    <>
      <section className="profile-data py-20">
        <div className="container">
          <div className="head-profile pt-12 mb-12 bg-white rounded-t-[14px]  ">
            <div className="flex justify-between px-12  items-center">
              <div className="user flex items-center gap-4">
                {/* user image  */}
                <div className="user-image w-[127px] h-[127px] relative flex justify-center items-center bg-[#D9D9D9] rounded-full">
                  <div className="img ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="59"
                        height="59"
                        stroke="#EFEFEF"
                      />
                      <circle
                        cx="30"
                        cy="15"
                        r="10"
                        stroke="#1C274C"
                        stroke-width="1.5"
                      />
                      <path
                        d="M50 43.75C50 49.9632 50 55 30 55C10 55 10 49.9632 10 43.75C10 37.5368 18.9543 32.5 30 32.5C41.0457 32.5 50 37.5368 50 43.75Z"
                        stroke="#1C274C"
                        stroke-width="1.5"
                      />
                    </svg>
                    <div className="cheack absolute bottom-0 start-4 bg-white rounded-full w-fit">
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
                {/* user image  */}
                {/* User Name */}
                <div className="user-name text-center">
                  <h2 className="text-[32px] text-[#28D8AE] font-semibold ">
                    امجد حسام الدين
                  </h2>
                  <span className="text-xs text-black font-medium">
                    Ahmed@gmail.com
                  </span>
                </div>
                {/* User Name */}
              </div>

              {/* Logout  */}
              <div
                onClick={() => {
                  handleLogout();
                }}
                className="logout cursor-pointer flex items-center gap-2"
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
                      d="M8.30007 1.14551C9.55368 1.14549 10.5641 1.14547 11.3589 1.25232C12.184 1.36325 12.8787 1.60057 13.4304 2.15233C13.9116 2.63352 14.1548 3.22483 14.2824 3.91966C14.4064 4.59485 14.4301 5.42111 14.4357 6.41252C14.4378 6.79221 14.1317 7.10172 13.752 7.10383C13.3723 7.10595 13.0628 6.79986 13.0607 6.42017C13.0551 5.4178 13.0291 4.7073 12.93 4.16808C12.8346 3.6485 12.6813 3.34777 12.4582 3.1246C12.2045 2.8709 11.8483 2.70549 11.1757 2.61506C10.4832 2.52197 9.56556 2.52051 8.24976 2.52051H7.3331C6.0173 2.52051 5.09961 2.52197 4.40721 2.61506C3.73458 2.70549 3.37839 2.8709 3.12469 3.1246C2.87099 3.3783 2.70558 3.73449 2.61515 4.40712C2.52206 5.09952 2.5206 6.01721 2.5206 7.33301V14.6663C2.5206 15.9821 2.52206 16.8998 2.61515 17.5922C2.70558 18.2649 2.87099 18.6211 3.12469 18.8748C3.37839 19.1285 3.73458 19.2939 4.40721 19.3843C5.09961 19.4774 6.0173 19.4788 7.3331 19.4788H8.24976C9.56556 19.4788 10.4832 19.4774 11.1757 19.3843C11.8483 19.2939 12.2045 19.1285 12.4582 18.8748C12.6813 18.6516 12.8346 18.3509 12.93 17.8313C13.0291 17.292 13.0551 16.5816 13.0607 15.5792C13.0628 15.1995 13.3723 14.8934 13.752 14.8955C14.1317 14.8976 14.4378 15.2071 14.4357 15.5868C14.4301 16.5782 14.4064 17.4045 14.2824 18.0797C14.1548 18.7745 13.9116 19.3658 13.4304 19.847C12.8787 20.3988 12.184 20.6361 11.3589 20.747C10.5641 20.8539 9.55369 20.8539 8.30006 20.8538H7.2828C6.02917 20.8539 5.01871 20.8539 4.22399 20.747C3.39889 20.6361 2.70417 20.3988 2.15242 19.847C1.60066 19.2953 1.36334 18.6005 1.25241 17.7754C1.14556 16.9807 1.14558 15.9703 1.1456 14.7166V7.28271C1.14558 6.02909 1.14556 5.01863 1.25241 4.2239C1.36334 3.3988 1.60066 2.70409 2.15242 2.15233C2.70417 1.60057 3.39889 1.36325 4.22399 1.25232C5.01871 1.14547 6.02916 1.14549 7.28278 1.14551H8.30007Z"
                      fill="#FA5057"
                    />
                    <path
                      d="M8.24996 10.3122C7.87026 10.3122 7.56246 10.62 7.56246 10.9997C7.56246 11.3794 7.87026 11.6872 8.24996 11.6872H18.3081L16.5109 13.2277C16.2226 13.4748 16.1892 13.9088 16.4363 14.1971C16.6834 14.4854 17.1174 14.5188 17.4057 14.2717L20.614 11.5217C20.7664 11.3911 20.8541 11.2004 20.8541 10.9997C20.8541 10.799 20.7664 10.6083 20.614 10.4777L17.4057 7.72769C17.1174 7.48058 16.6834 7.51397 16.4363 7.80226C16.1892 8.09054 16.2226 8.52456 16.5109 8.77167L18.3081 10.3122H8.24996Z"
                      fill="#FA5057"
                    />
                  </svg>{" "}
                </div>
                <span className="font-medium text-sm text-[#FA5057]">
                  تسجيل الخروج
                </span>
              </div>
              {/* Logout  */}
            </div>
            {/* data setting  */}
            <div className="data-setting  mt-14 py-3 border-t-1 border-[#EDEDED] px-24 flex  items-center">
              <div className="parent flex items-center gap-6">
                {/* Personal data  */}
                <div className="presonal cursor-pointer flex items-center gap-1">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5514 1.69824C9.03733 1.69824 6.99929 3.73628 6.99929 6.25033C6.99929 8.76437 9.03733 10.8024 11.5514 10.8024C14.0654 10.8024 16.1035 8.76437 16.1035 6.25033C16.1035 3.73628 14.0654 1.69824 11.5514 1.69824ZM8.43679 6.25033C8.43679 4.53019 9.83124 3.13574 11.5514 3.13574C13.2715 3.13574 14.666 4.53019 14.666 6.25033C14.666 7.97046 13.2715 9.36491 11.5514 9.36491C9.83124 9.36491 8.43679 7.97046 8.43679 6.25033Z"
                        fill="#28D8AE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5514 12.2399C9.33422 12.2399 7.29151 12.7439 5.77785 13.5953C4.28672 14.4341 3.16596 15.7053 3.16596 17.2712L3.1659 17.3689C3.16481 18.4823 3.16346 19.8797 4.38919 20.8779C4.99243 21.3691 5.83634 21.7184 6.9765 21.9492C8.11984 22.1807 9.61001 22.3024 11.5514 22.3024C13.4927 22.3024 14.9829 22.1807 16.1263 21.9492C17.2664 21.7184 18.1103 21.3691 18.7136 20.8779C19.9393 19.8797 19.9379 18.4823 19.9369 17.3689L19.9368 17.2712C19.9368 15.7053 18.816 14.4341 17.3249 13.5953C15.8112 12.7439 13.7685 12.2399 11.5514 12.2399ZM4.60346 17.2712C4.60346 16.4553 5.19895 15.5703 6.4826 14.8482C7.74373 14.1388 9.53435 13.6774 11.5514 13.6774C13.5684 13.6774 15.359 14.1388 16.6202 14.8482C17.9038 15.5703 18.4993 16.4553 18.4993 17.2712C18.4993 18.5245 18.4607 19.23 17.8059 19.7632C17.4508 20.0524 16.8572 20.3346 15.8411 20.5403C14.8282 20.7453 13.4433 20.8649 11.5514 20.8649C9.65941 20.8649 8.27459 20.7453 7.26168 20.5403C6.24559 20.3346 5.65199 20.0524 5.2969 19.7632C4.6421 19.23 4.60346 18.5245 4.60346 17.2712Z"
                        fill="#28D8AE"
                      />
                    </svg>
                  </div>
                  <span className="text-[#131313] font-medium text-sm">
                    {" "}
                    الملف الشخصي
                  </span>
                </div>
                {/* Personal data  */}
                {/* Ubdate Person  */}
                <div className="ubdate-preson cursor-pointer flex items-center gap-1">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4964 1.69824L13.9889 1.69824C14.3859 1.69824 14.7077 2.02004 14.7077 2.41699C14.7077 2.81395 14.3859 3.13574 13.9889 3.13574H12.5514C10.2723 3.13574 8.63524 3.13727 7.38942 3.30476C6.16429 3.46948 5.42568 3.78275 4.87976 4.32867C4.33384 4.87459 4.02057 5.6132 3.85585 6.83834C3.68836 8.08415 3.68683 9.72119 3.68683 12.0003C3.68683 14.2795 3.68836 15.9165 3.85585 17.1623C4.02057 18.3875 4.33384 19.1261 4.87976 19.672C5.42568 20.2179 6.16429 20.5312 7.38942 20.6959C8.63524 20.8634 10.2723 20.8649 12.5514 20.8649C14.8305 20.8649 16.4676 20.8634 17.7134 20.6959C18.9385 20.5312 19.6771 20.2179 20.2231 19.672C20.769 19.1261 21.0823 18.3875 21.247 17.1623C21.4145 15.9165 21.416 14.2795 21.416 12.0003V10.5628C21.416 10.1659 21.7378 9.84408 22.1347 9.84408C22.5317 9.84408 22.8535 10.1659 22.8535 10.5628V12.0553C22.8535 14.2675 22.8535 16.0012 22.6717 17.3539C22.4855 18.7384 22.0971 19.8309 21.2395 20.6884C20.382 21.546 19.2895 21.9344 17.9049 22.1206C16.5523 22.3024 14.8186 22.3024 12.6064 22.3024H12.4964C10.2842 22.3024 8.55056 22.3024 7.19788 22.1206C5.81334 21.9344 4.72082 21.546 3.86329 20.6884C3.00577 19.8309 2.61732 18.7384 2.43117 17.3539C2.24931 16.0012 2.24932 14.2675 2.24933 12.0553V11.9453C2.24932 9.73313 2.24931 7.99947 2.43117 6.64679C2.61732 5.26225 3.00577 4.16973 3.86329 3.31221C4.72082 2.45468 5.81334 2.06623 7.19788 1.88008C8.55055 1.69822 10.2842 1.69823 12.4964 1.69824ZM17.1232 2.68141C18.4341 1.37052 20.5594 1.37052 21.8703 2.68141C23.1812 3.9923 23.1812 6.11768 21.8703 7.42857L15.4992 13.7997C15.1434 14.1555 14.9205 14.3784 14.6718 14.5724C14.3788 14.8009 14.0619 14.9969 13.7265 15.1567C13.4417 15.2924 13.1427 15.3921 12.6652 15.5512L9.88174 16.479C9.36784 16.6503 8.80127 16.5165 8.41823 16.1335C8.03519 15.7505 7.90144 15.1839 8.07274 14.67L9.00057 11.8865C9.15967 11.4091 9.25933 11.11 9.39504 10.8253C9.55488 10.4899 9.75079 10.1729 9.97929 9.87993C10.1733 9.6312 10.3962 9.40831 10.7521 9.05249L17.1232 2.68141ZM20.8539 3.69788C20.1043 2.94836 18.8891 2.94836 18.1396 3.69788L17.7787 4.0588C17.8005 4.15067 17.8309 4.26013 17.8733 4.38221C18.0106 4.77806 18.2705 5.29939 18.7614 5.79032C19.2524 6.28125 19.7737 6.54115 20.1695 6.67848C20.2916 6.72084 20.4011 6.75127 20.4929 6.77303L20.8539 6.4121C21.6034 5.66259 21.6034 4.44739 20.8539 3.69788ZM19.3605 7.90545C18.866 7.6928 18.2901 7.35189 17.745 6.80679C17.1998 6.26168 16.8589 5.6857 16.6463 5.19123L11.8015 10.036C11.4024 10.4351 11.2458 10.5934 11.1128 10.764C10.9485 10.9747 10.8076 11.2026 10.6927 11.4437C10.5996 11.639 10.5281 11.8498 10.3496 12.3853L9.93565 13.627L10.9247 14.6161L12.1664 14.2022C12.7019 14.0237 12.9127 13.9521 13.108 13.859C13.3492 13.7441 13.5771 13.6033 13.7877 13.439C13.9583 13.3059 14.1166 13.1494 14.5157 12.7502L19.3605 7.90545Z"
                        fill="#939393"
                      />
                    </svg>
                  </div>
                  <span className="text-[#131313] font-medium text-sm">
                    {" "}
                    تعديل الملف الشخصي
                  </span>
                </div>
                {/* Ubdate Person  */}
                {/* ADS  */}
                <div className="ads cursor-pointer flex items-center gap-1">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                    >
                      <path
                        d="M8.58835 18.6233L9.05266 18.0343L8.58835 18.6233ZM11.5 5.77184L10.9597 6.29194C11.101 6.43883 11.2961 6.52184 11.5 6.52184C11.7039 6.52184 11.899 6.43883 12.0404 6.29194L11.5 5.77184ZM14.4117 18.6233L14.876 19.2123L14.4117 18.6233ZM9.05266 18.0343C7.5983 16.8878 6.0135 15.7722 4.75591 14.3561C3.52403 12.969 2.66669 11.3529 2.66669 9.25678H1.16669C1.16669 11.821 2.23531 13.7768 3.63434 15.3521C5.00766 16.8985 6.75868 18.136 8.12403 19.2123L9.05266 18.0343ZM2.66669 9.25678C2.66669 7.20723 3.82476 5.4901 5.40302 4.76867C6.934 4.06885 8.99543 4.25118 10.9597 6.29194L12.0404 5.25174C9.69227 2.81212 6.96203 2.40677 4.77943 3.40444C2.64411 4.3805 1.16669 6.64603 1.16669 9.25678H2.66669ZM8.12403 19.2123C8.61464 19.5991 9.1433 20.0131 9.67954 20.3265C10.2155 20.6397 10.8305 20.8962 11.5 20.8962V19.3962C11.2113 19.3962 10.8678 19.2835 10.4363 19.0314C10.0051 18.7794 9.55706 18.432 9.05266 18.0343L8.12403 19.2123ZM14.876 19.2123C16.2414 18.136 17.9924 16.8985 19.3657 15.3521C20.7647 13.7768 21.8334 11.821 21.8334 9.25678H20.3334C20.3334 11.3529 19.476 12.969 18.2441 14.3561C16.9865 15.7722 15.4017 16.8878 13.9474 18.0343L14.876 19.2123ZM21.8334 9.25678C21.8334 6.64603 20.3559 4.3805 18.2206 3.40444C16.038 2.40677 13.3078 2.81212 10.9597 5.25174L12.0404 6.29194C14.0046 4.25118 16.066 4.06885 17.597 4.76867C19.1753 5.4901 20.3334 7.20723 20.3334 9.25678H21.8334ZM13.9474 18.0343C13.443 18.432 12.995 18.7794 12.5637 19.0314C12.1322 19.2835 11.7888 19.3962 11.5 19.3962V20.8962C12.1696 20.8962 12.7845 20.6397 13.3205 20.3265C13.8567 20.0131 14.3854 19.5991 14.876 19.2123L13.9474 18.0343Z"
                        fill="#747474"
                      />
                    </svg>
                  </div>
                  <span className="text-[#131313] font-medium text-sm">
                    {" "}
                    الاعلانات المفضلة{" "}
                  </span>
                </div>
                {/* ADS  */}
                {/* Problems  */}
                <div className="problem cursor-pointer flex items-center gap-1">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M2.75 9.54828C2.75 6.61716 2.75 5.1516 3.09606 4.65855C3.44211 4.1655 4.82013 3.6938 7.57617 2.7504L8.10125 2.57066C9.5379 2.07889 10.2562 1.83301 11 1.83301C11.7438 1.83301 12.4621 2.07889 13.8988 2.57067L14.4238 2.7504C17.1799 3.6938 18.5579 4.1655 18.9039 4.65855C19.25 5.1516 19.25 6.61716 19.25 9.54828C19.25 9.99102 19.25 10.4711 19.25 10.9918C19.25 16.16 15.3643 18.668 12.9263 19.733C12.265 20.0219 11.9343 20.1663 11 20.1663C10.0657 20.1663 9.73501 20.0219 9.07368 19.733C6.63571 18.668 2.75 16.16 2.75 10.9918C2.75 10.4711 2.75 9.99102 2.75 9.54828Z"
                        stroke="#FA5057"
                        stroke-width="1.5"
                      />
                      <path
                        d="M11 7.33301V10.9997"
                        stroke="#FA5057"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="11"
                        cy="13.7497"
                        r="0.916667"
                        fill="#FA5057"
                      />
                    </svg>
                  </div>
                  <span className="text-[#131313] font-medium text-sm">
                    {" "}
                    التبليغ عن مشكلة
                  </span>
                </div>
                {/* Problems  */}
                {/* Helps  */}
                <div className="help cursor-pointer flex items-center gap-1">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z"
                        fill="#FFC26F"
                      />
                      <path
                        d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z"
                        fill="#FFC26F"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                        fill="#FFC26F"
                      />
                    </svg>
                  </div>
                  <span className="text-[#131313] font-medium text-sm">
                    {" "}
                    مساعدة
                  </span>
                </div>
                {/* Helps  */}
              </div>
            </div>
            {/* data setting  */}
          </div>
          <div className="info  px-12 bg-white rounded-b-[14px]  ">
            <div className="title pt-9 pb-5  border-b-1 border-[#EDEDED] ">
              <h5 className="text-[#28D8AE] font-medium text-xl">
                المعلومات الشخصية
              </h5>
            </div>

            <div className=" mt-8 w-full flex pb-8">
              <div className="table-items w-1/2  border-e-2 border-[#EDEDED] ">
                <div className="paret-one w-1/2 flex justify-between">
                  <ul className="list-none ">
                    <li className="text-[#131313] text-base mb-4">الاسم</li>
                    <li className="text-[#131313] text-base mb-4">
                      تاريخ الميلاد
                    </li>
                    <li className="text-[#131313] text-base ">الجنس</li>
                  </ul>
                  <ul className="list-none ">
                    <li className="text-[#939393] text-base mb-4">
                      امجد حسام الدين
                    </li>
                    <li className="text-[#939393] text-base mb-4">
                      1 - 2 - 2000
                    </li>
                    <li className="text-[#939393] text-base mb-4">ذكر</li>
                  </ul>
                </div>
              </div>
              <div className="table-items w-1/2   ps-10 border-[#EDEDED] ">
                <div className="paret-two w-1/2 flex justify-between">
                  <ul className="head list-none ">
                    <li className="text-[#131313] text-base mb-4">
                      عدد المحادثات
                    </li>
                    <li className="text-[#131313] text-base mb-4">
                      عدد المنشورات
                    </li>
                    <li className="text-[#131313] text-base ">الالوسمة</li>
                  </ul>
                  <ul className="list-none ">
                    <li className="text-[#939393] text-base mb-4">13 محادثة</li>
                    <li className="text-[#939393] text-base mb-4">13 منشور </li>
                    <li className="text-[#939393] text-base mb-4">
                      <SolaIcons.MedalRibbonStar size={18} color="#1C274C" />
                      <SolaIcons.MedalRibbonsStar size={18} color="#1C274C" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileData;