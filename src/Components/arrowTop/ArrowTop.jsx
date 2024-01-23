import * as solarIcons from "solar-icon-set";

const ArrowTop = ({ isTop }) => {
  // To make scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isTop ? (
        <div
          onClick={() => scrollToTop()}
          className="arrow-top  w-[50px] h-[50px] flex items-center justify-center bg-[#ddd] cursor-pointer fixed end-[30px] bottom-[70px] rounded-[50%] z-50"
        >
          <solarIcons.AltArrowUp size={25} color="#1C274D" />
        </div>
      ) : null}
    </>
  );
};

export default ArrowTop;
