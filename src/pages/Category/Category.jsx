import { Button, Select, SelectItem } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import * as solaIcons from "solar-icon-set";
import Card from "../../Components/Card/Card";
import DesktopFilters from "./DesktopFilters";
import MobileFilters from "./MobileFilters";
import config from "../../../config";
import axios from "axios";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Category() {
  const { t } = useTranslation();
  const location = useLocation();

  // Get the 'page' parameter from the URL or use the default value of 1
  const pageFromUrl = new URLSearchParams(location.search).get("page") || 1;
  const [currentPage, setCurrentPage] = useState(parseInt(pageFromUrl, 10));

  function getCategory(page) {
    return axios.get(`${config.bseUrl}/v1/levels/specific/655b4ec133dd362ae53081f7?page=${page}`);
  }

  const { isLoading, isError, data, refetch, isRefetching } = useQuery(["getSpecificCategory", currentPage], () => getCategory(currentPage), {});

  useEffect(() => {
    window.history.pushState(null, "", `?page=${currentPage}`);
  }, [currentPage]);
  console.log(isRefetching);
  console.log(data?.data);
  return (
    <div className="text-black">
      <Link to="/">Home</Link>
      <section className="container m-auto grid gap-3 grid-cols-12 relative gap-y-5 ">
        <aside className="lg:col-span-3 hidden lg:block  bg-[#F3F4F7] sticky top-5 h-fit   rounded-xl border border-[#EFEFEF] p-5 ">
          <div className="sticky top-0   ">
            <h3 className="text-xl font-bold text-[#28D8AE] my-2">POST FILTERS</h3>
            <div className="ms-5">
              <DesktopFilters />
            </div>
          </div>
        </aside>
        <main className=" lg:col-span-9 col-span-12">
          {/* ============================== top ad component ============================== */}
          <div className="ad bg-red-300 md:h-48 xl:h-56 overflow-hidden  rounded-xl flex items-center">
            <img src="/assets/slider.png" className="object-top" alt="" />
          </div>
          {/* ============================== Categories header  ============================== */}
          <MobileFilters />
          {/* ============================== Categories header  ============================== */}
          <div className="bg-[#f3f4f7]  h-10 mt-3 rounded-lg flex items-center justify-between px-3 ">
            {/* -------- view toggles -------- */}
            <div>
              <solaIcons.Widget size={20} color="#28D8AE" className="mt-1" />
              <solaIcons.HamburgerMenu size={20} className="mt-1" />
            </div>
            {/* -------- sorting -------- */}
            <div>
              <span className="text-sm">Sort by :</span>
              <Select labelPlacement="inside" placeholder="Newest" size="xs" className=" w-24">
                <SelectItem key="Newest" value="Newest" className="text-black">
                  Newest
                </SelectItem>
                <SelectItem key="Price" value="Price" className="text-black">
                  Price
                </SelectItem>
                <SelectItem key="Views" value="Views" className="text-black">
                  Views
                </SelectItem>
              </Select>
            </div>
          </div>
          {/* ============================== Categories main content  ============================== */}
          <div className="grid lg:grid-cols-3 grid-cols-2 mt-3 ">
            {data?.data?.result?.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="bgc-primary text-white  "
              onClick={() => {
                // Increment the page or set it to the desired value
                const nextPage = currentPage - 1;
                setCurrentPage(nextPage);

                // Call the refetch function with the updated page
                refetch(nextPage);
              }}
              isDisabled={data?.data?.page == 1 ? true : false}
            >
              previous Page
            </Button>
            <Button
              className="bgc-primary text-white  "
              onClick={() => {
                // Increment the page or set it to the desired value
                const nextPage = currentPage + 1;
                setCurrentPage(nextPage);

                // Call the refetch function with the updated page
                refetch(nextPage);
              }}
              isDisabled={data?.data?.nextPage ? false : true}
            >
              Next Page
            </Button>
          </div>
        </main>
      </section>

      <Button
        onClick={async () => {
          if (localStorage.getItem("i18nextLng") == "en") {
            localStorage.setItem("i18nextLng", "ar");
            window.location.reload();
            document.body.dir = "rtl";
          } else {
            localStorage.setItem("i18nextLng", "en");
            window.location.reload();
            document.body.dir = "ltr";
          }
        }}
      >
        click me!
      </Button>
    </div>
  );
}

export default Category;
