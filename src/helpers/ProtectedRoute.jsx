import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ component, role }) {
  const { user } = useContext(UserContext);
  if (user.role === role) {
    return component;
  } else {
    return <NotFound />;
  }
}
