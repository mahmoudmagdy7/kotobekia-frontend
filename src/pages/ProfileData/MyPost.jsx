import CardSkeleton from "../../Components/Card/CardSkeleton";
import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import config from "../../../config";
import Card from "../../Components/Card/Card";
import * as solarIcons from "solar-icon-set";
import { Link } from "react-router-dom";

const MyPost = () => {
  const getAllPosts = () => {
    return axios({
      method: "get",
      url: `${config.bseUrl}/api/v1/user/my-posts`,
      headers: {
        token: Cookies.get("userToken"),
      },
    });
  };

  const { data, isLoading } = useQuery("getAllPosts", getAllPosts, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });
  console.log(data?.data);

  if (isLoading) {
    return <CardSkeleton isLoading={isLoading} />;
  }

  return (
    <>
      <div className="user-Post px-1 lg:px-12 my-10 bg-white rounded-b-[14px]">
        <div className="title  pt-9 pb-5 ps-10 flex md:block   border-b-1 border-[#EDEDED] ">
          <h5 className="text-black md:text-[#28D8AE] font-medium text-xl mx-auto  ">إعلاناتي</h5>
          <Link to={"/profile"} className="icon md:hidden">
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

export default MyPost;
