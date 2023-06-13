"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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
import swiperConfig from "../../../utils/swiperConfig.ts";

import lx1 from "../../../assets/images/lx1.png";

import mock from "../../../assets/mocks/mock.json";

const Product = () => {
  const product = {
    id: 1,
    image: lx1,
    category: "Guitars",
    type: "Acoustic",
    price: 299.99,
    bio: "Compact, versatile, and resonant",
    name: "Martin LX1",
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
  ];

  return (
    <div className="flex flex-col ">
      <Main product={product} />
      <Context />
      <Specifications specs={specs} />
      <RecommendedProducts recommendedProducts={mock} />
    </div>
  );
};

const Main = ({ product }) => {
  <div className="bg-white">
    <div className="flex w-full justify-start">
      <Link
        href="/products/:category"
        className="upercase border-black border-b-[1px] hover:border-b-[3px] pb-2"
      >
        See all {product.category}
      </Link>
    </div>

    <div className="flex justify-evenly">
      <div className="w-1/2">
        <Image src={product.image} className="w-full object-cover" alt="" />
        <div className="flex w-full justify-start">
          <p>*Image with illustrative purposes only.</p>
        </div>
      </div>

      <div className="w-[300px] bg-white shadow-lg px-6 py-4 flex flex-col items-center">
        <div>
          <p className="text-[##6f6f70] uppercase font-semibold">
            {product.category}
          </p>
          <p className="uppercase">{product.type}</p>
        </div>

        <p className="uppercase text-xl font-bold">{product.name}</p>

        <p className="text-lg">{product.bio}</p>

        <div>
          <p className="font-bold text-lg">${product.price}</p>

          <button className="bg-[#FF753A] shadow-md hover:bg-[#C55E25] transition all duration-300 font-medium text-white sm:text-[12px] w-full px-8 py-2 rounded-full">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  </div>;
};

const Context = ({ name, bio, long_description }) => {
  return (
    <div className="flex flex-col items-center bg-[#faf9f8]">
      <p className="uppercase text-2xl">{name}</p>

      <p className="uppercase text-lg">{bio}</p>

      <p className="">{long_description}</p>
    </div>
  );
};

const Specifications = ({ specs }) => {
  return (
    <div>
      <div className="flex w-full justify-center sm:justify-start">
        <p className="uppercase">Specifications</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <ul>
          {specs.map((spec, item) => {
            return (
              <li className="flex gap-4 w-full border-b-[1px] border-gray-200">
                <Image
                  className="w-full"
                  width={50}
                  height={50}
                  src={spec.image}
                />

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
    <div>
      <div className="flex justify-start my-8">
        <h1 className="worksans-bold text-center text-2xl">
          Recommended Products
        </h1>
      </div>
      <div className="relative">
        {/*    <Swiper
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
        </Swiper> */}
      </div>
    </div>
  );
};

export default Product;
