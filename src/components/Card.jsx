import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import lx1 from "../assets/images/lx1.png";
export const Card = (props) => {
  const product = {
    id: 1,
    image: lx1,
    category: "Acoustic Guitars",
    price: 299.99,
    name: "Martin LX1",
    short_description:
      "The Little Martin LX1: small in size, big in tone. Ideal for travel, practice, and casual playing. Includes sustainable wood parts.",
    long_description:
      "While the Little Martin is our smallest guitar, it is very big on tone, quality and versatility. The LX1 model features a solid spruce top and mahogany high-pressure laminate HPL back and sides. It’s ideal for travel, student practice or for just playing around the house or campfire. This model includes sustainable wood certified parts. See specifications for details.",
    rating: 3.5,
  };

  const stock = true;
  return (
    <>
      <div className="flex flex-col items-center sm:w-full bg-white rounded-md w-full shadow-md pb-4 mb-4 px-[1rem] content-none cursor-default ">
        <div className="h-full  pt-2 relative text-center box-content overflow-hidden">
          <Link href="/products/:category/:id">
          
            <Image src={props.product.image} className="relative" />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between mb-4 ">
          <div className="flex flex-col items-center mb-2">
            <h1 className="uppercase worksans-bold tracking-wide text-2xl text-center">
              {props.product.name}
            </h1>
            <p className="text-md font-medium mt-2">{props.product.category}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="worksans-regular font-semibold text-[28px] text-orange-500 mb-1">
              ${props.product.price}
            </p>

            <button className="bg-[#FF753A] shadow-md hover:bg-[#C55E25] transition all duration-300 font-medium text-white sm:text-[12px] w-full px-8 py-2 rounded-full">
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
