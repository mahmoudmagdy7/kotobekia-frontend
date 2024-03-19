// // import firebase from "firebase/app";
// // import { firebase } from "firebase";
// // import "firebase/messaging";
// // import { firebase } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { onMessageListener } from "./firebase";
// import { getToken } from "firebase/messaging";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "FROM FIREBASE CONSOLE",
// //   authDomain: "FROM FIREBASE CONSOLE",
// //   databaseURL: "FROM FIREBASE CONSOLE",
// //   projectId: "FROM FIREBASE CONSOLE",
// //   storageBucket: "FROM FIREBASE CONSOLE",
// //   messagingSenderId: "FROM FIREBASE CONSOLE",
// //   appId: "FROM FIREBASE CONSOLE",
// //   measurementId: "FROM FIREBASE CONSOLE",
// // };
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_API_KEY,
//   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_APP_ID,
//   measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
// };
// // const firebase
// // initializeApp(firebaseConfig);

// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);

// // const { REACT_APP_VAPID_KEY } = process.env;
// const publicKey = import.meta.env.VITE_APP_VAPID_KEY;

// // export const getToken = async (setTokenFound) => {
// //   let currentToken = "";

// //   try {
// //     currentToken = await messaging.getToken({ vapidKey: publicKey });
// //     if (currentToken) {
// //       setTokenFound(true);
// //     } else {
// //       setTokenFound(false);
// //     }
// //   } catch (error) {
// //     console.log("An error occurred while retrieving token. ", error);
// //   }

// //   return currentToken;
// // };
// export const getTokenFromFirebase = () => {
//   return getToken(messaging, {
//     vapidKey: publicKey,
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("current token for client: ", currentToken);
//         return currentToken;
//       } else {
//         console.log("No registration token available. Request permission to generate one.");
//         Notification.requestPermission().then((permission) => {
//           console.log("Access for notification is ", permission);
//         });
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//     });
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });
// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// const messaging = getMessaging(app);

const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Not granted");
    }
  });
};

export const getDeviceToken = async () => {
  requestPermission();
  try {
    const currentToken = await getToken(messaging, { vapidKey: import.meta.env.VITE_APP_VAPID_KEY });
    // alert(currentToken);
    document.getElementById("client_token").innerHTML = currentToken;
    return currentToken;
  } catch (error) {
    alert(error);
  }
};

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
// =================================================================================//
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase configurations.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

/**
 * This function requests permission for notifications from Firebase messaging API.
 * It returns a Promise that resolves with the Firebase notification
 * token if permission is granted,
 * or rejects with an error if the request fails or is denied.
 */
export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

/**
 * This function returns a subscription token from Firebase which
 * is used to identify a unique system.
 *
 * If the token is successfully retrieved, it will be logged and returned.
 * If not, the function will request notification permission
 * and log the result of the request.
 */
export const getTokenFromFirebase = () => {
  return getToken(messaging, {
    vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        document.getElementById("client_token").innerHTML = currentToken;
        return currentToken;
      } else {
        console.log("No registration token available. Request permission to generate one.");
        Notification.requestPermission().then((permission) => {
          console.log("Access for notification is ", permission);
        });
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

/**
 * The onMessage function from the Firebase Messaging API
 * is used to listen for incoming messages.
 */
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
