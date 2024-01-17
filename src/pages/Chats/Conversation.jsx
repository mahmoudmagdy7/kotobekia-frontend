import { Button, Input, Spinner } from "@nextui-org/react";
import moment from "moment";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import { getConversationMessages, getUserConversations, receiveMessage, sendNewMessage, setActiveUser } from "../../app/Slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { useSocket } from "../../app/SocketContext";
import isMobile from "../../hooks/useAgent";
import { siteDirection } from "../../hooks/useLocale";
import DotsLoading from "../../Components/Loaders/DotsLoading";
export const Conversation = (props) => {
  const blackList = config.blackList_en;
  const sideToggler = useOutletContext();
  const [isOnline, setIsOnline] = useState(false);
  const [sendingMessageLoading, setSendingMessageLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(null);
  const token = jwtDecode(Cookies.get("userToken"));
  const socket = useSocket();
  const myId = token.id;
  const router = useNavigate();
  const dispatch = useDispatch();
  const { activeUser, activeConversation, onlineUsers, loadingConversationMessages } = useSelector((state) => state.chat);
  const msgRef = useRef(null);
  useEffect(() => {
    const conversationBody = document.getElementById("conversation-body");

    if (conversationBody) {
      conversationBody.scrollTo({ top: conversationBody.scrollHeight, behavior: "smooth" });
      msgRef.current.value = null;
    }
    return () => setActiveUser(null);
  }, [activeConversation]);

  const { convId } = useParams();
  useEffect(() => {
    dispatch(getConversationMessages(convId));
    // dispatch(getUserConversations());
    console.log("first useEfect");
    socket?.emit("join-conversation", convId);

    return () => {
      socket?.emit("leave-conversation", convId);
      console.log("leave conv");
    };
  }, []);
  useEffect(() => {
    dispatch(getUserConversations());
    console.log("second uesEffect");
    if (!activeUser) {
      router("/chat");
    }
    // console.log(activeConversation);
  }, [activeConversation]);
  const sendMessageHandler = async (message) => {
    setSendingMessageLoading(true);
    if (blackList.some((message) => msgRef?.current?.value.includes(message.toLowerCase()))) {
      alert("Message not sent");
    } else {
      const msg = await dispatch(sendNewMessage({ msg: msgRef?.current?.value, convId })); // Socket.emit("send message", newMsg.payload);
      socket?.emit("send-message", msg?.payload);
      setIsEmpty(null);
      setSendingMessageLoading(false);
    }
  };

  useEffect(() => {
    socket.on("receive-message", (msg) => {
      console.log(activeUser._id);
      if (msg?.sender?._id === activeUser?._id) {
        console.log(msg.sender._id);
        dispatch(receiveMessage(msg));
      } else {
        console.log("conversation not opend");
        // dispatch(getUserConversations());
      }
      // the second solution to prevent re-rendering
      // dispatch(getConversationMessages(convId));
    });

    return () => {
      socket.off("receive-message");
    };
  }, [dispatch, activeUser]);

  useEffect(() => {
    console.log("hi");
  }, [activeUser]);
  const typingHandler = () => {
    // console.log("type");
    // socket?.emit("typing", { conv: convId, msg: msgRef?.current?.value });
  };

  useEffect(() => {
    if (onlineUsers.some((user) => user.userId === activeUser?._id)) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [onlineUsers, activeUser]);

  return (
    <>
      {activeUser ? (
        <div className=" flex flex-col h-full">
          {/* ------- conversation header ------- */}

          <div className="flex  justify-between p-5 relative shadow-[0_4px_20px_-10px_rgba(0,0,0,0.25)]">
            <div>
              {" "}
              <Button isIconOnly color="transparent">
                <solarIcons.ShieldUser size={32} color="#0DCA86" />
              </Button>{" "}
            </div>
            <div>
              <h3 className="font-semibold">{activeUser?.fullName}</h3>
            </div>
            <div className="flex gap-3  ">
              <div className="relative">
                <img src={activeUser.gender == "male" ? "/assets/images/male.png" : "/assets/images/female.png"} className="w-12 h-12 rounded-full" alt="" />
                {isOnline ? <span className="bottom-0 end-0 inline-block w-4 h-4 rounded-full absolute bg-success-400 border-2 border-white"></span> : ""}{" "}
              </div>{" "}
              {isMobile() ? (
                <Button isIconOnly color="transparent">
                  {localStorage.getItem("i18nextLng") == "en" ? (
                    <solarIcons.AltArrowRight size={32} onClick={sideToggler} />
                  ) : (
                    <solarIcons.AltArrowLeft size={32} onClick={sideToggler} />
                  )}
                </Button>
              ) : (
                ""
              )}
            </div>
            {/* <span className="absolute end-5 bottom-1 h-[1px] w-4/5 bg-[#EDEDED]"></span> */}
          </div>
          {/* ------- conversation body ------- */}
          <div id="conversation-body" className="p-5 overflow-y-scroll grow ">
            {loadingConversationMessages ? (
              <div className="flex h-full items-center justify-center">
                <DotsLoading />
              </div>
            ) : activeConversation?.length > 0 ? (
              activeConversation?.map((m) => {
                return (
                  <div key={m?._id}>
                    <div className={m?.sender._id === myId ? "  text-start " : " text-end  "}>
                      {localStorage.getItem("i18nextLng") == "en" ? (
                        <p
                          className={
                            m?.sender._id === myId
                              ? "bg-[#28D8AE] w-fit  py-1 px-5  rounded-xl rounded-bl-none "
                              : "bg-[#F3F2F7] w-fit ms-auto py-1 px-5  rounded-xl rounded-br-none"
                          }
                        >
                          {m?.message}
                        </p>
                      ) : (
                        <p
                          className={
                            m?.sender._id === myId
                              ? "bg-[#28D8AE] w-fit  py-1 px-5  rounded-xl rounded-br-none "
                              : "bg-[#F3F2F7] w-fit ms-auto py-1 px-5  rounded-xl rounded-bl-none"
                          }
                        >
                          {m?.message}
                        </p>
                      )}
                      <span className="text-xs  ">{moment(m?.createdAt).format("hh:mm A")}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="h-full flex-col justify-center items-center flex">
                <p>This conversations is Empty</p>
                <p>Try to send message and start</p>
              </div>
            )}
          </div>

          {/* ------- Type input ------- */}
          <div className="flex items-center   py-5 px-4 gap-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.10)]">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter" && isEmpty) {
                  sendMessageHandler(msgRef?.current?.value);
                }
              }}
              id="text"
              ref={msgRef}
              size="sm"
              type="text"
              onChange={() => setIsEmpty(msgRef?.current?.value)}
              onKeyUp={typingHandler}
              placeholder="type what you want"
              className="w-full outline-none  bg-[#EFEFEF] p-2 rounded-xl ps-4"
            />

            {sendingMessageLoading ? (
              <Spinner size="sm" color="success" className="w-11" />
            ) : (
              <Button
                onClick={isEmpty == "" || isEmpty == null ? null : () => sendMessageHandler(msgRef?.current?.value)}
                isDisabled={isEmpty == "" || isEmpty == null}
                isIconOnly
                color="transparent"
              >
                {siteDirection == "rtl" ? (
                  <solarIcons.Plain2 size={28} className="scale-x-[-1] " color={isEmpty == "" || isEmpty == null ? "#9e9e9e" : "#28D8AE"} />
                ) : (
                  <solarIcons.Plain2 size={28} color={isEmpty == "" || isEmpty == null ? "#9e9e9e" : "#28D8AE"} />
                )}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};
