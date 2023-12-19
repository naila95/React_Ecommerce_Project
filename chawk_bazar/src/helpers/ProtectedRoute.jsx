import React, { useContext } from "react";
import AuthRoute from "./AuthRoute";

export default function ProtectedRoute({ component, role }) {
  const { user } = useContext(AuthRoute);
  if (user.role === role) {
    return component;
  } else {
    return <NotFound />;
  }
}
