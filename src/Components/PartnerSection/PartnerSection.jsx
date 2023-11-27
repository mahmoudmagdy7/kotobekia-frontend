import pratner1 from "/assets/images/partners/partner1.png";
import pratner2 from "/assets/images/partners/partner2.png";
import pratner3 from "/assets/images/partners/partner3.png";
import pratner4 from "/assets/images/partners/partner4.png";
import pratner5 from "/assets/images/partners/partner5.png";
const PartnerSection = () => {
  return (
    <>
      <section className="partners py-10 px-10">
        <div className="title mx-auto relative">
          <h2
            style={{ zIndex: "2" }}
            className="text-center text-[32px] relative  text-[#131313] font-bold"
          >
            Our Partners
          </h2>
          <div
            style={{ zIndex: "1" }}
            className=" absolute bottom-[3px] start-[50%] stroke-[4px] -translate-x-[50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="196"
              height="16"
              viewBox="0 0 196 16"
              fill="none"
            >
              <path
                d="M194.5 13.4999C172.667 5.33324 103.3 -6.10009 0.5 13.4999"
                stroke="#28D8AE"
              />
            </svg>
          </div>
        </div>
        <div className="partnersLogo my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center ">
          <div className="partLogo flex justify-center  h-[32px] md:h-[55px] lg:h-[100px]">
            <img
              src={pratner1}
              alt=""
              className=""
            />
          </div>
          <div className="partLogo flex justify-center  h-[32px] md:h-[55px] lg:h-[100px]">
            <img src={pratner2} alt="" />
          </div>
          <div className="partLogo flex justify-center  h-[32px] md:h-[55px] lg:h-[100px]">
            <img src={pratner3} alt="" />
          </div>
          <div className="partLogo flex justify-center  h-[32px] md:h-[55px] lg:h-[100px]">
            <img src={pratner4} alt="" />
          </div>
          <div className="partLogo flex justify-center  h-[32px] md:h-[55px] lg:h-[100px]">
            <img src={pratner5} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerSection;
