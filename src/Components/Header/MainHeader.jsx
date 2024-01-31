import palestine from "/assets/palestine.png";
import NavHeader from "./NavHeader/NavHeader";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(null);
  useEffect(() => {
    let lastScrollPosition = 0;
    // Add an event listener for the scroll event
    window.addEventListener("scroll", function () {
      // Get the current scroll position
      const currentScrollPosition = window.scrollY;
      // Check if the user is scrolling down
      if (currentScrollPosition > lastScrollPosition && window.scrollY > 100) {
        // Add your code for when the user is scrolling down
        setScrollPosition("down");
      }
      // Check if the user is scrolling up
      if (currentScrollPosition < lastScrollPosition) {
        setScrollPosition("up");
        // Add your code for when the user is scrolling up
      }
      // Update the last known scroll position
      lastScrollPosition = currentScrollPosition;
    });
  }, []);
  return (
    <>
      <header className={` sticky z-[48] transition-all ${scrollPosition === "up" ? "top-0" : "top-[-200px]"}`}>
        {/* top header  */}
        <div className=" py-[9px] h-[37px] flex items-center justify-center bg-[#1F292F] text-center relative ">
          <div className="flex items-center ">
            <img src={palestine} alt="palestine_icons" title="Palestine" className="me-3 w-[23px] md:w-[32px]" />
            <span className="text-[12px] md:text-[16px] mt-[2px]   font-bold">لا بلد بعد فلسطين ولا عاصمه بعد القدس </span>
          </div>
        </div>
        {/* top header  */}

        {/* navbar  */}
        <NavHeader />
        {/* navbar  */}
      </header>
    </>
  );
};

export default MainHeader;
