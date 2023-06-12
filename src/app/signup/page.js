"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import DoneIcon from "@mui/icons-material/Done";

export default function Registration(){
  const [checkPassword, setCheckPassword] = useState([
    { text: "Minimum 8 characters", isValid: false },
    { text: "Contains at least one uppercase letter", isValid: false },
    { text: "Contains at least one number", isValid: false },
  ]);

  const [password, setPassword] = useState("");

  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [confirmPassword, setConfirmPassword] = useState(false);

  const validatePassword = (password) => {
    setCheckPassword((prevState) => {
      const newState = [...prevState];

      newState[0].isValid = password.length >= 8;

      newState[1].isValid = /[A-Z]/.test(password);

      newState[2].isValid = /\d/.test(password);

      return newState;
    });
  };

  const validateConfirmPassword = (pass) => {
    setPasswordConfirm(pass);
    pass === password ? setConfirmPassword(true) : setConfirmPassword(false);
  };

  return (
    <div className="">
      <div className="flex flex-col  bg-white justify-around">
        <div className="flex min-h-full flex-1 flex-col items-center px-6 py-12 lg:px-8">
          <Link href="/">
            <h1 className="text-[#FF753A] text-[30px] uppercase worksans-bold">
              Loopi
              <span className="text-[#00BFFF]">fy</span>
            </h1>
          </Link>

          <p className="text-lg sm:text-2xl worksans-regular mt-10 border-b-[#FF753A] border-b-4 pb-2 ">
            Create your account
          </p>

          <div className="mt-10 sm:mx-auto ">
            <form action="" className="space-y-6">
              <div className="flex items-center justify-between w-full flex-wrap ">
                <div className="flex flex-col sm:w-[48%] w-full mb-6 sm:mb-0">
                  <label className="">First Name</label>
                  <input
                    type="text"
                    className="px-1 py-1.5 border-black border-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col sm:w-[48%] w-full">
                  <label className="">Last Name</label>
                  <input
                    type="text"
                    className="px-2 py-1.5 border-black border-2 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="">Email address</label>
                <input
                  type="text"
                  className="px-2 py-1.5 border-black border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="">Phone Number</label>
                <input
                  type="text"
                  className="px-2 py-1.5 border-black border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex-1 ">Password</label>
                <input
                  type="password"
                  className="px-2 py-1.5 border-black border-2 rounded-md"
                  onChange={(e) => {
                    validatePassword(e.target.value);
                    setPassword(e.target.value);
                  }}
                />
                {password.length > 0 && (
                  <div className="mt-2">
                    <ul>
                      {checkPassword.map((password, index) => {
                        console.log("password :>> ", password);
                        return (
                          <li key={index} className="flex items-center gap-2">
                            {password.isValid ? (
                              <DoneIcon sx={{ color: "green" }} />
                            ) : (
                              <DoneIcon sx={{ color: "red" }} />
                            )}
                            <p
                              className={password.isValid ? "" : "text-red-500"}
                            >
                              {password.text}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="flex-1 ">Confirm Password</label>
                <input
                  type="password"
                  className="px-2 py-1.5 border-black border-2 rounded-md"
                  onChange={(e) => {
                    validateConfirmPassword(e.target.value);
                  }}
                />
                {!confirmPassword & passwordConfirm.length > 0 ? (
                  <p className="mt-2">Passwords do not match</p>
                ):(null)}
              </div>

              <button className="w-full bg-[#FF753A] shadow-md hover:bg-[#FF8C42]  transition all duration-300 font-medium text-white text-sm px-8 py-2 rounded-md">
                Sing up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
