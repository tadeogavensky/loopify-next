"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import mock from "../../assets/mocks/mock.json";
import img from "../../assets/images/lx1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/Card";

const ProductFeed = (props) => {
  const quickFilters = [
    "Most Popular",
    "Product Name Z - A",
    "Product Name A - Z",
    "Price High To Low",
    "Price Low To High",
  ];

  const { type, qty } = props;

  const [showFilters, setShowFilters] = useState(false);

  const [selected, setSelected] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState();

  const openSideFilters = () => {
    setShowFilters(true);
    console.log("showSidebar :>> ", showFilters);
    document.querySelector("body").classList.add("no-scroll");
  };

  const closeSideFilters = () => {
    if (showFilters == true) {
      setShowFilters(false);
      document.querySelector("body").classList.remove("no-scroll");
    }
    setShowFilters(false);
  };

  const handleFilterChange = (filter) => {
    selectedFilters.pop();
    setSelectedFilter(filter);
  };

  const deleteFilter = (filter) => {
    setSelectedFilters((prevState) =>
      prevState.filter((item) => item !== filter)
    );
    setSelectedFilter(null);
  };

  const toggle = () => {
    setSelected(!selected);
    selectedState(!selected);
    return id;
  };

  return (
    <>
      <div className=" relative w-full px-4 ">
        <h1>{type}</h1>

        <div className="flex justify-center w-full mb-3">
          <p className="block sm:hidden">{qty} Results</p>
        </div>
        <div className="flex justify-between gap-6 items-center">
          <button
            className="flex-1 w-full sm:px-12 sm:w-[25%] py-2 bg-[#FF753A] text-white font-medium hover:bg-[#C55E25] transition all duration-300"
            onClick={() => {
              openSideFilters();
            }}
          >
            Filter
          </button>
          <p className="hidden sm:block">{qty} Results</p>
          <select
            name=""
            id=""
            className="p-2 border-[1px]  border-black flex-1"
          >
            {quickFilters.map((filter, index) => (
              <option className="" value={filter} key={index}>
                {filter}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-4 mt-6">
          {selectedFilters.length > 0 &&
            selectedFilters.map((filter, index) => {
              return (
                <SelectedFilter
                  filter={filter}
                  key={index}
                  deleteFilter={deleteFilter}
                />
              );
            })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          {mock.guitars.map((item, index) => (
            <Card product={item}/>
          ))}
        </div>
        <div
          className={`absolute top-0 ${
            showFilters ? "left-0" : "-left-full"
          } h-full bg-white transition-all duration-300 ease-in-out z-70 overflow-x-hidden w-[85%] shadow-sm pb-6  lg:hidden`}
        >
          <div className="flex py-4 px-6 items-center justify-between bg-black text-white">
            <p className="font-medium text-[16px]">{qty} Results</p>

            <button
              onClick={() => {
                closeSideFilters();
              }}
            >
              <FontAwesomeIcon icon={faXmark} className="text-[15px]" />
            </button>
          </div>

          <div className="px-4">
            <div className="flex items-center justify-between my-4">
              <button className="text-lg">Show / Hide Filters</button>

              <button className="text-lg">Reset</button>
            </div>
            <GuitarFilters
              selected={selected}
              setSelected={setSelected}
              selectedFilter={selectedFilter}
              setSelectedFilters={setSelectedFilters}
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const GuitarFilters = ({
  selected,
  setSelected,
  selectedFilter,
  setSelectedFilters,
  handleFilterChange,
}) => {
  return (
    <ul>
      <li className="flex flex-col border-t-2 border-b-2 border-gray-200">
        <div className="flex items-center justify-between py-4"  onClick={()=>{setSelected(!selected)}}>
          <p className="text-xl font-medium">Price</p>
          {selected ? (
            <FontAwesomeIcon icon={faPlus} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </div>

        {!selected ? (
          <ul className="space-y-3 mb-4">
            <li className="flex items-center gap-4">
              <input
                type="radio"
                className="w-4 h-4"
                checked={selectedFilter === "Under $500"}
                onChange={() => {
                  handleFilterChange("Under $500");
                  setSelectedFilters((prevState) => [
                    ...prevState,
                    "Under $500",
                  ]);
                }}
              />
              <p>Under $500</p>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="radio"
                className="w-4 h-4"
                checked={selectedFilter === "$500 - $999"}
                onChange={() => {
                  handleFilterChange("$500 - $999");
                  setSelectedFilters((prevState) => [
                    ...prevState,
                    "$500 - $999",
                  ]);
                }}
              />
              <p>$500 - $999</p>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="radio"
                className="w-4 h-4"
                checked={selectedFilter === "$1,000 - $1,999"}
                onChange={() => {
                  handleFilterChange("$1,000 - $1,999");
                  setSelectedFilters((prevState) => [
                    ...prevState,
                    "$1,000 - $1,999",
                  ]);
                }}
              />
              <p>$1,000 - $1,999</p>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="radio"
                className="w-4 h-4"
                checked={selectedFilter === "$2,000 - 4,999"}
                onChange={() => {
                  handleFilterChange("$2,000 - 4,999");
                  setSelectedFilters((prevState) => [
                    ...prevState,
                    "$2,000 - $4,999",
                  ]);
                }}
              />
              <p>$2,000 - $4,999</p>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="radio"
                className="w-4 h-4"
                checked={selectedFilter === "Over $5,000"}
                onChange={() => {
                  handleFilterChange("Over $5,000");
                  setSelectedFilters((prevState) => [
                    ...prevState,
                    "Over $5,000",
                  ]);
                }}
              />

              <p>Over $5,000</p>
            </li>
          </ul>
        ) : null}
      </li>
      <li className=" border-gray-200">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium">Brand</p>
          {selected ? (
            <FontAwesomeIcon icon={faPlus} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </div>
      </li>
      <li className="border-t-2 border-b-2 border-gray-200">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium">Type</p>
          {selected ? (
            <FontAwesomeIcon icon={faPlus} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </div>
      </li>
      <li className=" border-gray-200">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium">Wood</p>
          {selected ? (
            <FontAwesomeIcon icon={faPlus} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </div>
      </li>
      <li className="border-t-2 border-b-2 border-gray-200">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium">Finish</p>
          {selected ? (
            <FontAwesomeIcon icon={faPlus} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </div>
      </li>
      <li className=" border-gray-200">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium">Strings</p>
          {selected ? (
            <FontAwesomeIcon icon={faPlus} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </div>
      </li>
      <li className="border-t-2 border-b-2 border-gray-200">
        <div className="flex items-center justify-between py-4">
          <p className="text-xl font-medium">Electronics</p>
          {selected ? (
            <FontAwesomeIcon icon={faPlus} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </div>
      </li>
    </ul>
  );
};

const SelectedFilter = ({ filter, deleteFilter }) => {
  return (
    <div
      className="flex items-center border-[1px] border-gray-200 p-2 overflow-hidden gap-4"
      onClick={() => deleteFilter(filter)}
    >
      <p className="uppercase text-sm">{filter}</p>
      <FontAwesomeIcon icon={faXmark} className="text-[8px]" />
    </div>
  );
};

ProductFeed.defaultProps = {
  type: "Default Type",
  qty: 0,
};

export default ProductFeed;
