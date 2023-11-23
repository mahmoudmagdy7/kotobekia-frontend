import palestine from "../../assets/palestine.png";
import NavHeader from './../NavHeader/NavHeader';

const Main_Header = () => {
  return (
    <>
      <header>
        {/* top header  */}
        <div className="top h-[37px] flex items-center justify-center bg-[#1F292F] text-center relative ">
          <img
            src={palestine}
            alt="palestine_icons"
            title="Palestine"
            className="me-3"
          />
          <p className="text[16px] font-semibold">
            لا بلد بعد فلسطين ولا عاصمه بعد القدس{" "}
          </p>
          <div className=" absolute end-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="129"
              height="36"
              viewBox="0 0 129 36"
              fill="none"
            >
              <rect
                x="158.844"
                y="-4.68445"
                width="23.9105"
                height="129"
                transform="rotate(55.3222 158.844 -4.68445)"
                fill="#1AC15D"
              />
              <rect
                x="106.085"
                y="6"
                width="23.9105"
                height="129"
                transform="rotate(55.3222 106.085 6)"
                fill="white"
              />
              <rect
                x="114.085"
                y="-21"
                width="18.2142"
                height="129"
                transform="rotate(55.3222 114.085 -21)"
                fill="#131313"
              />
              <path
                d="M94 29.5L99.5 0L134.5 -7L133 25.5L94 29.5Z"
                fill="#FF0000"
              />
            </svg>
          </div>
        </div>
        {/* top header  */}

          {/* navbar  */}
            <NavHeader/>
          {/* navbar  */}

      </header>
    </>
  );
};

export default Main_Header;
