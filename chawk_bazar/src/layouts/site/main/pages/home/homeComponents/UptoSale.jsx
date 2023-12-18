import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../../../assets/banner-upto.jpg";

export default function UptoSale() {
  return (
    <section>
      <div className="px-4 md:px-8 2xl:px-16 py-10">
        <Link>
          <img src={img} />
        </Link>
      </div>
    </section>
  );
}
