import { Button, Input } from "@nextui-org/react";
import moment from "moment";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import * as solarIcons from "solar-icon-set";
import { getConversationMessages, getUserConversations, receiveMessage, sendNewMessage, setActiveUser } from "../../app/Slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { useSocket } from "../../app/SocketContext";
import isLoggedIn from "../../hooks/useAuth";
import isMobile from "../../hooks/useAgent";
export const Conversation = (props) => {
  const sideToggler = useOutletContext();
  const [isOnline, setIsOnline] = useState(false);

  const token = jwtDecode(Cookies.get("userToken"));
  const socket = useSocket();
  const myId = token.id;
  const router = useNavigate();
  const dispatch = useDispatch();
  const { activeUser, activeConversation, userConversations, onlineUsers } = useSelector((state) => state.chat);
  const msgRef = useRef(null);
  useLayoutEffect(() => {
    if (!activeUser) {
      router("/chat");
    }
  }, []);
  useEffect(() => {
    const conversationBody = document.getElementById("conversation-body");

    if (conversationBody) {
      conversationBody.scrollTo({ top: conversationBody.scrollHeight, behavior: "smooth" });
      msgRef.current.value = null;
    }
  }, [activeConversation]);

  const { convId } = useParams();
  useEffect(() => {
    dispatch(getConversationMessages(convId));
    dispatch(getUserConversations());

    console.log("first uesEffect");
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserConversations());
    console.log("second uesEffect");
  }, [activeConversation]);

  const sendMessageHandler = async (message) => {
    const blackList = [
      "2g1c",
      "2 girls 1 cup",
      "acrotomophilia",
      "alabama hot pocket",
      "alaskan pipeline",
      "anal",
      "anilingus",
      "anus",
      "apeshit",
      "arsehole",
      "ass",
      "asshole",
      "assmunch",
      "auto erotic",
      "autoerotic",
      "babeland",
      "baby batter",
      "baby juice",
      "ball gag",
      "ball gravy",
      "ball kicking",
      "ball licking",
      "ball sack",
      "ball sucking",
      "bangbros",
      "bangbus",
      "bareback",
      "barely legal",
      "barenaked",
      "bastard",
      "bastardo",
      "bastinado",
      "bbw",
      "bdsm",
      "beaner",
      "beaners",
      "beaver cleaver",
      "beaver lips",
      "beastiality",
      "bestiality",
      "big black",
      "big breasts",
      "big knockers",
      "big tits",
      "bimbos",
      "birdlock",
      "bitch",
      "bitches",
      "black cock",
      "blonde action",
      "blonde on blonde action",
      "blowjob",
      "blow job",
      "blow your load",
      "blue waffle",
      "blumpkin",
      "bollocks",
      "bondage",
      "boner",
      "boob",
      "boobs",
      "booty call",
      "brown showers",
      "brunette action",
      "bukkake",
      "bulldyke",
      "bullet vibe",
      "bullshit",
      "bung hole",
      "bunghole",
      "busty",
      "butt",
      "buttcheeks",
      "butthole",
      "camel toe",
      "camgirl",
      "camslut",
      "camwhore",
      "carpet muncher",
      "carpetmuncher",
      "chocolate rosebuds",
      "cialis",
      "circlejerk",
      "cleveland steamer",
      "clit",
      "clitoris",
      "clover clamps",
      "clusterfuck",
      "cock",
      "cocks",
      "coprolagnia",
      "coprophilia",
      "cornhole",
      "coon",
      "coons",
      "creampie",
      "cum",
      "cumming",
      "cumshot",
      "cumshots",
      "cunnilingus",
      "cunt",
      "darkie",
      "date rape",
      "daterape",
      "deep throat",
      "deepthroat",
      "dendrophilia",
      "dick",
      "dildo",
      "dingleberry",
      "dingleberries",
      "dirty pillows",
      "dirty sanchez",
      "doggie style",
      "doggiestyle",
      "doggy style",
      "doggystyle",
      "dog style",
      "dolcett",
      "domination",
      "dominatrix",
      "dommes",
      "donkey punch",
      "double dong",
      "double penetration",
      "dp action",
      "dry hump",
      "dvda",
      "eat my ass",
      "ecchi",
      "ejaculation",
      "erotic",
      "erotism",
      "escort",
      "eunuch",
      "fag",
      "faggot",
      "fecal",
      "felch",
      "fellatio",
      "feltch",
      "female squirting",
      "femdom",
      "figging",
      "fingerbang",
      "fingering",
      "fisting",
      "foot fetish",
      "footjob",
      "frotting",
      "fuck",
      "fuck buttons",
      "fuckin",
      "fucking",
      "fucktards",
      "fudge packer",
      "fudgepacker",
      "futanari",
      "gangbang",
      "gang bang",
      "gay sex",
      "genitals",
      "giant cock",
      "girl on",
      "girl on top",
      "girls gone wild",
      "goatcx",
      "goatse",
      "god damn",
      "gokkun",
      "golden shower",
      "goodpoop",
      "goo girl",
      "goregasm",
      "grope",
      "group sex",
      "g-spot",
      "guro",
      "hand job",
      "handjob",
      "hard core",
      "hardcore",
      "hentai",
      "homoerotic",
      "honkey",
      "hooker",
      "horny",
      "hot carl",
      "hot chick",
      "how to kill",
      "how to murder",
      "huge fat",
      "humping",
      "incest",
      "intercourse",
      "jack off",
      "jail bait",
      "jailbait",
      "jelly donut",
      "jerk off",
      "jigaboo",
      "jiggaboo",
      "jiggerboo",
      "jizz",
      "juggs",
      "kike",
      "kinbaku",
      "kinkster",
      "kinky",
      "knobbing",
      "leather restraint",
      "leather straight jacket",
      "lemon party",
      "livesex",
      "lolita",
      "lovemaking",
      "make me come",
      "male squirting",
      "masturbate",
      "masturbating",
      "masturbation",
      "menage a trois",
      "milf",
      "missionary position",
      "mong",
      "motherfucker",
      "mound of venus",
      "mr hands",
      "muff diver",
      "muffdiving",
      "nambla",
      "nawashi",
      "negro",
      "neonazi",
      "nigga",
      "nigger",
      "nig nog",
      "nimphomania",
      "nipple",
      "nipples",
      "nsfw",
      "nsfw images",
      "nude",
      "nudity",
      "nutten",
      "nympho",
      "nymphomania",
      "octopussy",
      "omorashi",
      "one cup two girls",
      "one guy one jar",
      "orgasm",
      "orgy",
      "paedophile",
      "paki",
      "panties",
      "panty",
      "pedobear",
      "pedophile",
      "pegging",
      "penis",
      "phone sex",
      "piece of shit",
      "pikey",
      "pissing",
      "piss pig",
      "pisspig",
      "playboy",
      "pleasure chest",
      "pole smoker",
      "ponyplay",
      "poof",
      "poon",
      "poontang",
      "punany",
      "poop chute",
      "poopchute",
      "porn",
      "porno",
      "pornography",
      "prince albert piercing",
      "pthc",
      "pubes",
      "pussy",
      "queaf",
      "queef",
      "quim",
      "raghead",
      "raging boner",
      "rape",
      "raping",
      "rapist",
      "rectum",
      "reverse cowgirl",
      "rimjob",
      "rimming",
      "rosy palm",
      "rosy palm and her 5 sisters",
      "rusty trombone",
      "sadism",
      "santorum",
      "scat",
      "schlong",
      "scissoring",
      "semen",
      "sex",
      "sexcam",
      "sexo",
      "sexy",
      "sexual",
      "sexually",
      "sexuality",
      "shaved beaver",
      "shaved pussy",
      "shemale",
      "shibari",
      "shit",
      "shitblimp",
      "shitty",
      "shota",
      "shrimping",
      "skeet",
      "slanteye",
      "slut",
      "s&m",
      "smut",
      "snatch",
      "snowballing",
      "sodomize",
      "sodomy",
      "spastic",
      "spic",
      "splooge",
      "splooge moose",
      "spooge",
      "spread legs",
      "spunk",
      "strap on",
      "strapon",
      "strappado",
      "strip club",
      "style doggy",
      "suck",
      "sucks",
      "suicide girls",
      "sultry women",
      "swastika",
      "swinger",
      "tainted love",
      "taste my",
      "tea bagging",
      "threesome",
      "throating",
      "thumbzilla",
      "tied up",
      "tight white",
      "tit",
      "tits",
      "titties",
      "titty",
      "tongue in a",
      "topless",
      "tosser",
      "towelhead",
      "tranny",
      "tribadism",
      "tub girl",
      "tubgirl",
      "tushy",
      "twat",
      "twink",
      "twinkie",
      "two girls one cup",
      "undressing",
      "upskirt",
      "urethra play",
      "urophilia",
      "vagina",
      "venus mound",
      "viagra",
      "vibrator",
      "violet wand",
      "vorarephilia",
      "voyeur",
      "voyeurweb",
      "voyuer",
      "vulva",
      "wank",
      "wetback",
      "wet dream",
      "white power",
      "whore",
      "worldsex",
      "wrapping men",
      "wrinkled starfish",
      "xx",
      "xxx",
      "yaoi",
      "yellow showers",
      "yiffy",
      "zoophilia",
      "🖕",
      "fuck",
    ];
    if (blackList.some((message) => msgRef?.current?.value.includes(message.toLowerCase()))) {
      alert("Message not sent");
    } else {
      const msg = await dispatch(sendNewMessage({ msg: msgRef?.current?.value, convId })); // Socket.emit("send message", newMsg.payload);
      socket?.emit("send-message", msg?.payload);
    }
  };

  useEffect(() => {
    socket.on("receive message", (msg) => {
      dispatch(receiveMessage(msg));
      // the second solution to prevent re-rendering
      // dispatch(getConversationMessages(convId));
    });

    return () => {
      socket.off("receive message");
    };
  }, [dispatch]);

  const typingHandler = () => {
    console.log("type");
    // socket?.emit("typing", { conv: convId, msg: msgRef?.current?.value });
  };

  // useEffect(() => {
  //   socket.on("typing", (msg) => {
  //     console.log(`type: ${msg}`);
  //   });
  // }, []);

  useEffect(() => {
    console.log(activeUser);
    if (onlineUsers.some((user) => user.userId === activeUser?._id)) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
    console.log();
  }, [onlineUsers, activeUser]);
  return (
    <>
      {activeUser ? (
        <div className=" flex flex-col h-full">
          {/* ------- conversation header ------- */}

          <div className="flex  justify-between p-5 relative shadow-[0_4px_20px_-10px_rgba(0,0,0,0.25)]">
            <div>
              {" "}
              <Button isIconOnly color="transparent">
                <solarIcons.ShieldUser size={32} color="#0DCA86" />
              </Button>{" "}
            </div>
            <div>
              <h3 className="font-semibold">{activeUser?.fullName}</h3>
            </div>
            <div className="flex gap-3  ">
              <div className="relative">
                <img src={activeUser.gender == "male" ? "/assets/images/male.png" : "/assets/images/female.png"} className="w-12 h-12 rounded-full" alt="" />
                {isOnline ? <span className="bottom-0 end-0 inline-block w-4 h-4 rounded-full absolute bg-success-400 border-2 border-white"></span> : ""}{" "}
              </div>{" "}
              {isMobile() ? (
                <Button isIconOnly color="transparent">
                  {localStorage.getItem("i18nextLng") == "en" ? (
                    <solarIcons.AltArrowRight size={32} onClick={sideToggler} />
                  ) : (
                    <solarIcons.AltArrowLeft size={32} onClick={sideToggler} />
                  )}
                </Button>
              ) : (
                ""
              )}
            </div>
            {/* <span className="absolute end-5 bottom-1 h-[1px] w-4/5 bg-[#EDEDED]"></span> */}
          </div>
          {/* ------- conversation body ------- */}
          <div id="conversation-body" className="p-5 overflow-y-scroll grow ">
            {activeConversation ? (
              activeConversation?.map((m) => {
                return (
                  <div key={m._id}>
                    <div className={m.sender._id === myId ? "  text-start " : " text-end  "}>
                      {localStorage.getItem("i18nextLng") == "en" ? (
                        <p
                          className={
                            m.sender._id === myId
                              ? "bg-[#28D8AE] w-fit  py-1 px-5  rounded-xl rounded-bl-none "
                              : "bg-[#F3F2F7] w-fit ms-auto py-1 px-5  rounded-xl rounded-br-none"
                          }
                        >
                          {m.message}
                        </p>
                      ) : (
                        <p
                          className={
                            m.sender._id === myId
                              ? "bg-[#28D8AE] w-fit  py-1 px-5  rounded-xl rounded-br-none "
                              : "bg-[#F3F2F7] w-fit ms-auto py-1 px-5  rounded-xl rounded-bl-none"
                          }
                        >
                          {m.message}
                        </p>
                      )}
                      <span className="text-xs  ">{moment(m.createdAt).format("hh:mm A")}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>no messages</p>
            )}
          </div>

          {/* ------- Type input ------- */}
          <div className="flex items-center  py-5 px-4 gap-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.10)]">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessageHandler(msgRef?.current?.value);
                }
              }}
              id="input"
              ref={msgRef}
              size="sm"
              type="text"
              onKeyUp={typingHandler}
              placeholder="type what you want"
              className="w-full outline-none bg-[#EFEFEF] p-2 rounded-xl ps-4"
            />
            <Button onClick={() => sendMessageHandler(msgRef?.current?.value)} isIconOnly color="transparent">
              <solarIcons.Plain2 size={28} className="scale-x-[-1] " color="#28D8AE" />
            </Button>
          </div>
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};
