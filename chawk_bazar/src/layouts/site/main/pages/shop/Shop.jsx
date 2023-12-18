import React from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <main>
      <div className="px-14 py-16">
        <div className="flex justify-between items-center">
          <div className="">
            <Link>Home / </Link>
            <Link>Search</Link>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold mb-7">Shop By Category </h3>
          </div>
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}
