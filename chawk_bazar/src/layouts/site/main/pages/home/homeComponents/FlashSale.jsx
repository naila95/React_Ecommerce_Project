import React from "react";
import img from "../../../../../../assets/7.jpg";

export default function FlashSale() {
  return (
    <section className="px-4 md:px-8 2xl:px-16">
      <div className="border border-gray-300 rounded-md px-7 py-10">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-3xl font-bold mb-7">Flash Sale</h3>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 2xl:gap-y-6">
          <div className="flex flex-col cursor-pointer">
            <div className="">
              <img className="rounded-md" src={img} />
            </div>
            <div className="py-3">
              <h2 className="text-lg font-semibold">Woman Round Neck</h2>
              <p className="text-sm">Lorem ipsum dolor sit.</p>
              <div className="flex mt-2 gap-x-2">
                <h2 className="font-semibold text-lg">19.90$</h2>
                <h2 className="font-normal text-lg text-gray-600 line-through">
                  15$
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
