import React, { useContext, useState } from "react";
import img from "../../../../../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoLogInOutline, IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BasketContext } from "../../../../../../contexts/BasketContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { UserContext } from "../../../../../../contexts/AuthContext";

export default function Header({ setShowSearch, showSearch }) {
  const { basket } = useContext(BasketContext);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(false);
    navigate("/");
  };

  return (
    <header className="w-full bg-white h-16 px-4 sm:h-20 md:px-8 lg:h-24">
      <div className="flex justify-between items-center ">
        <div className="flex justify-between">
          <div className="py-8">
            <img src={img} />
          </div>
          <div className="hidden sm:hidden md:hidden lg:block links px-16">
            <ul className="flex items-center justify-between">
              <li>
                <div className="h-8 relative group">
                  <div className="flex justify-between items-center py-8 group mr-4">
                    <Link to={"/"} className="text-[16px] px-1">
                      Demos
                    </Link>
                    <FaAngleDown className="mb-0 transition text-gray-400 text-sm group-hover:rotate-180" />
                  </div>
                  <div className="absolute left-[-30px] hidden group-hover:flex flex-col justify-between bg-gray-100 py-3 w-[200px]">
                    <Link className="py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                      Modern
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Standart
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Minimal
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Vintage
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Vintage
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Classic
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Trendy
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Elegant
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Refined
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Contemporary
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Ancient
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-8 relative group">
                  <div className="flex justify-between items-center py-8 group mr-4">
                    <Link className="text-[16px] px-1">Men Wear</Link>
                    <FaAngleDown className="mb-0 transition text-gray-400 text-sm group-hover:rotate-180" />
                  </div>
                  <div className="absolute left-[-110px] group-hover:grid hidden grid-cols-5 z-10 w-[80rem]">
                    <div className="bg-gray-50 py-3 px-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Top Wear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            T-shirt
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Casual shirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Formal shirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Blazwers & Coats
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Suits
                          </Link>
                          <Link className="block py-2 mb-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Jackets
                          </Link>
                        </div>
                        <div className="block px-4 pb-2 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Belt, Scarves & More
                          </Link>
                        </div>
                        <div className="block py-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold ">
                            Watches & Wearables
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Western Wear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Dresses
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Jumpsuits
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Tops, T-shirts & Shirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Shorts & Skirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Suits
                          </Link>
                          <Link className="block py-2 mb-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Jackets
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Plus Size
                          </Link>
                        </div>
                        <div className="block py-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Sunglasses & Frames
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Foot Wear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Flats
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Casual Shoes
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Heels
                          </Link>
                          <Link className="block py-2 px-4 mb-2 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Boots
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Sports & Active Wear
                          </Link>
                        </div>
                        <div className="">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Clothing
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Footwear
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Sports Accessories
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Lingerie & Sleepwear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Bra
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Briefs
                          </Link>
                          <Link className="block mb-2 py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Sleepwear
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Belt, Scarves & More
                          </Link>
                        </div>
                        <div className="">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Makeup
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Skincare
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Premium Beauty
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Lipsticks
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-[16] text-black font-semibold">
                          Gadgets
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Smart Wearables
                          </Link>
                          <Link className="block mb-2 py-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Headphones
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-[16] text-black font-semibold">
                            Jewellers
                          </Link>
                        </div>
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Fashion Jewellers
                          </Link>
                          <Link className="block mb-2 pb-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Fine Jewellers
                          </Link>
                        </div>
                        <div className="">
                          <Link className="block px-4 text-[16] text-black font-semibold">
                            Backpacks
                          </Link>
                          <Link className="block py-2 px-4 text-[16] text-black font-semibold">
                            Handbags & Wallets
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-8 relative group">
                  <div className="flex justify-between items-center py-8 group mr-4">
                    <Link className="text-[16px] px-1">Women Wear</Link>
                    <FaAngleDown className="mb-0 transition text-gray-400 text-sm group-hover:rotate-180" />
                  </div>
                  <div className="absolute left-[-220px] group-hover:grid hidden grid-cols-5 z-10 w-[80rem]">
                    <div className="bg-gray-50 py-3 px-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Top Wear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            T-shirt
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Casual shirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Formal shirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Blazwers & Coats
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Suits
                          </Link>
                          <Link className="block py-2 mb-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Jackets
                          </Link>
                        </div>
                        <div className="block px-4 pb-2 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Belt, Scarves & More
                          </Link>
                        </div>
                        <div className="block py-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold ">
                            Watches & Wearables
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Western Wear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Dresses
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Jumpsuits
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Tops, T-shirts & Shirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Shorts & Skirts
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Suits
                          </Link>
                          <Link className="block py-2 mb-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Jackets
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Plus Size
                          </Link>
                        </div>
                        <div className="block py-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Sunglasses & Frames
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Foot Wear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Flats
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Casual Shoes
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Heels
                          </Link>
                          <Link className="block py-2 px-4 mb-2 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Boots
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Sports & Active Wear
                          </Link>
                        </div>
                        <div className="">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Clothing
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Footwear
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Sports Accessories
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-s[16] text-black font-semibold">
                          Lingerie & Sleepwear
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Bra
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Briefs
                          </Link>
                          <Link className="block mb-2 py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Sleepwear
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-s[16] text-black font-semibold">
                            Belt, Scarves & More
                          </Link>
                        </div>
                        <div className="">
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Makeup
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Skincare
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Premium Beauty
                          </Link>
                          <Link className="block py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Lipsticks
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-3 py-3">
                      <div className="py-2 px-4">
                        <Link className="text-[16] text-black font-semibold">
                          Gadgets
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Smart Wearables
                          </Link>
                          <Link className="block mb-2 py-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Headphones
                          </Link>
                        </div>
                        <div className="block pb-2 px-4 hover:bg-gray-200">
                          <Link className="text-[16] text-black font-semibold">
                            Jewellers
                          </Link>
                        </div>
                        <div className="mb-6 border-b-2">
                          <Link className="block py-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Fashion Jewellers
                          </Link>
                          <Link className="block mb-2 pb-2 px-4 text-[16] hover:text-black text-gray-600 hover:bg-gray-200">
                            Fine Jewellers
                          </Link>
                        </div>
                        <div className="">
                          <Link className="block px-4 text-[16] text-black font-semibold">
                            Backpacks
                          </Link>
                          <Link className="block py-2 px-4 text-[16] text-black font-semibold">
                            Handbags & Wallets
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-8 relative group">
                  <div className="flex justify-between items-center py-8 group mr-4">
                    <Link to={"/shop"} className="text-[16px] px-1">
                      Shops
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="h-8 relative group">
                  <div className="flex justify-between items-center py-8 group mr-4">
                    <Link className="text-[16px] px-1">Pages</Link>
                    <FaAngleDown className="mb-0 transition text-gray-400 text-sm group-hover:rotate-180" />
                  </div>
                  <div className="absolute left-[-30px] hidden group-hover:flex flex-col justify-between bg-gray-100 py-3 w-[200px]">
                    <Link className="py-2 px-4 text-s[16] hover:text-black text-gray-600 hover:bg-gray-200">
                      Users
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      FAQ
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Privarcy Policy
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Terms & Conditions
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Contact Us
                    </Link>
                    <Link
                      to={"/checkout"}
                      className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200"
                    >
                      Checkout
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Collection
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Category
                    </Link>
                    <Link className="py-2 text-s[16]  hover:text-black text-gray-600 px-4 hover:bg-gray-200">
                      Order
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="">
            <IoSearch
              className="text-2xl font-semibold cursor-pointer"
              onClick={() => {
                if (showSearch) {
                  setShowSearch(false);
                } else if (!showSearch) {
                  setShowSearch(true);
                }
              }}
            />
          </div>
          {user == false && (
            <div className="">
              <Link to={"auth/login"} className="text-lg font-semibold">
                Sign In
              </Link>
            </div>
          )}
          <div className="">
            <Link to={"cart"} className="relative">
              <FiShoppingCart className="text-2xl" />
              <h2 className="absolute top-[-10px] right-[-10px] text-white bg-black rounded-xl px-1.5">
                {basket ? basket.length : 0}
              </h2>
            </Link>
          </div>
          {user != false && (
            <div className="">
              <IoLogInOutline
                onClick={() => {
                  logOut();
                }}
                className="text-2xl font-semibold cursor-pointer"
              />
            </div>
          )}
          <div className="block sm:block md:block lg:hidden">
            <RxHamburgerMenu
              onClick={() => {
                setOpenMenu(true);
              }}
              className="text-2xl cursor-pointer"
            />
          </div>
          {openMenu && (
            <div className="absolute top-0 right-0 flex gap-4 bg-gray-200 px-4 py-4">
              <div className="flex flex-col">
                <div className="text-base">Demos</div>
                <div className="text-base">Men Wear</div>
                <div className="text-base">Women Wear</div>
                <div className="text-base">Shop</div>
                <div className="text-base">Pages</div>
              </div>
              <div className="">
                <MdOutlineCancel
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className="text-base"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
