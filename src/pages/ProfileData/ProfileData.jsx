import ProfileDesktop from "./ProfileDesktop/ProfileDesktop";
import ProfileMobile from "./ProfileMobile/ProfileMobile";


const ProfileData = () => {
  // To remove all active from items
  const removeActive = (icons, items) => {
    document.querySelectorAll(icons).forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll(items).forEach((item) => {
      item.classList.remove("active");
    });
  };

  // // to change color icon
  // const addActiveToIcon = (icon) => {
  //   document
  //     .querySelector(`.data-setting ${icon} .icon`)
  //     .classList.add("active");
  // };
  // // to show section
  // const addActiveToItem = (item) => {
  //   document.querySelector(`.profile-parent ${item}`).classList.add("active");
  // };

  function addActive(iconClass , itemClass) {
    document.querySelector(iconClass).classList.add("active");
    document.querySelector(itemClass).classList.add("active");
  }

  return (
    <>
      <ProfileDesktop addActive={addActive} removeActive={removeActive} />
      <ProfileMobile addActive={addActive} removeActive={removeActive} />
    </>
  );
};

export default ProfileData;
