import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { MdFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import img from "../../../../../../assets/visa.svg";
import img2 from "../../../../../../assets/skrill.svg";
import img3 from "../../../../../../assets/paypal.svg";
import img4 from "../../../../../../assets/mastercard.svg";
import img5 from "../../../../../../assets/jcb.svg";

export default function Footer() {
  return (
    <footer className="">
      <div className="py-12 px-4 md:px-8 2xl:px-16 border-t border-gray-300 border-b">
        <div className="mx-auto px-4 md:px-8 2xl:px-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          <div className="">
            <h4 className="text-sm font-semibold md:text-base lg:text-xl mb-3">
              Social
            </h4>
            <ul>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <IoLogoInstagram className="mr-3 text-xs sm:text-sm" />
                <Link className="hover:text-black text-sm sm:text-base">
                  Instagram
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <TiSocialTwitter className="mr-3 text-xs sm:text-sm" />
                <Link className="hover:text-black text-sm sm:text-base">
                  Twitter
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <MdFacebook className="mr-3 text-xs sm:text-sm" />
                <Link className=" hover:text-black text-sm sm:text-base">
                  Facebook
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <FaYoutube className="mr-3 text-xs sm:text-sm" />
                <Link className=" hover:text-black text-sm sm:text-base">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold md:text-base lg:text-xl mb-3">
              Contact
            </h4>
            <ul>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Instagram
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Twitter
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Facebook
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold md:text-base lg:text-xl mb-3">
              About
            </h4>
            <ul>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Instagram
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Twitter
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Facebook
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold md:text-base lg:text-xl mb-3">
              Costumer Care
            </h4>
            <ul>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Instagram
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Twitter
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Facebook
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold md:text-base lg:text-xl mb-3">
              Information
            </h4>
            <ul>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Instagram
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Twitter
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Facebook
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold md:text-base lg:text-xl mb-3">
              Top Categories
            </h4>
            <ul>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Instagram
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className="hover:text-black text-sm sm:text-base">
                  Twitter
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Facebook
                </Link>
              </li>
              <li className="flex justify-start items-center text-[#5A5A5A] text-xs sm:text-sm mb-2">
                <Link className=" hover:text-black text-sm sm:text-base">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 md:px-8 2xl:px-16 flex justify-between">
        <div className="">
          <p>
            Copyright © 2023 <strong>REDQ</strong> All rights reserved
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <img src={img} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
        </div>
      </div>
    </footer>
  );
}
