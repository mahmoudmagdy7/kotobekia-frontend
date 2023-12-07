import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getConversationMessages, setActiveUser } from "../../app/Slices/chatSlice";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const ContactCard = ({ conv }) => {
  const { id } = jwtDecode(Cookies.get("userToken"));
  const myId = id;
  const dispatch = useDispatch();
  // const {  } = useSelector((state) => state.chat);

  return (
    <Link
      onClick={() => {
        dispatch(getConversationMessages(conv._id));
        dispatch(setActiveUser(conv));
      }}
      to={`/chat/${conv._id}`}
      className=" flex hover:bg-gray-100  justify-between p-5 relative"
    >
      <div className="flex gap-3 ">
        {/* <img src={conv?.picture} className="w-12 h-12 rounded-full" alt="" /> */}
        <div>
          <h3 className="font-semibold">{conv?.name}</h3>
          <p className="text-gray-700">
            {conv?.latestMessage?.sender._id === myId ? "Me: " : ""}
            {conv?.latestMessage?.message}
          </p>
        </div>
      </div>
      <span className="text-sm">{moment(conv?.latestMessage?.createdAt).fromNow()}</span>
      <span className="absolute end-5 bottom-1 h-[1px] w-4/5 bg-[#EDEDED]"></span>
    </Link>
  );
};
