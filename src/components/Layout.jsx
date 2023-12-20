import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((store) => store.auth);
    if(!auth.status) return <Navigate to="/login" />;
    return children;
};

export const PublicRoute = ({ children }) => {
  const auth = useSelector((store) => store.auth);
  if(auth.status) return <Navigate to="/" />;
  return children;
};
