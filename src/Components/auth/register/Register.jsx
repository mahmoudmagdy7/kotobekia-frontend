import { Input, RadioGroup, Radio } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import config from "../../../../config";
import Cookies from "js-cookie";
import DotsLoading from "./../../Loaders/DotsLoading";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [verify, setVerify] = useState(false);
  const nav = useNavigate();

  const [spinner, setSpinner] = useState(false);

  ///////////////////// Register Formik /////////////////////
  // Validation function
  const validation = (value) => {
    const error = {};
    // const { setFieldValue, setFieldTouched } = formikBag;nmp
    // validate name
    if (!value.fullName) {
      error.fullName = "Your name is required";
    } else if (value.fullName.length < 2) {
      error.fullName = "Your name must be larger than 3 character";
    }

    // validate email
    if (!value.email) {
      error.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
      error.email = "Email is not valid";
    }

    // validate Password
    if (!value.password) {
      error.password = "Password is Required";
    } else if (!/^[A-Za-z0-9]{8,}$/i.test(value.password)) {
      error.password =
        "Password length must be larger than 8 , include Uppercase and Lowercase and Number";
    }

    // validate Gender
    if (!value.gender) {
      error.gender = "Gender is required";
    }

    /*   Mojanad  */

    if (
      !value.birthDate ||
      !value.birthDate.day ||
      value.birthDate.day === "00" ||
      !value.birthDate ||
      !value.birthDate.month ||
      value.birthDate.month === "00" ||
      !value.birthDate ||
      !value.birthDate.year
    ) {
      error.birthDate = {
        day: null,
        month: null,
        year: null,
      };
    }
    if (
      !value.birthDate ||
      !value.birthDate.day ||
      value.birthDate.day === "00"
    ) {
      error.birthDate.day = "Required";
    } else if (!/^([1-9]|[1-2][0-9]|30|31)$/.test(value.birthDate.day)) {
      error.birthDate.day = "Enter valid year";
    }

    if (
      !value.birthDate ||
      !value.birthDate.month ||
      value.birthDate.month === "00"
    ) {
      error.birthDate.month = "Required";
    } else if (!/^([1-9]|1[0-2])$/.test(value.birthDate.month)) {
      error.birthDate.month = "Enter valid year";
    }

    if (
      !value.birthDate ||
      !value.birthDate.year ||
      !/^[1-2]{1}[0-9]{1}[0-9]{1}[0-9]{1}$/.test(value.birthDate.year)
    ) {
      error.birthDate.year = "Enter valid year";
    }

    return error;
  };

  // fetch Register Api
  const apiRegister = async (val) => {
    setSpinner(true);
    const { data } = await axios.post(
      `${config.bseUrl}/api/v1/auth/signUp`,
      val
    );

    // set token to cookies
    Cookies.set("userToken", data.token, {
      expires: 365,
    });

    // Navigate to Home
    if (data.message === "تم تسجيل الحساب") {
      setSpinner(false);
      setVerify(true);
    }
  };
  // Submit Form
  const submit = async (value) => {
    if (value.birthDate.day < 10) {
      value.birthDate.day = `0${value.birthDate.day}`;
    }
    if (value.birthDate.month < 10) {
      value.birthDate.month = `0${value.birthDate.month}`;
    }
    // Reset date formatting
    value.birthDate =
      value.birthDate.day +
      "-" +
      value.birthDate.month +
      "-" +
      value.birthDate.year;
    console.log(value);
    await apiRegister(value);

    setVerify(true);
  };
  // Register Formik
  const registerFormik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      gender: "",
      birthDate: {
        day: "",
        month: "",
        year: "",
      },
    },
    validate: validation,
    onSubmit: submit,
  });

  ///////////////////// Verify Formik /////////////////////

  // Validate Func
  const vaidateVerify = (value) => {
    const error = {};

    if (
      !value.OTP ||
      !value.OTP.num1 ||
      !value.OTP.num2 ||
      !value.OTP.num3 ||
      !value.OTP.num4
    ) {
      error.OTP = {
        num1: "",
        num2: "",
        num3: "",
        num4: "",
      };
    }

    // num1
    if (!value.OTP || value.OTP.num1 == "") {
      error.OTP.num1 = "Required";
    } else if (!/[0-9]{1}$/i.test(value.OTP.num1)) {
      error.OTP.num1 = "Not Valid";
      value.OTP.num1 = "";
    }

    // num2
    if (!value.OTP || !value.OTP.num2) {
      error.OTP.num2 = "Required";
    } else if (!/^[0-9]{1}$/i.test(value.OTP.num2)) {
      error.OTP.num2 = "Not Valid";
      value.OTP.num2 = "";
    }

    // num3
    if (!value.OTP || !value.OTP.num3) {
      error.OTP.num3 = "Required";
    } else if (!/^[0-9]{1}$/i.test(value.OTP.num3)) {
      error.OTP.num3 = "Not Valid";
      value.OTP.num3 = "";
    }

    // num4
    if (!value.OTP || !value.OTP.num4) {
      error.OTP.num4 = "Required";
    } else if (!/^[0-9]{1}$/i.test(value.OTP.num4)) {
      error.OTP.num4 = "Not Valid";
      value.OTP.num4 = "";
    }

    return error;
  };

  // Verify Formik
  const verifyFormik = useFormik({
    initialValues: {
      email: "",
      OTP: {
        num1: "",
        num2: "",
        num3: "",
        num4: "",
      },
    },
    validate: vaidateVerify,
    onSubmit: async (value) => {
      value.email = registerFormik.values.email;
      value.OTP = `${value.OTP.num1}${value.OTP.num2}${value.OTP.num3}${value.OTP.num4}`;
      setSpinner(true);
      const { data } = await axios.post(
        `${config.bseUrl}/api/v1/auth/verify-OTP`,
        value
      );
      if (data.message === "OTP Verified Successfully") {
        setSpinner(false);
        nav("/");
      }
    },
  });
  /******************* Verify Formik *******************/

  return (
    <>
      <section className={`register py-10 max-w-2xl mx-auto select-none`}>
        <div
          className={`container ${
            verify ? "bg-white" : ""
          }  py-6 rounded-[14px]`}
        >
          {/* Head Title  */}
          <div className="title ">
            {verify ? (
              <>
                <h2 className="text-xl text-[#131313] font-bold text-center">
                  التحقق من البيانات
                </h2>

                <div className="icon flex justify-center my-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="88"
                    viewBox="0 0 110 88"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1930_10584)">
                      <path
                        d="M86.3298 29.1143L62.6806 46.1295C58.2051 49.2651 51.9313 49.2651 47.4558 46.1295L23.6035 29.1143"
                        stroke="#C8C5C5"
                        stroke-width="2.12338"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.7799 1.56152H81.0518C88.5887 1.63706 95.7623 4.48435 100.902 9.44025C106.041 14.3962 108.698 21.0281 108.253 27.7915V60.1341C108.698 66.8975 106.041 73.5294 100.902 78.4853C95.7623 83.4412 88.5887 86.2885 81.0518 86.3641H28.7799C12.5908 86.3641 1.67969 74.5948 1.67969 60.1341V27.7915C1.67969 13.3308 12.5908 1.56152 28.7799 1.56152Z"
                        stroke="#C8C5C5"
                        stroke-width="2.12338"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1930_10584">
                        <rect
                          width="109"
                          height="87.0584"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl text-[#131313] font-bold text-center">
                  إنشاء حساب
                </h2>
                <h4 className="text-xl text-[#131313] font-bold mt-[50px] text-center md:text-start">
                  أنشئ حساب وابحث عن الخير او اصنع خير جديد .
                </h4>
              </>
            )}
          </div>
          {/* Head Title  */}

          {verify ? null : (
            <>
              <div className="social">
                {/*------- Facebook ------- */}
                <div className="soial bg-[#eee] py-3 px-2 flex mt-8 rounded-xl  items-center gap-5">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <rect width="28" height="28" rx="14" fill="#E6E6E6" />
                      <circle
                        cx="14"
                        cy="14"
                        r="12.25"
                        fill="url(#paint0_linear_1605_6547)"
                      />
                      <path
                        d="M18.562 17.7464L19.1061 14.2888H15.7021V12.0461C15.7021 11.1 16.1767 10.1772 17.7014 10.1772H19.25V7.23362C19.25 7.23362 17.8452 7 16.5027 7C13.698 7 11.8665 8.65632 11.8665 11.6536V14.2888H8.75V17.7464H11.8665V26.1052C12.4921 26.201 13.1322 26.25 13.7843 26.25C14.4363 26.25 15.0764 26.201 15.7021 26.1052V17.7464H18.562Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1605_6547"
                          x1="14"
                          y1="1.75"
                          x2="14"
                          y2="26.1773"
                          gradientUnits="userSpaceOnUse"
                        ></linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-lg text-[#131313]  font-normal">
                    التسجيل باستخدام حساب فيسبوك
                  </span>
                </div>
                {/* ------- Facebook ------- */}
                {/* ------- Google ------- */}
                <div className="soial bg-[#eee] py-3 px-2 flex mt-8 rounded-xl  items-center gap-5">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <rect
                        y="0.560059"
                        width="28"
                        height="26.88"
                        rx="13.44"
                        fill="#E6E6E6"
                      />
                      <path
                        d="M26.2512 14.2612C26.2512 13.2943 26.1678 12.5887 25.9873 11.8569H14.2512V16.2211H21.14C21.0012 17.3057 20.2512 18.9391 18.5845 20.0366L18.5612 20.1827L22.2719 22.8872L22.529 22.9113C24.89 20.8598 26.2512 17.8414 26.2512 14.2612Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M14.2505 25.7602C17.6254 25.7602 20.4587 24.7148 22.5282 22.9116L18.5837 20.0368C17.5282 20.7294 16.1115 21.2128 14.2505 21.2128C10.9449 21.2128 8.13941 19.1614 7.13932 16.3259L6.99273 16.3376L3.13426 19.147L3.0838 19.279C5.13933 23.1206 9.36154 25.7602 14.2505 25.7602Z"
                        fill="#34A853"
                      />
                      <path
                        d="M7.14005 16.3259C6.87617 15.5942 6.72345 14.8101 6.72345 14C6.72345 13.1898 6.87617 12.4058 7.12617 11.6741L7.11918 11.5183L3.21235 8.66382L3.08452 8.72102C2.23734 10.3152 1.75122 12.1053 1.75122 14C1.75122 15.8947 2.23734 17.6847 3.08452 19.2789L7.14005 16.3259Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M14.2505 6.78716C16.5977 6.78716 18.181 7.74102 19.0838 8.53814L22.6116 5.29759C20.445 3.40293 17.6255 2.23999 14.2505 2.23999C9.36158 2.23999 5.13934 4.87944 3.0838 8.721L7.12546 11.6741C8.13944 8.83865 10.945 6.78716 14.2505 6.78716Z"
                        fill="#EB4335"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-[#131313]  font-normal">
                    التسجيل باستخدام حساب جوجل{" "}
                  </span>
                </div>
                {/* ------- Google ------- */}
              </div>

              <div className="or mt-8 relative">
                <div className="line h-[2px] bg-[#909091] w-[75%] mx-auto"></div>
                <span className=" block text-[#909091] px-3 text-xl font-medium bg-[#eae9eb] absolute top-[-20px] start-[50%] translate-x-[50%]">
                  او
                </span>
              </div>
            </>
          )}
          {/* -------- Form --------  */}
          <div className="form mt-4">
            {verify ? (
              <>
                {/* -------- Verify Form --------  */}
                <form onSubmit={verifyFormik.handleSubmit}>
                  {/* ------- Verify OTP ------- */}
                  <h5 className="text-base text-center block mb-8 text-[#131313] font-medium">
                    أدخل رمز OTP
                  </h5>

                  <p className="text-sm text-center text-black font-normal">
                    تم إرسال كود OTP مكون من{" "}
                    <span className="text-[#939393]">4</span> ارقام علي بريدك
                    الإلكتروني.
                  </p>
                  <span className="text-sm text-black font-normal text-center block  ">
                    قم بإدخال الكود:
                  </span>

                  <div
                    style={{ direction: "ltr" }}
                    className="nums mt-4 mb-8 flex gap-5  justify-center  "
                  >
                    {/* num1  */}
                    {verifyFormik.errors?.OTP?.num1 &&
                    verifyFormik.touched?.OTP?.num1 ? (
                      <Input
                        type="text"
                        id="num1"
                        name="OTP.num1"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num1}
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={verifyFormik.errors.OTP.num1}
                        placeholder=""
                        className=" w-[75px] max-h-[55px] text-[#333] text-center rounded-[14px] bg-[#EFEFEF] outline-none "
                      ></Input>
                    ) : (
                      <Input
                        type="text"
                        id="num1"
                        name="OTP.num1"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num1}
                        className="  w-[75px] text-[#333] rounded-[14px] text-center bg-[#EFEFEF] outline-none "
                      ></Input>
                    )}
                    {/* num1  */}
                    {/* num2  */}
                    {verifyFormik.errors?.OTP?.num2 &&
                    verifyFormik.touched?.OTP?.num2 ? (
                      <Input
                        type="text"
                        id="num2"
                        name="OTP.num2"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num2}
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={verifyFormik.errors.OTP.num2}
                        placeholder=""
                        className=" w-[75px] max-h-[55px] text-center text-[#333] rounded-[14px] bg-[#EFEFEF] outline-none "
                      ></Input>
                    ) : (
                      <Input
                        type="text"
                        id="num2"
                        name="OTP.num2"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num2}
                        className="  w-[75px] text-[#333] text-center rounded-[14px] bg-[#EFEFEF] outline-none "
                      ></Input>
                    )}
                    {/* num2  */}

                    {/* num3  */}
                    {verifyFormik.errors?.OTP?.num3 &&
                    verifyFormik.touched?.OTP?.num3 ? (
                      <Input
                        type="text"
                        id="num3"
                        name="OTP.num3"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num3}
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={verifyFormik.errors.OTP.num3}
                        placeholder=""
                        className=" w-[75px] max-h-[55px] text-center text-[#333] rounded-[14px] bg-[#EFEFEF] outline-none "
                      ></Input>
                    ) : (
                      <Input
                        type="text"
                        id="num3"
                        name="OTP.num3"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num3}
                        className="  w-[75px] text-[#333] text-center rounded-[14px] bg-[#EFEFEF] outline-none "
                      ></Input>
                    )}
                    {/* num3  */}
                    {/* num4  */}
                    {verifyFormik.errors?.OTP?.num4 &&
                    verifyFormik.touched?.OTP?.num4 ? (
                      <Input
                        type="text"
                        id="num4"
                        name="OTP.num4"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num4}
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={verifyFormik.errors.OTP.num4}
                        placeholder=""
                        className=" w-[75px] max-h-[55px] text-center text-[#333] rounded-[14px] bg-[#EFEFEF] outline-none "
                      ></Input>
                    ) : (
                      <Input
                        type="text"
                        id="num4"
                        name="OTP.num4"
                        maxLength={1}
                        onChange={verifyFormik.handleChange}
                        onBlur={verifyFormik.handleBlur}
                        value={verifyFormik.values?.OTP?.num4}
                        className="  w-[75px] text-[#333] text-center rounded-[14px] bg-[#EFEFEF] outline-none "
                      ></Input>
                    )}
                    {/* num4  */}
                  </div>

                  {/* ------- Verify OTP ------- */}
                  {spinner ? (
                    <>
                      <div className="flex justify-center items-center">
                        <DotsLoading />
                      </div>
                    </>
                  ) : (
                    <input
                      type="submit"
                      style={{
                        "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                      }}
                      disabled={!(verifyFormik.isValid && verifyFormik.dirty)}
                      className="bg-[#28D8AE] rounded-[14px]  text-base h-12 cursor-pointer flex items-center justify-center gap-1 w-full"
                      value={"تأكيد"}
                    />
                  )}
                </form>
                {/* -------- Verify Form --------  */}
              </>
            ) : (
              <>
                {/* -------- Register Form --------  */}
                <form onSubmit={registerFormik.handleSubmit}>
                  {/* ------- User Name ------- */}
                  <div className="form-group mb-4">
                    <label
                      htmlFor=""
                      className="text-base text-[#131313] font-medium"
                    >
                      الإسم بالكامل
                    </label>

                    {registerFormik.errors.fullName &&
                    registerFormik.touched.fullName ? (
                      <Input
                        type="text"
                        id="fullName"
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        value={registerFormik.values.fullName}
                        name="fullName"
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={registerFormik.errors.fullName}
                        placeholder="محمد وحيد البنا"
                        className="mt-1 text-[#333]"
                      />
                    ) : (
                      <Input
                        type="text"
                        id="fullName"
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        value={registerFormik.values.fullName}
                        name="fullName"
                        placeholder="محمد وحيد البنا"
                        className="mt-1 text-[#333]"
                        onFocus={(e) => (e.target.placeholder = "")}
                      />
                    )}
                  </div>
                  {/* ------- User Name ------- */}
                  {/* ------- Email ------- */}
                  <div className="form-group mb-4">
                    <label
                      htmlFor=""
                      className="text-base text-[#131313] font-medium"
                    >
                      البريد الالكتروني
                    </label>
                    {registerFormik.errors.email &&
                    registerFormik.touched.email ? (
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        value={registerFormik.values.email}
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={registerFormik.errors.email}
                        placeholder="mohamed@gmail.com"
                        className="mt-1 text-[#333]"
                      />
                    ) : (
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        value={registerFormik.values.email}
                        placeholder="mohamed@gmail.com"
                        className="mt-1 text-[#333]"
                      />
                    )}
                  </div>
                  {/* ------- Email ------- */}
                  {/* ------- Phone Number ------- */}
                  {/* <div className="form-group mb-4">
                    <label
                      htmlFor=""
                      className="text-base text-[#131313] font-medium"
                    >
                      رقم التليفون
                    </label>
                    <Input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={registerFormik.handleChange}
                      onBlur={registerFormik.handleBlur}
                      value={registerFormik.values.phoneNumber}
                      placeholder="201123456789+"
                      className="mt-1 text-[#333]"
                    />
                  </div> */}
                  {/* ------- Phone Number ------- */}
                  {/* ------- Password ------- */}
                  <div className="form-group  mb-4">
                    <label
                      htmlFor=""
                      className="text-base text-[#131313] font-medium"
                    >
                      الرقم السري
                    </label>
                    {registerFormik.errors.password &&
                    registerFormik.touched.password ? (
                      <Input
                        type={isVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        value={registerFormik.values.password}
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={registerFormik.errors.password}
                        placeholder="********"
                        endContent={
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <solarIcons.Eye color="#000" />
                            ) : (
                              <solarIcons.EyeClosed color="#000" />

                              // <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        }
                        className="mt-1 text-[#333]"
                      />
                    ) : (
                      <Input
                        type={isVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        value={registerFormik.values.password}
                        placeholder="********"
                        endContent={
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <solarIcons.Eye color="#000" />
                            ) : (
                              <solarIcons.EyeClosed color="#000" />

                              // <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        }
                        className="mt-1 text-[#333]"
                      />
                    )}
                  </div>
                  {/* ------- Password ------- */}
                  {/* ------- Gendar ------- */}
                  <div className="form-group mb-4">
                    <span className="text-base text-[#131313] font-medium">
                      الجنس
                    </span>
                    {registerFormik.errors.gender &&
                    registerFormik.touched.gender ? (
                      <RadioGroup
                        label=""
                        orientation="horizontal"
                        className="text-base text-[#131313] font-medium"
                        value={registerFormik.values.gender}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        isInvalid={true}
                        variant="bordered"
                        errorMessage={registerFormik.errors.gender}
                        id="gender"
                        name="gender"
                        color="red"
                      >
                        <Radio value={"male"}>
                          <span className="mx-2">ذكر</span>
                        </Radio>
                        <Radio value={"female"}>
                          <span className="mx-2">انثي</span>
                        </Radio>
                      </RadioGroup>
                    ) : (
                      <RadioGroup
                        label=""
                        orientation="horizontal"
                        className="text-base text-[#131313] font-medium"
                        value={registerFormik.values.gender}
                        onChange={registerFormik.handleChange}
                        onBlur={registerFormik.handleBlur}
                        id="gender"
                        name="gender"
                        color="red"
                      >
                        <Radio value={"male"}>
                          <span className="mx-2">ذكر</span>
                        </Radio>
                        <Radio value={"female"}>
                          <span className="mx-2">انثي</span>
                        </Radio>
                      </RadioGroup>
                    )}
                  </div>
                  {/* ------- Gendar ------- */}

                  {/* ------- date ------- */}
                  <div className="form-group  mb-8">
                    <label
                      htmlFor=""
                      className="text-base text-[#131313] font-medium block mb-1 "
                    >
                      تاريخ الميلاد
                    </label>

                    <div className="date text-[#333] flex gap-5">
                      {registerFormik.errors?.birthDate?.day &&
                      registerFormik.touched?.birthDate?.day ? (
                        <div className="day">
                          <Input
                            type="text"
                            id="day"
                            name="birthDate.day"
                            placeholder="يوم"
                            isInvalid={true}
                            variant="bordered"
                            maxLength={2}
                            // ref={day}
                            value={registerFormik.values?.birthDate?.day}
                            errorMessage={registerFormik.errors?.birthDate?.day}
                            onBlur={registerFormik.handleBlur}
                            onChange={registerFormik.handleChange}
                            className={`text-center w-[100px]   focus:bg-white rounded-xl  py-3`}
                          />
                        </div>
                      ) : (
                        <div className="day">
                          <Input
                            type="text"
                            id="day"
                            name="birthDate.day"
                            placeholder="يوم"
                            maxLength={2}
                            variant="bordered"
                            value={registerFormik.values?.birthDate?.day}
                            // ref={day}
                            onBlur={registerFormik.handleBlur}
                            onChange={registerFormik.handleChange}
                            className={`text-center outline-none w-[100px]   focus:bg-white rounded-xl  py-3`}
                          />
                        </div>
                      )}
                      <div className="month">
                        {registerFormik.errors?.birthDate?.month &&
                        registerFormik.touched?.birthDate?.month ? (
                          <div className="month">
                            <Input
                              type="text"
                              id="month"
                              name="birthDate.month"
                              placeholder="شهر"
                              isInvalid={true}
                              variant="bordered"
                              maxLength={2}
                              // ref={month}
                              value={registerFormik.values?.birthDate?.month}
                              errorMessage={
                                registerFormik.errors?.birthDate?.month
                              }
                              onBlur={registerFormik.handleBlur}
                              onChange={registerFormik.handleChange}
                              className={`text-center w-[100px]   focus:bg-white rounded-xl  py-3`}
                            />
                          </div>
                        ) : (
                          <div className="month">
                            <Input
                              type="text"
                              id="month"
                              name="birthDate.month"
                              placeholder="يوم"
                              maxLength={2}
                              variant="bordered"
                              value={registerFormik.values?.birthDate?.month}
                              // ref={month}
                              onBlur={registerFormik.handleBlur}
                              onChange={registerFormik.handleChange}
                              className={`text-center outline-none w-[100px]   focus:bg-white rounded-xl  py-3`}
                            />
                          </div>
                        )}
                      </div>
                      <div className="year flex-1 ">
                        {registerFormik.errors?.birthDate?.year &&
                        registerFormik.touched?.birthDate?.year ? (
                          <div className="year w-full">
                            <Input
                              type="text"
                              id="year"
                              name="birthDate.year"
                              placeholder="year"
                              isInvalid={true}
                              variant="bordered"
                              maxLength={4}
                              // ref={year}
                              value={registerFormik.values?.birthDate?.year}
                              errorMessage={
                                registerFormik.errors?.birthDate?.year
                              }
                              onBlur={registerFormik.handleBlur}
                              onChange={registerFormik.handleChange}
                              className={`text-center w-full  focus:bg-white rounded-xl  py-3`}
                            />
                          </div>
                        ) : (
                          <div className="year w-full">
                            <Input
                              type="text"
                              id="year"
                              name="birthDate.year"
                              placeholder="year"
                              maxLength={4}
                              variant="bordered"
                              value={registerFormik.values?.birthDate?.year}
                              // ref={year}
                              onBlur={registerFormik.handleBlur}
                              onChange={registerFormik.handleChange}
                              className={`text-center outline-none w-full  focus:bg-white rounded-xl  py-3`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* ------- date ------- */}

                  {spinner ? (
                    <>
                      <div className="flex justify-center items-center">
                        <DotsLoading />
                      </div>
                    </>
                  ) : (
                    <input
                      type="submit"
                      style={{
                        "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                      }}
                      disabled={
                        !(registerFormik.isValid && registerFormik.dirty)
                      }
                      className="bg-[#28D8AE] rounded-[14px]  text-base h-12 flex items-center cursor-pointer justify-center gap-1 w-full"
                      value={"إنشاء حساب"}
                    />
                  )}
                </form>
                {/* -------- Register Form --------  */}
              </>
            )}

            <p className="text-[#131313] text-[13px] font-bold text-center mt-6">
              {verify ? <> لم تتلقى رمز OTP؟ </> : <>لديك حساب؟ </>}
              <Link to={"/auth/login"} className="text-[#28D8AE] underline">
                {verify ? <>إعادة إرسال الكود</> : <>تسجيل الدخول</>}
              </Link>
            </p>
          </div>
          {/* -------- Form --------  */}
        </div>
      </section>
    </>
  );
};

export default Register;
