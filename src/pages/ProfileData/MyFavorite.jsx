import axios from "axios";
import { useQuery } from "react-query";
import config from "../../../config";
import Cookies from "js-cookie";
import Card from "../../Components/Card/Card";
import CardSkeleton from "../../Components/Card/CardSkeleton";
import { Link } from "react-router-dom";
import * as solarIcons from "solar-icon-set";

const MyFavorite = () => {
  const getAllfavoritePost = async () => {
    return axios.get(`${config.bseUrl}/api/v1/user/favorites`, {
      headers: {
        token: Cookies.get("userToken"),
      },
    });
  };

  const { data, isLoading } = useQuery("getAllfavoritePost", getAllfavoritePost, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });
  console.log(data?.data);

  if (isLoading) {
    return <CardSkeleton isLoading={isLoading} />;
  }

  return (
    <>
      <div className="user-favorite px-5 lg:px-12 my-10 bg-white rounded-b-[14px] ">
        <div className="title  pt-9 pb-5 ps-10 flex md:block  border-b-1 border-[#EDEDED] ">
          <h5 className="text-black md:text-[#28D8AE] font-medium text-xl mx-auto">الإعلانات المفضلة</h5>
          <Link to={"/profile"} className="icon lg:hidden">
            <solarIcons.AltArrowLeft size={32} color="#1C274C" />
          </Link>
        </div>

        <div className="parent mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.data?.result?.map((post) => (
            <>
              <Card post={post} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyFavorite;
