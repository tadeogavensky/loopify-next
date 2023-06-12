
import Link from 'next/link'
import chatsvg from "../assets/images/icons/chat-svg.svg";
import callsvg from "../assets/images/icons/call-svg.svg";
import infocircle from "../assets/images/icons/info-circle.svg";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from '@mui/icons-material/Adb';

import { useState } from "react";

export const Footer = () => {
  const [showDropStore, setShowDropStore] = useState(false);
  const [showDropAbout, setShowDropAbout] = useState(false);
  const [showDropAssistance, setShowDropAssistance] = useState(false);
  const [showDropContact, setShowDropContact] = useState(false);

  return (
    <div className="my-8">
      <div className="block md:hidden">
        <footer>
          <ul>
            <li className="">
              <FooterButton
                name={"Store"}
                id={1}
                selectedState={setShowDropStore}
              />

              {!showDropStore ? null : <StoreLinks />}
            </li>
            <li className="">
              <FooterButton
                name={"About Loopify"}
                id={2}
                selectedState={setShowDropAbout}
              />
              {!showDropAbout ? null : <AboutLinks />}
            </li>
            <li className="">
              <FooterButton
                name={"Assistance"}
                id={3}
                selectedState={setShowDropAssistance}
              />
              {!showDropAssistance ? null : <AssistanceLinks />}
            </li>
            <li className="">
              <FooterButton
                name={"Contact Us"}
                id={4}
                selectedState={setShowDropContact}
              />
              {!showDropContact ? null : <ContactLinks />}
            </li>
          </ul>
        </footer>
      </div>
      <div className="hidden md:block">
        <footer className="flex justify-evenly items-baseline">
          <div className="space-y-4">
            <p className="uppercase">Store</p>
            <StoreLinks />
          </div>
          <div className="space-y-4">
            <p className="uppercase">About Loopify</p>
            <AboutLinks />
          </div>
          <div className="space-y-4">
            <p className="uppercase">Assistance</p>
            <AssistanceLinks />
          </div>
          <div className="space-y-4">
            <p className="uppercase">Contact us</p>
            <ContactLinks />
          </div>
        </footer>
      </div>
      <div className="flex flex-col justify-center sm:items-center gap-1 mt-8">
        <h1>DOWNLOAD LOOPIFY APP</h1>

        <div className="flex items-baseline gap-6">
          <Link href="/apple" className="underline">
            <AppleIcon sx={{ fontSize: "2rem" }} />
          </Link>
          <Link href="/android" className="underline">
            <AdbIcon sx={{ fontSize: "2rem" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const FooterButton = ({ name, selectedState, id }) => {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
    selectedState(!selected);
    return id;
  };

  return (
    <button
      className="uppercase py-4 flex items-center justify-between w-full border-t-[1px] border-gray-300"
      onClick={toggle}
    >
      <span>{name}</span>
      {selected ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    </button>
  );
};

const StoreLinks = () => {
  return (
    <div className="flex flex-col gap-3 mb-2">
      <Link href="/products/guitars" className="underline">Guitars</Link>
      <Link href="/products/pedals" className="underline">Pedals</Link>
      <Link href="/products/gearaccessories" className="underline">Accessories</Link>
      <Link href="/products/vinyls" className="underline">Vinyl</Link>
      <Link href="/lessons" className="underline">Lessons</Link>
    </div>
  );
};

const AboutLinks = () => {
  return (
    <div className="flex flex-col gap-3 mb-2">
      <Link href="/store-locator" className="underline">Store locator</Link>
      <Link href="/careers" className="underline">Careers</Link>
      <Link href="/professional" className="underline">Professional</Link>
    </div>
  );
};

const AssistanceLinks = () => {
  return (
    <div className="flex flex-col gap-3 mb-2">
      <Link href="/faq" className="underline">FAQ</Link>
      <Link href="/repairs" className="underline">Repairs</Link>
      <Link href="/order/track" className="underline">Track your order</Link>
      <Link href="/consumer-defense" className="underline">Consumer defense</Link>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <div className="mt-4 flex flex-col items-start gap-6">
      
    </div>
  );
};
