import * as solarIcons from "solar-icon-set";
import { useParams, useLocation } from "react-router";
import PartsOfCategory from "../../Components/PartsOfCategory/PartsOfCategory";
import { useQuery } from "react-query";
import axios from "axios";
// keen slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import Card from "../../Components/Card/Card";
import config from "../../../config";
import CardSkeleton from "../../Components/Card/CardSkeleton";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./postDetails.css";

import { getConversationMessages, setActiveUser } from "../../app/Slices/chatSlice";
import toast from "react-hot-toast";
import { loggedInUserInfo } from "../../hooks/useAuth";
import { siteDirection } from "../../hooks/useLocale";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ShareModal from "./ShareModal";

const PostDetails = () => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [like, setLike] = useState();
  const [loaded, setLoaded] = useState(false);
  const router = useNavigate();
  const { id } = useParams();
  const locatoin = useLocation();
  // api Related Data function
  function getPostData(postId) {
    return axios.get(`${config.bseUrl}/api/v1/posts/specific/${postId}`, {
      headers: {
        token: Cookies.get("userToken"),
      },
    });
  }
  // Add Favourite
  const [addFavourite, setAddFavourite] = useState(false);
  const handleAddFavourite = async () => {
    axios({
      method: "post",
      url: `https://kotobekia-backend.onrender.com/api/v1/posts/add-to-favorite/${data?.data?.result._id}`,
      headers: {
        token: Cookies.get("userToken"),
      },
    }).then((res) => {
      console.log(res);
      setAddFavourite(true);
    });
  };
  const handleRemoveFavourite = () => {
    axios({
      method: "post",
      url: `https://kotobekia-backend.onrender.com/api/v1/posts/remove-from-favorite/${data?.data?.result._id}`,
      headers: {
        token: Cookies.get("userToken"),
      },
    }).then((res) => {
      console.log(res);
      setAddFavourite(false);
    });
  };

  // For Report
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const yourFeadBack = useRef("");
  const makingReport = async () => {
    axios({
      method: "post",
      url: `https://kotobekia-backend.onrender.com/api/v1/reports/report`,
      headers: {
        token: Cookies.get("userToken"),
      },
      data: {
        report_type: "post",
        report_id: data?.data?.result._id,
        reported_user_id: data?.data?.result.createdBy,
        user_feedback: yourFeadBack.current.value,
      },
    }).then(({ data }) => {
      toast.success(data?.message);
      onClose();
      console.log(data);
    });
  };

  const { isLoading, isError, data, refetch, isRefetching } = useQuery(["getPostData", id], () => getPostData(id), {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
    // refetchOnMount: false,
  });

  //  ********** Keen Slider **********
  // thumpnail function
  function ThumbnailPlugin(mainRef) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active-thumb-item");
        });
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active-thumb-item");
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx);
          });
        });
      }

      slider.on("created", () => {
        if (!mainRef.current) return;
        addActive(slider.track.details.rel);
        addClickEvents();
        mainRef.current.on("animationStarted", (main) => {
          removeActive();
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next));
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
        });
      });
    };
  }

  // Arrow function
  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <>
        <span onClick={props.onClick} className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`}>
          {props.left ? <solarIcons.ArrowLeft size={41} color="#747474" /> : <solarIcons.ArrowRight size={41} color="#747474" />}
        </span>
      </>
    );
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  async function openConversation(receiver_id) {
    if (receiver_id == loggedInUserInfo.id) return;
    try {
      const { data } = await axios(`${config.bseUrl}/api/v1/conversations/open-conversation`, {
        method: "POST",
        data: {
          receiver_id,
        },
        headers: { token: Cookies.get("userToken") },
      });
      dispatch(setActiveUser(data?.users[1]));
      dispatch(getConversationMessages(data?._id));

      router(`/chat/${data?._id}`);
      console.log(data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  }
  function copyText(text) {
    navigator.clipboard.writeText(text);
    console.log("done");
  }
  useEffect(() => {
    refetch(id);
    // data?.data?.result?.userFavorite.includes(loggedInUserInfo?.id) ? setAddFavourite(true) : setAddFavourite(false);
  }, [id, addFavourite]);

  return (
    <>
      <section className="postDetails py-5">
        <ShareModal copyText={copyText} onOpen={onOpen} isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} data={data} />
        <div className="container">
          {
            isLoading ? (
              <CardSkeleton />
            ) : (
              <div className="lg:grid lg:grid-cols-12 gap-8">
                <div className="books lg:col-span-8  mb-3">
                  {/* $$$$$$$$$$ keen slider $$$$$$$$$$ */}
                  <div className="slider ">
                    {/* --------- slider images large ---------  */}
                    <div ref={sliderRef} className="keen-slider  mb-4 rounded-2xl overflow-hidden">
                      <div className="keen-slider__slide  number-slide1">
                        <img src="/assets/imgPost.png" alt="" className=" mb-6 h-full" />
                      </div>
                      <div className="keen-slider__slide overflow-hidden number-slide2">
                        <img src="/assets/imgPost.png" alt="" className=" mb-6 h-full" />
                      </div>
                      <div className="keen-slider__slide overflow-hidden number-slide3">
                        <img src="/assets/imgPost.png" alt="" className=" mb-6 h-full" />
                      </div>
                      <div className="keen-slider__slide overflow-hidden number-slide4">
                        <img src="/assets/imgPost.png" alt="" className=" mb-6 h-full" />
                      </div>
                      <div className="keen-slider__slide overflow-hidden number-slide5 ">
                        <img src="/assets/imgPost.png" alt="" className=" mb-6 h-full" />
                      </div>
                    </div>
                    {/* --------- slider images large ---------  */}
                    {/* ----------- imags thumps ----------- */}
                    <div className={`thumps flex gap-6 relative mb-6 flex-row-reverse ${siteDirection === "ltr" ? null : "flex-row-reverse"}`}>
                      {/* ------------ THUMBNAILS ------------ */}
                      <div ref={thumbnailRef} className="keen-slider thumbnail ">
                        <div className="keen-slider__slide overflow-hidden number-slide1 border-2 rounded-2xl ">
                          <img src="/assets/imgPost.png" alt="" className=" mb-6  w-[200px] h-full" />
                        </div>
                        <div className="keen-slider__slide overflow-hidden rounded-2xl  number-slide2">
                          <img src="/assets/imgPost.png" alt="" className=" w-[200px] h-full mb-6 " />
                        </div>
                        <div className="keen-slider__slide overflow-hidden rounded-2xl  number-slide3">
                          <img src="/assets/imgPost.png" alt="" className=" w-[200px] h-full mb-6 " />
                        </div>
                        <div className="keen-slider__slide overflow-hidden rounded-2xl  number-slide4">
                          <img src="/assets/imgPost.png" alt="" className=" w-[200px] h-full mb-6 " />
                        </div>
                        <div className="keen-slider__slide overflow-hidden rounded-2xl  number-slide5">
                          <img src="/assets/imgPost.png" alt="" className=" w-[200px] h-full mb-6 " />
                        </div>
                      </div>
                      {/* ------------ THUMBNAILS ------------ */}

                      {/* ------------ Arrow ------------ */}
                      <div className=" flex   bg-[#EDEDED]  border-gray-400 border rounded-2xl px-4 ">
                        {loaded && instanceRef.current && (
                          <div className={` flex ${siteDirection === "ltr" ? null : "flex-row-reverse"}`}>
                            <button className={` border-gray-400 ${siteDirection === "ltr" ? "border-e-1" : "border-s-1"}`}>
                              <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />
                            </button>
                            <button>
                              <Arrow
                                onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                              />
                            </button>
                          </div>
                        )}
                      </div>
                      {/* ------------ Arrow ------------ */}
                    </div>
                    {/* ----------- imags thumps ----------- */}
                  </div>
                  {/* $$$$$$$$$$ keen slider $$$$$$$$$$ */}
                  {/* ---------  Data for Books --------- */}
                  <div className="aboutBooks relative  text-end pt-8 rounded-xl bg-[#F3F4F7]">
                    {/* Important Information  */}
                    <div className="infoImportant absolute end-[30px] bg-[#FA5057] py-1 px-2 rounded-lg top-[-15px] flex items-center gap-1">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.62206 10.134C5.62206 9.90679 5.80461 9.7226 6.0298 9.7226H8.20442C8.42961 9.7226 8.61217 9.90679 8.61217 10.134C8.61217 10.3612 8.42961 10.5454 8.20442 10.5454H6.0298C5.80461 10.5454 5.62206 10.3612 5.62206 10.134ZM5.9845 11.5053C5.9845 11.2781 6.16705 11.0939 6.39224 11.0939H7.84199C8.06718 11.0939 8.24973 11.2781 8.24973 11.5053C8.24973 11.7325 8.06718 11.9167 7.84199 11.9167H6.39224C6.16705 11.9167 5.9845 11.7325 5.9845 11.5053Z"
                            fill="#FFB8B8"
                          />
                          <path
                            d="M4.62205 7.49036L5.22227 8.06038C5.39066 8.22029 5.48615 8.44325 5.48615 8.67657C5.48615 9.02707 5.76776 9.31121 6.11515 9.31121H8.11908C8.46646 9.31121 8.74808 9.02707 8.74808 8.67657C8.74808 8.44325 8.84356 8.22029 9.01196 8.06038L9.61217 7.49036C10.4501 6.68857 10.9179 5.63522 10.9227 4.54011L10.9227 4.49411C10.9227 2.62301 9.21888 1.08336 7.11711 1.08336C5.01534 1.08336 3.31152 2.62301 3.31152 4.49411L3.31156 4.54011C3.31628 5.63522 3.78417 6.68857 4.62205 7.49036Z"
                            fill="#FFB8B8"
                          />
                        </svg>
                      </div>
                      <span>اهم المعلومات</span>
                    </div>
                    {/* Important Information  */}

                    <div className=" pe-3 ps-10">
                      <h2 className="text-2xl text-[#131313] font-semibold mb-2">{data?.data?.result.title}</h2>
                      <p className="text-base text-[#0F172A] ">{data?.data?.result.description}</p>
                      <div className="price my-5 flex gap-1 items-center justify-end">
                        <span className="text-[#131313] text-2xl font-semibold">{data?.data?.result.price}</span>
                        <div className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.63373 1.20359C9.43715 0.819222 10.3711 0.819222 11.1746 1.20359C11.5236 1.37057 11.8434 1.64362 12.2862 2.02171C12.3092 2.04133 12.3325 2.06124 12.3562 2.08143C12.5713 2.26488 12.639 2.32128 12.7075 2.36726C12.8818 2.4842 13.0776 2.56536 13.2835 2.60604C13.3644 2.62204 13.4521 2.63009 13.7338 2.65259C13.7648 2.65507 13.7954 2.65749 13.8255 2.65988C14.4057 2.70597 14.8247 2.73925 15.1895 2.86821C16.0291 3.16506 16.6896 3.82612 16.9861 4.66654C17.115 5.03165 17.1482 5.45109 17.1943 6.03186C17.1967 6.06201 17.1991 6.09259 17.2016 6.12362C17.224 6.40555 17.2321 6.49337 17.2481 6.57439C17.2887 6.78045 17.3698 6.97639 17.4866 7.15086C17.5325 7.21946 17.5889 7.28725 17.7722 7.50252C17.7924 7.52622 17.8122 7.54956 17.8319 7.57258C18.2096 8.01582 18.4824 8.33594 18.6492 8.6853C19.0332 9.48947 19.0332 10.4243 18.6492 11.2285C18.4824 11.5779 18.2096 11.898 17.8319 12.3412C17.8122 12.3642 17.7924 12.3876 17.7722 12.4113C17.5889 12.6266 17.5325 12.6944 17.4866 12.7629C17.3698 12.9374 17.2887 13.1334 17.2481 13.3394C17.2321 13.4204 17.224 13.5083 17.2016 13.7902C17.1991 13.8212 17.1967 13.8518 17.1943 13.8819C17.1482 14.4627 17.115 14.8822 16.9861 15.2473C16.6896 16.0877 16.0291 16.7487 15.1895 17.0456C14.8247 17.1746 14.4057 17.2078 13.8255 17.2539C13.7954 17.2563 13.7648 17.2587 13.7338 17.2612C13.4521 17.2837 13.3644 17.2918 13.2835 17.3078C13.0776 17.3484 12.8818 17.4296 12.7075 17.5466C12.639 17.5925 12.5713 17.6489 12.3562 17.8324C12.3325 17.8526 12.3092 17.8725 12.2862 17.8921C11.8434 18.2702 11.5236 18.5432 11.1746 18.7102C10.3711 19.0946 9.43715 19.0946 8.63374 18.7102C8.2847 18.5432 7.96488 18.2702 7.52204 17.8921C7.49906 17.8725 7.47574 17.8526 7.45207 17.8324C7.23701 17.6489 7.16928 17.5925 7.10075 17.5466C6.92644 17.4296 6.73069 17.3484 6.52482 17.3078C6.44388 17.2918 6.35614 17.2837 6.07448 17.2612C6.04348 17.2587 6.01293 17.2563 5.98281 17.2539C5.40258 17.2078 4.98354 17.1746 4.61877 17.0456C3.77915 16.7487 3.11871 16.0877 2.82215 15.2473C2.69331 14.8822 2.66006 14.4627 2.61402 13.8819C2.61163 13.8518 2.6092 13.8212 2.60673 13.7902C2.58425 13.5083 2.57621 13.4204 2.56023 13.3394C2.51958 13.1334 2.4385 12.9374 2.32167 12.7629C2.27573 12.6943 2.21938 12.6266 2.03611 12.4113C2.01594 12.3876 1.99605 12.3643 1.97645 12.3413C1.59872 11.898 1.32592 11.5779 1.1591 11.2285C0.775093 10.4243 0.775093 9.48947 1.1591 8.68529C1.32592 8.33594 1.59871 8.01581 1.97644 7.57256C1.99605 7.54955 2.01594 7.52621 2.03611 7.50252C2.21938 7.28725 2.27573 7.21946 2.32167 7.15086C2.4385 6.97639 2.51958 6.78045 2.56023 6.57439C2.57621 6.49337 2.58425 6.40555 2.60673 6.12362C2.6092 6.09259 2.61163 6.06201 2.61402 6.03186C2.66006 5.45109 2.69331 5.03165 2.82215 4.66654C3.11871 3.82612 3.77915 3.16506 4.61877 2.86821C4.98354 2.73925 5.40258 2.70597 5.98281 2.65988C6.01293 2.65749 6.04348 2.65507 6.07448 2.65259C6.35614 2.63009 6.44388 2.62204 6.52482 2.60604C6.73069 2.56536 6.92644 2.4842 7.10075 2.36726C7.16928 2.32128 7.23701 2.26488 7.45207 2.08143C7.47574 2.06124 7.49906 2.04133 7.52205 2.02171C7.96488 1.64362 8.2847 1.37057 8.63373 1.20359ZM10.5882 2.43149C10.1556 2.22453 9.65268 2.22453 9.22008 2.43149C9.05282 2.51151 8.87653 2.65448 8.33398 3.11727C8.32507 3.12488 8.31628 3.13238 8.3076 3.13978C8.12955 3.29172 7.99958 3.40263 7.85776 3.49777C7.53404 3.71495 7.17049 3.86567 6.78817 3.94123C6.62068 3.97433 6.45042 3.98789 6.21718 4.00648C6.20582 4.00738 6.19431 4.0083 6.18264 4.00923C5.47206 4.06599 5.2464 4.08967 5.07161 4.15147C4.6195 4.31131 4.26388 4.66726 4.10419 5.1198C4.04245 5.29476 4.01879 5.52063 3.96209 6.23188C3.96116 6.24356 3.96024 6.25508 3.95934 6.26646C3.94077 6.49992 3.92722 6.67034 3.89415 6.83799C3.81867 7.22067 3.66808 7.58456 3.45111 7.90859C3.35606 8.05054 3.24525 8.18063 3.09345 8.35886C3.08606 8.36754 3.07857 8.37634 3.07097 8.38526C2.60861 8.92832 2.46578 9.10478 2.38584 9.27219C2.17907 9.70521 2.17907 10.2086 2.38584 10.6416C2.46578 10.809 2.60861 10.9855 3.07097 11.5286C3.07857 11.5375 3.08606 11.5463 3.09346 11.555C3.24525 11.7332 3.35606 11.8633 3.45111 12.0052C3.66808 12.3292 3.81867 12.6931 3.89415 13.0758C3.92722 13.2435 3.94077 13.4139 3.95934 13.6474C3.96024 13.6587 3.96116 13.6702 3.96209 13.6819C4.01879 14.3932 4.04245 14.6191 4.10419 14.794C4.26388 15.2465 4.6195 15.6025 5.07161 15.7623C5.2464 15.8241 5.47206 15.8478 6.18264 15.9046L6.21718 15.9073C6.45042 15.9259 6.62068 15.9395 6.78817 15.9726C7.17049 16.0481 7.53404 16.1989 7.85776 16.416C7.99958 16.5112 8.12955 16.6221 8.30761 16.774L8.33398 16.7965C8.87653 17.2593 9.05282 17.4023 9.22008 17.4823C9.65268 17.6893 10.1556 17.6893 10.5882 17.4823C10.7555 17.4023 10.9318 17.2593 11.4743 16.7965L11.5007 16.774C11.6787 16.6221 11.8087 16.5112 11.9505 16.416C12.2742 16.1989 12.6378 16.0481 13.0201 15.9726C13.1876 15.9395 13.3579 15.9259 13.5911 15.9073L13.6256 15.9046C14.3362 15.8478 14.5619 15.8241 14.7367 15.7623C15.1888 15.6025 15.5444 15.2465 15.7041 14.794C15.7658 14.6191 15.7895 14.3932 15.8462 13.6819L15.8489 13.6474C15.8675 13.4139 15.8811 13.2435 15.9141 13.0758C15.9896 12.6931 16.1402 12.3292 16.3572 12.0052C16.4522 11.8633 16.563 11.7332 16.7148 11.555L16.7373 11.5286C17.1997 10.9855 17.3425 10.809 17.4224 10.6416C17.6292 10.2086 17.6292 9.70521 17.4224 9.27219C17.3425 9.10478 17.1997 8.92832 16.7373 8.38526L16.7148 8.35883C16.563 8.18062 16.4522 8.05053 16.3572 7.90859C16.1402 7.58456 15.9896 7.22067 15.9141 6.83799C15.8811 6.67034 15.8675 6.49992 15.8489 6.26645L15.8462 6.23188C15.7895 5.52063 15.7658 5.29476 15.7041 5.1198C15.5444 4.66726 15.1888 4.31131 14.7367 4.15147C14.5619 4.08967 14.3362 4.06599 13.6256 4.00923C13.614 4.0083 13.6025 4.00738 13.5911 4.00648C13.3579 3.98789 13.1876 3.97433 13.0201 3.94123C12.6378 3.86567 12.2742 3.71495 11.9505 3.49777C11.8087 3.40263 11.6787 3.29172 11.5007 3.13977C11.492 3.13237 11.4832 3.12487 11.4743 3.11727C10.9318 2.65448 10.7555 2.51151 10.5882 2.43149ZM13.5574 7.20748C13.8229 7.47322 13.8229 7.90407 13.5574 8.16982L9.02519 12.7063C8.7597 12.9721 8.32925 12.9721 8.06376 12.7063L6.25086 10.8917C5.98537 10.626 5.98537 10.1951 6.25086 9.92939C6.51636 9.66364 6.9468 9.66364 7.2123 9.92939L8.54447 11.2628L12.596 7.20748C12.8615 6.94173 13.2919 6.94173 13.5574 7.20748Z"
                              fill="#28D8AE"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="location flex justify-between items-center border-t-1 py-3  border-[#FFF]">
                      <div className="date flex ps-3 items-center gap-1">
                        <span className="text-[#0F172A] text-xs">منذ 5 ايام</span>
                        <div className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.25898 0.837209C3.41034 0.837209 1.10107 3.14867 1.10107 6C1.10107 8.85133 3.41034 11.1628 6.25898 11.1628C9.10762 11.1628 11.4169 8.85133 11.4169 6C11.4169 3.14867 9.10762 0.837209 6.25898 0.837209ZM0.264648 6C0.264648 2.68629 2.9484 0 6.25898 0C9.56956 0 12.2533 2.68629 12.2533 6C12.2533 9.31371 9.56956 12 6.25898 12C2.9484 12 0.264648 9.31371 0.264648 6ZM6.25898 3.34884C6.48995 3.34884 6.67719 3.53625 6.67719 3.76744V5.82661L7.94873 7.09935C8.11205 7.26283 8.11205 7.52787 7.94873 7.69135C7.78541 7.85482 7.52061 7.85482 7.35729 7.69135L5.96326 6.296C5.88483 6.21749 5.84077 6.11102 5.84077 6V3.76744C5.84077 3.53625 6.02801 3.34884 6.25898 3.34884Z"
                              fill="#747474"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="address pe-3 flex  items-center gap-1">
                        <span className="text-[#131313] text-sm font-medium">{data?.data?.result.location}</span>
                        <div className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_1608_6937)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.6709 7.21309C2.6709 4.1512 5.12049 1.65479 8.15973 1.65479C11.199 1.65479 13.6486 4.1512 13.6486 7.21309C13.6486 8.69128 13.2257 10.2785 12.4783 11.6497C11.7318 13.0192 10.6411 14.2093 9.27663 14.8447C8.56783 15.1748 7.75163 15.1748 7.04282 14.8447C5.67838 14.2093 4.58767 13.0192 3.84115 11.6497C3.09371 10.2785 2.6709 8.69128 2.6709 7.21309ZM8.15973 2.59229C5.65584 2.59229 3.61184 4.65321 3.61184 7.21309C3.61184 8.52376 3.98987 9.95817 4.66802 11.2023C5.34709 12.4481 6.30671 13.4671 7.44125 13.9954C7.89755 14.2079 8.42191 14.2079 8.8782 13.9954C10.0127 13.4671 10.9724 12.4481 11.6514 11.2023C12.3296 9.95817 12.7076 8.52376 12.7076 7.21309C12.7076 4.65321 10.6636 2.59229 8.15973 2.59229ZM8.15973 5.71729C7.38023 5.71729 6.74832 6.34688 6.74832 7.12354C6.74832 7.90019 7.38023 8.52979 8.15973 8.52979C8.93923 8.52979 9.57114 7.90019 9.57114 7.12354C9.57114 6.34688 8.93923 5.71729 8.15973 5.71729ZM5.80737 7.12354C5.80737 5.82912 6.86056 4.77979 8.15973 4.77979C9.4589 4.77979 10.5121 5.82912 10.5121 7.12354C10.5121 8.41795 9.4589 9.46729 8.15973 9.46729C6.86056 9.46729 5.80737 8.41795 5.80737 7.12354Z"
                                fill="#747474"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1608_6937">
                                <rect width="15.0551" height="15" fill="white" transform="translate(0.631836 0.873535)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Report  */}
                    {/* <div className="report item flex items-center">
                      <Button onPress={onOpen} className="bg-[#F3F2F7] hover:bg-[#F3F2F7]">
                        <span className="text-[#0F172A] text-base font-semibold">تبليغ</span>
                        <div className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.51074 10.9815C3.51074 8.13917 3.51074 6.71803 3.84631 6.23992C4.18188 5.76181 5.51814 5.30441 8.19066 4.38959L8.69983 4.2153C10.0929 3.73843 10.7895 3.5 11.5107 3.5C12.232 3.5 12.9285 3.73843 14.3217 4.2153L14.8308 4.38959C17.5033 5.30441 18.8396 5.76181 19.1752 6.23992C19.5107 6.71803 19.5107 8.13917 19.5107 10.9815V12.3812C19.5107 17.3928 15.7428 19.8249 13.3787 20.8576C12.7374 21.1377 12.4168 21.2778 11.5107 21.2778C10.6047 21.2778 10.2841 21.1377 9.6428 20.8576C7.27871 19.8249 3.51074 17.3928 3.51074 12.3812V10.9815ZM13.2885 9.72222C13.2885 10.7041 12.4926 11.5 11.5107 11.5C10.5289 11.5 9.73296 10.7041 9.73296 9.72222C9.73296 8.74038 10.5289 7.94444 11.5107 7.94444C12.4926 7.94444 13.2885 8.74038 13.2885 9.72222ZM11.5107 16.8333C15.0663 16.8333 15.0663 16.0374 15.0663 15.0556C15.0663 14.0737 13.4744 13.2778 11.5107 13.2778C9.54706 13.2778 7.95519 14.0737 7.95519 15.0556C7.95519 16.0374 7.95519 16.8333 11.5107 16.8333Z"
                              fill="#1C274C"
                            />
                          </svg>
                        </div>
                      </Button> */}

                    {/* Report Content  */}
                    {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="text-[#333]">
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1 text-center">Report</ModalHeader>
                              <ModalBody>
                                <p>Whrite Your Feadback</p>
                                <textarea
                                  name=""
                                  id=""
                                  ref={yourFeadBack}
                                  cols="30"
                                  rows="3"
                                  placeholder="Your Feadback"
                                  className="border-1 p-2 border-[#f2f2f2] resize-none focus:border-[#333] focus:outline-none"
                                ></textarea>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                  Close
                                </Button>
                                <Button onClick={makingReport} color="primary">
                                  Send
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </div> */}
                    {/* Report Content  */}
                    {/* Report  */}

                    {/* <div className="favourite item flex items-center">
                      <span className="text-[#0F172A] text-base font-semibold">حفظ</span>
                      <div className="icon mt-1 cursor-pointer">
                        {addFavourite ? (
                          <solarIcons.Heart onClick={handleRemoveFavourite} size={22} color="#f00" iconStyle="Bold" />
                        ) : (
                          <solarIcons.Heart onClick={handleAddFavourite} size={22} color="#1C274C" />
                        )}
                      </div>
                    </div> */}
                  </div>
                  <div className="pesronalData  rounded-lg border-1 border-[#E8E7E7] ">
                    {/* --------- Data for Books --------- */}
                    {/* --------- Book Details --------- */}
                    <div className="bookDetails mt-10 px-5 ">
                      <h2 className="text-end text-lg text-black font-semibold">تفاصيل الكتاب </h2>

                      <div className="item grid grid-cols-2 my-3 pb-3 border-b-1 border-white">
                        <span className="text-[#0F172A] text-base block  font-semibold ">{data?.data?.result.grade}</span>
                        <span className="text-[#464646] text-base block text-end font-semibold ">الصف</span>
                      </div>

                      <div className="item grid grid-cols-2 my-3 pb-3 border-b-1 border-white">
                        <span className="text-[#0F172A] text-base block  font-semibold ">
                          {config.categories.map((cate) => (cate.id === data?.data?.result.educationLevel ? cate.name : null))}
                        </span>
                        <span className="text-[#464646] text-base block text-end font-semibold ">المرحلة التعليمية</span>
                      </div>

                      <div className="item grid grid-cols-2 my-3 pb-3 border-b-1 border-white">
                        <span className="text-[#0F172A] text-base block  font-semibold ">{data?.data?.result.educationType}</span>
                        <span className="text-[#464646] text-base block text-end font-semibold ">نوع التعليم</span>
                      </div>

                      <div className="item grid grid-cols-2 my-3 pb-3 border-b-1 border-white">
                        <span className="text-[#0F172A] text-base block  font-semibold ">{data?.data?.result.bookEdition}</span>
                        <span className="text-[#464646] text-base block text-end font-semibold ">السنة الدراسية</span>
                      </div>

                      <div className="item grid grid-cols-2 mt-3">
                        <span className="text-[#0F172A] text-base block  font-semibold ">{data?.data?.result.educationTerm}</span>
                        <span className="text-[#464646] text-base block text-end font-semibold ">التيرم</span>
                      </div>
                    </div>
                    {/* --------- Book Details --------- */}
                  </div>
                </div>

                {/* ------------- pesronalData ------------- */}

                {/* ****************** Data for User ****************** */}
                <div className="details mt-5  lg:col-span-4">
                  <div className="top bg-[#F3F2F7] rounded-lg  mb-3 px-3 py-3">
                    {/* ------------- QR ------------- */}
                    <div className="qrData flex gap-3 items-center mb-3 pb-2 border-b-1 border-[#f8f7fa] ">
                      <div className="qr">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">
                          <rect x="0.858398" width="4.59295" height="26" rx="1" fill="#939393" />
                          <rect x="11.1914" width="4.59295" height="26" rx="1" fill="#939393" />
                          <rect x="16.9326" width="4.59295" height="26" rx="1" fill="#939393" />
                          <rect x="28.415" width="4.59295" height="26" rx="1" fill="#939393" />
                          <rect x="7.74805" width="2.29647" height="26" rx="0.5" fill="#939393" />
                          <rect x="23.8232" width="2.29647" height="26" rx="0.5" fill="#939393" />
                        </svg>
                      </div>
                      <div className="numberId  w-full ">
                        <span className="text-[10px] text-[#939393] block">Identification Number</span>
                        <div className="flex justify-between">
                          <span className="text-base text-[#747474] block">{data?.data?.result.identificationNumber}</span>
                          <span className="text-[#939393] text-[10px]">Ad id #1256</span>
                        </div>
                      </div>
                    </div>
                    {/* ------------- QR ------------- */}
                    {/* ------------- notification ------------- */}
                    <div className="notification flex items-center justify-evenly">
                      <div className="item flex items-center gap-1">
                        <Button size="sm" color="transparent" onClick={onOpen} className="text-[#0F172A] text-base font-semibold">
                          مشاركة
                          <solarIcons.Share size={24} color="#0F172A" />
                        </Button>
                      </div>
                      <div className="item flex items-center gap-1">
                        <span className="text-[#0F172A] text-base font-semibold">تبليغ</span>
                        <solarIcons.ShieldWarning size={24} color="#0F172A" />
                      </div>
                      <Button
                        size="sm"
                        color="transparent"
                        className="flex  items-center"
                        onClick={() => {
                          !addFavourite ? handleAddFavourite() : handleRemoveFavourite();
                        }}
                      >
                        <span className="text-[#0F172A] text-base font-semibold">حفظ</span>
                        <solarIcons.Heart
                          size={24}
                          color="#FA5057"
                          iconStyle={!data?.data?.result?.userFavorite.includes(loggedInUserInfo?.id) ? "Outline" : "Bold"}
                        />
                      </Button>
                    </div>
                    {/* ------------- notification ------------- */}
                  </div>

                  {/* ------------- pesronalData ------------- */}
                  <div className="pesronalData bg-white rounded-lg border-1 border-[#E8E7E7] ">
                    <div className="data flex justify-evenly items-center my-3">
                      <div className="userName flex">
                        <div>
                          <h5 className="text-base text-black font-semibold mb-0"> {data?.data?.result?.createdBy?.fullName}</h5>
                          <Link to={`/userProfile/${data?.data?.result?.createdBy?._id}`}>
                            <span className="text-[10px] underline text-black block cursor-pointer">عرض الملف الشخصي</span>
                          </Link>
                        </div>{" "}
                        <div className="avatar me-3-2 ">
                          <img src="/assets/images/avatar.png" alt="" />
                        </div>
                      </div>
                      <div className=" w-px bg-gray-300 h-16 "></div>
                      <div className="contact">
                        <div className="item cursor-pointer flex mb-3  gap-1 items-center ">
                          <span className="text-[#747474] text-sm font-medium">مكالمة</span>
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                              <g clip-path="url(#clip0_1191_10536)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.38867 1.77736C3.81422 0.337297 6.21986 0.446769 7.21245 2.24345L7.76314 3.24024C8.41133 4.41352 8.13511 5.89387 7.18623 6.86413C7.17359 6.88162 7.10661 6.98014 7.09827 7.15226C7.08762 7.37197 7.16486 7.88006 7.94416 8.66729C8.72319 9.45425 9.2261 9.53248 9.44368 9.52178C9.61421 9.5134 9.71181 9.44571 9.72915 9.43292C10.6896 8.47438 12.1551 8.19535 13.3165 8.85014L14.3033 9.40644C16.0818 10.4091 16.1902 12.8393 14.7647 14.2793C14.0021 15.0496 12.9883 15.734 11.7968 15.7796C10.0311 15.8473 7.09931 15.3867 4.1959 12.4537C1.29249 9.52073 0.836519 6.5591 0.903455 4.77545C0.948624 3.57185 1.62615 2.54764 2.38867 1.77736ZM6.10106 2.87001C5.59279 1.95 4.22695 1.73864 3.28865 2.68649C2.63076 3.35108 2.20305 4.08463 2.1753 4.82415C2.11948 6.31159 2.48302 8.9051 5.09588 11.5446C7.70874 14.184 10.2761 14.5512 11.7486 14.4949C12.4806 14.4668 13.2068 14.0348 13.8647 13.3702C14.803 12.4223 14.5938 11.0426 13.683 10.5291L12.6963 9.97285C12.0825 9.6268 11.2203 9.74484 10.615 10.3562L10.6148 10.3564C10.5554 10.4164 10.1771 10.773 9.50552 10.806C8.81805 10.8398 7.98589 10.5277 7.04418 9.57642C6.10216 8.62482 5.79337 7.78396 5.82703 7.08939C5.85992 6.41095 6.21308 6.029 6.27218 5.9693L6.2722 5.96927C6.87746 5.35786 6.99431 4.48688 6.65175 3.86681L6.10106 2.87001Z"
                                  fill="#28D8AE"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1191_10536">
                                  <rect width="15.8388" height="16" fill="white" transform="translate(0.685547)" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="item cursor-pointer flex gap-1 items-center">
                          {/* {loggedInUserInfo.id === data?.data?.result?.createdBy ? (
                        
                      )} */}
                          <span
                            className="text-[#747474] text-sm font-medium hover:text-[#28D8AE]"
                            onClick={() => openConversation(data?.data?.result?.createdBy?._id)}
                          >
                            رسالة
                          </span>
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.24709 2.16666H9.96136C11.1742 2.16665 12.1348 2.16664 12.8867 2.26875C13.6604 2.37383 14.2866 2.59524 14.7805 3.09415C15.2744 3.59306 15.4936 4.22569 15.5976 5.00731C15.6987 5.76679 15.6987 6.73721 15.6987 7.96238V8.0376C15.6987 9.26277 15.6987 10.2332 15.5976 10.9927C15.4936 11.7743 15.2744 12.4069 14.7805 12.9058C14.2866 13.4047 13.6604 13.6261 12.8867 13.7312C12.1348 13.8333 11.1742 13.8333 9.96135 13.8333H7.2471C6.03427 13.8333 5.07362 13.8333 4.3218 13.7312C3.54806 13.6261 2.9218 13.4047 2.42792 12.9058C1.93403 12.4069 1.71485 11.7743 1.61083 10.9927C1.50975 10.2332 1.50976 9.26277 1.50977 8.0376V7.96238C1.50976 6.73721 1.50975 5.76678 1.61083 5.00731C1.71485 4.22569 1.93403 3.59306 2.42792 3.09415C2.9218 2.59524 3.54806 2.37383 4.3218 2.26875C5.07362 2.16664 6.03426 2.16665 7.24709 2.16666ZM4.4537 3.25983C3.78973 3.35001 3.4072 3.51912 3.1279 3.80126C2.8486 4.0834 2.68119 4.46983 2.59192 5.14056C2.50074 5.82567 2.49969 6.72878 2.49969 7.99999C2.49969 9.2712 2.50074 10.1743 2.59192 10.8594C2.68119 11.5302 2.8486 11.9166 3.1279 12.1987C3.4072 12.4809 3.78973 12.65 4.4537 12.7402C5.13191 12.8323 6.02592 12.8333 7.28432 12.8333H9.92412C11.1825 12.8333 12.0765 12.8323 12.7547 12.7402C13.4187 12.65 13.8013 12.4809 14.0805 12.1987C14.3598 11.9166 14.5273 11.5302 14.6165 10.8594C14.7077 10.1743 14.7088 9.2712 14.7088 7.99999C14.7088 6.72878 14.7077 5.82567 14.6165 5.14056C14.5273 4.46983 14.3598 4.0834 14.0805 3.80126C13.8013 3.51912 13.4187 3.35001 12.7547 3.25983C12.0765 3.16772 11.1825 3.16666 9.92412 3.16666H7.28433C6.02592 3.16666 5.13191 3.16772 4.4537 3.25983ZM4.26429 5.01323C4.43929 4.80109 4.75139 4.77243 4.96139 4.94921L6.38616 6.1486C7.00186 6.66691 7.42934 7.0256 7.79023 7.26008C8.13958 7.48705 8.37649 7.56324 8.60422 7.56324C8.83195 7.56324 9.06887 7.48705 9.41822 7.26008C9.77911 7.0256 10.2066 6.66691 10.8223 6.1486L12.2471 4.94921C12.4571 4.77243 12.7692 4.80109 12.9442 5.01323C13.1192 5.22537 13.0908 5.54065 12.8808 5.71743L11.4312 6.93771C10.8463 7.43014 10.3722 7.82927 9.9537 8.10114C9.51781 8.38434 9.0933 8.56324 8.60422 8.56324C8.11515 8.56324 7.69064 8.38434 7.25474 8.10114C6.8363 7.82927 6.36219 7.43015 5.77724 6.93771L4.32766 5.71743C4.11766 5.54065 4.08929 5.22537 4.26429 5.01323Z"
                                fill="#FFC26F"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ------------- pesronalData ------------- */}
                  {/* ------------- Map  ------------- */}
                  <div className="mapLocation mb-6">
                    <h2 className="text-base text-end text-black px-1 font-semibold mt-3 mb-2">الموقع علي الخريطه </h2>
                    <div className="map cursor-pointer">
                      <img src="/assets/images/map.png" alt="Location" className="w-full" />
                    </div>
                  </div>
                  {/* ------------- Map  ------------- */}
                  {/* ------------- ADS ------------- */}
                  <div className="ads cursor-pointer">
                    <img src="/assets/images/ad/ads.png" alt="ads" className="rounded-[10px] w-full" />
                  </div>
                  {/* ------------- ADS ------------- */}
                </div>
                {/* ****************** Data for User ****************** */}
              </div>
            )
            // <div className="relatedData mt-5 ">{/* <PartsOfCategory title={"Related posts"} data={data?.data?.result[0]} /> */}</div>
          }
        </div>
      </section>
    </>
  );
};

export default PostDetails;
