import { useSelector } from "react-redux";
import * as SolaIcons from "solar-icon-set";

const MyPerson = () => {
    const { userData } = useSelector((state) => state.userData);

  return (
    <>
      <div className="info  px-12 bg-white rounded-b-[14px]  ">
        <div className="title pt-9 pb-5  border-b-1 border-[#EDEDED] ">
          <h5 className="text-[#28D8AE] font-medium text-xl">
            المعلومات الشخصية
          </h5>
        </div>

        <div className=" mt-8 w-full flex pb-8">
          <div className="table-items w-1/2  border-e-2 border-[#EDEDED] ">
            <div className="paret-one w-1/2 flex justify-between">
              <ul className="list-none ">
                <li className="text-[#131313] text-base mb-4">الاسم</li>
                <li className="text-[#131313] text-base mb-4">تاريخ الميلاد</li>
                <li className="text-[#131313] text-base ">الجنس</li>
              </ul>
              <ul className="list-none ">
                <li className="text-[#939393] text-base mb-4">
                  {userData.fullName}
                </li>
                <li className="text-[#939393] text-base mb-4">1-1-1998</li>
                <li className="text-[#939393] text-base mb-4">ذكر</li>
              </ul>
            </div>
          </div>
          <div className="table-items w-1/2   ps-10 border-[#EDEDED] ">
            <div className="paret-two w-1/2 flex justify-between">
              <ul className="head list-none ">
                <li className="text-[#131313] text-base mb-4">عدد المحادثات</li>
                <li className="text-[#131313] text-base mb-4">عدد المنشورات</li>
                <li className="text-[#131313] text-base ">الالوسمة</li>
              </ul>
              <ul className="list-none ">
                <li className="text-[#939393] text-base mb-4">13 محادثة</li>
                <li className="text-[#939393] text-base mb-4">13 منشور </li>
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

export default MyPerson;
