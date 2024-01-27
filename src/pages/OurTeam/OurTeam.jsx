import React from "react";
import * as solarIcons from "solar-icon-set";
export const OurTeam = () => {
  const TeamMember = (member) => {
    return (
      <div className="">
        <figure className="w-32  m-auto relative">
          <img src="https://api.lorem.space/image/face?w=400&h=400" alt="" className="rounded-full" />
          {/* style one */}
          {/* <span className="absolute bottom-1 end-2 translate-x-[1.5px] translate-y-[1.5px] rounded-full  p-1 flex items-center justify-center ">
            <solarIcons.StarsMinimalistic size={28} iconStyle="Bold" color="#EFEFEF" />
          </span>{" "}
          <span className="absolute bottom-1 end-2 aspect-square rounded-full  p-1 flex items-center justify-center ">
            <solarIcons.StarsMinimalistic size={24} iconStyle="Bold" color="#ffd753" />
          </span> */}
          {/* style two */}
          {/* <span className="absolute bottom-0 end-1 aspect-square rounded-full  p-1 flex items-center justify-center bg-gray-100 bg-opacity-70">
            <solarIcons.StarsMinimalistic size={22} iconStyle="Bold" color="#ffd753" />
          </span>{" "} */}
          <span className="absolute bottom-0 end-1 aspect-square rounded-full  p-1 flex items-center justify-center bg-gray-100 bg-opacity-70">
            <solarIcons.Code size={24} />
          </span>
        </figure>
        <h3 className="font-semibold text-lg ">Mahmoud Magdy</h3>
        <p className="text-gray-600">Front End</p>
      </div>
    );
  };

  return (
    <section className="container text-gray-900 text-center my-5">
      {/* ================= heading ================ */}
      <div>
        <h1 className="capitalize text-4xl font-semibold text-[#FA5057]">our great team</h1>
        <p className="text-lg my-2 flex items-center justify-center gap-1">
          <solarIcons.Heart size={20} iconStyle="Bold" color="#FA5057" />
          هذا المشروع لم يكن ليكون لولا كل من ساهم فيه. شكراً جزيلاً لكم!
        </p>
      </div>
      {/* ================= body ================ */}
      <div className="grid grid-cols-4 gap-2 pt-5">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </section>
  );
};
