import * as solarIcons from "solar-icon-set";
// Keen Slider
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "keen-slider/keen-slider.min.css";
import "./slider.css";
import CardSkeleton from "../Card/CardSkeleton";
const Slider = ({ data, isLoading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 10,
    },

    // screen response
    breakpoints: {
      "(max-width: 1023px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
        loop: false,
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
        loop: false,
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
        loop: false,
      },
    },

    slideChanged(slider) {
      setCurrentSlide(slider?.track?.details?.rel);
    },

    created() {
      setLoaded(true);
    },
  });

  // console.log(instanceRef?.current?.track?.details?.slides);

  // Arrows Function
  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";

    return (
      <span onClick={props.onClick} className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`}>
        {props.left && <solarIcons.ArrowLeft size={41} color="#747474" />}
        {!props.left && <solarIcons.ArrowRight size={41} color="#747474" />}
      </span>
    );
  }
  useEffect(() => {
    // data.posts
    console.log("data.posts: ", data.posts);
  }, [data, isLoading]);
  return (
    <>
      <div className="navigation-wrapper relative px-8 sliders  min-h-96">
        {data || instanceRef?.current?.slides ? (
          <>
            <div ref={sliderRef} className="keen-slider flex">
              {data?.posts.length ? (
                data?.posts.map((post, idx) => {
                  return (
                    <>
                      <div key={post._id} className={`keen-slider__slide number-slide${idx} item`}>
                        <Card post={post} />
                      </div>
                    </>
                  );
                })
              ) : (
                <div className=" w-full text-center min-h-96 flex items-center justify-center text-black">No Books found in your location </div>
              )}
            </div>
            {loaded && instanceRef.current && (
              <>
                {/* Arrow Left  */}
                <Arrow left onClick={(e) => e.stopPropagation() || instanceRef?.current?.prev()} disabled={currentSlide === 0} />
                {/* Arrow Left  */}
                {/* Arrow Left  */}
                <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />
                {/* Arrow Left  */}

                {/* Arrow Right  */}

                <Arrow
                  onClick={(e) => e.stopPropagation() || instanceRef?.current?.next()}
                  disabled={
                    instanceRef?.current?.track?.details?.slides?.length === 4 || currentSlide * 2 > instanceRef?.current?.track?.details?.slides?.length
                  }
                />
                {/* Arrow Right  */}
                <Arrow
                  onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                  disabled={instanceRef.current?.track?.details?.slides.length === 4 || currentSlide * 2 > instanceRef.current.track?.details?.slides.length}
                />
              </>
            )}
            {/* Arrow Right  */}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Slider;
