import moment from "moment";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getConversationMessages, setActiveUser } from "../../app/Slices/chatSlice";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useSocket } from "../../app/SocketContext";
export const ContactCard = ({ conv }) => {
  const router = useNavigate();
  const { id } = jwtDecode(Cookies.get("userToken"));
  const myId = id;
  const [isOnline, setIsOnline] = useState(false);

  const dispatch = useDispatch();
  const currentUser = conv.users[0]._id === myId ? conv.users[1] : conv.users[0];

  const { onlineUsers } = useSelector((state) => state.chat);
  const socket = useSocket();
  useEffect(() => {
    if (onlineUsers.some((user) => user.userId === currentUser._id)) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [onlineUsers]);
  return (
    <div
      onClick={() => {
        dispatch(getConversationMessages(conv._id));
        dispatch(setActiveUser(currentUser));
        router(`/chat/${conv._id}`);
      }}
      className=" flex hover:bg-gray-100  justify-between p-5 relative"
    >
      <div className="flex gap-3  w-full">
        <div className="relative  w-14 h-12">
          <img
            className="w-12 h-12 rounded-full"
            alt={`${conv.users[0]._id === myId ? conv.users[1].fullName : conv.users[0].fullName} avatar`}
            src={
              conv.users[0]._id === myId
                ? conv.users[1].gender == "male"
                  ? "/assets/images/male.png"
                  : "/assets/images/female.png"
                : conv.users[0].gender == "male"
                ? "/assets/images/male.png"
                : "/assets/images/female.png"
            }
          />
          {isOnline ? <span className="bottom-0 end-0 inline-block w-4 h-4 rounded-full absolute bg-success-400 border-2 border-white"></span> : ""}{" "}
        </div>
        <div className="w-full">
          <div className="flex  ">
            <h3 className="font-semibold">{conv.users[0]._id === myId ? conv.users[1].fullName : conv.users[0].fullName}</h3>
            <span className="text-sm ms-auto">{moment(conv?.latestMessage?.createdAt).fromNow()}</span>
          </div>
          <p className="text-gray-700 max-w-[70%] overflow-hidden whitespace-nowrap overflow-ellipsis">
            {conv?.latestMessage?.sender._id === myId ? "Me: " : ""}
            {conv?.latestMessage?.message}
          </p>
          <span>{conv.unreadMessages[0].count}</span>
        </div>
      </div>

      <span className="absolute end-5 bottom-1 h-[1px] w-4/5 bg-[#EDEDED]">{}</span>
    </div>
  );
};
