import Cookies from "js-cookie";

const isLoggedInUser = function () {

  if (Cookies.get("userToken")) {
    return true;
  } else {
    return false;
  }

};

const isLoggedIn = isLoggedInUser();
export default isLoggedIn;
