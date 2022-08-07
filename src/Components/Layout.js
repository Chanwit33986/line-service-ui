import React from "react";
import { Outlet } from "react-router-dom";
import AppbarCustom from "./AppbarCustom";

export default function Layout() {
  return (
    <>
      <AppbarCustom />
      <Outlet />
    </>
  );
}
