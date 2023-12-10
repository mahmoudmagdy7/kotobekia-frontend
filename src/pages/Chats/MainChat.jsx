import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ContactCard } from "./ContactCard";
import { useDispatch, useSelector } from "react-redux";
import chatSlice, { getUserConversations, increase } from "../../app/Slices/chatSlice";

export const MainChat = () => {
  const myId = "656a2f930e68eb5bd87455ec";

  const conversations = [
    {
      _id: "656fb95525cbb58627930dcf",
      name: "zaher",
      picture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      isGroup: false,
      users: [
        {
          _id: "656a2f930e68eb5bd87455ec",
          name: "ahmed",
          email: "ahm3@gmail.com",
          picture: "https://res.cloudinary.com/djaxppgjc/image/upload/v1701457812/tstpoau8tgaauvwqco2z.jpg",
          status: "",
          createdAt: "2023-12-01T19:10:11.381Z",
          updatedAt: "2023-12-01T19:10:11.381Z",
          __v: 0,
        },
        {
          picture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          _id: "656a2d1465365cc6a8df58d4",
          name: "zaher",
          email: "ahmed@gmail.com",
          profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          status: "",
          createdAt: "2023-12-01T18:59:32.656Z",
          updatedAt: "2023-12-01T18:59:32.656Z",
          __v: 0,
        },
      ],
      createdAt: "2023-12-05T23:59:17.916Z",
      updatedAt: "2023-12-06T00:00:03.636Z",
      __v: 0,
      latestMessage: {
        _id: "656fb98325cbb58627930dd9",
        sender: {
          _id: "656a2f930e68eb5bd87455ec",
          name: "ahmed",
          email: "ahm3@gmail.com",
          picture: "https://res.cloudinary.com/djaxppgjc/image/upload/v1701457812/tstpoau8tgaauvwqco2z.jpg",
          status: "",
        },
        message: "hallo to zaher Con ",
        conversation: "656fb95525cbb58627930dcf",
        files: [],
        createdAt: "2023-12-06T00:00:03.606Z",
        updatedAt: "2023-12-06T00:00:03.606Z",
        __v: 0,
      },
    },
    {
      _id: "656ce9d87ff3091c2107ddf8",
      name: "ahmed",
      picture: "https://res.cloudinary.com/djaxppgjc/image/upload/v1701613777/dsudldgzx6eqcnba7egb.jpg",
      isGroup: false,
      users: [
        {
          _id: "656a2f930e68eb5bd87455ec",
          name: "ahmed",
          email: "ahm3@gmail.com",
          picture: "https://res.cloudinary.com/djaxppgjc/image/upload/v1701457812/tstpoau8tgaauvwqco2z.jpg",
          status: "",
          createdAt: "2023-12-01T19:10:11.381Z",
          updatedAt: "2023-12-01T19:10:11.381Z",
          __v: 0,
        },
        {
          _id: "656c90d12130b531edf0445c",
          name: "mahmoud",
          email: "ahmedashraf@gmail.com",
          picture: "https://res.cloudinary.com/djaxppgjc/image/upload/v1701613777/dsudldgzx6eqcnba7egb.jpg",
          status: "صل علي قدوتنا وحبيبنا ",
          createdAt: "2023-12-03T14:29:37.505Z",
          updatedAt: "2023-12-03T14:29:37.505Z",
          __v: 0,
        },
      ],
      createdAt: "2023-12-03T20:49:28.024Z",
      updatedAt: "2023-12-05T23:55:44.522Z",
      __v: 0,
      latestMessage: {
        _id: "656fb880b8dfb9f1463f9f99",
        sender: {
          _id: "656a2f930e68eb5bd87455ec",
          name: "ahmed",
          email: "ahm3@gmail.com",
          picture: "https://res.cloudinary.com/djaxppgjc/image/upload/v1701457812/tstpoau8tgaauvwqco2z.jpg",
          status: "",
        },
        message: "hallo ffffffff3 ",
        conversation: "656ce9d87ff3091c2107ddf8",
        files: [],
        createdAt: "2023-12-05T23:55:44.500Z",
        updatedAt: "2023-12-05T23:55:44.500Z",
        __v: 0,
      },
    },
  ];
  const { userConversationsCount, userConversations, activeUser } = useSelector((state) => state.chat);
  const store = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserConversations());
  }, [dispatch]);

  // console.log(store);
  return (
    <section className="container ">
      <div className="text-black bg-white mb-5 h-[40rem] grid grid-cols-12">
        <aside className="border-e-2 col-span-4 ">
          <div className="flex items-center p-3 gap-2 border-b-2 relative">
            <h3>Inbox</h3> <span className="inline-flex items-center justify-center h-5 w-5 bg-[#28D8AE] rounded-md">{userConversationsCount}</span>
            <span className="absolute bottom-1 h-[3px] w-16 bg-[#28D8AE]"></span>
          </div>

          {/* ---------- contacts ------------ */}
          <div className=" h-[37rem]">
            {userConversations?.conversations?.map((conv) => (
              <ContactCard conv={conv} key={conv._id} />
            ))}
          </div>
        </aside>
        <section className="col-span-8 w-full overflow-hidden ">
          <Outlet />
        </section>
      </div>
    </section>
  );
};
