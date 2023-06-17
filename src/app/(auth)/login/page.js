"use client";

import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";
import Link from "next/link";

const session = true;

export default function Login() {

  if(!session) throw new Error("Auth is needed to access")

  return (
    <div className="">
      <div className="flex  flex-col  bg-white justify-around">
        <div className="flex min-h-full flex-1 flex-col items-center px-6 py-12 lg:px-8">
          <Link href="/">
            <h1 className="text-[#FF753A] text-[30px] uppercase worksans-bold">
              Loopi
              <span className="text-[#00BFFF]">fy</span>
            </h1>
          </Link>

          <p className="text-lg sm:text-2xl worksans-regular mt-10 border-b-[#FF753A] border-b-4 pb-2 ">
            Sign in to your account
          </p>

          <div className="mt-10 sm:mx-auto sm:w-full w-full sm:max-w-sm">
            <form action="" className="space-y-6">
              <div className="flex flex-col">
                <label className="">Email address</label>
                <input
                  type="text"
                  className="px-2 py-1.5 border-black border-2 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center justify-between flex-nowrap">
                  <label className="flex-1 ">Password</label>
                  <Link
                    href="/forgot-password"
                    className="flex-2 text-indigo-600 hover:text-indigo-500 "
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  className="px-2 py-1.5 border-black border-2 rounded-md"
                />
              </div>

              <button className="w-full bg-[#FF753A] shadow-md hover:bg-[#FF8C42]  transition all duration-300 font-medium text-white text-sm px-8 py-2 rounded-md">
                Sign in
              </button>
            </form>

            <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4 w-full">
              <p>Or sign in with Google</p>
              <div className="md:block hidden">
                <GoogleLogin
                  /*   onSuccess={showUserInformation} */
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  shape="pill"
                  size="large"
                  logo_alignment="left"
                  text="signin_with"
                  type="icon"
                />
              </div>
              <div className="md:hidden block ">
                <GoogleLogin
                  /*   onSuccess={showUserInformation} */
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  shape="pill"
                  size="large"
                  logo_alignment="left"
                  text="signin_with"
                  type="standard"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-10 text-sm flex-wrap ">
              <p className="text-gray-500 mr-2">Not a member?</p>
              <Link
                href="/signup"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Join and tune your world now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
