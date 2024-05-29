import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import { MainChat } from "./pages/Chats/MainChat.jsx";
import { Conversation } from "./pages/Chats/Conversation.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import PostDetails from "./pages/postDetails/PostDetails";
import { SocketProvider } from "./app/SocketContext";
import { LoginProtector } from "./Components/Protectors/LoginProtector.jsx";
import AddBook from "./pages/AddBook/AddBook.jsx";

// react hot toast
import toast, { Toaster } from "react-hot-toast";
import ProfileData from "./pages/ProfileData/ProfileData";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import MyPerson from "./pages/ProfileData/ProfileDesktop/MyPerson.jsx";
import MyPost from "./pages/ProfileData/MyPost.jsx";
import PersonalDataMobile from "./pages/ProfileData/ProfileMobile/PersonalDataMobile.jsx";
import MyFavorite from "./pages/ProfileData/MyFavorite.jsx";
import UbdateDesktop from "./pages/ProfileData/ProfileDesktop/UbdateDesktop.jsx";
import UbdateUserMobile from "./pages/ProfileData/ProfileMobile/UbdateUserMobile.jsx";
import { LocationProvider } from "./app/LocationContext.jsx";
import { PageNotFound } from "./pages/Issues/PageNotFound.jsx";
import { OurTeam } from "./pages/OurTeam/OurTeam.jsx";
import { onMessageListener } from "./firebase.js";

const route = createBrowserRouter([
  // { path: "/", element: <Home /> },
  { path: "*", element: <PageNotFound /> },
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
      { path: "/our-team/", element: <OurTeam /> },
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
      { path: "/changePass", element: <ChangePassword /> },

      {
        path: "/profile",
        element: (
          <LoginProtector>
            <ProfileData />
          </LoginProtector>
        ),
        children: [
          {
            path: "",
            element: (
              <>
                <MyPerson /> <PersonalDataMobile />
              </>
            ),
          },
          { path: "mypost", element: <MyPost /> },
          { path: "fav", element: <MyFavorite /> },
          {
            path: "ubdate",
            element: (
              <>
                <UbdateDesktop /> <UbdateUserMobile />
              </>
            ),
          },
        ],
      },

      {
        path: "/UserProfile/:userId",
        element: (
          <LoginProtector>
            <UserProfile />
          </LoginProtector>
        ),
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
      order: ["localStorage", "path", "htmlTag", "subdomain"],
      // order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    fallbackLng: "en",
    backend: {
      loadPath: "/assets/languages/{{lng}}/translation.json",
    },
  });

if (import.meta.hot) {
  import.meta.hot.accept();
}
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ChangePassword from "./pages/auth/changePassword/ChangePassword.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <ThemeProvider>
      {/* -------------------------------------- */}
      <Provider store={store}>
        <SocketProvider>
          <LocationProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={route} />
            </QueryClientProvider>
          </LocationProvider>
        </SocketProvider>
      </Provider>
      {/* -------------------------------------- */}
    </ThemeProvider>
  </NextUIProvider>
);
