// import { onMessageListener } from "./firebase";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDeviceToken, getTokenFromFirebase, onMessageListener } from "../../firebase";

export const PageNotFound = () => {
  // getDeviceToken();
  // onMessageListener();
  getTokenFromFirebase();

  // State for on app notification.
  const [notificationState, setNotificationState] = useState({
    open: false,
    message: "",
  });

  const { open, message } = notificationState;

  const handleNotificationClick = () => {
    // navigate("/journal");
    setNotificationState({
      ...notificationState,
      open: false,
    });
  };

  const handleNotificationClose = () => {
    setNotificationState({
      ...notificationState,
      open: false,
    });
  };

  // /**
  //  * Method that listens to firebase FCM notification.
  //  * Messages that are sent when the app is in use
  //  * trigger this method.
  //  */
  // onMessageListener()
  //   .then((payload) =>
  //     setNotificationState({
  //       open: true,
  //       message: `🗓 ${payload.data.body}`,
  //     })
  //   )
  //   .catch((err) => {
  //     alert(`An error occured when showing notif ${err}`);
  //   });
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center pb-48">
        <div className="text-center text-black">
          <img src="/assets/images/error_404.png" alt="error" className="w-[45rem] " />
          <h1 className="text-xl mb-2">The page you are looking for does not exist</h1>
          <div className="flex gap-3 justify-center items-center">
            <Link className="underline text-teal-400" to="/">
              Back to home{" "}
            </Link>
            <Link className="underline text-red-600" to="/report-problem">
              Report a problem{" "}
            </Link>
          </div>
        </div>
      </div>
      <p id="client_token" className="text-xl text-black"></p>
    </>
  );
};
