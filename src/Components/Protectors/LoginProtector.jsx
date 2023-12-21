import React from "react";
import { Navigate } from "react-router-dom";
import { useAutho } from "./../../hooks/useAutho";

export const LoginProtector = ({ children }) => {
  const { isLoggedIn } = useAutho();
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
};
