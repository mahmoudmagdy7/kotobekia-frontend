import ad1 from "../../../public/assets/images/ad/Ad_1.png";
import { Link } from "react-router-dom";
import CardSkeleton from "../Card/CardSkeleton";

import { useEffect, useState } from "react";
import Slider from "../slider/Slider";

const PartsOfCategory = ({ title, icon, data, isLoading }) => {
  console.log("data from cat" + data);

  return (
    <>
      <section className="cards mb-5">
        <div className="max-w-screen-2xl m-auto px-3 pt-10">
          <div className="head flex justify-between items-center px-6">
            <div className="title py-2  w-fit  flex items-center gap-1 ">
              <h2 className="text-[24px] border-b-2 text-[#1F292F] font-bold border-[#C8C5C5]">
                {title}
              </h2>
              <span className="mt-2 icon">{icon}</span>
            </div>

            {/* To show More category Posts  */}
            <div className="more cursor-pointer">
              <Link
                to={"/cate/" + data?._id}
                className="text-[14px] lg:text-[18px] text-[#464646] underline"
              >
                See More
              </Link>
            </div>
            {/* To show More category Posts  */}
          </div>

          {isLoading ? (
            <CardSkeleton isLoading={isLoading} />
          ) : (
            <>
              {/* ---------- Desktop Cards ---------- */}
              <div className="cards cursor-pointer">
                {/* Desktop Slider  */}
                <div className="desktop  lg:block">
                  <Slider data={data} />
                </div>
                {/* Desktop Slider  */}
                {/*  Tablat Slider  */}
                {/* <div className="tablat  hidden md:block lg:hidden">
                  <TablatSlider data={data} />
                </div> */}
                {/*  Slider  */}
                {/* Mobile Slider  */}
                {/* <div className="mobile block md:hidden">
                  <MobileSlider data={data} />
                </div> */}
                {/* Mobile Slider  */}

                {/* custom slider  */}
                {/* <div className=" z-[9999999999999999999]">
                  <Slider>
                    {data?.posts.map((post, idx) => {
                      return (
                        <>
                          <div className="item h-[300px] lg:h-[360px] min-w-[280px]">
                            <Card post={post} />
                          </div>
                        </>
                      );
                    })}
                  </Slider>
                </div> */}
                {/* custom slider  */}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PartsOfCategory;
