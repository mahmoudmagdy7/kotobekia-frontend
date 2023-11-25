import slider from "/assets/slider.png";
import * as solarIcons from "solar-icon-set";
import SliderCategory from "../NavCategory/SliderCategory";

const MainSlider = () => {
  return (
    <>
      <section className="slider m-auto flex items-center justify-center  ">
        <img src={slider} className="2xl:h-[32rem] 2xl:w-full " alt="Slider" />
      </section>
    </>
  );
};
export default MainSlider;
