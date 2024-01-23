import { Input } from "@nextui-org/react";

const UbdateDesktop = () => {
  return (
    <>
      <div className="ubdate-desktop hidden md:block px-12 bg-white rounded-b-[14px]  ">
        <div className="title pt-9 pb-5  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] font-medium text-xl">
            تعديل الملف الشخصي
          </h5>
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

          <input
            type="submit"
            style={{
              "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
            }}
            // disabled={!(verifyFormik.isValid && verifyFormik.dirty)}
            className="bg-[#28D8AE] hover:bg-[#5dbfa8] transition-all  rounded-[14px]  text-base h-12 cursor-pointer flex items-center justify-center gap-1 w-full"
            value={"تأكيد"}
          />
        </div>
      </div>
    </>
  );
};

export default UbdateDesktop;
