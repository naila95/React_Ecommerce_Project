import React, { useEffect, useState } from "react";
import { getSaleProduct } from "../../../../../../services/homeProduct";
import { Link } from "react-router-dom";

export default function FlashSale() {
  const [data, setData] = useState([]);

  const getSaleProd = () => {
    getSaleProduct()
      .then(({ data }) => {
        setData(data.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSaleProd();
  }, []);

  return (
    <section className="px-4 md:px-8 2xl:px-16">
      <div className="border border-gray-300 rounded-md px-7 py-10">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-3xl font-bold mb-7">Flash Sale</h3>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 2xl:gap-y-6">
          {data.map((item) => {
            return (
              <div className="flex flex-col cursor-pointer group transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <Link to={`/details/${item._id}`} className="">
                  <img
                    className="rounded-md group-hover:rounded-none"
                    src={item.images[0].url}
                  />
                </Link>
                <div className="py-3">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                  <div className="flex mt-2 gap-x-2">
                    <h2 className="font-semibold text-lg">
                      {item.productPrice}$
                    </h2>
                    <h2 className="font-normal text-lg text-gray-600 line-through">
                      {item.salePrice}$
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
