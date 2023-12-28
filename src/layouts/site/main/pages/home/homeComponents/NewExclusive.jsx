import React from "react";
import img from "../../../../../../assets/women.webp";
import img2 from "../../../../../../assets/men.webp";
import { Link } from "react-router-dom";

export default function NewExclusive() {
  return (
    <section className="px-4 md:px-8 2xl:px-16 py-10">
      <div className="flex">
        <div className="relative bg-[#F4F4F4] w-[50%] group">
          <div className="text-black opacity-10 text-xl xl:text-2xl 2xl:text-3xl z-0 absolute top-10 right-7">
            NEW YEAR
          </div>
          <div className="absolute text-black font-bold top-16 xl:top-20 2xl:top-24 opacity-5 text-9xl right-4">
            20
          </div>
          <img
            className="group-hover:scale-105 transform transition duration-200 ease-in"
            src={img}
          />
          <Link className="absolute bottom-3 right-7 bg-white rounded-md sm:px-4 xl:px-5 2xl:px-6 sm:py-4 xl:py-5 2xl:py-6 text-sm xl:text-xl 2xl:text-2xl shadow-product transform transition duration-300 ease-in-out hover:bg-black hover:text-white ">
            #WOMEN EXCLUSIVE
          </Link>
        </div>
        <div className="bg-[#ECE7E3] w-[50%] relative group">
          <div className="text-black opacity-10 text-xl xl:text-2xl 2xl:text-3xl z-0 absolute top-10 left-7">
            EXCLUSIVE
          </div>
          <div className="absolute text-black font-bold top-16 xl:top-20 2xl:top-24 opacity-5 text-9xl left-4">
            24
          </div>
          <img
            className="group-hover:scale-105 transform transition duration-200 ease-in"
            src={img2}
          />
          <Link className="absolute bottom-3 left-7 bg-white rounded-md sm:px-4 xl:px-5 2xl:px-6 sm:py-4 xl:py-5 2xl:py-6 text-sm xl:text-xl 2xl:text-2xl shadow-product transform transition duration-300 ease-in-out hover:bg-black hover:text-white ">
            #MEN EXCLUSIVE
          </Link>
        </div>
      </div>
    </section>
  );
}
