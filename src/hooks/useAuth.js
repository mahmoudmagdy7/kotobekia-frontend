import Cookies from "js-cookie";

const isLoggedIn = function () {
  if (Cookies.get("userToken")) {
    return true;
  } else {
    return false;
  }
};
export default isLoggedIn;
