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
import { MainChat } from "./pages/Chats/MainChat.jsx";
import { Conversation } from "./pages/Chats/Conversation.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import PostDetails from "./Components/postDetails/PostDetails";
import Login from "./Components/auth/login/Login";
import Register from "./Components/auth/register/Register";
import { SocketProvider } from "./app/SocketContext";
import { LoginProtector } from "./Components/Protectors/LoginProtector.jsx";
import AddBook from "./pages/AddBook/AddBook.jsx";

// react hot toast
import toast, { Toaster } from "react-hot-toast";

const route = createBrowserRouter([
  // { path: "/", element: <Home /> },
  { path: "*", element: <h1>Not found</h1> },
  // { path: "not-authorized", element: <NoAccess /> },

  { path: "/auth/banned", element: <h1>Banned</h1> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/cate/:id", element: <Category /> },
      { path: "/book/:id", element: <PostDetails /> },
      { path: "/book/new", element: <AddBook /> },
      { path: "/account/:id", element: <h1>User account</h1> },
      { path: "/user-posts/", element: <h1>User posts</h1> },
      {
        path: "/chat/",
        element: (
          <LoginProtector>
            <MainChat />
          </LoginProtector>
        ),

        children: [{ path: ":convId", element: <Conversation /> }],
      },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/verify", element: <Register /> },
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
      order: ["localStorage", "path", "htmlTag", "subdomain"],
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
      {/* -------------------------------------- */}
      <Provider store={store}>
        <SocketProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={route} />
          </QueryClientProvider>
        </SocketProvider>
      </Provider>
      {/* -------------------------------------- */}
    </ThemeProvider>
  </NextUIProvider>
);
