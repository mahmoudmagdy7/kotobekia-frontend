import { Button, Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import * as solaIcons from "solar-icon-set";
import Card from "../../Components/Card/Card";
import DesktopFilters from "./DesktopFilters";
import MobileFilters from "./MobileFilters";
import config from "../../../config";
import axios from "axios";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardSkeleton from "../../Components/Card/CardSkeleton";
function Category() {
  // const { t } = useTranslation();
  const location = useLocation();
  // Get the 'page' parameter from the URL or use the default value of 1
  const pageFromUrl = new URLSearchParams(location.search).get("page") || 1;
  const [currentPage, setCurrentPage] = useState(parseInt(pageFromUrl, 10));
  const [filters, setFilters] = useState(null);
  const [sortingValues, setSortingValues] = useState(null);
  const { id } = useParams();
  function getCategory(data) {
    return axios.get(
      `${config.bseUrl}/api/v1/levels/specific/${data.id}?page=${data.page}${data?.filters ? data.filters : ""}${data?.sorting ? data.sorting : ""}`
    );
  }
  const { isLoading, isError, data, refetch, isRefetching } = useQuery(
    ["getSpecificCategory", currentPage, id],
    () => getCategory({ id, page: currentPage, filters, sorting: sortingValues }),
    {
      refetchOnWindowFocus: false, // to prevent the refetching on window focus
      // refetchOnMount: false,
    }
  );

  useEffect(() => {
    window.history.pushState(null, "", `?page=${currentPage}`);
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(1);
    // sortingValues ?refetch({ filters: filters }) :
    sortingValues ? refetch({ filters: filters + sortingValues }) : refetch(filters);
    // refetch({ filters: filters });
    console.log("refetch");
  }, [id, filters, sortingValues]);
  // useEffect(() => {
  //   // sortingValues ?refetch({ filters: filters }) :
  //   refetch({ sorting: "sort" });
  //   // refetch({ filters: filters });
  // }, [sortingValues]);
  function updateFilters(filters) {
    setFilters(filters);
  }

  function sortingWith(value) {
    setSortingValues((prev) => (`&sort=${value}` == prev ? "&sort=latest" : `&sort=${value}`));
    // setSortingValues(`&sort=${value}`);
  }
  return (
    <div className="text-black py-5">
      <section className="container m-auto grid gap-3 grid-cols-12 relative gap-y-5 ">
        <aside className="lg:col-span-3 hidden lg:block  bg-[#F3F4F7] sticky top-[5.25rem] h-fit   rounded-xl border border-[#EFEFEF] p-5 ">
          <div className=" ">
            <h3 className="text-xl font-bold text-[#28D8AE] my-2">POST FILTERS</h3>
            <div className="ms-5">
              <DesktopFilters updateFilters={updateFilters} />
            </div>
            {/* ============================== apply filters ============================== */}
            <Button size="sm" className="w-full bg-[#28D8AE] rounded-lg mt-6 text-white text-base ms-auto">
              <solaIcons.Filter size={22} />
              Apply filters
            </Button>
          </div>
        </aside>
        <main className=" lg:col-span-9 col-span-12">
          {/* ============================== top ad component ============================== */}
          <div className="ad  md:h-48 xl:h-56 overflow-hidden  rounded-xl flex items-center">
            <img src="/assets/slider.png" className="object-top" alt="" />
          </div>
          {/* ============================== Categories header  ============================== */}
          <MobileFilters updateFilters={updateFilters} />
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
              <Select variant="flat" color="transparent" labelPlacement="inside" placeholder="Newest" size="xs" className=" w-48 hover:bg-red-500">
                <SelectItem onClick={() => sortingWith("latest")} key="Newest" value="Newest" className="text-black">
                  Newest
                </SelectItem>
                <SelectItem onClick={() => sortingWith("oldest")} key="oldest" value="oldest" className="text-black">
                  Oldest
                </SelectItem>
                <SelectItem onClick={() => sortingWith("priceHighToLow")} key="priceHighToLow" value="priceHighToLow" className="text-black">
                  Price Low to High
                </SelectItem>
                <SelectItem onClick={() => sortingWith("priceLowToHigh")} key="priceLowToHigh" value="priceLowToHigh" className="text-black">
                  Price High to Low
                </SelectItem>
                <SelectItem onClick={() => sortingWith("viewsHighToLow")} key="MostPopular" value="MostPopular" className="text-black">
                  Most Popular
                </SelectItem>{" "}
                <SelectItem onClick={() => sortingWith("viewsLowToHigh")} key="LeastPopular" value="LeastPopular" className="text-black">
                  Least Popular
                </SelectItem>
              </Select>
            </div>
          </div>
          {/* ============================== Categories main content  ============================== */}
          {isLoading ? (
            <CardSkeleton isLoading={isLoading} />
          ) : (
            <div className="grid lg:grid-cols-3 grid-cols-2 mt-3 ">
              {data?.data?.result?.map((post) => {
                return <Card key={post.id} post={post} />;
              })}
            </div>
          )}
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
    </div>
  );
}

export default Category;
