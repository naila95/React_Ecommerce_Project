import React from "react";
import img from "../../../../../../assets/banner-off20.jpg";
import { Link } from "react-router-dom";

export default function OffSale() {
  return (
    <section className="px-4 md:px-8 2xl:px-16 py-14">
      <Link className="">
        <img src={img} />
      </Link>
    </section>
  );
}
