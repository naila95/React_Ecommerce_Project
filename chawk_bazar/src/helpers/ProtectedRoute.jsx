import React from "react";

export default function ProtectedRoute({ component, role }) {
  const { user } = useContext(AuthContext);
  if (user.role === role) {
    return component;
  } else {
    return <NotFound />;
  }
}
