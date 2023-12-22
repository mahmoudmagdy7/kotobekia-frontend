import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useAutho = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  function test() {
    if (Cookies.get("userToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    test();
  }, [isLoggedIn]);

  return {isLoggedIn};
};
