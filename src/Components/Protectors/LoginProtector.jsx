import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export const LoginProtector = ({ children }) => {
  const { userData } = useSelector((state) => state.userData);
  if (!userData && !Cookies.get("userToken")) {
    return <Navigate to="/auth/login" />;
  } else {
    return children;
  }
};
