import { Input } from "@nextui-org/react";
import * as solarIcons from "solar-icon-set";
import { Link } from "react-router-dom";

const UbdateUserMobile = () => {
  return (
    <>
      <div className="ubdate-mobile md:hidden block px-12 bg-white rounded-b-[14px]  ">
        <div className="title pt-9 pb-5 flex justify-between  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] text-center font-medium text-xl mx-auto">
            تعديل الملف الشخصي
          </h5>
          <Link to={"/profile"}>
            <solarIcons.AltArrowLeft size={32} color="#1C274C" />
          </Link>
        </div>

        <div className="image cursor-pointer w-[96px] h-[96px] bg-[#D9D9D9] rounded-full mx-auto my-9 flex justify-center items-center">
          <solarIcons.UploadMinimalistic size={36} color="#1C274C" />
        </div>

        <div className=" form grid grid-cols-1  lg:grid-cols-2 gap-5  mt-8 w-full pb-8">
          {/* Ubdate  User Name */}
          <Input
            type="text"
            placeholder={"محمد البنا"}
            className="  text-[#333] text-center  rounded-[14px] bg-[#EFEFEF] outline-none "
          ></Input>
          {/* Ubdate  User Name */}
          {/* Ubdate  User Email */}
          <Input
            type="email"
            // maxLength={1}
            // onChange={verifyFormik.handleChange}
            // onBlur={verifyFormik.handleBlur}
            placeholder={"mohamed@gmail.com"}
            className="  text-[#333] text-center rounded-[14px]  bg-[#EFEFEF] outline-none "
          ></Input>
          {/* Ubdate  User Email */}
          {/* Ubdate  User Date And gender */}
          <div className="dateAndGender  flex gap-5">
            <Input
              type="text"
              placeholder={"1-1-2000"}
              className="  text-[#333]  text-center rounded-[14px]  bg-[#EFEFEF] outline-none "
            ></Input>
            <Input
              type="text"
              placeholder={"ذكر"}
              className="  text-[#333]  text-center rounded-[14px]  bg-[#EFEFEF] outline-none "
            ></Input>
          </div>
          {/* Ubdate  User Date And gender */}
          {/* Change Password */}
          <input
            type="submit"
            style={{
              "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
            }}
            // disabled={!(verifyFormik.isValid && verifyFormik.dirty)}
            className="border-1 border-[#28D8AE] hover:bg-[#28D8AE]  hover:text-white transition-all text-black  rounded-[14px]  text-base h-12 cursor-pointer flex items-center justify-center gap-1 w-full"
            value={" تعديل كلمة المرور"}
          />
          {/* Change Password */}
          {/* Making Submit */}
          <input
            type="submit"
            style={{
              "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
            }}
            // disabled={!(verifyFormik.isValid && verifyFormik.dirty)}
            className="bg-[#28D8AE] hover:bg-[#28d8afec] transition-all  rounded-[14px]  text-base h-12 cursor-pointer flex items-center justify-center gap-1 w-full"
            value={"حفظ التغيرات"}
          />
          {/* Making Submit */}
        </div>
      </div>
    </>
  );
};

export default UbdateUserMobile;
