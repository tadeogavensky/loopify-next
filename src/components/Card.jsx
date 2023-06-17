import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props) => {
  const stock = true;

  return (
    <>
      <div className="flex flex-col items-center sm:w-full bg-white rounded-md w-full shadow-md pb-4 mb-4 px-[1rem] content-none cursor-default relative ">
        <div className="h-full  pt-2 relative text-center box-content overflow-hidden">
          <Link
            href={`/products/${props.product.category}/${props.product.name}`}
          >
            <Image src={props.product.image} className="relative" />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between mb-4 ">
          <div className="flex flex-col items-center mb-2">
            <h1 className="uppercase worksans-bold tracking-wide text-2xl text-center font-bold">
              {props.product.name}
            </h1>
            <p className="text-md font-medium mt-2 capitalize">{props.product.category}</p>
            <p className="text-md font-medium mt-2 capitalize">{props.product.type}</p>

          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="worksans-regular font-semibold text-[28px] text-orange-500 mb-1">
              ${props.product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
