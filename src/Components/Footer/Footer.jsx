import * as solarIcons from "solar-icon-set";
import footerLogo from "/assets/footerLogo.png";
import googlePlay from "/assets/GooglePlay.svg";
import appStore from "/assets/AppStore.svg";
import ReviewSection from "./ReviewSection";

const Footer = () => {
  return (
    <>
      <footer className="pt-10 pb-4 bg-white border-b-2 border-[#dddcde]">
        <div className="container">
          <div className="parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="item py-5 px-6">
              <img src={footerLogo} alt="Kotobekia Logo" />

              <div className="icons my-4 flex justify-start lg:justify-center ">
                <div className="flex items-center gap-[10px] ">
                  <div className="icon w-[28px] h-[28px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center">
                    <span className="text-[14px] text-black font-bold  ">f</span>
                  </div>
                  <div className="icon w-[28px] h-[28px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center">
                    <span className="text-[14px] text-black font-bold  ">f</span>
                  </div>
                  <div className="icon w-[28px] h-[28px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center">
                    <span className="text-[14px] text-black font-bold  ">f</span>
                  </div>
                  <div className="icon w-[28px] h-[28px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center">
                    <span className="text-[14px] text-black font-bold  ">f</span>
                  </div>
                </div>
              </div>

              <div className="download flex items-center gap-[10px]">
                <img src={googlePlay} alt="" />
                <img src={appStore} alt="" />
              </div>
            </div>
            <ReviewSection />
            <ReviewSection />
            <ReviewSection />
          </div>
        </div>
      </footer>
      <div className="copyRight pt-4 pb-3 bg-white text-black">
        <p className=" m-0 flex justify-center gap-1 items-center">
          All rights received for
          <span className="text-[#28D8AE] font-semibold">Kotobekia</span>
          <solarIcons.ShieldCheck size={20} color="#28D8AE" className="mt-1" />
        </p>
      </div>
    </>
  );
};

export default Footer;
