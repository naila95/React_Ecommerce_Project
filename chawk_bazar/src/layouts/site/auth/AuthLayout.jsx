import React from "react";
import { Outlet } from "react-router";
import Header from "../main/pages/home/homeComponents/Header";
import Footer from "../main/pages/home/homeComponents/Footer";

export default function AuthLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
