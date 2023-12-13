import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContactCard } from "./ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserConversations } from "../../app/Slices/chatSlice";
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

  const myId = token.id;

  const { userConversationsCount, userConversations, activeUser } = useSelector((state) => state.chat);
  const store = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserConversations());
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
            <Button isIconOnly className=" ms-auto" color="transparent" as={Link} to="/">
              <solarIcons.AltArrowLeft size={25} />
            </Button>
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
