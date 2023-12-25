import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { RiTruckLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import BarChart from "./components/BarChart";
import { staffMockData } from "../../../../helpers/Constants/staffConstants";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import AreaChart from "./components/AreaChart";

const DashboardInfo = () => {
  const [barData, setBarData] = useState({
    labels: staffMockData.map((data) => data.name),
    datasets: [
      {
        label: "Id",
        data: staffMockData.map((data) => data.id),
      },
    ],
  });
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between border shadow-md py-4 px-6 w-[20%]">
          <div className="bg-orange-200 text-center rounded-[100%] px-3 py-3">
            <IoCart className="text-orange-500 text-2xl" />
          </div>
          <div className="">
            <h2 className="text-lg">Total Orders</h2>
            <p className="text-lg font-bold">123</p>
          </div>
        </div>
        <div className="flex items-center justify-between border shadow-md py-4 px-6 w-[20%]">
          <div className="bg-blue-200 text-center rounded-[100%] px-3 py-3">
            <FaArrowsRotate className="text-blue-500 text-2xl" />
          </div>
          <div className="">
            <h2 className="text-lg">Orders Pending</h2>
            <p className="text-lg font-bold">123</p>
          </div>
        </div>
        <div className="flex items-center justify-between border shadow-md py-4 px-6 w-[20%]">
          <div className="bg-green-200 text-center rounded-[100%] px-3 py-3">
            <RiTruckLine className="text-green-500 text-2xl" />
          </div>
          <div className="">
            <h2 className="text-lg">Orders Processing</h2>
            <p className="text-lg font-bold">123</p>
          </div>
        </div>
        <div className="flex items-center justify-between border shadow-md py-4 px-6 w-[20%]">
          <div className="bg-purple-200 text-center rounded-[100%] px-3 py-3">
            <FaCheck className="text-purple-500 text-2xl" />
          </div>
          <div className="">
            <h2 className="text-lg">Orders Delivered</h2>
            <p className="text-lg font-bold">123</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 px-5 gap-12">
        <div className="w-[45%]">
          <BarChart chartData={barData} />
        </div>
        <div className="w-[45%]">
          <LineChart chartData={barData} />
        </div>
        <div className="w-[45%]">
          <PieChart chartData={barData} />
        </div>
        <div className="w-[45%]">
          <AreaChart chartData={barData} />
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
