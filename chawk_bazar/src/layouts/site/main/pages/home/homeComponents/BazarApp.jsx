import React from "react";
import img from "../../../../../../assets/app.webp";
import img2 from "../../../../../../assets/app-store.svg";
import img3 from "../../../../../../assets/play-store.svg";
import { Link } from "react-router-dom";

export default function BazarApp() {
  return (
    <section className="px-4 md:px-8 2xl:px-16 py-12">
      <div className="flex justify-between bg-gray-200 rounded-lg pt-5 md:pt-8 lg:pt-10 xl:pt-12 px-6 md:px-12 lg:px-20 2xl:px-24">
        <div className="text-left py-4 md:py-6 xl:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-3">
            The ChawkBazar App
          </h3>
          <h2 className="sm:text-xl md:text-3xl xl:text-4xl 2xl:text-6xl">
            <span>
              Share Your <strong>Ideas </strong>& Shop Endless
              <strong> Inspiration</strong>
            </span>
          </h2>
          <div className="flex flex-wrap justify-start md:gap-x-3 xl:gap-x-5 mt-7">
            <Link>
              <img className="rounded-md" src={img2} />
            </Link>
            <Link>
              <img className="rounded-md" src={img3} />
            </Link>
          </div>
        </div>
        <div className="">
          <img src={img} />
        </div>
      </div>
    </section>
  );
}
