import * as solarIcons from "solar-icon-set";
import SliderCategory from "./SliderCategory";

const NavCategory = () => {
  // Noto Font

  return (
    <>
      <nav className="py-[11px]">
        <div className="container">
          <div className="parent grid grid-cols-1 lg:grid-cols-5 justify-between ">
            {/* ----------- Filter icon for desktop to -----------*/}
            <div className="filter col-span-1 hidden lg:flex items-center gap-[10px]">
              <solarIcons.Tuning2 size={22} color="#28D8AE" />
              <span className="text-base text-[#1F292F]">All filters</span>
            </div>
            {/* ----------- Filter icon for desktop ----------- */}

            <div className="category  lg:col-span-4 lg:ms-auto w-full ">
              {/* ----------- Category items  from  md to lg -----------*/}
              <div className="parent hidden md:flex  items-center gap-10  justify-end">
                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.Home size={20} color="#28D8AE" />
                  <span className="text-[#464646] md:text-[12px] lg:text-[14px]">
                    Home
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.Backpack size={20} color="#1C274D" />
                  <span className="text-[#464646] text-[11px] lg:text-[14px]">
                    KG
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.CaseMinimalistic size={20} color="#1C274D" />
                  <span className="text-[#464646] text-[11px] lg:text-[14px]">
                    Primary{" "}
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.CaseRound size={20} color="#1C274D" />
                  <span className="text-[#464646] text-[11px] lg:text-[14px]">
                    Mid-level{" "}
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.SquareAcademicCap size={20} color="#1C274D" />
                  <span className="text-[#464646] text-[11px] lg:text-[14px]">
                    Secondary{" "}
                  </span>
                </div>

                <div className="item flex items-center cursor-pointer gap-1">
                  <solarIcons.NotebookBookmark size={20} color="#1C274D" />
                  <span className="text-[#464646] text-[11px] lg:text-[14px]">
                    General Books
                  </span>
                </div>
              </div>
              {/* ----------- Category items from  md to lg ----------- */}

              {/*************** Category items Form Mobile ************** */}
              <div className=" px-5 relative  md:hidden">
                <SliderCategory />
              </div>
              {/*************** Category items Form Mobile ************** */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavCategory;
