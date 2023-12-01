import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as solarIcons from "solar-icon-set";

const SliderCategory = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <>
      {/* Use the Slider component with the specified settings */}
      <Slider {...settings} className="flex  items-center gap-1 m-auto">
        <div className="">
          <div className="item flex justify-center  items-center cursor-pointer  gap-1">
            <solarIcons.Home size={20} color="#28D8AE" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Home</span>
          </div>
        </div>

        <div className="">
          <div className="item flex  justify-center items-center cursor-pointer  gap-1">
            <solarIcons.Backpack size={20} color="#28D8AE" />
            <span className="text-[#464646] text-[12px] lg:text-[14px] text-center">Kindergarten</span>
          </div>
        </div>

        <div className="">
          <div className="item flex items-center justify-center cursor-pointer  gap-1">
            <solarIcons.CaseMinimalistic size={20} color="#28D8AE" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Primary </span>
          </div>
        </div>

        <div className="">
          <div className="item flex items-center cursor-pointer  gap-1">
            <solarIcons.CaseRound size={20} color="#1C274D" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Preparatory </span>
          </div>
        </div>

        <div className="">
          <div className="item flex items-center cursor-pointer  gap-1">
            <solarIcons.SquareAcademicCap size={20} color="#1C274D" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Secondary </span>
          </div>
        </div>

        <div className="">
          <div className="item flex items-center cursor-pointer  gap-1">
            <solarIcons.NotebookBookmark size={20} color="#1C274D" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">General </span>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </>
  );
};

export default SliderCategory;
