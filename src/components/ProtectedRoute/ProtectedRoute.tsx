import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Get access to the cooki to check
  //   const token = "ok";
  const token = "";
  if (!token) {
    // UnLoggedin user
    return <Navigate to="/auth/login" />;
  }
  //   Logged in user
  return <Outlet />;
};

export default ProtectedRoute;
