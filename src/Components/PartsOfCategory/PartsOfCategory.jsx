import * as solarIcons from "solar-icon-set";

// import img from "/assets/cardImg.png";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const PartsOfCategory = ({ title, icon, data }) => {
  console.log(data);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 900px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 18 },
      },
    },

    loop: false,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 15,
    },
  });
  return (
    <>
      <section className="cards py-10">
        <div className="max-w-screen-2xl m-auto px-3">
          <div className="head py-2  w-fit  flex items-center gap-1 ">
            <h2 className="text-[24px] border-b-2 text-[#1F292F] font-bold border-[#C8C5C5]">{title}</h2>
            <span className="mt-2 icon">{icon}</span>
          </div>

          <div className="cards  mt-2   ">
            <div ref={sliderRef} className="keen-slider text-deep-orange-900">
              {data?.posts.splice(0, 5).map((post) => {
                return (
                  <div className="keen-slider__slide  sm:bg-white rounded-xl min-w-[20rem]">
                    <figure className="sm:rounded-none rounded-xl bg-red-900   sm:aspect-auto aspect-square  overflow-hidden ">
                      <img className="h-full w-full" src="/assets/cardImg.png" alt="img" />
                    </figure>
                    <div className="txt py-2 sm:px-3">
                      <div className="card-title flex items-center justify-between gap-2">
                        <h3 className="sm:text-xl text-[14px] text-black font-semibold  line-clamp-1">aladwaa books</h3>

                        <span className="hidden  sm:block py-[2px] px-[10px] text-[12px] bg-[#d4f7ef] text-[#38BC9C]  rounded-[8px]">Free</span>
                      </div>

                      <div className="cardDesc my-3">
                        <p className="m-0 text-sm text-[#464646]  sm:line-clamp-2 line-clamp-1 ">
                          Aladwaa Math In Arabic Third Preparatory(Book Of Lights Mathematics Grade 3 Preparatory)
                        </p>
                      </div>

                      <div className="cardVarient text-[#0F172A] my-1 pb-1 border-b-1 border-[#EFEFEF] flex items-center justify-between flex-wrap">
                        <h5 className="sm:text-[14px] text-xs">Third Grade, Preparatory</h5>
                        <div className="icons flex gap-1 items-center mt-2">
                          <div className="item flex items-center gap-1">
                            <span className="text-[#0F172A] text-[14px] ">5</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 12 13" fill="none">
                              <path
                                d="M8.34087 0.141741C9.38222 0.00102099 10.3139 0.765368 10.3139 1.76041V2.57885C11.0616 2.95269 11.571 3.69575 11.571 4.55136V10.4972C11.571 11.7286 10.5157 12.7269 9.2139 12.7269H2.92819C1.62637 12.7269 0.571045 11.7286 0.571045 10.4972V2.17304C0.571045 2.16751 0.571151 2.162 0.571362 2.15652C0.571151 2.14797 0.571045 2.13939 0.571045 2.13078C0.571045 1.59194 0.989913 1.13509 1.55383 1.05889L8.34087 0.141741ZM1.5139 3.21355V10.4972C1.5139 11.236 2.1471 11.835 2.92819 11.835H9.2139C9.99499 11.835 10.6282 11.236 10.6282 10.4972V4.55136C10.6282 3.81251 9.99499 3.21355 9.2139 3.21355H1.5139ZM1.71572 2.32168H9.37105V1.76041C9.37105 1.30812 8.94755 0.960686 8.47421 1.02465L1.68717 1.9418C1.58775 1.95523 1.5139 2.03578 1.5139 2.13078C1.5139 2.23621 1.60426 2.32168 1.71572 2.32168ZM3.08533 6.33511C3.08533 6.08883 3.2964 5.88917 3.55676 5.88917H8.58533C8.84569 5.88917 9.05676 6.08883 9.05676 6.33511C9.05676 6.58139 8.84569 6.78105 8.58533 6.78105H3.55676C3.2964 6.78105 3.08533 6.58139 3.08533 6.33511ZM3.08533 8.41615C3.08533 8.16986 3.2964 7.97021 3.55676 7.97021H7.0139C7.27426 7.97021 7.48533 8.16986 7.48533 8.41615C7.48533 8.66243 7.27426 8.86208 7.0139 8.86208H3.55676C3.2964 8.86208 3.08533 8.66243 3.08533 8.41615Z"
                                fill="#1C274D"
                              />
                            </svg>
                          </div>
                          <div className="item flex items-center gap-1">
                            <span className="text-[#0F172A] text-[14px]">75</span>
                            <span>
                              <solarIcons.Eye size={16} color="#1C274C" />
                            </span>
                          </div>
                          <span className="sm:hidden  block py-[2px] px-[10px] text-[12px] bg-[#d4f7ef] text-[#38BC9C]  rounded-[8px]">Free</span>
                        </div>
                      </div>

                      <div className="cardAddress flex items-center justify-between sm:text-[14px] text-xs">
                        <div className="address flex gap-1 items-center ">
                          <span>
                            <solarIcons.MapPoint size={15} color="#1C274C" />
                          </span>
                          <span className="text-[#464646] ">AL-Mansoura</span>
                        </div>
                        <div className="date flex gap-1 items-center">
                          <span>
                            <solarIcons.ClockCircle size={15} color="#464646" />
                          </span>

                          <span className="text-[#464646] ">5 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="cards  mt-2 grid gap-3 md:gap-7 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 overflow-x-scroll  "> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartsOfCategory;
