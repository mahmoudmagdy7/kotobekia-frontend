import * as solarIcons from "solar-icon-set";
import SliderCategory from "./SliderCategory";
import notoFont from "./NotoFont.json";

const NavCategory = () => {
  // Noto Font

  return (
    <>
      <nav className="py-[11px]">
        <div className="container">
          <div className="parent grid grid-cols-1 lg:grid-cols-3">
            <div className="filter col-span-1 hidden lg:flex items-center gap-[10px]">
              <solarIcons.Tuning2 size={22} color="#28D8AE" />
              <span style={notoFont} className="text-base text-[#1F292F]">
                All filters
              </span>
            </div>

            <div className="category  lg:col-span-2 ">
              {/* navbar from  md to lg  */}
              <div className="parent hidden md:flex  items-center gap-3">
                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.Home size={20} color="#28D8AE" />
                  <span
                    style={notoFont}
                    className="text-[#464646] md:text-[12px] lg:text-[14px]"
                  >
                    Home
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.Backpack size={20} color="#1C274D" />
                  <span
                    style={notoFont}
                    className="text-[#464646] text-[11px] lg:text-[14px]"
                  >
                    Kindergarten
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.CaseMinimalistic size={20} color="#1C274D" />
                  <span
                    style={notoFont}
                    className="text-[#464646] text-[11px] lg:text-[14px]"
                  >
                    Primary Education
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.CaseRound size={20} color="#1C274D" />
                  <span
                    style={notoFont}
                    className="text-[#464646] text-[11px] lg:text-[14px]"
                  >
                    Preparatory Education
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.SquareAcademicCap size={20} color="#1C274D" />
                  <span
                    style={notoFont}
                    className="text-[#464646] text-[11px] lg:text-[14px]"
                  >
                    Secondary Education
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.NotebookBookmark size={20} color="#1C274D" />
                  <span
                    style={notoFont}
                    className="text-[#464646] text-[11px] lg:text-[14px]"
                  >
                    General Books
                  </span>
                </div>
              </div>
              {/* navbar from  md to lg  */}

              <div className=" px-5 relative  md:hidden">
                
                <SliderCategory />

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavCategory;
