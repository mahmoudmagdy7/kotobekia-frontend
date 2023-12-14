import React from "react";
import isLoggedIn from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const LoginProtector = ({ children }) => {
  if (isLoggedIn()) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
};
