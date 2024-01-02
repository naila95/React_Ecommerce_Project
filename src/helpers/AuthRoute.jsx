import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "../layouts/dashboard/components/UI/Spinner";

export default function AuthRoute({ children }) {
  const { user } = useContext(UserContext);
  console.log(user);
  if (user) {
    return children;
  } else if (user === null) return <Spinner />;
  else {
    return <Navigate to={"/auth/login"} />;
  }
}
