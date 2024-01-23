import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import isLoggedIn from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import config from "../../config";

const SocketContext = createContext();
export const SocketProvider = ({ children }) => {
  // const socket = io("http://localhost:3000");
  const socket = io(config.bseUrl);

  useEffect(() => {
    socket.connected;
    console.log("sockt in");

    const userToken = Cookies.get("userToken");
    if (isLoggedIn && userToken) {
      const id = jwtDecode(userToken).id;

      socket.emit("join", id);
    }
    // this code is trash
    return () => {
      if (isLoggedIn) {
        const userToken = Cookies.get("userToken");
        const id = jwtDecode(userToken).id;
        // socket?.emit("join-conversation", "659e9e51a3b98aed7c42a68b");
        // socket?.emit("leave-conversation", "convId");
        // socket.emit("disconnect", id);
      }
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  return useContext(SocketContext);
};
