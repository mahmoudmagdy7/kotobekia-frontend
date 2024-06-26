import "../../App.css";
import * as solarIcons from "solar-icon-set";
import PartnerSection from "../../Components/PartnerSection/PartnerSection";
import MainSlider from "../../Components/MainSlider/MainSlider";
import PartsOfCategory from "../../Components/PartsOfCategory/PartsOfCategory";
import { useQuery } from "react-query";
import axios from "axios";
import config from "../../../config";
import { useSocket } from "../../app/SocketContext";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { LocationContext, LocationProvider } from "../../app/LocationContext";
import { getUserData } from "../../app/Slices/userDataSlice";

function Home() {
  const { isLoggedIn } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const { location } = useContext(LocationContext);
  function getHomeData() {
    return axios.get(`${config.bseUrl}/api/v1/levels/levels-posts${location ? `?city=` + location : ""}`);
  }
  document.body.classList.remove("overflow-hidden");

  const { isLoading, isError, data, refetch, isRefetching } = useQuery("getHomeData", getHomeData, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });
  const socket = useSocket();
  useEffect(() => {
    refetch();
  }, [location]);
  return (
    <>
      <MainSlider />
      {/* general section */}
      <PartsOfCategory isLoading={isLoading} title={"general"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={data?.data?.result[4]} />
      {/* secondary */}
      <PartsOfCategory
        isLoading={isLoading}
        title={"secondary"}
        icon={<solarIcons.Backpack size={24} className="icon-outline" />}
        data={data?.data?.result[3]}
      />
      {/* mid level  */}
      <PartsOfCategory
        isLoading={isLoading}
        title={"mid_level"}
        icon={<solarIcons.Backpack size={24} className="icon-outline" />}
        data={data?.data?.result[2]}
      />
      {/* primary level */}
      <PartsOfCategory isLoading={isLoading} title={"primary"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={data?.data?.result[1]} />

      <PartsOfCategory
        isLoading={isLoading}
        isRefetching={isRefetching}
        title={"KG"}
        icon={<solarIcons.Backpack size={24} className="icon-outline" />}
        data={data?.data?.result[0]}
      />

      <PartnerSection />
    </>
  );
}

export default Home;
