import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img from "/assets/cardImg.png";
import * as solarIcons from "solar-icon-set";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const data = [
    {
      _id: "655e0ee9e6c267cf7798848e",
      title: "Your Title",
      description: "Your Description",
      images: ["eba46826-d680-4dca-80be-ea2613c1a7e7-download (1).jpeg", "d128e363-fb20-4d75-a0fc-2571a5e1df6e-download (2).jpeg"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 98,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997482617",
      createdAt: "2023-11-22T14:23:37.867Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 4,
      __v: 0,
      id: "655e0ee9e6c267cf7798848e",
    },
    {
      _id: "655e137a64cdc100cd642665",
      title: "Your Title",
      description: "Your Description",
      images: ["31a41f66-4f13-41c6-bf4d-2d5d8412c483-download (1).jpeg", "c16f0b7a-af2e-4515-b413-851420b95399-download (2).jpeg"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 81,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997902012",
      createdAt: "2023-11-22T14:43:06.885Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 8,
      __v: 0,
      id: "655e137a64cdc100cd642665",
    },
    {
      _id: "655e1403b4989998bff97191",
      title: "Your Title",
      description: "Your Description",
      images: ["5b9bd1ab-89a0-4872-bbf9-5d610e908327-[object Object]"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 79,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997513692",
      createdAt: "2023-11-22T14:45:23.165Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 10,
      __v: 0,
      id: "655e1403b4989998bff97191",
    },
    {
      _id: "655e14ae41c196ce91664d79",
      title: "Your Title",
      description: "Your Description",
      images: ["a2283836-1dfb-481c-aceb-f8abde16e638-jpeg"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 77,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997041711",
      createdAt: "2023-11-22T14:48:14.261Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 12,
      __v: 0,
      id: "655e14ae41c196ce91664d79",
    },
    {
      _id: "655e3fa525bcf0386af78c73",
      title: "Your Title",
      description: "Your Description",
      images: ["f5868832-0930-4f62-81d3-19975c9baa7f.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 47,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997959293",
      createdAt: "2023-11-22T17:51:33.495Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 13,
      __v: 0,
      id: "655e3fa525bcf0386af78c73",
    },
    {
      _id: "655e3fa725bcf0386af78c77",
      title: "Your Title",
      description: "Your Description",
      images: ["52bbbe6e-f40d-4646-85c4-3c1ad3348431.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 46,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997840709",
      createdAt: "2023-11-22T17:51:35.587Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 14,
      __v: 0,
      id: "655e3fa725bcf0386af78c77",
    },
    {
      _id: "655e3fa825bcf0386af78c7b",
      title: "Your Title",
      description: "Your Description",
      images: ["1dd6f2b4-bd13-402a-8cea-0fa0960bfcb1.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 45,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997479558",
      createdAt: "2023-11-22T17:51:36.746Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 15,
      __v: 0,
      id: "655e3fa825bcf0386af78c7b",
    },
    {
      _id: "655e3fa925bcf0386af78c7f",
      title: "Your Title",
      description: "Your Description",
      images: ["d7234129-f356-4397-891d-462d38cb37cc.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 44,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997667659",
      createdAt: "2023-11-22T17:51:37.840Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 16,
      __v: 0,
      id: "655e3fa925bcf0386af78c7f",
    },
    {
      _id: "655e3faa25bcf0386af78c83",
      title: "Your Title",
      description: "Your Description",
      images: ["c24448dc-2610-4f7c-bf1c-cf53986b3a9c.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 43,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997362374",
      createdAt: "2023-11-22T17:51:38.926Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 17,
      __v: 0,
      id: "655e3faa25bcf0386af78c83",
    },
    {
      _id: "655e3fac25bcf0386af78c87",
      title: "Your Title",
      description: "Your Description",
      images: ["14aee9f1-45f0-4581-b5b1-2e3341b92926.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 42,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997361280",
      createdAt: "2023-11-22T17:51:40.021Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 18,
      __v: 0,
      id: "655e3fac25bcf0386af78c87",
    },
    {
      _id: "655e3fad25bcf0386af78c8b",
      title: "Your Title",
      description: "Your Description",
      images: ["c29740bb-fde1-4a88-bd4d-27c877c5e9dd.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 41,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997069015",
      createdAt: "2023-11-22T17:51:41.040Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 19,
      __v: 0,
      id: "655e3fad25bcf0386af78c8b",
    },
    {
      _id: "655e3fae25bcf0386af78c8f",
      title: "Your Title",
      description: "Your Description",
      images: ["4b9077f7-0ba1-4027-81ab-85907fe20c8a.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 40,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997284687",
      createdAt: "2023-11-22T17:51:42.194Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 20,
      __v: 0,
      id: "655e3fae25bcf0386af78c8f",
    },
    {
      _id: "655e3faf25bcf0386af78c93",
      title: "Your Title",
      description: "Your Description",
      images: ["2e61b4e3-6b21-42a7-bba0-ecff6cc6bc17.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 39,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997244562",
      createdAt: "2023-11-22T17:51:43.563Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 21,
      __v: 0,
      id: "655e3faf25bcf0386af78c93",
    },
    {
      _id: "655e3fb325bcf0386af78c97",
      title: "Your Title",
      description: "Your Description",
      images: ["f3b3ad0d-832b-405f-8f76-dc35f018ec38.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 38,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997601014",
      createdAt: "2023-11-22T17:51:47.117Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 22,
      __v: 0,
      id: "655e3fb325bcf0386af78c97",
    },
    {
      _id: "655e3fb425bcf0386af78c9b",
      title: "Your Title",
      description: "Your Description",
      images: ["8e2a9766-66ac-4ff4-bed6-c933313d9f37.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 37,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997436881",
      createdAt: "2023-11-22T17:51:48.107Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 23,
      __v: 0,
      id: "655e3fb425bcf0386af78c9b",
    },
    {
      _id: "655e3fb525bcf0386af78c9f",
      title: "Your Title",
      description: "Your Description",
      images: ["e08356e8-47b2-4217-959e-61a915ba8ce6.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 36,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997780582",
      createdAt: "2023-11-22T17:51:49.157Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 24,
      __v: 0,
      id: "655e3fb525bcf0386af78c9f",
    },
    {
      _id: "655e3fb625bcf0386af78ca3",
      title: "Your Title",
      description: "Your Description",
      images: ["bfa9a161-50c2-409b-9ae7-95f47589945d.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 35,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997062947",
      createdAt: "2023-11-22T17:51:50.215Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 25,
      __v: 0,
      id: "655e3fb625bcf0386af78ca3",
    },
    {
      _id: "655e3fb725bcf0386af78ca7",
      title: "Your Title",
      description: "Your Description",
      images: ["2997b368-d3a5-4b86-b729-cc5baaa233fc.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 34,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997490367",
      createdAt: "2023-11-22T17:51:51.178Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 26,
      __v: 0,
      id: "655e3fb725bcf0386af78ca7",
    },
    {
      _id: "655e3fb825bcf0386af78cab",
      title: "Your Title",
      description: "Your Description",
      images: ["40204143-569b-4501-83b0-723adc7d20e4.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 33,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997469007",
      createdAt: "2023-11-22T17:51:52.267Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 27,
      __v: 0,
      id: "655e3fb825bcf0386af78cab",
    },
    {
      _id: "655e3fbf25bcf0386af78caf",
      title: "Your Title",
      description: "Your Description",
      images: ["858caff4-6894-4be4-b94e-90a6261fcdf6.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 32,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997481216",
      createdAt: "2023-11-22T17:51:59.524Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 28,
      __v: 0,
      id: "655e3fbf25bcf0386af78caf",
    },
    {
      _id: "655e3fc025bcf0386af78cb3",
      title: "Your Title",
      description: "Your Description",
      images: ["d5b37830-98db-4158-a7c0-513890c645a5.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 31,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997003121",
      createdAt: "2023-11-22T17:52:00.727Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 29,
      __v: 0,
      id: "655e3fc025bcf0386af78cb3",
    },
    {
      _id: "655e3fc225bcf0386af78cb7",
      title: "Your Title",
      description: "Your Description",
      images: ["eaf4093a-6446-49a4-b250-8f83eae69f8e.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 30,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997601465",
      createdAt: "2023-11-22T17:52:02.591Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 30,
      __v: 0,
      id: "655e3fc225bcf0386af78cb7",
    },
    {
      _id: "655e3fc325bcf0386af78cbb",
      title: "Your Title",
      description: "Your Description",
      images: ["7dfe5056-b1b1-46e5-9cdc-f7b0323d5b09.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 29,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997061361",
      createdAt: "2023-11-22T17:52:03.709Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 31,
      __v: 0,
      id: "655e3fc325bcf0386af78cbb",
    },
    {
      _id: "655e3fc425bcf0386af78cbf",
      title: "Your Title",
      description: "Your Description",
      images: ["5cc73313-88c3-43c4-9c7a-9e0b663a1c70.png"],
      postType: "requested",
      price: "Your Price",
      grade: "",
      bookEdition: "Book Edition",
      educationLevel: "655b4ec133dd362ae53081f7",
      postStatus: "approved",
      views: 28,
      numberOfBooks: 0,
      educationTerm: "",
      educationType: "",
      location: "Location",
      identificationNumber: "21101997563200",
      createdAt: "2023-11-22T17:52:04.830Z",
      updatedAt: "2023-11-22T18:42:52.080Z",
      postId: 32,
      __v: 0,
      id: "655e3fc425bcf0386af78cbf",
    },
  ];
  return (
    <>
      <div className="navigation-wrapper max-w-screen-2xl m-auto">
        <div ref={sliderRef} className="keen-slider">
          {data?.splice(0, 7).map((post) => {
            return (
              <div className="keen-slider__slide  bg-white rounded-[14px] min-w-[20rem]">
                <img className="w-full" src={img} alt="img" />
                <div className="txt py-2 px-3">
                  <div className="card-title flex items-center justify-between gap-2">
                    <h3 className="sm:text-xl text-[14px] text-black font-semibold  line-clamp-1">aladwaa books</h3>

                    <span className="py-[2px] px-[10px] text-[12px] bg-[#d4f7ef] text-[#38BC9C] block rounded-[8px]">Free</span>
                  </div>

                  <div className="cardDesc my-3">
                    <p className="m-0 text-sm text-[#464646]  line-clamp-2 ">
                      Aladwaa Math In Arabic Third Preparatory(Book Of Lights Mathematics Grade 3 Preparatory)
                    </p>
                  </div>

                  <div className="cardVarient text-[#0F172A] my-1 pb-1 border-b-1 border-[#EFEFEF] flex items-center justify-between flex-wrap">
                    <h5 className="text-[14px]">Third Grade, Preparatory</h5>
                    <div className="icons flex gap-1 items-center">
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
                    </div>
                  </div>

                  <div className="cardAddress flex items-center justify-between">
                    <div className="address flex gap-1 items-center">
                      <span>
                        <solarIcons.MapPoint size={15} color="#1C274C" />
                      </span>
                      <span className="text-[#464646] text-[13px]">AL-Mansoura</span>
                    </div>
                    <div className="date flex gap-1 items-center">
                      <span>
                        <solarIcons.ClockCircle size={15} color="#464646" />
                      </span>

                      <span className="text-[#464646] text-[13px]">5 days</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <span
      className={`absolute top-1/2 w-10 h-10 items-center justify-center inline-block bg-opacity-40 bg-blue-gray-100 rounded-lg  ${
        props.disabled ? "hidden" : "flex"
      } ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`}
    >
      <svg onClick={props.onClick} className={`arrow   ${disabeld}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
        {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
      </svg>
    </span>
  );
}
