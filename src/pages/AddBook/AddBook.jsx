import React, { useEffect, useRef, useState } from "react";
import "./addBook.css";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { Input, Button, Select, SelectItem, Textarea, Checkbox, CheckboxGroup, RadioGroup, Radio } from "@nextui-org/react";
import * as solarIcons from "solar-icon-set";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import config from "../../../config";
import i18next from "i18next";
import { siteDirection, siteLanguage } from "../../hooks/useLocale";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import DotsLoading from "../../Components/Loaders/DotsLoading";
import { gotTop } from "../../hooks/useTop";
import isLoggedIn from "../../hooks/useAuth";
const AddPost = () => {
  console.log(config.getCityList());
  const year = new Date().getFullYear();
  const yearsArray = [];
  for (let index = 2010; index <= year; index++) {
    yearsArray.push(index);
  }
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [APIErrors, setAPIErrors] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const imagesRef = useRef(null);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const userToken = Cookies.get("userToken");
  const [isVisible, setIsVisible] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [checkedLevel, setCheckedLevel] = useState(undefined);
  const [checkedGrade, setCheckedGrade] = useState(null);
  const [checkedEducationType, setCheckedEducationType] = useState(null);
  const [checkedEducationTerm, setCheckedEducationTerm] = useState(null);
  const { t } = i18next;
  const nav = useNavigate();
  const maxPrice = 50;
  siteDirection;
  console.log(isLoggedIn);
  const city = config.getCityList();

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Validation function
  /**
   *
   */
  const validation = (values) => {
    const error = {};

    // validate images
    if (!selectedImages || selectedImages?.length == 0) {
      error.images = "At least one image is required";
    }
    if (selectedImages?.length > 5) {
      error.images = "max is 5 images";
    }

    // book City
    if (!values.city) {
      error.city = "This field is required";
    }
    // validate title
    if (!values.title) {
      error.title = "Title is Required";
    }

    // validate description
    if (!values.description) {
      error.description = "description is Required";
    }
    // validate Education level
    if (!values.educationLevel) {
      error.educationLevel = "educationLevel is Required";
    }

    // validate books count
    if (!values.numberOfBooks) {
      error.numberOfBooks = "Books count is Required";
    }
    if (isNaN(values.numberOfBooks)) {
      error.numberOfBooks = "Type must be number";
    }
    // validate price
    if (values.price == null) {
      error.numberOfBooks = "Books count is Required";
    }

    if (parseInt(values.price) < 0) {
      error.price = "This field is required"; // check if not empty
    } else if (values.price > values.numberOfBooks * maxPrice && values.educationLevel != config?.categories[4]?.id) {
      error.price = `Max price fo each book is ${maxPrice} EGP`; // check if not max price limitation
    } else if (isNaN(values.price) || values.price === "") {
      error.price = "Type must be number"; // check if not a number
    }
    if (values.price != 0) {
      setIsFree(false); // check if not free
    }

    // book edition
    if (!values.bookEdition) {
      error.bookEdition = "This field is required";
    }

    return error;
  };

  async function handleSubmit(value) {
    handleNext();
    setIsSubmit(true);
    gotTop();
    // e.preventDefault();
    const postData = new FormData();

    // Append form fields
    postData.append("description", value.description);
    postData.append("images", value.images); // Adjust This line based on your actual structure
    postData.append("city", value.city);
    postData.append("title", value.title);
    postData.append("numberOfBooks", value.numberOfBooks);
    postData.append("price", value.price);
    postData.append("educationLevel", value.educationLevel);
    postData.append("grade", value.grade);
    postData.append("educationType", value.educationType);
    postData.append("educationTerm", value.educationTerm);
    postData.append("bookEdition", value.bookEdition);
    postData.append("location", value.city);

    for (let i = 0; i < selectedImages?.length; i++) {
      postData.append("images", selectedImages[i]);
      // console.log(selectedImages[i]);
    }
    // value.images = imagesRef?.current;
    // console.log(postData);
    for (const pair of postData.entries()) {
      console.log(pair[0], pair[1]);
    }
    try {
      const { data } = await axios(`${config.bseUrl}/api/v1/posts/`, {
        data: postData,
        method: "post",
        headers: { token: userToken },
      }); // Fetch the data
      // Notify the student that login success
      // setIsSubmit(false);
      console.log(data);
      if (data.message === "success") {
        setIsSuccess(true);
      }
      setIsSubmit(false);

      // toast.success(data.message);
    } catch (error) {
      // const { msgError } = error.response?.data;
      // setIsSubmit(false);
      console.log(error?.response?.data?.msgError);
      if (error?.response?.data?.msgError) {
        setAPIErrors(error?.response?.data?.msgError);
      }
      setIsSubmit(false);

      // toast.error(msgError);
    }
  }

  // Formik
  const formik = useFormik({
    initialValues: {
      images: [],
      city: "",
      title: "",
      description: "",
      numberOfBooks: "",
      price: "",
      educationLevel: "",
      grade: "",
      educationType: "",
      educationTerm: "",
      bookEdition: "",
      location: "",
    },
    validate: validation,
    onSubmit: (value) => {
      handleSubmit(value);
    },
  });

  var animation = document.getElementById("successAnimation");

  function handleAnimation(e) {
    e.preventDefault;
    animation.classList.remove("animated");
    void animation.parentNode.offsetWidth;
    animation.classList.add("animated");
  }
  useEffect(() => {
    if (!Cookies.get("userToken")) {
      Cookies.set(
        "userToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzRlMDU4ODVjZDBkYTczZmRhYmE5MiIsImZ1bGxOYW1lIjoiTW9qYW5hZCIsImVtYWlsIjoibW9qYW5hZEBrb3RvYmVraWEuY29tIiwicm9sZSI6InVzZXIiLCJpc0NvbmZpcm1lZCI6ZmFsc2UsImlhdCI6MTcwMjE1ODQyNH0.j0VMeWdxwoy7idBLUI-jvWD0r38MS0o_s4goAL_Gp4k",
        { expires: 50 }
      );
    }
  }, []);
  return (
    <div className="w-full  py-4 container">
      <Stepper
        // className="max-w-2xl m-auto"
        activeLineClassName=" start-0 bg-[#28D8AE] "
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step completedClassName="bg-[#28D8AE]" activeClassName="bg-[#FFC26F]">
          {/* <UserIcon className="h-5 w-5" /> */}
          <solarIcons.PaperAdd size={24} />
        </Step>
        <Step completedClassName="bg-[#28D8AE]" activeClassName="bg-[#FFC26F]">
          {/* <CogIcon className="h-5 w-5" /> */}
          <solarIcons.ClipboardCheck size={24} />
        </Step>
        <Step completedClassName="bg-[#28D8AE]" activeClassName="bg-[#FFC26F]">
          <solarIcons.Plain size={24} />
          {/* <BuildingLibraryIcon className="h-5 w-5" /> */}
        </Step>
      </Stepper>

      <div className=" text-start text-black container lg:px-52">
        <form onSubmit={formik.handleSubmit}>
          {/* ------- city start ------- */}
          {activeStep == 0 ? (
            // ====================================== Primary inputs ======================================
            <div className="form-group my-4 py-5">
              {!selectedImages && !formik.errors.images ? (
                <div
                  onClick={() => imagesRef.current.click()}
                  className="bg-gray-200 border-dashed cursor-pointer border-gray-400 border-2  h-28 rounded-3xl flex items-center justify-center"
                >
                  <div className="text-center">
                    <solarIcons.UploadMinimalistic color="#28D8AE" size={32} />
                    <p>upload image</p>
                  </div>
                </div>
              ) : selectedImages && selectedImages?.length !== 0 && selectedImages?.length <= 5 ? (
                <>
                  <div
                    onClick={() => imagesRef.current.click()}
                    className="bg-gray-200 border-dashed cursor-pointer border-[#28D8AE] border-2  h-28 rounded-3xl flex items-center justify-center"
                  >
                    <div className="text-center">
                      <solarIcons.UploadMinimalistic color="#28D8AE" size={32} />
                      <p>you uploaded {selectedImages.length} image </p>
                    </div>
                  </div>
                </>
              ) : formik.errors.images ? (
                <>
                  <div
                    onClick={() => imagesRef.current.click()}
                    className="bg-gray-200 border-dashed cursor-pointer border-red-400 border-2  h-28 rounded-3xl flex items-center justify-center"
                  >
                    <div className="text-center">
                      <solarIcons.UploadMinimalistic color="red" size={32} />
                      <p>upload image</p>
                    </div>
                  </div>
                  <p className="text-red-400 mt-2 text-xs">{selectedImages?.length > 5 ? "max images count is 5" : "At least one image require"}</p>
                </>
              ) : (
                <>
                  <div
                    onClick={() => imagesRef.current.click()}
                    className="bg-gray-200 border-dashed cursor-pointer border-red-400 border-2  h-28 rounded-3xl flex items-center justify-center"
                  >
                    <div className="text-center">
                      <solarIcons.UploadMinimalistic color="red" size={32} />
                      <p>upload image</p>
                    </div>
                  </div>
                  <p className="text-red-400 mt-2 text-xs">{selectedImages?.length > 5 ? "max images count is 5" : "At least one image require"}</p>
                </>
              )}
              <input
                id="images-input"
                onBlur={formik.handleBlur}
                name="images"
                onClick={() => setSelectedImages(imagesRef.current?.files)}
                onChange={() => {
                  // if()
                  // User selected one or more files
                  setSelectedImages(imagesRef.current?.files);
                }}
                ref={imagesRef}
                size="sm"
                type="file"
                className="w-52  my-8 mx-auto bg-red-50 hidden"
                accept="image/* ,image/jpeg,image/png"
                multiple
              />
              <Select
                label={"Your city"}
                defaultSelectedKeys={formik.values.city ? [formik.values.city] : ""}
                labelPlacement={"outside"}
                className="text-black font-semibold mb-5"
                size="lg"
                errorMessage={formik.errors.city ? formik.errors.city : null}
                isInvalid={formik.errors.city ? true : false}
                variant={formik.errors.city ? "bordered" : "flat"}
              >
                {city.map((item) => {
                  return (
                    <SelectItem
                      key={item.city}
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onClick={() => formik.setFieldValue("city", item.city)}
                      className="text-black"
                    >
                      {item.value}
                    </SelectItem>
                  );
                })}
              </Select>

              {/* ------- city end ------- */}
              {/* ------- post title start ------- */}
              <div className="form-group  mb-4">
                <label htmlFor="" className="text-base font-semibold text-[#131313] ">
                  Book title
                </label>
                {formik.errors.title && formik.touched.title ? (
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    size="sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    isInvalid={true}
                    variant="bordered"
                    errorMessage={formik.errors.title}
                    placeholder="Books title"
                    className="mt-1 text-[#333]"
                  />
                ) : (
                  <Input
                    type="text"
                    name="title"
                    size="sm"
                    id="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    placeholder="Books title"
                    className="mt-1 text-[#333]"
                  />
                )}
              </div>
              {/* ------- post title end ------- */}
              {/* ------- post description start ------- */}
              <div className="form-group  mb-4">
                <label htmlFor="" className="text-base font-semibold text-[#131313] ">
                  Description
                </label>
                {formik.errors.description && formik.touched.description ? (
                  <Textarea
                    maxLength={150}
                    type="text"
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    isInvalid={true}
                    variant="bordered"
                    errorMessage={formik.errors.description}
                    placeholder="5"
                    className="mt-1 text-[#333]"
                  />
                ) : (
                  <Textarea
                    maxLength={150}
                    type="text"
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    placeholder="Books description"
                    className="mt-1 text-[#333]"
                  />
                )}
              </div>
              {/* ------- post description end ------- */}
              {/* ------- Education Level start ------- */}
              <div className="mb-4">
                <h3 className="mb-3">
                  {t("education_levels.title")}
                  {/* <span className="text-xs ms-1">( Optional )</span> */}
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {/* ------- KG ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationLevel = config?.categories[0]?.id;
                      setCheckedLevel(0);
                      formik.errors.educationLevel = null;
                      if (checkedLevel == 0) {
                        setCheckedLevel(null);

                        formik.values.educationLevel = "";
                      }
                    }}
                    checked={checkedLevel == 0 ? true : false}
                    className={` ${checkedLevel == 0 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_levels.KG")}
                  </Button>
                  {/* ------- primary ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationLevel = config?.categories[1]?.id;
                      setCheckedLevel(1);
                      formik.errors.educationLevel = null;
                      if (checkedLevel == 1) {
                        setCheckedLevel(null);

                        formik.values.educationLevel = "";
                      }
                    }}
                    checked={checkedLevel == 1 ? true : false}
                    className={` ${checkedLevel == 1 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_levels.primary")}
                  </Button>
                  {/* ------- mid-level ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationLevel = config?.categories[2]?.id;
                      setCheckedLevel(2);
                      formik.errors.educationLevel = null;
                      if (checkedLevel == 2) {
                        setCheckedLevel(null);

                        formik.values.educationLevel = "";
                      }
                    }}
                    checked={checkedLevel == 2 ? true : false}
                    className={` ${checkedLevel == 2 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_levels.mid_level")}
                  </Button>
                  {/* ------- secondary ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationLevel = config?.categories[3]?.id;
                      setCheckedLevel(3);
                      formik.errors.educationLevel = null;
                      if (checkedLevel == 3) {
                        setCheckedLevel(null);

                        formik.values.educationLevel = "";
                      }
                    }}
                    checked={checkedLevel == 3 ? true : false}
                    className={` ${checkedLevel == 3 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_levels.secondary")}
                  </Button>
                  {/* ------- General ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationLevel = config?.categories[4]?.id;
                      setCheckedLevel(4);
                      formik.errors.educationLevel = null;
                      if (checkedLevel == 4) {
                        setCheckedLevel(null);

                        formik.values.educationLevel = "";
                      }
                    }}
                    checked={checkedLevel == 4 ? true : false}
                    className={` ${checkedLevel == 4 ? " border-2 border-[#28D8AE] " : "border-none"}  rounded-2xl bg-white`}
                  >
                    {t("education_levels.general")}
                  </Button>
                </div>
                {formik.errors.educationLevel ? <p className="text-sm text-red-600 mt-2">This field is required</p> : null}
              </div>
              {/* ------- Education Level end ------- */}
              {/* ------- Books count start ------- */}
              <div className="form-group  mb-4">
                <label htmlFor="" className="text-base font-semibold text-[#131313] ">
                  Books count
                </label>
                <Input
                  size="sm"
                  errorMessage={formik.errors.numberOfBooks && formik.touched.numberOfBooks ? formik.errors.numberOfBooks : ""}
                  type="text"
                  name="numberOfBooks"
                  variant={formik.errors.numberOfBooks && formik.touched.numberOfBooks ? "bordered" : ""}
                  min={1}
                  maxLength={3}
                  id="numberOfBooks"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.numberOfBooks}
                  placeholder="3"
                  isInvalid={formik.errors.numberOfBooks && formik.touched.numberOfBooks}
                  className="mt-1 text-[#333]"
                />
                {/* {formik.errors.numberOfBooks && formik.touched.numberOfBooks ? (
                  <Input
                    size="sm"
                    type="text"
                    name="numberOfBooks"
                    maxLength={3}
                    id="numberOfBooks"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.numberOfBooks}
                    isInvalid={true}
                    variant="bordered"
                    errorMessage={formik.errors.numberOfBooks}
                    placeholder="5"
                    className="mt-1 text-[#333]"
                  />
                ) : (
                  <Input
                    size="sm"
                    type="text"
                    name="numberOfBooks"
                    maxLength={3}
                    id="numberOfBooks"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.numberOfBooks}
                    placeholder="Books count"
                    className="mt-1 text-[#333]"
                  />
                )} */}
              </div>
              {/* ------- Books count end ------- */}
              {/* ------- Price start ------- */}
              <div className={`${formik.errors.price && formik.touched.price ? "items-center" : "items-end"} form-group justify-between mb-4 flex gap-7`}>
                <div>
                  <label htmlFor="" className="text-base font-semibold text-[#131313] ">
                    Price
                  </label>

                  <Input
                    size="sm"
                    errorMessage={formik.errors.price && formik.touched.price ? formik.errors.price : ""}
                    type="text"
                    name="price"
                    variant={formik.errors.price && formik.touched.price ? "bordered" : ""}
                    min={1}
                    maxLength={4}
                    id="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    placeholder="30 EGP"
                    isInvalid={formik.errors.price && formik.touched.price}
                    className="mt-1 text-[#333]"
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className=" text-small">EGP</span>
                      </div>
                    }
                  />
                </div>
                <span className="mb-3">or</span>
                <button
                  type="button"
                  onClick={() => {
                    formik.values.price = 0;
                    setIsFree(true);
                    formik.errors.price = null;
                  }}
                  style={{
                    "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                  }}
                  className={`${
                    isFree ? "border-2 border-deep-purple-300" : "border-none"
                  } bg-[#28D8AE] max-w-[50%] min-w-[40%] rounded-[14px] text-[16px] h-12 flex items-center justify-center gap-1`}
                >
                  <span className="text-base text-white">Free</span>
                </button>
              </div>
              {/* ------- price  end ------- */}
              <div className="text-end mt-10">
                <Button
                  onClick={() => {
                    gotTop();
                    handleNext();
                  }}
                  variant="faded"
                  color="success"
                  isDisabled={isLastStep}
                  size="lg"
                >
                  Next
                </Button>
              </div>
            </div>
          ) : activeStep == 1 ? (
            // ======================================  Options ======================================
            <div className="form-group  mb-4">
              {/* ------- Grades start ------- */}
              <div className="mb-4">
                <h3 className="mb-3">
                  {t("grades.title")}
                  <span className="text-xs ms-1">( Optional )</span>
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {/* ------- Grade one ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.grade = "grade_one";
                      setCheckedGrade(0);
                      if (checkedGrade == 0) {
                        setCheckedGrade(null);
                        formik.values.grade = "";
                      }
                    }}
                    checked={checkedGrade == 0 ? true : false}
                    className={` ${checkedGrade == 0 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("grades.grade_one")}
                  </Button>
                  {/* ------- Grade two ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.grade = "grade_two";
                      setCheckedGrade(1);
                      if (checkedGrade == 1) {
                        setCheckedGrade(null);
                        formik.values.grade = "";
                      }
                    }}
                    checked={checkedGrade == 1 ? true : false}
                    className={` ${checkedGrade == 1 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("grades.grade_two")}
                  </Button>
                  {/* ------- Grade three ------- */}
                  {!checkedLevel == 0 ? (
                    <Button
                      type="button"
                      onClick={() => {
                        formik.values.grade = "grade_three";
                        setCheckedGrade(2);
                        if (checkedGrade == 2) {
                          setCheckedGrade(null);
                          formik.values.grade = "";
                        }
                      }}
                      checked={checkedGrade == 2 ? true : false}
                      className={` ${checkedGrade == 2 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                    >
                      {t("grades.grade_three")}
                    </Button>
                  ) : (
                    ""
                  )}
                  {checkedLevel == 1 ? (
                    <>
                      {/* ------- Grade four ------- */}
                      <Button
                        type="button"
                        onClick={() => {
                          formik.values.grade = "grade_four";
                          setCheckedGrade(3);
                          if (checkedGrade == 3) {
                            setCheckedGrade(null);
                            formik.values.grade = "";
                          }
                        }}
                        checked={checkedGrade == 3 ? true : false}
                        className={` ${checkedGrade == 3 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                      >
                        {t("grades.grade_four")}
                      </Button>
                      {/* ------- Grade five ------- */}
                      <Button
                        type="button"
                        onClick={() => {
                          formik.values.grade = "grade_five";
                          setCheckedGrade(4);
                          if (checkedGrade == 4) {
                            setCheckedGrade(null);
                            formik.values.grade = "";
                          }
                        }}
                        checked={checkedGrade == 4 ? true : false}
                        className={` ${checkedGrade == 4 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                      >
                        {t("grades.grade_five")}
                      </Button>
                      {/* ------- Grade six ------- */}
                      <Button
                        type="button"
                        onClick={() => {
                          formik.values.grade = "grade_six";
                          setCheckedGrade(5);
                          if (checkedGrade == 5) {
                            setCheckedGrade(null);
                            formik.values.grade = "";
                          }
                        }}
                        checked={checkedGrade == 5 ? true : false}
                        className={` ${checkedGrade == 5 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                      >
                        {t("grades.grade_six")}
                      </Button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* ------- Grades end ------- */}
              {/* ------- Education Type start ------- */}
              <div className="mb-4">
                <h3 className="mb-3">
                  {t("education_type.title")}
                  <span className="text-xs ms-1">( Optional )</span>
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {/* ------- General education ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationType = "general";
                      setCheckedEducationType(0);
                      if (checkedEducationType == 0) {
                        setCheckedEducationType(null);
                        formik.values.educationType = "";
                      }
                    }}
                    checked={checkedEducationType == 0 ? true : false}
                    className={` ${checkedEducationType == 0 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_type.general")}
                  </Button>
                  {/* ------- Azhar education ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationType = "azhar";
                      setCheckedEducationType(1);
                      if (checkedEducationType == 1) {
                        setCheckedEducationType(null);
                        formik.values.educationType = "";
                      }
                    }}
                    checked={checkedEducationType == 1 ? true : false}
                    className={` ${checkedEducationType == 1 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_type.azhar")}
                  </Button>
                  {/* ------- other education ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationType = "other";
                      setCheckedEducationType(2);
                      if (checkedEducationType == 2) {
                        setCheckedEducationType(null);
                        formik.values.educationType = "";
                      }
                    }}
                    checked={checkedEducationType == 2 ? true : false}
                    className={` ${checkedEducationType == 2 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_type.other")}
                  </Button>
                </div>
              </div>
              {/* ------- Education Type end ------- */}
              {/* ------- Education Term start ------- */}
              <div className="mb-4">
                <h3 className="mb-3">
                  {t("education_terms.title")}
                  <span className="text-xs ms-1">( Optional )</span>
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {/* ------- First term ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationTerm = "first";
                      setCheckedEducationTerm(0);
                      if (checkedEducationTerm == 0) {
                        setCheckedEducationTerm(null);
                        formik.values.educationTerm = "";
                      }
                    }}
                    checked={checkedEducationTerm == 0 ? true : false}
                    className={` ${checkedEducationTerm == 0 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_terms.first")}
                  </Button>{" "}
                  {/* ------- Second term ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationTerm = "second";
                      setCheckedEducationTerm(1);
                      if (checkedEducationTerm == 1) {
                        setCheckedEducationTerm(null);
                        formik.values.educationTerm = "";
                      }
                    }}
                    checked={checkedEducationTerm == 1 ? true : false}
                    className={` ${checkedEducationTerm == 1 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_terms.second")}
                  </Button>{" "}
                  {/* ------- Both term ------- */}
                  <Button
                    type="button"
                    onClick={() => {
                      formik.values.educationTerm = "both";
                      setCheckedEducationTerm(2);
                      if (checkedEducationTerm == 2) {
                        setCheckedEducationTerm(null);
                        formik.values.educationTerm = "";
                      }
                    }}
                    checked={checkedEducationTerm == 2 ? true : false}
                    className={` ${checkedEducationTerm == 2 ? " border-2 border-[#28D8AE] " : "border-none"} rounded-2xl bg-white`}
                  >
                    {t("education_terms.both")}
                  </Button>
                </div>
              </div>
              {/* ------- Education Term end ------- */}
              {/* ------- Book Edition start ------- */}
              <div className="mb-4">
                {/* <h3 className="mb-3">
                  {t("education_terms.title")}
                  <span className="text-xs ms-1">( Optional )</span>
                </h3> */}
                <div className="flex gap-4 flex-wrap">
                  {/* ------- Book edition ------- */}
                  <Select
                    label={"Book Edition"}
                    defaultSelectedKeys={formik.values.bookEdition ? [`${formik.values.bookEdition}`] : null}
                    labelPlacement={"outside"}
                    className="text-black font-semibold mb-5"
                    size="lg"
                    errorMessage={formik.errors.bookEdition ? formik.errors.bookEdition : null}
                    isInvalid={formik.errors.bookEdition ? true : false}
                    variant={formik.errors.bookEdition ? "bordered" : "flat"}
                  >
                    {yearsArray.map((item) => {
                      return (
                        <SelectItem
                          key={`${item}`}
                          value={formik.values.bookEdition}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onClick={() => formik.setFieldValue("bookEdition", item)}
                          className="text-black"
                        >
                          {`${item}`}
                        </SelectItem>
                      );
                    })}
                  </Select>
                </div>
              </div>
              {/* ------- Book Edition end ------- */}
              <div className="flex w-full items-center justify-between">
                <Button
                  onClick={() => {
                    gotTop();
                    handlePrev();
                  }}
                  variant="faded"
                  color="success"
                  isDisabled={isLastStep}
                >
                  Previous
                </Button>

                <Button
                  type="submit"
                  id="submit"
                  onClick={() => {
                    console.log("click");
                    // return the user to the first page if there is an error in the validation

                    activeStep == 1 && Object.keys(formik.errors).length > 0 && !formik.errors.bookEdition ? setActiveStep(0) : null; // insure that the second page has no errors
                  }}
                  // variant="flat"
                  color="success"
                  style={{
                    "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.16)",
                  }}
                  className="bg-[#28D8AE] text-white "
                >
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            // ======================================  Submit ======================================
            <>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center w-full  h-48">
                  <svg id="successAnimation" className="animated" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 70 70">
                    <path
                      id="successAnimationResult"
                      fill="#28D8AE"
                      d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
                    />
                    <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent" />
                    <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent" />
                  </svg>
                </div>
              ) : APIErrors ? (
                <div className="flex flex-col items-center justify-center w-full h-48">
                  <p className="text-red-500 my-32 text-center">{APIErrors}</p>
                  <Button
                    onClick={() => {
                      gotTop();
                      handlePrev();
                    }}
                    variant="faded"
                    color="success"
                  >
                    Previous
                  </Button>
                </div>
              ) : isSubmit ? (
                <div className="flex justify-center items-center h-48">
                  {" "}
                  <DotsLoading />
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </form>
      </div>

      <div className="flex justify-between"></div>
    </div>
  );
};

export default AddPost;
