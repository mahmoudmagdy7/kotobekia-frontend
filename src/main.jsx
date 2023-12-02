import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";

// i18next starting
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { QueryClient, QueryClientProvider } from "react-query";
import AdminTesting from "./pages/AdminTesting.jsx";

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
      { path: "", element: <Home /> },
      { path: "/cate/:id", element: <Category /> },
      { path: "post/:id", element: <AdminTesting /> },
      { path: "post/new", element: <h1>Adding new add</h1> },
      { path: "account/:id", element: <h1>User account</h1> },
      { path: "user-posts/", element: <h1>User posts</h1> },
      { path: "chats/", element: <h1>User Chats</h1> },
      {
        path: "chat",
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

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes
  .use(HttpApi)
  .init({
    supportedLangs: ["ar", "en"],
    detection: {
      order: ["localStorage", , "path", "htmlTag", "subdomain"],
      // order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    fallbackLng: "en",
    backend: {
      loadPath: "/assets/languages/{{lng}}/translation.json",
    },
  });

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    </ThemeProvider>
  </NextUIProvider>
);
