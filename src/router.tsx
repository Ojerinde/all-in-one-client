import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./pages/login/login";
import AuthLayout from "./components/AuthComponents/AuthLayout/AuthLayout";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error page</div>,
    children: [
      {
        path: "contact",
        element: <div>home/contact</div>,
      },
      {
        path: "contacts/:contactId",
        element: <div>ID</div>,
      },

      {
        path: "dashboard",
        element: <div>home/dashboard</div>,
        loader: ({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          }),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      //   {
      //     path: "logout",
      //     action: logoutUser,
      //   },
    ],
  },
]);

export default router;
