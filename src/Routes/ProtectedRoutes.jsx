import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Custom-hooks/useAuth";

// Protected routes handle
const ProtectedRoutes = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
