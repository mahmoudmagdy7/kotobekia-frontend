import { Button } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import * as solarIcons from "solar-icon-set";
import axios from "axios";
import config from "../../../../config";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
export const Search = () => {
  // {{baseUrl}}/api/v1/posts/search?keyword=كتاب الاضواء
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const [searchData, setSearchData] = useState([]);
  async function getSearchResult(keyword) {
    // searchRef.current = keyword;
    console.log(keyword ? true : false);
    try {
      const { data } = await axios(`${config.bseUrl}/api/v1/posts/search?keyword=${keyword}`, {
        method: "GET",
        headers: {
          token: Cookies.get("userToken"),
        },
      });
      !isOpen ? setIsOpen(true) : null;
      setSearchData(data?.result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect((e) => {
    window.onclick = (e) => {
      e.target.offsetParent?.id !== "search-input-parent" ? setIsOpen(false) : null;
    };
  }, []);
  const beforeClasses =
    "before:content-[''] before:hidden before:absolute before:end-0 before:top-1/2 before:-translate-y-1/2  before:bg-[#28D8AE] before:w-[2px] before:h-3/4";
  const afterClasses =
    "after:content-[''] after:hidden after:absolute after:start-0 after:top-1/2 after:-translate-y-1/2  after:bg-[#28D8AE] after:w-[2px] after:h-3/4";
  return (
    <div>
      {" "}
      <div className=" relative p-1 z-48 text-start " id="search-input-parent">
        <div
          className={`${
            searchRef.current && isOpen ? "block" : "hidden"
          }   absolute top-0 end-0 bg-[#e9e9e9]  w-full rounded-xl pt-14 overflow-hidden home-search-result shadow-2xl`}
        >
          {searchData
            .map((item) => {
              return (
                <Link
                  onClick={() => {
                    setSearchData([]);
                    searchRef.current.value = "";
                    setIsOpen(false);
                  }}
                  to={`/book/${item?._id}`}
                  className={` hover:before:flex hover:after:flex ${beforeClasses} ${afterClasses} flex justify-end item py-2 border-b-[1.5px] border-gray-400 px-4 text-lg font-semibold text-gray-800 relative hover:text-[#28D8AE]`}
                >
                  {item?.title}
                </Link>
              );
            })
            .splice(0, 7)}
        </div>
        <input
          type="text"
          placeholder="Search for books"
          ref={searchRef}
          onKeyUp={(e) => getSearchResult(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="input z-10 relative block ps-4 h-[48px]  rounded-xl bg-[#F3F4F7]  text-[#939393] w-full  outline-none"
        />
        <Button isIconOnly color={searchRef.current && isOpen ? "success" : "transparent"} className="icon z-20 absolute top-1/2 -translate-y-1/2 end-2 ">
          <solarIcons.Magnifer size={20} color={searchRef.current && isOpen ? "white" : "#939393"} />
        </Button>
      </div>
    </div>
  );
};
