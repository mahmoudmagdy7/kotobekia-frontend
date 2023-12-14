import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import isLoggedIn from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const SocketContext = createContext();
export const SocketProvider = ({ children }) => {
  const socket = io("localhost:3000");

  useEffect(() => {
    console.log("sockt in");
    if (isLoggedIn()) {
      const userToken = Cookies.get("userToken");
      const id = jwtDecode(userToken).id;

      socket.emit("join", id);
    }
    return () => {
      if (isLoggedIn()) {
        const userToken = Cookies.get("userToken");
        const id = jwtDecode(userToken).id;
        socket.emit("disconnect", id);
      }
    };
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  return useContext(SocketContext);
};
