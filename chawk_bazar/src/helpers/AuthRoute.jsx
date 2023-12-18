import React from "react";
import { Navigate } from "react-router";
import kjb from '../assets/1.webp'
export default function AuthRoute({ component, redirectLink }) {
  // Auth check
  if (true) {
    return component;
  } else {
    return <Navigate to={redirectLink} />;
  }
}
