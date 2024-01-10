import CardSkeleton from "../../Components/Card/CardSkeleton";
import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import config from "../../../config";
import Card from "../../Components/Card/Card";


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
      <div className="user-favorite px-12 my-10 bg-white rounded-b-[14px]">
        <div className="title  pt-9 pb-5  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] font-medium text-xl">إعلاناتي</h5>
        </div>

        <div className="parent mt-8 grid grid-cols-4 gap-4">
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
