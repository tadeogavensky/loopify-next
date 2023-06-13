"use client";

import Image from "next/image";
import Link from "next/link";

import notFound from "../assets/images/not-found.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-start gap-32 my-32 px-12">
      <div className="flex flex-col gap-8 w-full lg:w-[25%]">
        <p className="uppercase text-4xl w-full font-light">
          Sorry, page not found
        </p>
        <p className="w-full tracking-wider ">
          Sometimes technology fails us, but a good music never does. Why not
          grab yourself a guitar and then head back to the Homepage?
        </p>

        <Link href="/">
          <button className="bg-[#FF753A] shadow-md hover:bg-black transition all duration-300 font-medium text-white uppercase w-full lg:w-1/2 tracking-widest text-sm px-4 py-3 rounded-full">
            Go to homepage
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center sm:hidden ">
        <div className="w-[70%]">
          <Image src={notFound} className="w-full object-cover" />
        </div>
      </div>

      <div className="justify-center items-center flex-col hidden sm:flex lg:hidden ">
        <div className="">
          <Image src={notFound} className="w-full object-cover" />
        </div>
      </div>

      <div className="w-[30%] hidden lg:flex ">
        <Image src={notFound} className="w-full object-cover" />
      </div>
    </div>
  );
}
