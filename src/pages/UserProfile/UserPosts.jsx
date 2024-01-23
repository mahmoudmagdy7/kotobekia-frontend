import axios from "axios";
import { useQuery } from "react-query";
import config from "./../../../config";
import Cookies from "js-cookie";
import Card from "./../../Components/Card/Card";
import CardSkeleton from "../../Components/Card/CardSkeleton";

const UserPosts = ({ id }) => {
  const getUsrePosts = async () => {
    try {
      
      return axios.get(`${config.bseUrl}/api/v1/user/user-posts/${id}`, {
        headers: {
          token: Cookies.get("userToken"),
        },
      });
    } catch (error) {
      return error;
    }
  };
  const { data , isLoading } = useQuery("getUserPosts", getUsrePosts);
  console.log(data);



  // To Render Loading Screen if data was not found
  if (isLoading) {
    return <CardSkeleton isLoading={isLoading} />;
  }


  return (
    <>
      <div className="user-posts  px-12 bg-white rounded-b-[14px]  ">
        {/* header  */}
        <div className="title pt-9 pb-5  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] font-medium text-xl">الإعلانات</h5>
        </div>
        {/* header  */}
        <div className="posts mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.data?.result.map((post) => (
            <>
              <Card post={post} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPosts;
