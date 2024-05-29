import { Input } from "@nextui-org/react";
import DotsLoading from "../../../Components/Loaders/DotsLoading";
import * as solarIcons from "solar-icon-set";

import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import config from "../../../../config";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [spinner, setSpinner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const nav = useNavigate();

  // Submit form
  const submitForm = async (value) => {
    setSpinner(true);
    await axios
      .put(`${config.bseUrl}/api/v1/user/changePassword`, value, {
        headers: {
          token: Cookies.get("userToken"),
        },
      })
      .then(({ data }) => {
        if (data) {
          setSpinner(false);
          toast.success(data.message);
          setTimeout(() => {
            nav("/profile");
          }, 1000);
        }
      })
      .catch(({ response }) => {
        if (response) {
          setSpinner(false);
          toast.error(response.data.msgError);
        }
        console.log(response.data.msgError);
      });
  };

  // validate form
  const validate = (value) => {
    const err = {};
    // CurrentPassword
    if (!value.currentPassword) {
      err.currentPassword = "Required";
    }

    // New Password
    if (!value.newPassword) {
      err.newPassword = "Required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(value.newPassword)
    ) {
      err.newPassword =
        "Password length must be larger than 8 , include Uppercase and Lowercase and Number";
    }

    // Re Password
    if (!value.rePassword) {
      err.rePassword = "Required";
    } else if (value.rePassword !== value.newPassword) {
      err.rePassword = "Not Match";
    }

    return err;
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      rePassword: "",
    },
    validate,
    onSubmit: (value) => submitForm(value),
  });

  return (
    <>
      <div className="changePass py-10 max-w-2xl mx-auto select-none">
        <div className="container">
          {/* head for mobile  */}
          <div className="title md:hidden  pt-9 pb-5 ps-10 flex border-b-1 border-[#EDEDED] ">
            <h5 className="text-black md:text-[#28D8AE] font-medium text-xl mx-auto">
              تغيير كلمة المرور
            </h5>
            <Link to={"/profile/ubdate"} className="icon md:hidden">
              {localStorage.getItem("i18nextLng") === "en" ? (
                <solarIcons.AltArrowRight size={32} color="#1C274C" />
              ) : (
                <solarIcons.AltArrowLeft size={32} color="#1C274C" />
              )}
            </Link>
          </div>
          {/* head for mobile  */}

          {/* Form  */}
          <form onSubmit={formik.handleSubmit}>
            {/* ------- current Password ------- */}
            <div className="form-group  mb-4">
              <Input
                type={isVisible ? "text" : "password"}
                name="currentPassword"
                id="currentPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentPassword}
                placeholder="كلمة المرور الحالية"
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
            </div>
            {/* ------- current Password ------- */}
            {/* ------- New Password ------- */}
            <div className="form-group mt-6  mb-4">
              <label
                htmlFor=""
                className="text-[15px] text-[#131313] block mb-6 font-medium"
              >
                هل نسيت كلمة المرور؟{" "}
              </label>

              {formik.errors.newPassword && formik.touched.newPassword ? (
                <Input
                  type={"password"}
                  name="newPassword"
                  id="newPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                  isInvalid={true}
                  variant="bordered"
                  errorMessage={formik.errors.newPassword}
                  placeholder="كلمة المرور الحاليه"
                  className="mt-1 text-[#333]"
                />
              ) : (
                <Input
                  type={"password"}
                  name="newPassword"
                  id="newPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                  placeholder="كلمة المرور الجديدة"
                  className="mt-1 text-[#333]"
                />
              )}
            </div>
            {/* ------- New Password ------- */}
            {/* ------- Re Password ------- */}
            <div className="form-group mt-6  mb-6">
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <Input
                  type={"password"}
                  name="rePassword"
                  id="rePassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={true}
                  variant="bordered"
                  errorMessage={formik.errors.rePassword}
                  placeholder="كلمة المرور الحاليه"
                  className="mt-1 text-[#333]"
                />
              ) : (
                <Input
                  type={"password"}
                  name="rePassword"
                  id="rePassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.newPassword}
                  placeholder="كلمة المرور الجديدة"
                  className="mt-1 text-[#333]"
                />
              )}
            </div>
            {/* ------- Re Password ------- */}
            {spinner ? (
              <>
                <div className="flex justify-center items-center">
                  <DotsLoading />
                </div>
              </>
            ) : (
              <button
                type="submit"
                style={{
                  "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                }}
                className="bg-[#28D8AE] rounded-[14px] text-[16px] h-12 flex cursor-pointer items-center justify-center gap-1 w-full mb-4"
              >
                <span className="text-base">حفظ التغييرات</span>
              </button>
            )}
          </form>
          {/* Form  */}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
