import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../assets/page-checkout.jpg";
import logo from "../../../../assets/logo.svg";

export default function Register() {
  return (
    <main>
      <div className="flex relative flex-center p-6 md:p-10 2xl:p-8 bg-center bg-cover bg-[url('https://chawkbazar.vercel.app/assets/images/page-header.jpg')]">
        <div className="flex items-center justify-center w-full py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition duration"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-bold text-white">
            Register
          </h2>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-8 2xl:px-16 py-16 lg:py-20">
        <div className="w-full px-5 py-5 mx-auto border border-gray-300 rounded-lg sm:w-96 md:w-[450px]">
          <div className="flex justify-center">
            <div className="">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-2 mb-8 sm:mb-10">
            <p className="text-sm md:text-base text-gray-600">
              Login with your email & password
            </p>
          </div>
          <form>
            <div className="flex flex-col justify-center">
              <div className="block">
                <label
                  className="text-gray-600 font-semibold text-sm mb-3 block"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                  type="text"
                  name="name"
                />
              </div>
              <div className="block">
                <label
                  className="text-gray-600 font-semibold text-sm mb-3 mt-3 block"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                  type="email"
                  name="email"
                />
              </div>
              <div className="block">
                <label
                  className="text-gray-600 font-semibold text-sm mb-3 mt-3 block"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                  type="password"
                  name="password"
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-black text-white py-3 px-6 rounded-md w-full"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <p className="text-sm md:text-base text-gray-600">
                  By signing up, you agree to our
                  <Link className="underline hover:no-underline">
                    terms & policy
                  </Link>
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <p className="text-gray-600 font-semibold text-base">
                  Already have an account?
                  <Link
                    to={"/auth/login"}
                    className="text-black font-bold underline hover:no-underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
