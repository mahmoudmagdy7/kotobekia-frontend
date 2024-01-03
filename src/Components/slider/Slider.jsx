import * as solarIcons from "solar-icon-set";
// Keen Slider
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Card from "../Card/Card";
import "keen-slider/keen-slider.min.css";
import "./slider.css";
const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 1023px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
        loop: false,
      },
      "(max-width: 767px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
        loop: false,
      },
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  console.log(currentSlide);
  console.log(instanceRef?.current?.track?.details?.slides?.length);
  // console.log(instanceRef?.current?.track?.details?.slides);

  // Arrows Function
  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    console.log(props.left);

    return (
      <span
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      >
        {props.left && <solarIcons.ArrowLeft size={41} color="#747474" />}
        {!props.left && <solarIcons.ArrowRight size={41} color="#747474" />}
      </span>
    );
  }

  return (
    <>
      <div className="navigation-wrapper relative px-9">
        <div ref={sliderRef} className="keen-slider flex">
          {data?.posts.map((post, idx) => {
            return (
              <>
                <div
                  className={`keen-slider__slide number-slide${idx} item h-[300px] lg:h-[360px] `}
                >
                  <Card post={post} />
                </div>
              </>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            {/* Arrow Left  */}
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            {/* Arrow Left  */}

            {/* Arrow Right  */}

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                instanceRef.current.track.details.slides.length === 4 ||
                currentSlide * 2 >
                  instanceRef.current.track.details.slides.length
              }
            />
            {/* Arrow Right  */}
          </>
        )}
      </div>
    </>
  );
};

export default Slider;
