import { useDispatch, useSelector } from "react-redux";
import { handleLoggedOut } from "../../../app/Slices/userDataSlice";
import CardSkeleton from "../../../Components/Card/CardSkeleton";
import { Switch } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

const ProfileMobile = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.userData);

  return (
    <>
      {userData ? (
        <section className="md:hidden profile-mobile py-10">
          <div className="container">
            <Outlet />
          </div>
        </section>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
};

export default ProfileMobile;
