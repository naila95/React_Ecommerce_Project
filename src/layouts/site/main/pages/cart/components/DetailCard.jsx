import React, { useContext, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { BasketContext } from "../../../../../../contexts/BasketContext";

export default function DetailCard({ value }) {
  console.log(value);
  const { deleteBasketData } = useContext(BasketContext);
  const [count, setCount] = useState(value.count);
  return (
    // <div className="flex md:w-[100%] lg:w-[60%] flex-col px-4 py-8 md:px-12 2xl:px-16">
    <div className="flex items-center gap-16 py-4">
      <div className="cursor-pointer">
        <MdOutlineCancel
          onClick={() => {
            deleteBasketData(value.basketId);
            //   deleteItem(item._id);
          }}
          className="text-2xl text-gray-500"
        />
      </div>
      <div className="">
        <img className="h-[180px] w-[150px]" src={value?.images[0]?.url} />
      </div>
      <div className="">
        <h2 className="text-xl">{value.title}</h2>
        <h2 className="text-base text-gray-400">{value.description}</h2>
      </div>
      <div className="">
        <h2 className="text-lg text-gray-700">{value.productPrice}$</h2>
      </div>
      <div className="">
        <div className="flex items-center border py-3 border-gray-300 rounded-md">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="border-r px-5 cursor-pointer"
          >
            <LuMinus />
          </button>
          <div className="px-7">
            <h2 className="text-lg">{count} </h2>
          </div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="border-l px-5 cursor-pointer"
          >
            <LuPlus />
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
