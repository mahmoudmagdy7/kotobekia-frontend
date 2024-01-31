import { Popover, PopoverContent, PopoverTrigger, Button, Spinner } from "@nextui-org/react";
import * as solarIcons from "solar-icon-set";
import { siteDirection } from "../../../hooks/useLocale";
import axios from "axios";
import { useQuery } from "react-query";
import config from "../../../../config";
import Cookies from "js-cookie";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSocket } from "../../../app/SocketContext";
import moment from "moment";
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

  const { data, refetch, isLoading } = useQuery("getUserNotifications", getUserNotifications, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
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
  useLayoutEffect(() => {
    let counter = 0;
    data?.forEach(({ isRead }) => {
      !isRead ? counter++ : null;
    });
    setNotificationCont(counter);
  }, [data]);

  const socket = useSocket();
  useEffect(() => {
    socket.on("new-notification", (notification) => {
      refetch();
      console.log("notification");
    });
    socket.on("get-online-users", (onlineUsers) => {
      console.log(onlineUsers);
    });
  }, []);
  return (
    <>
      <div className="relative ">
        {/* ----------------- notification counter -------------------- */}
        {notificationCount > 0 && (
          <div className="num absolute z-10 top-[-5px] end-[-4px] w-5 h-5 rounded-[50%] border-[1.5px] border-[#FAFAFA] bg-[#FA5057] flex justify-center items-center ">
            <span className="text-xs font-semibold">{notificationCount}</span>
          </div>
        )}
        <Popover
          onClose={() => setSeeMore(false)}
          showArrow
          placement={siteDirection == "rtl" ? "bottom-start" : "bottom-end"}
          className="relative bg-red-400 rounded-full "
        >
          <PopoverTrigger>
            {/* ----------------- notification button -------------------- */}

            <Button onClick={notificationCount > 0 ? markAsRead : null} isIconOnly variant="flat" className="bg-danger-500 bg-opacity-10 rounded-full">
              <solarIcons.Bell iconStyle="Outline" size={24} color="#FA5057" />
            </Button>
          </PopoverTrigger>
          {/* ----------------- notification content -------------------- */}

          {isLoading ? (
            <PopoverContent className="notification-list px-5 py-3 text-black flex items-center gap-2 overflow-hidden pt-4">
              <Spinner size="sm" /> <p className="mt-2">Loading your notifications</p>
            </PopoverContent>
          ) : data?.length ? (
            <PopoverContent className="notification-list p-0 overflow-hidden ">
              <div className={`${data.length > 6 && "border-success-200"} ${seeMore ? "max-h-[400px]" : "max-h-96"} overflow-y-scroll p-4 pb-0 border-b-2 `}>
                {data
                  ?.map(({ title, body, image, isRead, status, reference_id, notification_type, createdAt }) => (
                    <div key={reference_id} className=" text-black flex gap-4 pb-3 items-center max-w-96 notification-item">
                      <div className="w-12 self-start">
                        <span
                          className={`border-2 ${
                            status == "approved"
                              ? "bg-success-50 outline-success"
                              : status == "pending"
                              ? "bg-warning-50 outline-warning"
                              : status == "rejected"
                              ? "bg-[#FA5057] outline-[#FA5057] bg-opacity-15"
                              : "bg-[rgb(68,202,255)] outline-[rgb(68,202,255)] bg-opacity-15"
                          }  border-white   outline outline-2 h-10 w-10 rounded-2xl  p-1 flex items-center justify-center`}
                        >
                          {notification_type == "post-update" ? (
                            <solarIcons.HashtagSquare
                              iconStyle="Bold"
                              size={24}
                              color={status == "approved" ? "#28D8AE" : status == "pending" ? "#fa0" : "#FA5057"}
                            />
                          ) : notification_type == "report-update" ? (
                            <solarIcons.ShieldWarning
                              iconStyle="Bold"
                              size={24}
                              color={status == "approved" ? "#28D8AE" : status == "pending" ? "#fa0" : "#FA5057"}
                            />
                          ) : (
                            <solarIcons.InfoCircle iconStyle="Bold" size={24} color="rgb(68,202,255)" />
                          )}
                        </span>
                      </div>
                      <div className="w-full border-b-2 pb-2 flex notification-text">
                        <div className="w-full flex-grow">
                          <h4 className="font-semibold">{title}</h4>
                          <p className="text-sm ">{body}</p>
                          {/* <img src={image} alt="Notification image" /> */} {/* image item */}
                        </div>
                        <div className="text-end  relative">
                          {/* -------------- time and is read dot ------------ */}
                          <p className="text-[10px]"> {moment(createdAt).fromNow()} </p>
                          {!isRead && <span className="w-2 h-2 bg-red-500 rounded-full  inline-block absolute bottom-0 end-0"></span>}
                        </div>
                      </div>
                    </div>
                  ))
                  .splice(0, seeMore ? data.length : 6)}
              </div>
              {data.length > 6 && (
                <h6 className=" hover:text-[#28D8AE] font-semibold  py-1 text-gray-900 cursor-pointer" onClick={() => setSeeMore(!seeMore)}>
                  {!seeMore ? "See More" : "See Less"}
                </h6>
              )}
            </PopoverContent>
          ) : (
            <PopoverContent className="notification-list px-5 py-3 text-black  overflow-hidden ">No Notifications To Show</PopoverContent>
          )}
        </Popover>
      </div>
    </>
  );
}

export default NotificationList;
