import * as SolaIcons from "solar-icon-set";

const UserPerson = ({ data }) => {
  return (
    <>
      <div className="info  px-12 bg-white rounded-b-[14px]  ">
        <div className="title pt-9 pb-5  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] font-medium text-xl">المعلومات الشخصية</h5>
        </div>

        <div className=" mt-8 w-full lg:flex pb-8">
          <div className="table-items w-full lg:border-e-2 border-[#EDEDED] ">
            <div className="paret-one lg:w-1/2 flex justify-between">
              <ul className="list-none ">
                <li className="text-[#131313] text-base mb-4">الاسم</li>
                <li className="text-[#131313] text-base mb-4">تاريخ الميلاد</li>
                <li className="text-[#131313] text-base ">الجنس</li>
              </ul>
              <ul className="list-none ">
                <li className="text-[#939393] text-base mb-4">{data?.data?.result?.fullName}</li>
                <li className="text-[#939393] text-base mb-4">{data?.data?.result?.birthDate?.split("T")[0]}</li>
                <li className="text-[#939393] text-base mb-4">{data?.data?.result?.gender}</li>
              </ul>
            </div>
          </div>
          <div className="table-items  w-full  lg:ps-10 border-[#EDEDED] ">
            <div className="paret-two lg:w-1/2 flex justify-between">
              <ul className="head list-none ">
                <li className="text-[#131313] text-base mb-4">التليفون</li>
                <li className="text-[#131313] text-base mb-4">عدد المنشورات</li>
                <li className="text-[#131313] text-base ">الالوسمة</li>
              </ul>
              <ul className="list-none ">
                <li className="text-[#939393] text-base mb-4">{data?.data?.result?.phoneNumber}</li>
                <li className="text-[#939393] text-base mb-4">{data?.data?.result?.yourAds?.length} منشور </li>
                <li className="text-[#939393] text-base mb-4">
                  <SolaIcons.MedalRibbonStar size={18} color="#1C274C" />
                  <SolaIcons.MedalRibbonsStar size={18} color="#1C274C" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPerson;
