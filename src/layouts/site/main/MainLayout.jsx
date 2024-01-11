import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "./pages/home/homeComponents/Header";
import Footer from "./pages/home/homeComponents/Footer";
import Search from "./pages/home/homeComponents/MySearch";

export default function MainLayout() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Header setShowSearch={setShowSearch} showSearch={showSearch} />
      {showSearch && <Search setShowSearch={setShowSearch} />}
      <Outlet />
      <Footer />
    </div>
  );
}
