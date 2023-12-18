import React from "react";
import { Outlet } from "react-router";
import Header from "./pages/home/homeComponents/Header";
import Footer from "./pages/home/homeComponents/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
