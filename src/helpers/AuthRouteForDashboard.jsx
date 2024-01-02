import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import DashboardLogin from "../layouts/dashboard/auth/DashboardLogin";
import Spinner from "../layouts/dashboard/components/UI/Spinner";

export default function AuthRouteForDashboard({ children }) {
  const { user } = useContext(UserContext);
  console.log(user);
  if (user == null) {
    return <Spinner />;
  } else if (user.role === "admin" || user.role === "superadmin") {
    return children;
  } else {
    return <Navigate to={"/notFound"} />;
  }
}
