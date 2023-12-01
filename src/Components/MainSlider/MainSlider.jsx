import slider from "/assets/slider.png";

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
