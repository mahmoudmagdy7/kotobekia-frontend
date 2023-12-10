import { Button, Input } from "@nextui-org/react";
import moment from "moment";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import { getConversationMessages, getUserConversations, increase, sendNewMessage, setActiveUser } from "../../app/Slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
export const Conversation = ({ id }) => {
  const { chatId } = useParams();
  const user = {
    name: "Ahmed mohammed",
    image: "https://i.pravatar.cc/300",
    lastMessage: "lorem ipsum",
    time: "now",
  };
  const token = jwtDecode(Cookies.get("userToken"));

  const myId = token.id;

  const dispatch = useDispatch();
  const { activeUser, activeConversation, userConversations } = useSelector((state) => state.chat);
  const msgRef = useRef(null);

  useEffect(() => {
    const conversationBody = document.getElementById("conversation-body");

    if (conversationBody) {
      conversationBody.scrollTo({ top: conversationBody.scrollHeight, behavior: "smooth" });
      msgRef.current.value = null;
    }
  }, [activeConversation]);

  const { convId } = useParams();
  useEffect(() => {
    dispatch(getConversationMessages(convId));
    dispatch(getUserConversations());
    dispatch(setActiveUser({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserConversations());
  }, [userConversations]);

  return (
    <>
      {activeUser ? (
        <div className=" flex flex-col h-full">
          {/* ------- conversation header ------- */}

          <div className="flex  justify-between p-5 relative">
            <div className="flex gap-3 ">
              <img src={user?.image} className="w-12 h-12 rounded-full" alt="" />
              <div>
                <h3 className="font-semibold">{activeUser?.name}</h3>
                <p className="text-gray-700">online</p>
              </div>
            </div>
            <span className="text-sm">{moment(activeUser?.createdAt).fromNow()}</span>
            <span className="absolute end-5 bottom-1 h-[1px] w-4/5 bg-[#EDEDED]"></span>
          </div>
          {/* ------- conversation body ------- */}
          <div id="conversation-body" className="p-5 overflow-y-scroll grow ">
            {activeConversation.length > 0 ? (
              activeConversation?.map((m) => {
                return (
                  <div key={m._id}>
                    <div className={m.sender._id === myId ? "  text-start " : " text-end  "}>
                      <p
                        className={
                          m.sender._id === myId
                            ? "bg-[#28D8AE] w-fit max-w-[95%] py-1 px-5 mb-2 rounded-xl rounded-br-none "
                            : " bg-[#F3F2F7] w-fit ms-auto py-1 px-5 mb-2 rounded-xl rounded-bl-none"
                        }
                      >
                        {m.message}
                      </p>
                      <span className="text-xs  ">{moment(m.createdAt).format("HH:mm")}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>no messages</p>
            )}
          </div>

          {/* ------- Type input ------- */}
          <div className="flex items-center  py-5 px-4 gap-4">
            {" "}
            <input
              onKeyDown={(e) => e.key === "Enter" && dispatch(sendNewMessage({ msg: msgRef?.current?.value, convId }))}
              id="input"
              ref={msgRef}
              size="sm"
              type="text"
              placeholder="type what you want"
              className="w-full outline-none bg-[#EFEFEF] p-2 rounded-xl ps-4"
            />
            <Button isIconOnly onClick={() => dispatch(sendNewMessage({ msg: msgRef?.current?.value, convId }))} color="success">
              <solarIcons.Plain2 size={24} className="scale-x-[-1]" />
            </Button>
          </div>
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};
