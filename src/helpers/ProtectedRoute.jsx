import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import NotFound from "../layouts/site/main/pages/notfound/NotFound";
import DashboardNotFound from "../layouts/dashboard/pages/notFoundForDashboard/DashboardNotFound";

export default function ProtectedRoute({ component, role }) {
  const { user } = useContext(UserContext);
  if (user.role === role) {
    return component;
  } else {
    return <DashboardNotFound />;
  }
}
