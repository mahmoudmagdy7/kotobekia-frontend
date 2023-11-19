import * as solarIcons from "solar-icon-set";
import logo from "../../../assets/logo.png";

const NavHome = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav_top flex items-center justify-between">
            <div className="start flex items-center  flex-1 justify-between  md:justify-start gap-6">
              <div className="logo py-4">
                <img src={logo} alt="Kotobekia Logo" title="Kotobekia Logo" />
              </div>
              {/* Desktop-Location */}
              <div className="navbar-location h-[48px] flex lg:hidden w-[150px] justify-center items-center gap-[10px] rounded-[10px] py-1  cursor-pointer bg-[#F3F4F7]">
                <div
                  style={{ "font-family": "Noto Sans Arabic" }}
                  className="txt"
                >
                  <span className="text-[#939393] text-[10px] font-medium block">
                    Your Location
                  </span>
                  <span className="text-[#30A79F] text-[10px] font-bold ">
                    Select a Location
                  </span>
                </div>

                <div className="arrow">
                  <solarIcons.AltArrowDown size={16} color="#1C274C" />
                </div>
              </div>
              {/* Desktop-Location */}
            </div>
            {/* Desktop-Lang */}
            <div
              className="navbar-lang h-[48px] lg:hidden   bg-[#F3F4F7] w-[90px] cursor-pointer hidden md:flex items-center justify-center gap-[5px] rounded-[10px]"
              style={{ fontFamily: "Noto Sans Arabic" }}
            >
              <span className="text-[#464646] text-[12px] font-bold">
                English
              </span>
              <solarIcons.AltArrowDown size={16} color="#1C274C" />
            </div>
            {/* Desktop-Lang */}
          </div>

          <div className="navBar flex items-center gap-5">
            <div className="navbar-btn hidden lg:block">
              <button
                style={{
                  "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                }}
                className="bg-[#28D8AE] w-[142px] rounded-[14px] text-[16px] h-12 flex items-center justify-center gap-1"
              >
                <solarIcons.AddCircle size={26} />
                <span className="text-base">Add Book</span>
              </button>
            </div>

            {/* Desktop-Location */}
            <div className="navbar-location h-[48px] hidden lg:flex w-[150px] justify-center items-center gap-[10px] rounded-[10px] py-1  cursor-pointer bg-[#F3F4F7]">
              <div
                style={{ "font-family": "Noto Sans Arabic" }}
                className="txt"
              >
                <span className="text-[#939393] text-[10px] font-medium block">
                  Your Location
                </span>
                <span className="text-[#30A79F] text-[10px] font-bold ">
                  Select a Location
                </span>
              </div>

              <div className="arrow">
                <solarIcons.AltArrowDown size={16} color="#1C274C" />
              </div>
            </div>
            {/* Desktop-Location */}

            <div className="navbar-form bg-[#F3F4F7] flex-1 md:lg:w-[590px] lg:lg:w-[600px] rounded-[12px] ">
              <form action="">
                <div className="input relative ">
                  <input
                    type="text"
                    placeholder="Search for books"
                    className="input  block ps-4 h-[48px]  text-[#939393] bg-transparent  outline-none"
                  />
                  <div className="icon absolute top-1/2 -translate-y-1/2 end-[16px]">
                    <solarIcons.Magnifer size={20} color="#939393" />
                  </div>
                </div>
              </form>
            </div>

            <div className="navbar-sitting flex lg:hidden items-center gap-[10px]">
              <solarIcons.Tuning size={26} color="#1C274C" />
              <solarIcons.Alarm size={33} color="#1C274C" />
            </div>

            {/* Desktop-Lang */}
            <div
              className="navbar-lang h-[48px] hidden   bg-[#F3F4F7] w-[90px] cursor-pointer lg:flex items-center justify-center gap-[5px] rounded-[10px]"
              style={{ fontFamily: "Noto Sans Arabic" }}
            >
              <span className="text-[#464646] text-[12px] font-bold">
                English
              </span>
              <solarIcons.AltArrowDown size={16} color="#1C274C" />
            </div>
            {/* Desktop-Lang */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavHome;
