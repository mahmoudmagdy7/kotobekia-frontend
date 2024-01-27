import { Alert } from "@material-tailwind/react";
import { document } from "postcss";
import React from "react";
import * as solarIcons from "solar-icon-set";
export const OurTeam = () => {
  const team = [
    {
      name: "Mahmoud Magdy",
      title: "Front end developer & Team lead",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/mojanad.jpg",
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "Mohammed El-banna ",
      title: "Front end developer",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/mohammed-elbanna.jpg",
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "Mohammed El-Halawany ",
      title: "Mobile developer - flutter",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/mohammed-halawany.jpg",
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "ahmed asharf ",
      title: "backend developer",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/ahmed-ashraf",
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },

    {
      name: "asmaa asharf ",
      title: "social media specialist",
      position: "marketing",
      gender: "female",
      image: "/assets/images/team/asmaa-ashraf.jpg",
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "asmaa farid ",
      title: "social media specialist",
      position: "marketing",
      gender: "female",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },

    {
      name: "doaa ashraf",
      title: "ui/ux designer",
      position: "designer",
      gender: "female",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "mahmoud tawfieq",
      title: "frontend developer",
      position: "developer",
      gender: "male",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "rowida ayman",
      title: "graphic designer",
      position: "designer",
      gender: "female",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "ahmed samer",
      title: "media buyer",
      position: "marketing",
      gender: "male",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "abdullah el-badry",
      title: "graphic designer",
      position: "designer",
      gender: "male",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "hend bahgat",
      title: "backend developer",
      position: "developer",
      gender: "female",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },

    {
      name: "maya samy",
      title: "motion graphic designer",
      position: "designer",
      gender: "female",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },

    {
      name: "ahmed ismael",
      title: "mobile developer - flutter",
      position: "developer",
      gender: "male",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "mohammed abd-elfatah",
      title: "backend developer",
      position: "developer",
      gender: "male",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
  ];

  const TeamMember = ({ name, title, image, position, gender }) => {
    return (
      <div className="team-card">
        <figure className="w-[140px]  m-auto relative">
          <img src={image ? image : gender == "male" ? "/assets/images/male.png" : "/assets/images/female.png"} alt="" className="rounded-full  " />

          {position == "developer" ? (
            <span className="absolute bottom-0 end-2 aspect-square rounded-full  p-1 flex items-center justify-center bg-[#ffbe45]  border-2">
              <solarIcons.Code size={19} />
            </span>
          ) : position == "marketing" ? (
            <span className="absolute bottom-0 end-2 aspect-square rounded-full  p-1 flex items-center justify-center bg-[#be45ff] text-white border-2">
              <solarIcons.Hashtag size={18} />
            </span>
          ) : position == "designer" ? (
            <span className="absolute bottom-0 end-2 aspect-square rounded-full  p-1 flex items-center justify-center bg-[rgb(68,202,255)] text-white border-2">
              <solarIcons.StarsMinimalistic size={20} />
            </span>
          ) : null}
        </figure>
        <div>
          <h3 className="font-semibold text-lg mt-2  capitalize">{name}</h3>
          <p className="text-gray-600 text-[15px] capitalize">{title}</p>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <span className="flex items-center justify-center">in</span>
        </div>
      </div>
    );
  };

  return (
    <section className="container text-gray-900 text-center my-5 ">
      {/* ================= heading ================ */}
      <div>
        <h1 className="capitalize text-3xl font-semibold ">our great team</h1>
        {/* <p className="text-lg my-2 flex items-center justify-center gap-1">هذا المشروع لم يكن ليكون لولا كل من ساهم فيه. شكراً جزيلاً لكم!</p>{" "} */}
        <p className="text-lg mt-2  flex items-center justify-center gap-1">
          This project would not have been possible without everyone who contributed to it. Thank you very much!{" "}
        </p>
      </div>
      {/* ================= body ================ */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10 ">
        {team.map((member) => (
          <TeamMember {...member} />
        ))}
      </div>
      <div className="flex gap-1 mt-10 justify-center  mx-auto text-black items-center capitalize bg-[#FA5057] bg-opacity-10 border border-[#FA5057] rounded-lg text-sm p-2  ">
        <solarIcons.InfoCircle size="19" color="red" /> <p className="mt-1">The team ordering is completely random </p>
      </div>
    </section>
  );
};
