"use client";

import React, { useState } from "react";

export default function PersonalDetails({ onBack, onNext, data }) {
  const [firstName, setFirstName] = useState(data.firstName || "");
  const [lastName, setLastName] = useState(data.lastName || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [address, setAddress] = useState(data.address || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ firstName, lastName, phone, address });
  };

  return (
    <div className="sm:mx-auto px-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="flex items-center justify-between w-full flex-wrap ">
            <div className="flex flex-col sm:w-[48%] w-full mb-6 sm:mb-0">
              <label>First Name</label>
              <input
                type="text"
                className="px-1 py-1.5 border-black border-2 rounded-md"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col sm:w-[48%] w-full">
              <label>Last Name</label>
              <input
                type="text"
                className="px-2 py-1.5 border-black border-2 rounded-md"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input
              type="text"
              className="px-2 py-1.5 border-black border-2 rounded-md"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input
              type="text"
              className="px-2 py-1.5 border-black border-2 rounded-md"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-8 mt-6">
          <button
            onClick={onBack}
            className="w-full bg-[#FF753A] shadow-md hover:bg-[#FF8C42] transition all duration-300 font-medium text-white text-sm px-8 py-2 rounded-md"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="w-full bg-[#FF753A] shadow-md hover:bg-[#FF8C42] transition all duration-300 font-medium text-white text-sm px-8 py-2 rounded-md"
            disabled={
              firstName.trim() === "" ||
              lastName.trim() === "" ||
              phone.trim() === "" ||
              address.trim() === ""
            }
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
