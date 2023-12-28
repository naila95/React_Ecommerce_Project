import React from "react";
import banner1 from "../../../../../../assets/banner-1.jpg";
import banner2 from "../../../../../../assets/banner-2.jpg";
import banner3 from "../../../../../../assets/banner-3.jpg";
import banner4 from "../../../../../../assets/banner-4.jpg";
import banner5 from "../../../../../../assets/banner-5.jpg";
import banner6 from "../../../../../../assets/banner-6.jpg";
import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <section>
      <div className="grid grid-cols-2 px-2.5 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
        <div className="col-span-full sm:col-span-5 mx-auto">
          <Link>
            <img className="" src={banner1} />
          </Link>
        </div>
        <div className="col-span-1 sm:col-span-2 mx-auto">
          <Link className="">
            <img className="h-full" src={banner2} />
          </Link>
        </div>
        <div className="col-span-1 sm:col-span-2 mx-auto">
          <Link>
            <img className="h-full" src={banner3} />
          </Link>
        </div>
        <div className="col-span-1 sm:col-span-2 mx-auto">
          <Link>
            <img className="h-full" src={banner4} />
          </Link>
        </div>
        <div className="col-span-1 sm:col-span-2 mx-auto">
          <Link>
            <img className="h-full" src={banner5} />
          </Link>
        </div>
        <div className="col-span-full mx-auto sm:col-span-5">
          <Link>
            <img className="" src={banner6} />
          </Link>
        </div>
      </div>
    </section>
  );
}
