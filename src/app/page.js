"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import boss from "../assets/images/brands/boss.png";
import fender from "../assets/images/brands/fender.png";
import gibson from "../assets/images/brands/gibson.png";
import taylor from "../assets/images/brands/taylor.png";
import martin from "../assets/images/brands/martin.png";
import yamaha from "../assets/images/brands/yamaha.png";
import epiphone from "../assets/images/brands/epiphone.png";
import ernieball from "../assets/images/brands/ernieball.png";
import focusrite from "../assets/images/brands/focusrite.png";
import korg from "../assets/images/brands/korg.png";
import marshall from "../assets/images/brands/marshall.png";

import lx1 from "../assets/images/lx1.png";
import ed from "../assets/images/ed.png";
import arrow from "../assets/images/Arrow_22.svg";
import visa from "../assets/images/payments/visa.svg";
import applepay from "../assets/images/payments/apple-pay.svg";
import googlepay from "../assets/images/payments/google-pay.svg";
import amex from "../assets/images/payments/amex.svg";

import { Card } from "../components/Card";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";

import { OrangeBorder } from "../components/OrangeBorder";
import { Footer } from "../components/Footer";

import swiperConfig from "../utils/swiperConfig";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const paymentImages = [visa, amex, applepay, googlepay];

const brands = [
  boss,
  fender,
  ernieball,
  martin,
  yamaha,
  taylor,
  gibson,
  epiphone,
  focusrite,
  korg,
  marshall,
];

const product = {
  id: 1,
  image: lx1,
  category: "Acoustic Guitars",
  price: 299.99,
  name: "Martin LX1",
  short_description:
    "The Little Martin LX1: small in size, big in tone. Ideal for travel, practice, and casual playing. Includes sustainable wood parts.",
};

import acoustic from "../assets/images/categories/acoustic.jpg";
import amp from "../assets/images/categories/amp.jpg";
import drums from "../assets/images/categories/drums.jpg";
import electric from "../assets/images/categories/electric.jpg";
import keys from "../assets/images/categories/keys.jpg";
import pedal from "../assets/images/categories/pedal.jpg";
import cables from "../assets/images/categories/cables.jpg";
import headphones from "../assets/images/categories/headphones.jpg";
import { SwiperNavButtons } from "../utils/SwiperNavButtons";

const categories = [
  {
    name: "Acoustic Guitars",
    image: acoustic,
    link: "/acoustic-guitars",
  },
  {
    name: "Electric Guitars",
    image: electric,
    link: "/electric-guitars",
  },
  { name: "Keys", image: keys, link: "/keys" },
  { name: "Pedals", image: pedal, link: "/pedals" },
  { name: "Amps", image: amp, link: "/amps" },
  { name: "Accesories", image: cables, link: "/cables" },
  { name: "Drums", image: drums, link: "/drums" },
  { name: "Headphones", image: headphones, link: "/headphones" },
];

export default function Home() {
  return (
    <div className="px-6">
      {/*   <GridItems /> */}
      <Featured />
      <Brands />
      <ProductCarousel />
      <Incentives />
      <Payments />
       <Footer />
    </div>
  );
}

const GridItems = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      {categories.map((category, index) => (
        <div key={index} className="relative overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity">
            <Link className="text-white font-bold text-lg">
              {category.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const Brands = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center my-8">
        <OrangeBorder />
        <h1 className="worksans-bold text-center text-2xl">
          Associated Brands
        </h1>
      </div>
      <Swiper
        {...swiperConfig}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {brands.map((brand, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={"brands/:name"} className="content-none flex justify-center">
                <Image src={brand} className="relative w-1/2 sm:w-[40%]" />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="flex items-center justify-center 2xl:justify-around flex-wrap my-12 space-x-6 space-y-12">
      <div className="text-left w-full md:w-[500px]">
        <h1 className="text-[40px] text-left md:text-[60px] font-bold">
          Fullfilling <span className="text-[#FF753A]">Dreams</span> With
          Strings Attached.
          <span className="hidden sm:flex">(Like Ed).</span>
        </h1>
        <p>
          We sell high quality musical products for you to achieve the peak in
          perfomance.
        </p>
      </div>

      <div className="w-[350px] lg:w-[400px] bg-gradient-to-l  from-[#FF753A] rounded-md justify-center items-center shadow-lg hidden sm:flex">
        <Image src={arrow} className="relative bottom-20 rotate-45" />
        <Image src={ed} className="object-cover" />
      </div>
    </div>
  );
};

const ProductCarousel = () => {
  const latestProducts = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
  ];
  const swiper = useSwiper();
  return (
    <>
      <div className="mb-12 relative">
        <div className="flex flex-col items-center my-8">
          <OrangeBorder />
          <h1 className="worksans-bold text-center text-2xl">New Products</h1>
        </div>
        <div className="relative">
          <Swiper
            {...swiperConfig}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            {latestProducts.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const Incentives = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-16">
        <h1 className="worksans-bold text-center text-2xl mb-6">
          We are your gateway to the world of music
        </h1>

        <div className="flex flex-row flex-wrap items-baseline space-y-4">
          <div className="sm:flex-1 flex-grow">
            <Incentive
              icon={
                <LocalShippingOutlinedIcon
                  sx={{ fontSize: "2rem", color: "#" }}
                />
              }
              title={"Free shipping"}
              text={
                "Experience the ultimate convenience with our exclusive offer of free shipping on all orders."
              }
            />
          </div>
          <div className="sm:flex-1 flex-grow">
            <Incentive
              icon={<LoyaltyOutlinedIcon sx={{ fontSize: "2rem" }} />}
              title={"Guitar strings for life"}
              text={
                "Purchase any guitar from us and enjoy free string replacements every time one breaks!"
              }
            />
          </div>
          <div className="sm:flex-1 flex-grow">
            <Incentive
              icon={<SchoolOutlinedIcon sx={{ fontSize: "2rem" }} />}
              title={"3 hour lesson"}
              text={
                "Start your musical journey with us and get a free 3-hour lesson when you purchase your first instrument!"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Incentive = (props) => {
  return (
    <div className="flex flex-col items-center">
      {props.icon}
      <p className="text-xl font-semibold my-2 ">{props.title}</p>
      <p className="text-[16px] text-center px-6">{props.text}</p>
    </div>
  );
};

const Payments = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <OrangeBorder />
      <div className="flex flex-col xl:flex-row xl:justify-center items-center gap-4 xl:gap-8">
        <p className="uppercase text-center text-[18px]">
          100% Secure Payments
        </p>

        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {paymentImages.map((img, index) => {
            return (
              <div
                key={index}
                className=" w-16 sm:w-14 gap-5 flex flex-row items-center"
              >
                <Image src={img} className="w-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
