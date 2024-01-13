import React from "react";
import { Link } from "react-router-dom";
import { mockData } from "../../../../../../helpers/constants/brandConstants";

export default function TopBrands() {
  return (
    <section>
      <div className="px-4 md:px-8 2xl:px-16">
        <h3 className="text-3xl font-bold mb-7">Top Brands</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-3 lg:gap-5 xl:gap-7">
          {mockData.map((brand) => {
            return (
              <div key={brand.id} className="">
                <Link className="relative group">
                  <img
                    className="rounded-md"
                    src={"/src/assets/" + brand.img1}
                  />
                  <div className="rounded-md absolute top-0 left-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
                  <div className="absolute top-0 left-0 flex justify-center items-center p-8 h-full w-full">
                    <img src={"/src/assets/" + brand.img2} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
