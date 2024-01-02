import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";

export default function ProtectedRouteForDashboard({ roles, component }) {
  const { user } = useContext(UserContext);
  if (user.role === roles) {
    return component;
  } else {
    return <NotFound />;
  }
}
