import axios from "axios";
import { useQuery } from "react-query";
import config from "../../../config";
import Cookies from "js-cookie";
import Card from './../../Components/Card/Card';
import CardSkeleton from './../../Components/Card/CardSkeleton';

const UserFavorite = () => {

  const getAllfavoritePost = () => {
    return axios({
      method: "get",
      url: `https://kotobekia-backend.onrender.com/api/v1/user/favorites`,
      headers: {
        token: Cookies.get("userToken"),
      },
    });
  };

  const {data , isLoading} =  useQuery("getAllfavoritePost", getAllfavoritePost , {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus

  });
    console.log(data?.data);

  if(isLoading){
    return <CardSkeleton isLoading={isLoading}/>
  }



  return (
    <>
      <div className="user-favorite px-12 my-10 bg-white rounded-b-[14px]">
        <div className="title  pt-9 pb-5  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] font-medium text-xl">
            الإعلانات المفضلة
          </h5>
        </div>

        <div className="parent mt-8 grid grid-cols-4 gap-4">
          {data?.data?.result?.map((post)=><><Card post={post}/></>)}
        </div>
      </div>
    </>
  );
};

export default UserFavorite;
