import palestine from "/assets/palestine.png";
import NavHeader from "../NavHeader/NavHeader";

const MainHeader = () => {
  return (
    <>
      <header>
        {/* top header  */}
        <div className="top py-[9px] h-[37px] flex items-center justify-center bg-[#1F292F] text-center relative ">
          <div className="flex items-center ">
            <img
              src={palestine}
              alt="palestine_icons"
              title="Palestine"
              className="me-3 w-[23px] md:w-[32px]"
            />
            <span className="text-[12px] md:text-[16px] mt-[2px]   font-bold">
              لا بلد بعد فلسطين ولا عاصمه بعد القدس{" "}
            </span>
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
