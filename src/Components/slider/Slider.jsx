import * as solarIcons from "solar-icon-set";
import "./slider.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Slider = () => {
  const items = document.querySelector(".slider .parent .items");
  const itemWidth = document.querySelector(".slider .items .item");

  

  // Active For Left
  const [isArrowLeftActive, setIsArrowLeftActive] = useState(true);

  // Active For right
  const [isArrowRightActive, setIsArrowRightActive] = useState(false);

  // max width of list itmes
  const maxItemsList = items?.scrollWidth - items?.clientWidth;

  // scrol Right function
  const makeSkrollRight = () => {
    if (items.scrollLeft > 10) {
      setIsArrowLeftActive(false);
    }

    if (items.scrollLeft >= maxItemsList) {
      setIsArrowRightActive(true);
    }

    items.scrollLeft += itemWidth?.clientWidth + 30;
    console.log(items.scrollLeft);
    console.log(items?.scrollWidth);
    // console.log(items.scrollLeft);
  };
  // scrol Left function
  const makeSkrollLeft = () => {
    if (items.scrollLeft < 10) {
      setIsArrowLeftActive(true);
    }

    if (items.scrollLeft <= maxItemsList) {
      setIsArrowRightActive(false);
    }

    items.scrollLeft -= itemWidth?.clientWidth + 30;
    console.log(items.scrollLeft);
    console.log(items?.scrollWidth);
  };

  return (
    <>
      <section className="slider mx-5">
        <div className=" parent relative">
          {/* Arrow Right  */}
          {isArrowRightActive ? (
            <div className="arrow arrow-right flex justify-center  z-20 items-center absolute start-0 top-[50%] -translate-y-[50%]  ">
              <solarIcons.ArrowRight size={40} color="#c8c5c5" />
            </div>
          ) : (
            <div
              onClick={() => makeSkrollRight()}
              className="arrow arrow-right flex justify-center z-20 items-center absolute start-2 top-[50%] -translate-y-[50%] "
            >
              <solarIcons.ArrowRight size={40} color="#747474" />
            </div>
          )}
          {/* Arrow Right  */}

          <ul
            style={{ direction: "ltr" }}
            className="items mx-10 grid grid-cols-4 overflow-hidden gap-3 z-10"
          >
            {Outlet}
          </ul>

          {/* Arrow Left  */}
          {isArrowLeftActive ? (
            <div className="arrow arrow-left flex justify-center  z-20 items-center absolute end-0 top-[50%] -translate-y-[50%]  ">
              <solarIcons.ArrowLeft size={40} color="#c8c5c5" />
            </div>
          ) : (
            <div
              onClick={makeSkrollLeft}
              className="arrow arrow-left flex justify-center z-20 items-center absolute end-2 top-[50%] -translate-y-[50%] "
            >
              <solarIcons.ArrowLeft size={40} color="#747474" />
            </div>
          )}
          {/* Arrow Left  */}
        </div>
      </section>
    </>
  );
};

export default Slider;
