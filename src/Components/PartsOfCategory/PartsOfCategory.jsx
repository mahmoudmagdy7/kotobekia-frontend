import ad1 from "../../../public/assets/images/ad/Ad_1.png";
import { Link } from "react-router-dom";
import CardSkeleton from "../Card/CardSkeleton";

import Slider from "./../slider/Slider";
import Card from "./../Card/Card";
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

            <div className="more cursor-pointer">
              <Link
                to={"/cate/" + data?._id}
                className="text-[14px] lg:text-[18px] text-[#464646] underline"
              >
                See More
              </Link>
            </div>
          </div>

          {isLoading ? (
            <CardSkeleton isLoading={isLoading} />
          ) : (
            <>
              {/* ---------- Desktop Cards ---------- */}
              <div className="cards cursor-pointer">
                {/* <Slider
                  {...settings}
                  className="flex items-center   gap-4 mx-5"
                >
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
                    <img
                      src={ad1}
                      alt="Ad_1"
                      className="w-full hidden h-[300px] lg:h-[340px]"
                    />
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
                    <img
                      src={ad1}
                      alt="Ad_1"
                      className="w-full  h-[300px] lg:h-[360px]"
                    />
                  </div>
                </Slider> */}

                {/* custom slider  */}
                <div className="z-[9999999999999999999]">
                  <Slider>
                    {data?.posts.map((post, idx) => {
                      return (
                        <>
                          <div className="h-[300px] lg:h-[360px]">
                            <Card post={post} />
                          </div>
                        </>
                      );
                    })}
                  </Slider>
                </div>

                {/* custom slider  */}
              </div>
              {/* ---------- Desktop Cards ---------- */}
              {/* ********* Mobile Cards ********* */}
              {/* <div className="cards cursor-pointer block lg:hidden ">
                <Slider
                  {...settings}
                  className="flex items-center   gap-4 mx-5"
                >
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
              </div> */}
              {/* ********* Mobile Cards ********* */}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PartsOfCategory;
