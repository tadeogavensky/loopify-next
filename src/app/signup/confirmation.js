"use client";
import React from "react";

export default function Confirmation({
  dataDetails,
  personalDetails,
  onBack,
  onNext,
}) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center mb-4">Step 3: Confirmation</h2>
      <div className="border border-gray-300 rounded-lg p-4 mb-4">
        <h3 className="mb-2">Data Details:</h3>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold">Email:</td>
              <td>{dataDetails.email}</td>
            </tr>
            <tr>
              <td className="font-semibold">Password:</td>
              <td>{dataDetails.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border border-gray-300 rounded-lg p-4">
        <h3 className="mb-2">Personal Details:</h3>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold">First Name:</td>
              <td>{personalDetails.firstName}</td>
            </tr>
            <tr>
              <td className="font-semibold">Last Name:</td>
              <td>{personalDetails.lastName}</td>
            </tr>
            <tr>
              <td className="font-semibold">Address:</td>
              <td>{personalDetails.address}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-8 mt-4">
        <button
          onClick={onBack}
          className="bg-[#FF753A] hover:bg-[#FF8C42] transition-all duration-300 text-white text-sm px-8 py-2 rounded-md"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#FF753A] hover:bg-[#FF8C42] transition-all duration-300 text-white text-sm px-8 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
