import React from "react";
import img from "../../../../../assets/404.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex items-center flex-col">
      <div className="flex justify-center py-6">
        <img src={img} />
      </div>
      <div className="flex justify-center">
        <h3 className="text-2xl font-bold mb-4">Looks like you are lost</h3>
      </div>
      <div className="flex justify-center mb-6">
        <Link className="bg-black text-white py-3 px-8 rounded-md" to={"/"}>
          Go Home
        </Link>
      </div>
    </main>
  );
}
