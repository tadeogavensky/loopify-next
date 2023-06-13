"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faBars,
  faBagShopping,
  faXmark,
  faGuitar,
  faHeadphonesSimple,
  faCompactDisc,
  faGraduationCap,
  faSitemap,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0); // To be an object with, array of products, qty of items, price, state of cart, etc

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("showSidebar :>> ", showSidebar);
    document.querySelector("body").classList.add("no-scroll");
    document
      .querySelector("#home")
      .classList.add("sidebar-open-background-behind");
  };

  const closeSidebar = () => {
    if (showSidebar == true) {
      setShowSidebar(false);
      document.querySelector("body").classList.remove("no-scroll");
      document
        .querySelector("#home")
        .classList.remove("sidebar-open-background-behind");
    }
    setShowSidebar(false);
  };

  const openUserMenu = () => {
    setUserMenuOpen(true);
  };

  const closeUserMenu = () => {
    console.log("click :>> ");
    setUserMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowSidebar(false);
        document.querySelector("body").classList.remove("no-scroll");
        document
          .querySelector("#home")
          .classList.remove("sidebar-open-background-behind");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-[#f1510d] py-2 md:py-3 flex justify-end">
        <button className="text-white mr-6 hidden lg:block">Support</button>
      </div>
      <div
        className={`bg-white border-gray-200 border-b-[1px]  flex flex-col relative  py-3 sm:py-4 ${
          showSidebar ? "overflow-hidden" : null
        }`}
      >
        <div className="hidden lg:flex items-center justify-evenly  ">
          <div className="w-[50%] flex justify-around items-center">
            <Link href="/" className="flex items-center md:gap-3">
              <h1 className="text-[#171514] text-[20px] uppercase mr-2 sm:mr-0 worksans-bold">
                Loopi<span className="text-[#FF753A]">fy</span>
              </h1>
            </Link>

            <Link href="/products/guitars" className="font-bold link-item ">
              Guitars
            </Link>
            <Link
              href="/products/gearaccessories"
              className="font-bold link-item "
            >
              Gear & Accessories
            </Link>
            <Link href="/lessons" className="font-bold link-item ">
              Lessons
            </Link>
            <Link href="/aboutus" className="font-bold link-item ">
              This Is Loopify
            </Link>
          </div>

          <div className="flex items-center justify-evenly w-[30%] gap-3 ">
            <form
              action=""
              className="items-center w-[200px] relative hidden sm:flex"
            >
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none px-4 py-3 rounded-md  "
              />
              <button
                type="submit"
                className="text-white bg-[#FF753A] hover:bg-[#f8601f] transition-all duration-300 ease-in-out outline-none absolute right-0  px-6 py-[6px] rounded-r-md"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[16px]"
                />
              </button>
            </form>

            <div
              onMouseEnter={openUserMenu}
              onMouseLeave={closeUserMenu}
              className="relative"
            >
              <AccountCircleOutlinedIcon />
              {!userMenuOpen ? (
                <ArrowDropDownOutlinedIcon />
              ) : (
                <ArrowDropUpOutlinedIcon />
              )}
              {userMenuOpen && (
                <div
                  className="flex flex-col bg-white shadow-md w-[150px] absolute top-full -right-12 z-90 "
                  onMouseEnter={openUserMenu}
                  onMouseLeave={closeUserMenu}
                >
                  <button className="w-full hover:bg-gray-300 p-2">
                    <Link href="/login"> Sign In</Link>
                  </button>
                  <button className="w-full hover:bg-gray-300 p-2">
                    <Link href="/signup">Create Account</Link>
                  </button>
                </div>
              )}
            </div>

            <button className="relative">
              <ShoppingCartOutlinedIcon />
              <div className="absolute bottom-4 left-6 flex items-center justify-center bg-[#FF753A] rounded-full px-1">
                <p className=" text-white text-xs">{cartItems}</p>
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-center w-full lg:hidden justify-between px-4">
          {!showSidebar ? (
            <button className="text-black lg:hidden" onClick={openSidebar}>
              <FontAwesomeIcon icon={faBars} className="text-[25px]" />
            </button>
          ) : (
            <button className="text-black lg:hidden" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faXmark} className="text-[25px]" />
            </button>
          )}
          <Link href="/" passHref className="flex items-center md:gap-3">
            <h1 className="text-[#171514] text-[20px] uppercase mr-2 sm:mr-0 worksans-bold">
              Loopi
              <span className="text-[#FF753A]">fy</span>
            </h1>
          </Link>

          <button className="relative lg:hidden mr-2">
            <ShoppingCartOutlinedIcon />
            <div className="absolute bottom-4 left-6 flex items-center justify-center bg-[#FF753A] rounded-full px-1">
              <p className=" text-white text-xs">{cartItems}</p>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`absolute top-18 ${
          showSidebar ? "left-0" : "-left-full"
        } h-full bg-white transition-all duration-300 ease-in-out z-50 overflow-x-hidden w-[85%] shadow-sm pb-6  lg:hidden`}
      >
        <div className="flex flex-col w-full">
          <form
            action=""
            className="w-full text-lg flex items-center border-black border-b-[1px] pr-4"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full p-4 focus:outline-none"
            />

            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>

          <div className="flex flex-col gap-6 text-black mx-6 mt-3">
            <Link
              href="/products/guitars"
              passHref
              className="flex items-center justify-between gap-5 text-[16px] font-bold"
              onClick={closeSidebar}
            >
              <p>Guitars</p>
              <ArrowRightIcon />
            </Link>
            <Link
              href="/products/pedals"
              passHref
              className="flex items-center justify-between gap-5 text-[16px] font-bold"
              onClick={closeSidebar}
            >
              <p>Pedals</p>
              <ArrowRightIcon />
            </Link>
            <Link
              href="/products/gear-accessories"
              passHref
              className="flex items-center justify-between gap-5 text-[16px] font-bold"
              onClick={closeSidebar}
            >
              <p>Gear & Accessories</p>
              <ArrowRightIcon />
            </Link>
            <Link
             href="/products/vinyls"
              passHref
              className="flex items-center justify-between gap-5 text-[16px] font-bold"
              onClick={closeSidebar}
            >
              <p>Vinyls</p>
              <ArrowRightIcon />
            </Link>
            <Link
              href="/lessons"
              passHref
              className="flex items-center justify-between gap-5 text-[16px] font-bold"
              onClick={closeSidebar}
            >
              <p>Lessons</p>
              <ArrowRightIcon />
            </Link>
            <Link
              href="/about"
              passHref
              className="flex items-center justify-between gap-5 text-[16px] font-bold"
              onClick={closeSidebar}
            >
              <p>About Us</p>
              <ArrowRightIcon />
            </Link>
            <Link
              href="/login"
              passHref
              className="flex items-center justify-between gap-5 text-[16px] font-bold"
              onClick={closeSidebar}
            >
              <p>Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
