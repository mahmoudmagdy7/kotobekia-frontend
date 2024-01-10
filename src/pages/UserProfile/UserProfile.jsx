import axios from "axios";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import UserProfileDesktop from "./userProfileDesktop";

const UserProfile = () => {
  const {userId} = useParams();
  //  getAllDataForUser
  const getAllDataForUser = () => {
    return axios({
      method: "get",
      url: `https://kotobekia-backend.onrender.com/api/v1/user/specific/${userId}`,
      headers: {
        token: Cookies.get("userToken"),
      },
    });
  };

  const  userPreson = useQuery("presonalData", getAllDataForUser, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });
  if (!userPreson.isLoading) {
    console.log(userPreson?.data?.data?.result);
  }

  return <>
  
  <UserProfileDesktop isLoading={userPreson.isLoading} userData= {userPreson.data} />
  
  </>;
};

export default UserProfile;
