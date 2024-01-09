import React from "react";

export default function SellingProducts({ data }) {
  return (
    <section className="px-14 py-16">
      <div className="flex justify-start mb-7">
        <h3 className="text-3xl font-bold">Selling Products</h3>
      </div>
      <div className="grid mx-auto grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="rounded-md flex flex-col cursor-pointer group transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl bg-white"
            >
              <div className="">
                <img
                  className="rounded-md group-hover:rounded-none"
                  src={item.images[0].url}
                />
              </div>
              <div className="w-full px-3 py-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
                <h2 className="font-semibold text-lg mt-2">
                  {item.productPrice}$
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
