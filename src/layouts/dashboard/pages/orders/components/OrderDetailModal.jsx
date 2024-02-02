import React from "react";
import logo from "../../../../../assets/logo.svg";
import moment from "moment";

const OrderDetailModal = ({ initialValues }) => {
  console.log(initialValues);
  return (
    <div className="rounded-md py-6 px-8">
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-xl uppercase font-bold">incoice</h2>
          <h2 className="text-base text-gray-500 uppercase">
            status: {initialValues.status}
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <img className="self-end" src={logo} alt="logo" />
          <h2>59 Station Rd, Purls Bridge, United Kingdom</h2>
          <h2>019579034</h2>
          <h2>kachabazar@gmail.com</h2>
          <h2>kachabazar-admin.vercel.app</h2>
        </div>
      </div>
      <div className="flex justify-between py-14">
        <div className="">
          <h2 className="text-base text-gray-800 uppercase">date</h2>
          <h2 className="text-base text-gray-800">
            {moment(initialValues.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </h2>
        </div>
        <div className="">
          <h2 className="text-base text-gray-800 uppercase">invoice to</h2>
          <h2 className="text-base text-gray-800">
            {initialValues.customer.name}
          </h2>
        </div>
      </div>
      <div className="flex flex-col">
        <div className=""></div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
