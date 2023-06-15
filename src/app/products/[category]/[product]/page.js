"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
import swiperConfig from "../../../../utils/swiperConfig.ts";

import mock from "../../../../assets/mocks/mock.json";

import lx1 from "../../../../assets/images/lx1.png";

import { Card } from "@/components/Card.jsx";

export default function Product() {
  const product = {
    id: 1,
    image: lx1,
    category: "Guitars",
    type: "Acoustic",
    price: 299.99,
    bio: "Compact, versatile, and resonant",
    name: "LX1",
    short_description:
      "The Little Martin LX1: small in size, big in tone. Ideal for travel, practice, and casual playing. Includes sustainable wood parts.",
    long_description:
      "Martin Junior Series instruments are slightly smaller than our full-sized instruments, but you won’t have to sacrifice tone or volume, and you’ll gain plenty of comfort and portability. This Martin DJR-10E acoustic-electric bass is ideal if you love to write and practice on an unplugged bass but also need the option to plug it in to record or play live with your band. It includes a spruce top and sapele back and sides to deliver thumping Martin bass tones, whether you are unplugged or using the built-in Fishman® electronics. It also includes a fast, comfortable neck so you can keep the rhythm section tight. The DJR-10E Bass is strung with Martin short scale bass strings that are made specifically for this instrument.",
  };

  const specs = [
    {
      image: "/image-url-1.jpg",
      name: "Color",
      description: "The color of the product is black.",
    },
    {
      image: "/image-url-2.jpg",
      name: "Material",
      description: "The product is made of high-quality mahogany.",
    },
    {
      image: "/image-url-3.jpg",
      name: "Size",
      description: "The dimensions of the product are 10cm x 20cm x 5cm.",
    },
    {
      image: "/image-url-1.jpg",
      name: "Color",
      description: "The color of the product is black.",
    },
    {
      image: "/image-url-2.jpg",
      name: "Material",
      description: "The product is made of high-quality mahogany.",
    },
    {
      image: "/image-url-3.jpg",
      name: "Size",
      description: "The dimensions of the product are 10cm x 20cm x 5cm.",
    },
  ];

  return (
    <div className="">
      <Main product={product} />
      <Context product={product} />
      <Specifications specs={specs} />
      <RecommendedProducts recommendedProducts={Object.values(mock)} />
    </div>
  );
}

const Main = ({ product }) => {
  const fetchedUrl =
    "https://www.nespresso.com/shared_res/agility/n-components/pdp/sku-main-info/background/background_L.jpg";
  return (
    <div
    /*  style={{ "--image-url": `url(${fetchedUrl})` }}
      className="bg-[image:var(--image-url)]" */
    >
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row justify-center items-center p-12">
        <div className="flex flex-col items-center gap-6 ">
          <div className="flex justify-start w-full px-4">
            <Link
              href={`/products/${product.category}`}
              className="uppercase tracking-wider border-b-[1px] text-sm hover:font-semibold border-black"
            >
              See all {product.category}
            </Link>
          </div>
          <div className="lg:w-[500px] pointer-events-none">
            <Image src={product.image} />
          </div>

          <div className="w-full flex justify-end sm:justify-start">
            <p className="text-[12px]">
              *Image with illustrative purposes only.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 py-8 shadow-lg h-1/2  lg:w-[30%] w-full flex flex-col items-center text-center gap-2 lg:gap-4">
          <div>
            <p className="text-[##6f6f70] uppercase text-xs font-bold tracking-wider leading-relaxed">
              {product.category}
            </p>
            <p className="mb-4  text-xs font-medium tracking-wide leading-relaxed">
              {product.type}
            </p>
          </div>
          <p className="mb-4 text-[#17171a] text-4xl font-bold uppercase leading-5 tracking-[.1875rem]">
            {product.name}
          </p>
          <p className="mb-4 text-[#6f6f70] text-lg font-normal leading-5 tracking-[.0625rem]">
            {product.bio}
          </p>
          <p className="mb-8 text-black text-2xl font-bold leading-6 tracking-[.1875rem]">
            ${product.price}
          </p>

          <button className="upppercase text-white rounded-full bg-[#f1510d] hover:bg-[#c45221] transition-all duration-300 ease-in-out font-NespressoLucas font-semibold text-base  overflow-visible py-2 px-4 uppercase whitespace-normal ">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

const Context = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-[#faf9f8] p-12 gap-6 text-center">
      <p className="text-3xl font-normal tracking-wide leading-tight uppercase">
        {product.name}
      </p>

      <p className="text-xl font-light tracking-wider leading-relaxed uppercase">
        {product.bio}
      </p>

      <p className="w-full text-xs sm:text-base text-center">
        {product.short_description}
      </p>
    </div>
  );
};

const Specifications = ({ specs }) => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col px-12 md:px-12 py-9 lg:w-1/2">
        <div className="flex w-full justify-center items-center lg:justify-start mb-12">
          <p className="uppercase text-3xl font-light tracking-wide leading-tight ">
            Specifications
          </p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {specs.map((spec, item) => {
            return (
              <li
                key={item}
                className="flex gap-4 w-full border-b-[1px] border-gray-200 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                >
                  <path d="m25 4v3.85522c-.5284-.04999-.8572-.1759-1.2168-.31958-.4873-.19482-1.04-.41553-2.0869-.41553s-1.6006.2207-2.0879.41553c-.4619.18457-.8613.34424-1.7168.34424-.8525 0-1.251-.15967-1.7129-.34424-.4868-.19482-1.0386-.41553-2.0845-.41553-1.0463 0-1.5981.2207-2.0854.41602-.4609.18457-.8594.34375-1.7119.34375-.85305 0-1.25197-.15967-1.7134-.34424-.39966-.15991-.85926-.33032-1.5835-.38867v-3.14697h-1v24h20v-24zm-18 23v-18.85516c.52588.04993.85345.1756 1.21191.31952.4873.19482 1.03906.41553 2.08499.41553 1.0449 0 1.5966-.2207 2.0835-.41553.4619-.18457.8603-.34424 1.7138-.34424.8531 0 1.252.15967 1.7134.34424.4864.19482 1.0381.41553 2.084.41553 1.0469 0 1.6006-.2207 2.0879-.41553.4619-.18457.8613-.34424 1.7168-.34424.8545 0 1.2539.15967 1.7158.34424.4003.16003.8613.33044 1.5879.38873v18.14691z"></path>
                </svg>

                <div>
                  <p className="uppercase">{spec.name}</p>
                  <p>{spec.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const RecommendedProducts = ({ recommendedProducts }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex w-full px-12 justify-start my-8">
        <h1 className="worksans-bold text-center text-2xl">
          Recommended Products
        </h1>
      </div>
      <div className="relative">
        <Swiper
          {...swiperConfig}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {recommendedProducts.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <Card product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
