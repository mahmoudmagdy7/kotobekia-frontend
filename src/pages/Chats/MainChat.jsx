import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ContactCard } from "./ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserConversations, setOnlineUsers } from "../../app/Slices/chatSlice";
import { io } from "socket.io-client";
import { Button } from "@nextui-org/react";
import isMobile from "../../hooks/useAgent";
import * as solarIcons from "solar-icon-set";
import { useSocket } from "../../app/SocketContext";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export const MainChat = () => {
  const token = jwtDecode(Cookies.get("userToken"));
  const socket = useSocket();
  const router = useNavigate();
  const myId = token.id;

  const { userConversationsCount, userConversations, onlineUsers } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  // const [onlineUsersList, setOnlineUsersList] = useState([]);

  useEffect(() => {
    // Listen for the "get-online-users" event
    socket.on("get-online-users", (onlineUsers) => {
      // Handle the onlineUsers data received from the backend
      console.log("Online Users:", onlineUsers);
      // setOnlineUsers(onlineUsers);
      dispatch(setOnlineUsers(onlineUsers));
      // You can update the state or perform any other actions based on the onlineUsers data
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      socket.off("get-online-users");
    };
  }, [socket, onlineUsers]);

  useEffect(() => {
    //   console.log("get");
    dispatch(getUserConversations());
  }, [dispatch]);
  useEffect(() => {
    //   console.log("get");
    socket.on("receive message", () => {
      dispatch(getUserConversations());

      // the second solution to prevent re-rendering
      // dispatch(getConversationMessages(convId));
    });
  }, [dispatch]);

  // console.log(socket);
  const [isOpen, setIsOpen] = useState(true);

  const sideToggler = () => {
    if (isOpen && isMobile()) {
      setIsOpen(false);

      console.log("close");
    } else {
      setIsOpen(true);

      console.log("open");
    }
  };
  useEffect(() => {
    console.log("get chat");
    socket?.emit("join", myId);
    isMobile() ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <section className="container ">
      <div className="text-black bg-white mb-5 lg:h-[40rem] grid grid-cols-12 z-[99999999999999999999999] fixed lg:relative  inset-0 h-screen">
        <aside id="chat-sidebar" className={` w-full ${isOpen ? "border-e-2 col-span-12 lg:col-span-4 lg:h-auto h-screen" : "hidden col-span-4"}`}>
          <div className="flex items-center  p-3 gap-2 border-b-2 relative">
            <h3>Inbox</h3> <span className="inline-flex items-center justify-center h-5 w-5 bg-[#28D8AE] rounded-md">{userConversationsCount}</span>
            <span className="absolute bottom-1 h-[3px] w-16 bg-[#28D8AE]"></span>
            {isMobile() ? (
              <Button onClick={() => router("/")} isIconOnly color="transparent" className="ms-auto">
                {localStorage.getItem("i18nextLng") == "en" ? <solarIcons.AltArrowRight size={32} /> : <solarIcons.AltArrowLeft size={32} />}
              </Button>
            ) : (
              ""
            )}
          </div>

          {/* ---------- contacts ------------ */}
          <div className=" h-[37rem]">
            {userConversations?.conversations?.map((conv) => (
              <div key={conv._id} onClick={sideToggler}>
                <ContactCard conv={conv} key={conv._id} />
              </div>
            ))}
          </div>
        </aside>
        <section className={isOpen ? "col-span-8 w-full overflow-hidden " : " col-span-full w-full overflow-hidden"}>
          <Outlet context={sideToggler} />
        </section>
      </div>
    </section>
  );
};
