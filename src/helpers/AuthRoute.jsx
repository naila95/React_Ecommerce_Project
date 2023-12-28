import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const { user } = useContext(UserContext);
  console.log(user);
  if (user) {
    return children;
  } else {
    return <Navigate to={"/auth/register"} />;
  }
}
