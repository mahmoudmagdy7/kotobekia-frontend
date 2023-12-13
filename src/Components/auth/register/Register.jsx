import { Input, RadioGroup, Radio } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import config from "../../../../config";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // const day = useRef("");
  // const month = useRef("");
  // const year = useRef("");
  // Validation function

  const validation = (value) => {
    const error = {};
    // const { setFieldValue, setFieldTouched } = formikBag;
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
      error.password = "Password length must be larger than 8 , include Uppercase and Lowercase and Number";
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
    if (!value.birthDate || !value.birthDate.day || value.birthDate.day === "00") {
      error.birthDate.day = "Required";
    }
    if (!value.birthDate || !value.birthDate.month || value.birthDate.month === "00") {
      error.birthDate.month = "Required";
    }
    if (!value.birthDate || !value.birthDate.year || !/^\d{4}$/.test(value.birthDate.year)) {
      error.birthDate.year = "Enter valid year";
    }
    console.log(error);

    return error;
  };

  // Submit Form
  const submit = (value) => {
    if (value.birthDate.day < 10) {
      value.birthDate.day = `0${value.birthDate.day}`;
    }
    if (value.birthDate.month < 10) {
      value.birthDate.month = `0${value.birthDate.month}`;
    }
    // Reset date formatting
    value.birthDate = value.birthDate.day + "/" + value.birthDate.month + "/" + value.birthDate.year;
  };

  // Formik
  const formik = useFormik({
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

  return (
    <>
      <section className="register py-10 max-w-2xl mx-auto select-none">
        <div className="container">
          <div className="title">
            <h2 className="text-xl text-[#131313] font-bold text-center">إنشاء حساب</h2>
            <h4 className="text-xl text-[#131313] font-bold mt-[50px] text-center md:text-start">أنشئ حساب وابحث عن الخير او اصنع خير جديد .</h4>
          </div>
          <div className="social">
            {/*------- Facebook ------- */}
            <div className="soial bg-[#eee] py-3 px-2 flex mt-8 rounded-xl  items-center gap-5">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="14" fill="#E6E6E6" />
                  <circle cx="14" cy="14" r="12.25" fill="url(#paint0_linear_1605_6547)" />
                  <path
                    d="M18.562 17.7464L19.1061 14.2888H15.7021V12.0461C15.7021 11.1 16.1767 10.1772 17.7014 10.1772H19.25V7.23362C19.25 7.23362 17.8452 7 16.5027 7C13.698 7 11.8665 8.65632 11.8665 11.6536V14.2888H8.75V17.7464H11.8665V26.1052C12.4921 26.201 13.1322 26.25 13.7843 26.25C14.4363 26.25 15.0764 26.201 15.7021 26.1052V17.7464H18.562Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_1605_6547" x1="14" y1="1.75" x2="14" y2="26.1773" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#18ACFE" />
                      <stop offset="1" stop-color="#0163E0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-lg text-[#131313]  font-normal">التسجيل باستخدام حساب فيسبوك</span>
            </div>
            {/* ------- Facebook ------- */}
            {/* ------- Google ------- */}
            <div className="soial bg-[#eee] py-3 px-2 flex mt-8 rounded-xl  items-center gap-5">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect y="0.560059" width="28" height="26.88" rx="13.44" fill="#E6E6E6" />
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
              <span className="text-lg text-[#131313]  font-normal">التسجيل باستخدام حساب جوجل </span>
            </div>
            {/* ------- Google ------- */}
          </div>

          <div className="or mt-8 relative">
            <div className="line h-[2px] bg-[#909091] w-[75%] mx-auto"></div>
            <span className=" block text-[#909091] px-3 text-xl font-medium bg-[#eae9eb] absolute top-[-20px] start-[50%] translate-x-[50%]">او</span>
          </div>
          {/* -------- Form --------  */}
          <div className="form mt-4">
            <form onSubmit={formik.handleSubmit}>
              {/* ------- User Name ------- */}
              <div className="form-group mb-4">
                <label htmlFor="" className="text-base text-[#131313] font-medium">
                  الإسم بالكامل
                </label>

                {formik.errors.fullName && formik.touched.fullName ? (
                  <Input
                    type="text"
                    id="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    name="fullName"
                    isInvalid={true}
                    variant="bordered"
                    errorMessage={formik.errors.fullName}
                    placeholder="محمد وحيد البنا"
                    className="mt-1 text-[#333]"
                  />
                ) : (
                  <Input
                    type="text"
                    id="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
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
                <label htmlFor="" className="text-base text-[#131313] font-medium">
                  البريد الالكتروني
                </label>
                {formik.errors.email && formik.touched.email ? (
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    isInvalid={true}
                    variant="bordered"
                    errorMessage={formik.errors.email}
                    placeholder="mohamed@gmail.com"
                    className="mt-1 text-[#333]"
                  />
                ) : (
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  placeholder="201123456789+"
                  className="mt-1 text-[#333]"
                />
              </div> */}
              {/* ------- Phone Number ------- */}
              {/* ------- Password ------- */}
              <div className="form-group  mb-4">
                <label htmlFor="" className="text-base text-[#131313] font-medium">
                  الرقم السري
                </label>
                {formik.errors.password && formik.touched.password ? (
                  <Input
                    type={isVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    isInvalid={true}
                    variant="bordered"
                    errorMessage={formik.errors.password}
                    placeholder="********"
                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="********"
                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
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
                <span className="text-base text-[#131313] font-medium">الجنس</span>
                {formik.errors.gender && formik.touched.gender ? (
                  <RadioGroup
                    label=""
                    orientation="horizontal"
                    className="text-base text-[#131313] font-medium"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={true}
                    variant="bordered"
                    errorMessage={formik.errors.gender}
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
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                <label htmlFor="" className="text-base text-[#131313] font-medium block mb-1 ">
                  تاريخ الميلاد
                </label>

                <div className="date text-[#333] flex gap-5">
                  {formik.errors?.birthDate?.day && formik.touched?.birthDate?.day ? (
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
                        value={formik.values?.birthDate?.day}
                        errorMessage={formik.errors?.birthDate?.day}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
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
                        value={formik.values?.birthDate?.day}
                        // ref={day}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={`text-center outline-none w-[100px]   focus:bg-white rounded-xl  py-3`}
                      />
                    </div>
                  )}
                  <div className="month">
                    {formik.errors?.birthDate?.month && formik.touched?.birthDate?.month ? (
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
                          value={formik.values?.birthDate?.month}
                          errorMessage={formik.errors?.birthDate?.month}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
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
                          value={formik.values?.birthDate?.month}
                          // ref={month}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          className={`text-center outline-none w-[100px]   focus:bg-white rounded-xl  py-3`}
                        />
                      </div>
                    )}
                  </div>
                  <div className="year flex-1 ">
                    {formik.errors?.birthDate?.year && formik.touched?.birthDate?.year ? (
                      <div className="year w-full">
                        <Input
                          type="text"
                          id="year"
                          name="birthDate.year"
                          placeholder="year"
                          isInvalid={true}
                          variant="bordered"
                          maxLength={2}
                          // ref={year}
                          value={formik.values?.birthDate?.year}
                          errorMessage={formik.errors?.birthDate?.year}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
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
                          maxLength={2}
                          variant="bordered"
                          value={formik.values?.birthDate?.year}
                          // ref={year}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          className={`text-center outline-none w-full  focus:bg-white rounded-xl  py-3`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* ------- date ------- */}
              <button
                type="submit"
                style={{
                  "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                }}
                className="bg-[#28D8AE] rounded-[14px] text-[16px] h-12 flex items-center justify-center gap-1 w-full"
              >
                <span className="text-base">إنشاء حساب</span>
              </button>
            </form>

            <p className="text-[#131313] text-[13px] font-bold text-center mt-6">
              لديك حساب؟{" "}
              <Link to={"/auth/login"} className="text-[#28D8AE] underline">
                تسجيل الدخول
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
