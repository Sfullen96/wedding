import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const isAuthenticated = Boolean(localStorage.getItem("authenticated"));
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
