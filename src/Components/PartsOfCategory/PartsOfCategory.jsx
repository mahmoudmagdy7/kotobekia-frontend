import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img from "/assets/cardImg.png";
import "keen-slider/keen-slider.min.css";
import Card from "./../Card/Card";
import ad1 from "../../../public/assets/images/ad/Ad_1.png";
import { Link } from "react-router-dom";

const PartsOfCategory = ({ title, icon, data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="cards mb-5">
        <div className="max-w-screen-2xl m-auto px-3 pt-10">
          <div className="head flex justify-between items-center px-6">
            <div className="title py-2  w-fit  flex items-center gap-1 ">
              <h2 className="text-[24px] border-b-2 text-[#1F292F] font-bold border-[#C8C5C5]">{title}</h2>
              <span className="mt-2 icon">{icon}</span>
            </div>

            <div className="more cursor-pointer">
              <Link to={"/cate/" + data?._id} className="text-[14px] lg:text-[18px] text-[#464646] underline">
                See More
              </Link>
            </div>
          </div>

          {/* Desktop Cards  */}
          <div className="cards cursor-pointer hidden lg:block ">
            <Slider {...settings} className="flex items-center   gap-4 mx-5">
              {data?.posts.slice(0, 3).map((post, idx) => {
                return (
                  <>
                    <div className="h-[300px] lg:h-[360px]">
                      <Card post={post} />
                    </div>
                  </>
                );
              })}
              <div className="h-360px pt-1">
                <img src={ad1} alt="Ad_1" className="w-full hidden h-[300px] lg:h-[340px]" />
              </div>
              {data?.posts.slice(3, 6).map((post, idx) => {
                return (
                  <>
                    <div className="h-[300px] lg:h-[360px]">
                      <Card post={post} />
                    </div>
                  </>
                );
              })}
              <div className=" h-360px pt-1">
                <img src={ad1} alt="Ad_1" className="w-full  h-[300px] lg:h-[360px]" />
              </div>
            </Slider>
          </div>
          {/* Desktop Cards  */}
          {/* Mobile Cards  */}
          <div className="cards cursor-pointer block lg:hidden ">
            <Slider {...settings} className="flex items-center   gap-4 mx-5">
              {data?.posts.map((post, idx) => {
                return (
                  idx < 7 && (
                    <>
                      <div className="">
                        <Card post={post} />
                      </div>
                    </>
                  )
                );
              })}
            </Slider>
          </div>
          {/* Desktop Cards  */}
        </div>
      </section>
    </>
  );
};

export default PartsOfCategory;
