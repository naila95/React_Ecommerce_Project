import React from "react";
import { Navigate } from "react-router";
export default function AuthRoute({ component, redirectLink }) {
  // Auth check
  if (true) {
    return component;
  } else {
    return <Navigate to={redirectLink} />;
  }
}
