import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext();
export const SocketProvider = ({ children }) => {
  const socket = io("localhost:3000");

  useEffect(() => {
    console.log("sockt in");

    return () => console.log("out");
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  return useContext(SocketContext);
};
