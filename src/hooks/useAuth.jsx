import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const isLoggedInUser = function () {
  if (Cookies.get("userToken")) {
    return true;
  } else {
    return false;
  }
};
const getLoggedInUserInformation = function () {
  if (Cookies.get("userToken")) {
    return jwtDecode(Cookies.get("userToken"));
  } else {
    return null;
  }
};
const isLoggedIn = isLoggedInUser();
export const loggedInUserInfo = getLoggedInUserInformation();
export default isLoggedIn;
