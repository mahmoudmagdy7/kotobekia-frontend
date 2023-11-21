import * as solarIcons from "solar-icon-set";

import notoFont from "../NotoFont.json";
import img from "../../assets/cardImg.png";

const PartsOfCategory = ({ title, icon }) => {
  return (
    <>
      <section className="cards py-10">
        <div className="container">
          <div className="head py-2  w-fit  flex items-center gap-1 ">
            <h2
              style={notoFont}
              className="text-[24px] border-b-2 text-[#1F292F] font-bold border-[#C8C5C5]"
            >
              {title}
            </h2>
            <span className="mt-2 icon">{icon}</span>
          </div>

          <div className="cards  mt-2 grid gap-7 grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            <div style={notoFont} className="crad bg-white rounded-[14px]">
              <img src={img} alt="img" />
              <div className="txt py-2 px-3">
                <div className="titleCard flex items-center justify-between">
                  <h3 className="text-base text-black font-semibold">
                    Aladwaa books
                  </h3>
                  <span className="py-[2px] px-[10px] text-[12px] bg-[#d4f7ef] text-[#38BC9C] block rounded-[8px]">
                    Free
                  </span>
                </div>

                <div className="cardDesc my-3">
                  <p className="m-0 text-[10px] text-[#464646]">
                    Aladwaa Math In Arabic Third Preparatory(Book Of Lights
                    Mathematics Grade 3 Preparatory)
                  </p>
                </div>

                <div className="cardVarient text-[#0F172A] my-1 pb-1 border-b-1 border-[#EFEFEF] flex items-center justify-between">
                  <h5 className="text-[10px]">Third Grade, Preparatory</h5>
                  <div className="icons flex gap-1 items-center">
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px] ">5</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          d="M8.34087 0.141741C9.38222 0.00102099 10.3139 0.765368 10.3139 1.76041V2.57885C11.0616 2.95269 11.571 3.69575 11.571 4.55136V10.4972C11.571 11.7286 10.5157 12.7269 9.2139 12.7269H2.92819C1.62637 12.7269 0.571045 11.7286 0.571045 10.4972V2.17304C0.571045 2.16751 0.571151 2.162 0.571362 2.15652C0.571151 2.14797 0.571045 2.13939 0.571045 2.13078C0.571045 1.59194 0.989913 1.13509 1.55383 1.05889L8.34087 0.141741ZM1.5139 3.21355V10.4972C1.5139 11.236 2.1471 11.835 2.92819 11.835H9.2139C9.99499 11.835 10.6282 11.236 10.6282 10.4972V4.55136C10.6282 3.81251 9.99499 3.21355 9.2139 3.21355H1.5139ZM1.71572 2.32168H9.37105V1.76041C9.37105 1.30812 8.94755 0.960686 8.47421 1.02465L1.68717 1.9418C1.58775 1.95523 1.5139 2.03578 1.5139 2.13078C1.5139 2.23621 1.60426 2.32168 1.71572 2.32168ZM3.08533 6.33511C3.08533 6.08883 3.2964 5.88917 3.55676 5.88917H8.58533C8.84569 5.88917 9.05676 6.08883 9.05676 6.33511C9.05676 6.58139 8.84569 6.78105 8.58533 6.78105H3.55676C3.2964 6.78105 3.08533 6.58139 3.08533 6.33511ZM3.08533 8.41615C3.08533 8.16986 3.2964 7.97021 3.55676 7.97021H7.0139C7.27426 7.97021 7.48533 8.16986 7.48533 8.41615C7.48533 8.66243 7.27426 8.86208 7.0139 8.86208H3.55676C3.2964 8.86208 3.08533 8.66243 3.08533 8.41615Z"
                          fill="#1C274D"
                        />
                      </svg>
                    </div>
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px]">75</span>
                      <span>
                        <solarIcons.Eye size={15} color="#1C274C" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cardAddress flex items-center justify-between">
                  <div className="address flex gap-1 items-center">
                    <span>
                      <solarIcons.MapPoint size={11} color="#1C274C" />
                    </span>
                    <span className="text-[#464646] text-[10px]">
                      AL-Mansoura
                    </span>
                  </div>
                  <div className="date flex gap-1 items-center">
                    <span>
                      <solarIcons.ClockCircle size={10} color="#464646" />
                    </span>

                    <span className="text-[#464646] text-[10px]">5 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={notoFont} className="crad bg-white rounded-[14px]">
              <img src={img} alt="img" />
              <div className="txt py-2 px-3">
                <div className="titleCard flex items-center justify-between">
                  <h3 className="text-base text-black font-semibold">
                    Aladwaa books
                  </h3>
                  <span className="py-[2px] px-[10px] text-[12px] bg-[#d4f7ef] text-[#38BC9C] block rounded-[8px]">
                    Free
                  </span>
                </div>

                <div className="cardDesc my-3">
                  <p className="m-0 text-[10px] text-[#464646]">
                    Aladwaa Math In Arabic Third Preparatory(Book Of Lights
                    Mathematics Grade 3 Preparatory)
                  </p>
                </div>

                <div className="cardVarient text-[#0F172A] my-1 pb-1 border-b-1 border-[#EFEFEF] flex items-center justify-between">
                  <h5 className="text-[10px]">Third Grade, Preparatory</h5>
                  <div className="icons flex gap-1 items-center">
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px] ">5</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          d="M8.34087 0.141741C9.38222 0.00102099 10.3139 0.765368 10.3139 1.76041V2.57885C11.0616 2.95269 11.571 3.69575 11.571 4.55136V10.4972C11.571 11.7286 10.5157 12.7269 9.2139 12.7269H2.92819C1.62637 12.7269 0.571045 11.7286 0.571045 10.4972V2.17304C0.571045 2.16751 0.571151 2.162 0.571362 2.15652C0.571151 2.14797 0.571045 2.13939 0.571045 2.13078C0.571045 1.59194 0.989913 1.13509 1.55383 1.05889L8.34087 0.141741ZM1.5139 3.21355V10.4972C1.5139 11.236 2.1471 11.835 2.92819 11.835H9.2139C9.99499 11.835 10.6282 11.236 10.6282 10.4972V4.55136C10.6282 3.81251 9.99499 3.21355 9.2139 3.21355H1.5139ZM1.71572 2.32168H9.37105V1.76041C9.37105 1.30812 8.94755 0.960686 8.47421 1.02465L1.68717 1.9418C1.58775 1.95523 1.5139 2.03578 1.5139 2.13078C1.5139 2.23621 1.60426 2.32168 1.71572 2.32168ZM3.08533 6.33511C3.08533 6.08883 3.2964 5.88917 3.55676 5.88917H8.58533C8.84569 5.88917 9.05676 6.08883 9.05676 6.33511C9.05676 6.58139 8.84569 6.78105 8.58533 6.78105H3.55676C3.2964 6.78105 3.08533 6.58139 3.08533 6.33511ZM3.08533 8.41615C3.08533 8.16986 3.2964 7.97021 3.55676 7.97021H7.0139C7.27426 7.97021 7.48533 8.16986 7.48533 8.41615C7.48533 8.66243 7.27426 8.86208 7.0139 8.86208H3.55676C3.2964 8.86208 3.08533 8.66243 3.08533 8.41615Z"
                          fill="#1C274D"
                        />
                      </svg>
                    </div>
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px]">75</span>
                      <span>
                        <solarIcons.Eye size={15} color="#1C274C" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cardAddress flex items-center justify-between">
                  <div className="address flex gap-1 items-center">
                    <span>
                      <solarIcons.MapPoint size={11} color="#1C274C" />
                    </span>
                    <span className="text-[#464646] text-[10px]">
                      AL-Mansoura
                    </span>
                  </div>
                  <div className="date flex gap-1 items-center">
                    <span>
                      <solarIcons.ClockCircle size={10} color="#464646" />
                    </span>

                    <span className="text-[#464646] text-[10px]">5 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={notoFont} className="crad bg-white rounded-[14px]">
              <img src={img} alt="img" />
              <div className="txt py-2 px-3">
                <div className="titleCard flex items-center justify-between">
                  <h3 className="text-base text-black font-semibold">
                    Aladwaa books
                  </h3>
                  <span className="py-[2px] px-[10px] text-[12px] bg-[#d4f7ef] text-[#38BC9C] block rounded-[8px]">
                    Free
                  </span>
                </div>

                <div className="cardDesc my-3">
                  <p className="m-0 text-[10px] text-[#464646]">
                    Aladwaa Math In Arabic Third Preparatory(Book Of Lights
                    Mathematics Grade 3 Preparatory)
                  </p>
                </div>

                <div className="cardVarient text-[#0F172A] my-1 pb-1 border-b-1 border-[#EFEFEF] flex items-center justify-between">
                  <h5 className="text-[10px]">Third Grade, Preparatory</h5>
                  <div className="icons flex gap-1 items-center">
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px] ">5</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          d="M8.34087 0.141741C9.38222 0.00102099 10.3139 0.765368 10.3139 1.76041V2.57885C11.0616 2.95269 11.571 3.69575 11.571 4.55136V10.4972C11.571 11.7286 10.5157 12.7269 9.2139 12.7269H2.92819C1.62637 12.7269 0.571045 11.7286 0.571045 10.4972V2.17304C0.571045 2.16751 0.571151 2.162 0.571362 2.15652C0.571151 2.14797 0.571045 2.13939 0.571045 2.13078C0.571045 1.59194 0.989913 1.13509 1.55383 1.05889L8.34087 0.141741ZM1.5139 3.21355V10.4972C1.5139 11.236 2.1471 11.835 2.92819 11.835H9.2139C9.99499 11.835 10.6282 11.236 10.6282 10.4972V4.55136C10.6282 3.81251 9.99499 3.21355 9.2139 3.21355H1.5139ZM1.71572 2.32168H9.37105V1.76041C9.37105 1.30812 8.94755 0.960686 8.47421 1.02465L1.68717 1.9418C1.58775 1.95523 1.5139 2.03578 1.5139 2.13078C1.5139 2.23621 1.60426 2.32168 1.71572 2.32168ZM3.08533 6.33511C3.08533 6.08883 3.2964 5.88917 3.55676 5.88917H8.58533C8.84569 5.88917 9.05676 6.08883 9.05676 6.33511C9.05676 6.58139 8.84569 6.78105 8.58533 6.78105H3.55676C3.2964 6.78105 3.08533 6.58139 3.08533 6.33511ZM3.08533 8.41615C3.08533 8.16986 3.2964 7.97021 3.55676 7.97021H7.0139C7.27426 7.97021 7.48533 8.16986 7.48533 8.41615C7.48533 8.66243 7.27426 8.86208 7.0139 8.86208H3.55676C3.2964 8.86208 3.08533 8.66243 3.08533 8.41615Z"
                          fill="#1C274D"
                        />
                      </svg>
                    </div>
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px]">75</span>
                      <span>
                        <solarIcons.Eye size={15} color="#1C274C" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cardAddress flex items-center justify-between">
                  <div className="address flex gap-1 items-center">
                    <span>
                      <solarIcons.MapPoint size={11} color="#1C274C" />
                    </span>
                    <span className="text-[#464646] text-[10px]">
                      AL-Mansoura
                    </span>
                  </div>
                  <div className="date flex gap-1 items-center">
                    <span>
                      <solarIcons.ClockCircle size={10} color="#464646" />
                    </span>

                    <span className="text-[#464646] text-[10px]">5 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={notoFont} className="crad bg-white rounded-[14px]">
              <img src={img} alt="img" />
              <div className="txt py-2 px-3">
                <div className="titleCard flex items-center justify-between">
                  <h3 className="text-base text-black font-semibold">
                    Aladwaa books
                  </h3>
                  <span className="py-[2px] px-[10px] text-[12px] bg-[#d4f7ef] text-[#38BC9C] block rounded-[8px]">
                    Free
                  </span>
                </div>

                <div className="cardDesc my-3">
                  <p className="m-0 text-[10px] text-[#464646]">
                    Aladwaa Math In Arabic Third Preparatory(Book Of Lights
                    Mathematics Grade 3 Preparatory)
                  </p>
                </div>

                <div className="cardVarient text-[#0F172A] my-1 pb-1 border-b-1 border-[#EFEFEF] flex items-center justify-between">
                  <h5 className="text-[10px]">Third Grade, Preparatory</h5>
                  <div className="icons flex gap-1 items-center">
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px] ">5</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          d="M8.34087 0.141741C9.38222 0.00102099 10.3139 0.765368 10.3139 1.76041V2.57885C11.0616 2.95269 11.571 3.69575 11.571 4.55136V10.4972C11.571 11.7286 10.5157 12.7269 9.2139 12.7269H2.92819C1.62637 12.7269 0.571045 11.7286 0.571045 10.4972V2.17304C0.571045 2.16751 0.571151 2.162 0.571362 2.15652C0.571151 2.14797 0.571045 2.13939 0.571045 2.13078C0.571045 1.59194 0.989913 1.13509 1.55383 1.05889L8.34087 0.141741ZM1.5139 3.21355V10.4972C1.5139 11.236 2.1471 11.835 2.92819 11.835H9.2139C9.99499 11.835 10.6282 11.236 10.6282 10.4972V4.55136C10.6282 3.81251 9.99499 3.21355 9.2139 3.21355H1.5139ZM1.71572 2.32168H9.37105V1.76041C9.37105 1.30812 8.94755 0.960686 8.47421 1.02465L1.68717 1.9418C1.58775 1.95523 1.5139 2.03578 1.5139 2.13078C1.5139 2.23621 1.60426 2.32168 1.71572 2.32168ZM3.08533 6.33511C3.08533 6.08883 3.2964 5.88917 3.55676 5.88917H8.58533C8.84569 5.88917 9.05676 6.08883 9.05676 6.33511C9.05676 6.58139 8.84569 6.78105 8.58533 6.78105H3.55676C3.2964 6.78105 3.08533 6.58139 3.08533 6.33511ZM3.08533 8.41615C3.08533 8.16986 3.2964 7.97021 3.55676 7.97021H7.0139C7.27426 7.97021 7.48533 8.16986 7.48533 8.41615C7.48533 8.66243 7.27426 8.86208 7.0139 8.86208H3.55676C3.2964 8.86208 3.08533 8.66243 3.08533 8.41615Z"
                          fill="#1C274D"
                        />
                      </svg>
                    </div>
                    <div className="item flex items-center">
                      <span className="text-[#0F172A] text-[12px]">75</span>
                      <span>
                        <solarIcons.Eye size={15} color="#1C274C" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cardAddress flex items-center justify-between">
                  <div className="address flex gap-1 items-center">
                    <span>
                      <solarIcons.MapPoint size={11} color="#1C274C" />
                    </span>
                    <span className="text-[#464646] text-[10px]">
                      AL-Mansoura
                    </span>
                  </div>
                  <div className="date flex gap-1 items-center">
                    <span>
                      <solarIcons.ClockCircle size={10} color="#464646" />
                    </span>

                    <span className="text-[#464646] text-[10px]">5 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartsOfCategory;
