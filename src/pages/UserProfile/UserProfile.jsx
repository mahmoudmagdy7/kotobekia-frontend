import axios from "axios";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import UserProfileDesktop from "./userProfileDesktop";

const UserProfile = () => {
  const { userId } = useParams();
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

  const { data, isLoading } = useQuery("presonalData", getAllDataForUser, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });

  return (
    <>
      <UserProfileDesktop isLoading={isLoading} userData={data} />
    </>
  );
};

export default UserProfile;
