import React from "react";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      DashboardLayout
      <Outlet />
    </div>
  );
}
