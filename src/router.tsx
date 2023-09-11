import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/AuthComponents/AuthLayout/AuthLayout";
import App from "./App";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import VerifyEmail from "./pages/verifyEmail/verifyEmail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error page</div>,
    children: [],
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
  {
    path: "/contact",
    element: <div>contact</div>,
  },

  // Redirect Urls
  {
    path: "/login",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/signup",
    element: <Navigate to="/auth/signup" />,
  },

  // Authentication routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "verifyEmail/:token",
        element: <VerifyEmail />,
      },
    ],
  },
  // Protected routes
  {
    path: "/home",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <div>This is a protected route</div>,
      },
    ],
  },
]);

export default router;
