import Cookies from "js-cookie";
import * as SolaIcons from "solar-icon-set";
import { useSelector } from "react-redux";
import { useAutho } from "../../hooks/useAutho";
import CardSkeleton from "./../../Components/Card/CardSkeleton";
import ProfileDesktop from "./ProfileDesktop";
import ProfileMobile from "./ProfileMobile";

const ProfileData = () => {
  const { userData } = useSelector((state) => state.userData);

  return (
    <>
      <ProfileDesktop />
      <ProfileMobile />
    </>
  );
};

export default ProfileData;
