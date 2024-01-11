import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import DashboardNotFound from "../layouts/dashboard/pages/notFoundForDashboard/DashboardNotFound";

export default function ProtectedRouteForDashboard({ roles, component }) {
  const { user } = useContext(UserContext);
  if (user.role === roles) {
    return component;
  } else {
    return <DashboardNotFound />;
  }
}
