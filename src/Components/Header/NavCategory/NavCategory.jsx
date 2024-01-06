import * as solarIcons from "solar-icon-set";
import SliderCategory from "./SliderCategory";
import { Link } from "react-router-dom";
import config from "./../../../../config";
import "./navCategory.css";

const NavCategory = () => {
  return (
    <>
      <nav className="nav-category py-[11px]">
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
                {/* Nav Home  */}
                <div className="item active">
                  <Link
                    to={"/"}
                    className="text-[#464646] md:text-[12px] flex items-center gap-1 lg:text-[14px]"
                  >
                    <solarIcons.Home size={20} color="#28D8AE" />
                    Home
                  </Link>
                </div>
                {/* Nav Home  */}

                {/* Nav KG  */}
                <div className="item">
                  <Link
                    to={`/cate/${config.categories[0].id}?page=1`}
                    className="text-[#464646] flex items-center cursor-pointer gap-1 text-[11px] lg:text-[14px]"
                  >
                    <solarIcons.Backpack size={20} color="#1C274D" />
                    KG
                  </Link>
                </div>
                {/* Nav KG  */}

                {/* Nav Primary  */}
                <div className="item">
                  <Link
                    to={`cate/${config.categories[1].id}?page=1`}
                    className="text-[#464646] flex items-center cursor-pointer gap-1 text-[11px] lg:text-[14px]"
                  >
                    <solarIcons.CaseMinimalistic size={20} color="#1C274D" />
                    Primary{" "}
                  </Link>
                </div>
                {/* Nav Primary  */}

                {/* Nav Mid Level  */}
                <div className="item flex items-center cursor-pointer gap-1">
                  <Link
                    to={`cate/${config.categories[2].id}?page=1`}
                    className="text-[#464646] text-[11px] lg:text-[14px] flex items-center cursor-pointer gap-1"
                  >
                    <solarIcons.CaseRound size={20} color="#1C274D" />
                    Mid-level{" "}
                  </Link>
                </div>
                {/* Nav Mid Level  */}

                {/* Nav Secondary  */}
                <div className="item">
                  <Link
                    to={`cate/${config.categories[3].id}?page=1`}
                    className="text-[#464646] text-[11px] lg:text-[14px] flex items-center cursor-pointer gap-1"
                  >
                    <solarIcons.SquareAcademicCap size={20} color="#1C274D" />
                    Secondary
                  </Link>
                </div>
                {/* Nav Secondary  */}

                {/* Nav General  */}
                <div className="item flex items-center cursor-pointer gap-1">
                  <Link
                    to={`cate/${config.categories[4].id}?page=1`}
                    className="text-[#464646] text-[11px] lg:text-[14px] flex items-center cursor-pointer gap-1"
                  >
                    <solarIcons.NotebookBookmark size={20} color="#1C274D" />
                    General
                  </Link>
                </div>
                {/* Nav General  */}
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
