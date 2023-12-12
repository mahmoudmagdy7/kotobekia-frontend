import "../../App.css";
import * as solarIcons from "solar-icon-set";
import PartnerSection from "../../Components/PartnerSection/PartnerSection";
import MainSlider from "../../Components/MainSlider/MainSlider";
import PartsOfCategory from "../../Components/PartsOfCategory/PartsOfCategory";
import { useQuery } from "react-query";
import axios from "axios";
import config from "../../../config";
import { useSocket } from "../../app/SocketContext";
import { useEffect } from "react";

function Home() {
  function getHomeData() {
    return axios.get(`${config.bseUrl}/v1/levels/levels-posts`);
  }
  document.body.classList.remove("overflow-hidden");

  const { isLoading, isError, data, refetch, isRefetching } = useQuery("getHomeData", getHomeData, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });

  const socket = useSocket();

  return (
    <>
      <MainSlider />

      <PartsOfCategory title={"KG"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={data?.data?.result[0]} />
      <PartsOfCategory title={"primary_Education"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={data?.data?.result[1]} />
      <PartsOfCategory title={"mid-level_education"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={data?.data?.result[2]} />
      <PartsOfCategory title={"secondary_education"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={data?.data?.result[3]} />
      <PartsOfCategory title={"general"} icon={<solarIcons.Backpack size={24} className="icon-outline" />} data={data?.data?.result[4]} />
      <PartnerSection />
    </>
  );
}

export default Home;
