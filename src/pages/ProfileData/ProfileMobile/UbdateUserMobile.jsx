import { Input } from "@nextui-org/react";
import * as solarIcons from "solar-icon-set";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import config from "../../../../config";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";
import DotsLoading from "../../../Components/Loaders/DotsLoading";

const UbdateUserMobile = () => {
  const { userData } = useSelector((state) => state.userData);
  const [spinner, setSpinner] = useState(false);

  const validation = (value) => {
    const error = {};

    // validate email
    if (!value.email) {
      error.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
      error.email = "Email is not valid";
    }

    return error;
  };

  const submitForm = async (value) => {
    setSpinner(true);
    await axios
      .patch(`${config.bseUrl}/api/v1/user/update/${userData.id}`, value, {
        headers: { token: Cookies.get("userToken") },
      })
      .then(({ data }) => {
        if (data) {
          setSpinner(false);
          toast.success(data.message);
          console.log(data);
        }
      })
      .catch(({ response }) => {
        console.log(response);
        if (response) {
          setSpinner(false);
          toast.error(response.data.msgError);
        }
        // throw Error()
      });
  };

  const updateFormik = useFormik({
    initialValues: {
      // phoneNumber: "",
      gender: "male",
      email: "",
      birthDate: "",
    },
    validate: validation,
    onSubmit: (value) => submitForm(value),
  });

  return (
    <>
      <div className="ubdate-mobile md:hidden block px-12 bg-white rounded-b-[14px]  ">
        {/* title  */}
        <div className="title pt-9 pb-5 flex justify-between  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] text-center font-medium text-xl mx-auto">
            تعديل الملف الشخصي
          </h5>
          <Link to={"/profile"}>
            <solarIcons.AltArrowLeft size={32} color="#1C274C" />
          </Link>
        </div>
        {/* title  */}
        {/* image  */}
        <div className="image cursor-pointer w-[96px] h-[96px] bg-[#D9D9D9] rounded-full mx-auto my-9 flex justify-center items-center">
          <solarIcons.UploadMinimalistic size={36} color="#1C274C" />
        </div>
        {/* image  */}
        {/* input form  */}
        <form onSubmit={updateFormik.handleSubmit}>
          <div className=" form grid grid-cols-1  lg:grid-cols-2 gap-5  mt-8 w-full pb-8">
            {/* Ubdate  User Name */}
            <Input
              type="text"
              disabled
              placeholder={userData.fullName}
              color="primary"
              className="  text-[#333] text-center  rounded-[14px] bg-[#EFEFEF] outline-none "
            ></Input>
            {/* Ubdate  User Name */}
            {/* Ubdate  User Email */}

            {updateFormik.errors?.email && updateFormik.touched?.email ? (
              <Input
                type="email"
                name="email"
                id="email"
                onChange={updateFormik.handleChange}
                onBlur={updateFormik.handleBlur}
                value={updateFormik.values?.email}
                isInvalid={true}
                // variant="bordered"
                errorMessage={updateFormik.errors?.email}
                placeholder=""
                color="danger"
                className="text-[#333]"
              />
            ) : (
              <Input
                type="email"
                id="email"
                name="email"
                value={updateFormik.values?.email}
                onChange={updateFormik.handleChange}
                onBlur={updateFormik.handleBlur}
                placeholder={"mohamed@gmail.com"}
                className="text-[#333] rounded-[14px] outline-none"
              />
            )}
            {/* Ubdate  User Email */}
            {/* Ubdate  User Date And gender */}
            <div className="dateAndGender  flex gap-5">
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                placeholder={"1/1/2000"}
                value={updateFormik.values.birthDate}
                onChange={updateFormik.handleChange}
                onBlur={updateFormik.handleBlur}
                className="text-[#333] w-full text-center rounded-[14px]  bg-[#EFEFEF] outline-none "
              />
              <select
                id="gender"
                name="gender"
                value={updateFormik.values.gender}
                onChange={updateFormik.handleChange}
                onBlur={updateFormik.handleBlur}
                className="peer h-full w-full rounded-[14px] border bg-[#EFEFEF] px-3 py-2.5 text-[#333]  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            {/* Ubdate  User Date And gender */}
            {/* Change Password */}
            <Link
              to={"/changePass"}
              style={{
                "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
              }}
              className="border-1 border-[#28D8AE] hover:bg-[#28D8AE]  hover:text-white transition-all text-black  rounded-[14px]  text-base h-12 cursor-pointer flex items-center justify-center gap-1 w-full"
            >
              تعديل كلمة المرور
            </Link>
            {/* Change Password */}
            {/* Making Submit */}
            {spinner ? (
              <div className="flex justify-center items-center">
                <DotsLoading />
              </div>
            ) : (
              <input
                type="submit"
                style={{
                  "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                }}
                // disabled={!(verifyFormik.isValid && verifyFormik.dirty)}
                className="bg-[#28D8AE] hover:bg-[#5dbfa8] transition-all  rounded-[14px]  text-base h-12 cursor-pointer flex items-center justify-center gap-1 w-full"
                value={"تأكيد"}
              />
            )}
            {/* Making Submit */}
          </div>
        </form>
        {/* input form  */}
      </div>
    </>
  );
};

export default UbdateUserMobile;
