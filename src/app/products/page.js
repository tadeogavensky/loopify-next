"use client";

import React, { useState } from "react";
import Image from "next/image";

import mock from "../../assets/mocks/mock.json";
import img from "../../assets/images/lx1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <>
      <div className=" relative w-full px-6">
        <h1>{type}</h1>

        <div className="flex justify-between items-center">
          <button
            className="px-16 py-2 bg-[#FF753A] text-white font-semibold hover:bg-[#C55E25] transition all duration-300"
            onClick={() => {
              openSideFilters();
            }}
          >
            Filter
          </button>
          <p>{qty} Results</p>
          <select name="" id="" className="p-2 border-[1px] border-black">
            {quickFilters.map((filter, index) => (
              <option value={filter} key={index}>
                {filter}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 mt-6">
          {mock.guitars.map((item, index) => (
            <div className="flex flex-col group" key={index}>
              <div className="h-full">
                <Image src={img} alt="" className="w-full object-contain" />
              </div>
              <div className="flex flex-col items-center border-t-[2px] border-t-transparent group-hover:border-black">
                <p className="text-[20px]">{item.name}</p>
                <p>{item.brand}</p>
                <p className="text-[20px]">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`absolute top-0 ${
            showFilters ? "left-0" : "-left-full"
          } h-full bg-white transition-all duration-300 ease-in-out z-70 overflow-x-hidden w-[55%] shadow-sm pb-6  lg:hidden`}
        >
          <div className="flex py-4 px-6 items-center justify-between bg-black text-white">
            <p className="font-semibold text-[16px]">{qty} Results</p>

            <button
              onClick={() => {
                closeSideFilters()
              }}
            >
              <FontAwesomeIcon icon={faXmark} className="text-[15px]" />
            </button>
          </div>

          <div className="px-4">
            <div className="flex items-center justify-between my-4">
              <button className="text-2xl">Show / Hide Filters</button>

              <button className="text-2xl">Reset</button>
            </div>

            <ul>
              <li className="border-t-2 border-b-2 border-gray-200">
                <div className="flex items-center justify-between py-4">
                  <p className="text-3xl font-semibold">Price</p>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </li>
              <li className=" border-gray-200">
                <div className="flex items-center justify-between py-4">
                  <p className="text-3xl font-semibold">Brand</p>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </li>
              <li className="border-t-2 border-b-2 border-gray-200">
                <div className="flex items-center justify-between py-4">
                  <p className="text-3xl font-semibold">Type</p>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </li>
              <li className=" border-gray-200">
                <div className="flex items-center justify-between py-4">
                  <p className="text-3xl font-semibold">Wood</p>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </li>
              <li className="border-t-2 border-b-2 border-gray-200">
                <div className="flex items-center justify-between py-4">
                  <p className="text-3xl font-semibold">Finish</p>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </li>
              <li className=" border-gray-200">
                <div className="flex items-center justify-between py-4">
                  <p className="text-3xl font-semibold">Strings</p>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </li>
              <li className="border-t-2 border-b-2 border-gray-200">
                <div className="flex items-center justify-between py-4">
                  <p className="text-3xl font-semibold">Electronics</p>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

ProductFeed.defaultProps = {
  type: "Default Type",
  qty: 0,
};

export default ProductFeed;
