import { createContext, useEffect, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(localStorage.getItem("locationName"));
  function changeLocation() {
    setLocation(localStorage.getItem("locationName"));
  }
  useEffect(() => {
    changeLocation();
  }, []);

  return <LocationContext.Provider value={{ location, changeLocation }}>{children}</LocationContext.Provider>;
};
