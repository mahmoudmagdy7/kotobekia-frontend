import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as solarIcons from "solar-icon-set";
import { Link } from "react-router-dom";

const SliderCategory = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      {/* Use the Slider component with the specified settings */}
      <Slider {...settings} className="flex  items-center gap-1 m-auto">
        <div className="">
          <Link to="/" className="item flex justify-center  items-center cursor-pointer  gap-1">
            <solarIcons.Home size={20} color="#28D8AE" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Home</span>
          </Link>
        </div>

        <div className="">
          <Link to="/cate/655b4ec133dd362ae53081f7" className="item flex  justify-center items-center cursor-pointer  gap-1">
            <solarIcons.Backpack size={20} color="#28D8AE" />
            <span className="text-[#464646] text-[12px] lg:text-[14px] text-center">KG</span>
          </Link>
        </div>

        <div className="">
          <Link to="/cate/655b4ecd33dd362ae53081f9" className="item flex items-center justify-center cursor-pointer  gap-1">
            <solarIcons.CaseMinimalistic size={20} color="#28D8AE" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Primary </span>
          </Link>
        </div>

        <div className="">
          <Link to="/cate/655b4ee433dd362ae53081fb" className="item flex items-center cursor-pointer  gap-1">
            <solarIcons.CaseRound size={20} color="#1C274D" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Mid-level </span>
          </Link>
        </div>

        <div className="">
          <Link to="/cate/655b4efb33dd362ae53081fd" className="item flex items-center cursor-pointer  gap-1">
            <solarIcons.SquareAcademicCap size={20} color="#1C274D" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">Secondary </span>
          </Link>
        </div>

        <div className="">
          <Link to="/cate/655b4f0a33dd362ae53081ff" className="item flex items-center cursor-pointer  gap-1">
            <solarIcons.NotebookBookmark size={20} color="#1C274D" />
            <span className="text-[#464646] text-[12px] lg:text-[14px]">General </span>
          </Link>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </>
  );
};

export default SliderCategory;
