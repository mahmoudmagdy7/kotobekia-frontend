import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase configurations.
// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
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
