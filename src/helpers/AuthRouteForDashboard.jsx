import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthRouteForDashboard({ children }) {
  const { user } = useContext(UserContext);
  if (!user.role === "client" && user) {
    return children;
  } else {
    return <Navigate to={"/notFound"} />;
  }
}
