import { Alert } from "@material-tailwind/react";
import { document } from "postcss";
import React, { useEffect } from "react";
import * as solarIcons from "solar-icon-set";
import { gotTop } from "../../hooks/useTop";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
export const OurTeam = () => {
  const team = [
    {
      name: "Mahmoud Magdy",
      title: "Front end developer & Team lead",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/mojanad.jpg",
      linkedin: "https://www.linkedin.com/in/mahmoudmagdy47",
      instagram: "https://instagram.com/mahmoudmagdy_7",
      github: "https://github.com/mahmoudmagdy7",
      email: "mailto:mahmoudmagdy.r7@gmail.com",
      facebook: "https://www.facebook.com/mahmoudmagdy47/",
    },
    {
      name: "Mohammed El-banna ",
      title: "Front end developer",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/mohammed-elbanna.jpg",
      linkedin: "https://www.linkedin.com/in/mohamed-elbana-9467a0225/",
      instagram: "https://www.instagram.com/mo7amed_2lbana",
      github: "https://github.com/Mo7amed-2lbana",
      email: "mailto:mo7amed2lbana@gmail.com",
      facebook: "https://www.facebook.com/mohamedlbana",
    },
    {
      name: "Mohammed El-Halawany ",
      title: "Mobile developer - flutter",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/mhoammed-halawany.png",
      linkedin: "https://www.linkedin.com/in/mohamed-elhalawany-329314220/",
    },
    {
      name: "ahmed asharf ",
      title: "backend developer",
      position: "developer",
      gender: "male",
      image: "/assets/images/team/ahmed-ashraf",
      linkedin: "https://www.linkedin.com/in/ahmed-ashraf-8015a21b2/",
      instagram: "https://www.instagram.com/dev_ahmed_ashraf",
      email: "proahmedashraf0@gmail.com",
      github: "https://github.com/proahmed22",
      facebook: "https://www.facebook.com/ahmedashrafaly22",
    },

    {
      name: "asmaa asharf ",
      title: "content creator",
      position: "marketing",
      gender: "female",
      image: "/assets/images/team/asmaa-ashraf.jpg",
      linkedin: "https://www.linkedin.com/in/asmaa-ashraf5",
      instagram: "https://www.instagram.com/andalusia_book",
      facebook: "https://www.linkedin.com/in/mahmoud-magdy/",
    },
    {
      name: "asmaa farid ",
      title: "social media specialist",
      position: "marketing",
      gender: "female",
      image: "/assets/images/team/asmaa-farid.jpeg",
      linkedin: "https://www.linkedin.com/in/asmaafarid21",
      instagram: "https://www.instagram.com/a.fairy219",
    },

    {
      name: "Rowida Ayman",
      title: "graphic designer",
      position: "designer",
      gender: "female",
      image: null,
      behance: "https://www.behance.net/dodoayman25",
    },
    {
      name: "Ahmed Samir",
      title: "media buyer",
      position: "marketing",
      gender: "male",
      image: null,
      linkedin: "https://www.linkedin.com/in/mahmoud-magdy/",
      instagram: "https://www.linkedin.com/in/mahmoud-magdy/",
      behance: "",
      email: "",
      facebook: "https://www.facebook.com/profile.php?id=100028204665497",
    },
    {
      name: "Abdullah Mahmoud",
      title: "graphic designer",
      position: "designer",
      gender: "male",
      image: null,
      instagram: "https://www.instagram.com/abdullah_elbadry213",
    },

    {
      name: "maya samy",
      title: "Motion designer",
      position: "designer",
      gender: "female",
      image: null,
      behance: "https://www.behance.net/mayasamy99",
    },
    {
      name: "mahmoud tawfieq",
      title: "frontend developer",
      position: "developer",
      gender: "male",
      image: null,
    },
    {
      name: "hend bahgat",
      title: "backend developer",
      position: "developer",
      gender: "female",
      image: null,
    },
    {
      name: "ahmed ismael",
      title: "mobile developer - flutter",
      position: "developer",
      gender: "male",
      image: null,
    },
    {
      name: "doaa ashraf",
      title: "ui/ux designer",
      position: "designer",
      gender: "female",
      image: null,
    },
    {
      name: "mohammed abd-elfatah",
      title: "backend developer",
      position: "developer",
      gender: "male",
      image: null,
    },
  ];
  const icons = {
    behance: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} data-name="Layer 45">
        <title />
        <path
          className="fill-[#4c9ae8] cursor-pointer"
          d="M21.892 15.687a4.125 4.125 0 0 1-4.197 2.93c-2.69 0-4.752-1.24-4.752-5.015a4.317 4.317 0 0 1 4.573-4.636c1.883 0 4.484.862 4.484 5.05v.48h-6.547a2.054 2.054 0 0 0 2.242 2.19 1.616 1.616 0 0 0 1.614-.999ZM19.417 13a2.016 2.016 0 0 0-1.937-2.052c-1.183 0-1.812.846-1.955 2.052ZM15 6.586h5V8h-5zM10.306 11.706a2.472 2.472 0 0 0 1.517-2.533c0-1.275-.775-3.17-3.81-3.17H2v12.373h5.238c2.534 0 3.206-.431 3.913-1.12a3.596 3.596 0 0 0 1.069-2.551 2.885 2.885 0 0 0-1.914-2.999ZM4.5 8H8a1.5 1.5 0 0 1 0 3H4.5Zm3.75 8H4.5v-3h3.75a1.5 1.5 0 0 1 0 3Z"
        />
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} data-name="Layer 45">
        <title />
        <path className="fill-[#4c9ae8] cursor-pointer" d="M16.75 9H13.5V7a1 1 0 0 1 1-1h2V3H14a4 4 0 0 0-4 4v2H8v3h2v9h3.5v-9H16Z" />
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} data-name="Layer 45">
        <title />
        <path
          d="M3 9h4v11H3z"
          style={{
            fill: "#577fa8",
          }}
        />
        <circle
          cx={5}
          cy={5}
          r={2}
          style={{
            fill: "#577fa8",
          }}
        />
        <path
          d="M16.5 8.25A4.473 4.473 0 0 0 13 9.953V9H9v11h4v-7a2 2 0 0 1 4 0v7h4v-7.25a4.5 4.5 0 0 0-4.5-4.5Z"
          style={{
            fill: "#577fa8",
          }}
        />
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} data-name="Layer 45">
        <title />
        {/* <path
          d="M15.257 3.625H8.743a5.118 5.118 0 0 0-5.118 5.118v6.514a5.118 5.118 0 0 0 5.118 5.118h6.514a5.118 5.118 0 0 0 5.118-5.118V8.743a5.118 5.118 0 0 0-5.118-5.118Z"
          style={{
            fill: "#ff78b2",
          }}
        /> */}
        <path
          d="M15.5 4.5a4.005 4.005 0 0 1 4 4v7a4.005 4.005 0 0 1-4 4h-7a4.005 4.005 0 0 1-4-4v-7a4.005 4.005 0 0 1 4-4h7m0-1.5h-7A5.5 5.5 0 0 0 3 8.5v7A5.5 5.5 0 0 0 8.5 21h7a5.5 5.5 0 0 0 5.5-5.5v-7A5.5 5.5 0 0 0 15.5 3Z"
          style={{
            fill: "#ff78b2",
          }}
        />
        <path
          d="M12 9a3 3 0 1 1-3 3 3.003 3.003 0 0 1 3-3m0-1.5a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 7.5Z"
          style={{
            fill: "#ff78b2",
          }}
        />
        <circle
          cx={16.7}
          cy={7.3}
          r={1}
          style={{
            fill: "#ff78b2",
          }}
        />
      </svg>
    ),
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32">
        <path
          fillRule="evenodd"
          className="fill-gray-600 hover:fill-gray-900"
          d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0 1 16 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12Z"
        />
      </svg>
    ),
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={24} height={24} baseProfile="tiny">
        <path
          className="fill-gray-600 hover:fill-gray-900"
          d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.953 7.953 0 0 0 4.499-1.384 1.001 1.001 0 0 0-1.127-1.653A5.951 5.951 0 0 1 12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6v.5a1 1 0 0 1-2 0v-3a1 1 0 0 0-1-1 .99.99 0 0 0-.938.688A3.466 3.466 0 0 0 12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.045 0 1.975-.47 2.616-1.199A2.988 2.988 0 0 0 17 15.5c1.654 0 3-1.346 3-3V12c0-4.411-3.589-8-8-8zm0 9.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
        />
      </svg>
    ),
  };
  useEffect(() => {
    gotTop();
  }, []);
  const TeamMember = ({ name, title, image, position, gender, behance, email, github, facebook, instagram, linkedin }) => {
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
          {behance && (
            <Button isIconOnly size="sm" variant="light" as={Link} to={behance} className="flex items-center justify-center grayscale hover:grayscale-0">
              {icons.behance}
            </Button>
          )}{" "}
          {facebook && (
            <Button isIconOnly size="sm" variant="light" as={Link} to={github} className="flex items-center justify-center grayscale hover:grayscale-0">
              {icons.facebook}
            </Button>
          )}{" "}
          {github && (
            <Button isIconOnly size="sm" variant="light" as={Link} to={github} className="flex items-center justify-center grayscale hover:grayscale-0">
              {icons.github}
            </Button>
          )}{" "}
          {linkedin && (
            <Button isIconOnly size="sm" variant="light" as={Link} to={linkedin} className="flex items-center justify-center grayscale hover:grayscale-0">
              {icons.linkedin}
            </Button>
          )}
          {email && (
            <Button isIconOnly size="sm" variant="light" as={Link} to={email} className="flex items-center justify-center grayscale hover:grayscale-0">
              {icons.email}
            </Button>
          )}{" "}
          {instagram && (
            <Button isIconOnly size="sm" variant="light" as={Link} to={instagram} className="flex items-center justify-center grayscale hover:grayscale-0">
              {icons.instagram}
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-screen-2xl px-2 sm:px-5 mx-auto  text-gray-900 text-center my-5 ">
      {/* ================= heading ================ */}
      <div>
        <h1 className="capitalize text-3xl font-semibold ">our great team</h1>
        {/* <p className="text-lg my-2 flex items-center justify-center gap-1">هذا المشروع لم يكن ليكون لولا كل من ساهم فيه. شكراً جزيلاً لكم!</p>{" "} */}
        <p className="text-lg mt-2  flex items-center justify-center gap-1">
          This project would not have been possible without everyone who contributed to it. Thank you very much!{" "}
        </p>
      </div>
      {/* ================= body ================ */}
      <div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10 px-5 gap-y-5">
          {team.map((member) => <TeamMember {...member} />).splice(0, 10)}
        </div>
        <h3 className="capitalize text-2xl font-semibold mt-10">and great thank to </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10 px-5 gap-y-5">
          {team.map((member) => <TeamMember {...member} />).splice(10)}
        </div>
      </div>
      <div className="flex gap-1 mt-10 justify-center  mx-auto text-black items-center capitalize bg-[#FA5057] bg-opacity-10 border border-[#FA5057] rounded-lg text-sm p-2  ">
        <solarIcons.InfoCircle size="19" color="red" /> <p className="mt-1">The team ordering is completely random </p>
      </div>
    </section>
  );
};
