import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
const route = createBrowserRouter([
  // { path: "/", element: <Home /> },
  { path: "*", element: <h1>Not found</h1> },
  // { path: "not-authorized", element: <NoAccess /> },
  { path: "/auth/login", element: <h1>Login</h1> },
  { path: "/auth/register", element: <h1>Register</h1> },
  { path: "/auth/banned", element: <h1>Banned</h1> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category", element: <Category /> },
      { path: "/ad", element: <h1>ad page</h1> },
      { path: "/ad/new", element: <h1>Adding new add</h1> },
      { path: "/account/:id", element: <h1>User account</h1> },
      {
        path: "/chat",
        element: (
          <h1>
            User Chats <Outlet />
          </h1>
        ),
        children: [{ path: ":chatId", element: <h1>user chat</h1> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <ThemeProvider>
      <RouterProvider router={route} />
    </ThemeProvider>
  </NextUIProvider>
);
