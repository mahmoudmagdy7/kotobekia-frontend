import { Popover, PopoverContent, PopoverTrigger, Button } from "@nextui-org/react";
import * as solarIcons from "solar-icon-set";
import { siteDirection } from "../../../hooks/useLocale";
import axios from "axios";
import { useQuery } from "react-query";
import config from "../../../../config";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function NotificationList() {
  const [notificationCount, setNotificationCont] = useState(0);
  const [seeMore, setSeeMore] = useState(false);

  const { title, body, isRead, image, status } = {
    _id: "6590704220945f0ec0602f90",
    title: "New Post Added",
    body: "A new post has been added ",
    status: "success",
    image: "postImage.jpg",
    isRead: true,
    __v: 0,
  };

  const { data } = useQuery("getUserNotifications", getUserNotifications, {
    refetchOnWindowFocus: false,
  });
  // getting user notifications function
  async function getUserNotifications() {
    try {
      const { data } = await axios(`${config.bseUrl}/api/v1/notifications/user`, {
        method: "GET",
        headers: {
          token: Cookies.get("userToken"),
        },
      });
      return data.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // Mark user notification as read function
  async function markAsRead() {
    const { data } = await axios(`${config.bseUrl}/api/v1/notifications/update`, {
      method: "PATCH",
      headers: {
        token: Cookies.get("userToken"),
      },
    });
    console.log(data);
    setNotificationCont(0);
  }
  useEffect(() => {
    let counter = 0;
    data?.forEach(({ isRead }) => {
      !isRead ? counter++ : null;
    });
    setNotificationCont(counter);
  }, [data]);

  return (
    <>
      <div className="relative ">
        {/* ----------------- notification counter -------------------- */}
        {notificationCount > 0 && (
          <div className="num absolute z-10 top-[-5px] end-[-4px] w-5 h-5 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center ">
            <span className="text-xs font-semibold">{notificationCount}</span>
          </div>
        )}
        <Popover showArrow placement={siteDirection == "rtl" ? "bottom-start" : "bottom-end"} className="relative bg-red-400 rounded-full ">
          <PopoverTrigger>
            {/* ----------------- notification button -------------------- */}

            <Button onClick={notificationCount > 0 ? markAsRead : null} isIconOnly variant="flat" className="bg-danger-500 bg-opacity-10 rounded-full">
              <solarIcons.Bell iconStyle="Outline" size={24} color="#FA5057" />
            </Button>
          </PopoverTrigger>
          {/* ----------------- notification content -------------------- */}

          {data ? (
            <PopoverContent className="notification-list p-0 overflow-hidden ">
              <div className={`${data.length > 10 && "border-success-200"} ${seeMore ? "max-h-[600px]" : "max-h-96"} overflow-y-scroll p-4 pb-0 border-b-2 `}>
                {data
                  ?.map(({ title, body, image, isRead, status }) => (
                    <div className=" text-black flex gap-4 pb-3 items-center max-w-96 notification-item">
                      <div className="w-12 self-start">
                        <span className="border-2 bg-success-50 border-white outline-success  outline outline-2 h-10 w-10 rounded-full  p-1 flex items-center justify-center">
                          <solarIcons.HashtagSquare iconStyle="Bold" size={24} color="#28D8AE" />
                        </span>
                      </div>
                      <div className="w-full border-b-2 pb-2 flex notification-text">
                        <div className="w-full flex-grow">
                          <h4 className="font-semibold">{title}</h4>
                          <p className="text-sm ">{body}</p>
                          {/* <img src={image} alt="Notification image" /> */} {/* image item */}
                        </div>
                        <div className="text-end max-w-[4rem] relative">
                          {/* -------------- time and is read dot ------------ */}
                          <p className="text-xs">yesterday </p>
                          {!isRead && <span className="w-2 h-2 bg-red-500 rounded-full  inline-block absolute bottom-0 end-0"></span>}
                        </div>
                      </div>
                    </div>
                  ))
                  .splice(0, seeMore ? data.length : 10)}
              </div>
              {data.length > 10 && (
                <h6 className=" hover:text-[#28D8AE] font-semibold  py-1 text-gray-900 cursor-pointer" onClick={() => setSeeMore(!seeMore)}>
                  {seeMore ? "See More" : "See Less"}
                </h6>
              )}
            </PopoverContent>
          ) : null}
        </Popover>
      </div>
      {/* <Popover showArrow placement="bottom-start">
        <PopoverTrigger>open</PopoverTrigger> */}
      {/* <Popover showArrow placement="bottom-end" className="absolute bg-white top-14 w-96 end-0 z-50 rounded-xl py-2"> */}
      {/* <PopoverContent>
          <div className="hover:bg-gray-100 text-black flex gap-4 p-2 px-4 items-center">
            <div className="w-12 self-start">
              <span className="border-2 bg-success-50 border-white outline-success  outline outline-2 h-12 w-12 rounded-full  p-1 flex items-center justify-center">
                <solarIcons.HashtagSquare iconStyle="Bold" size={24} color="#28D8AE" />
              </span>
            </div>
            <div className="w-full border-b-2 pb-2 flex">
              <div className="w-full">
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm">{body}</p> */}
      {/* <img src={image} alt="Notification image" /> */}
      {/* </div>
              <span className="w-2 h-2 bg-red-500 rounded-full text-center m-2"></span>
            </div>
          </div>
        </PopoverContent>
      </Popover> */}
    </>
  );
}

export default NotificationList;
