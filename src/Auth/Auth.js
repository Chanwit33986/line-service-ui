import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  //   let auth = {
  //     user: null,
  //   };
  let validateLogin = localStorage.getItem("isLogin");
  let location = useLocation();

  if (!validateLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
