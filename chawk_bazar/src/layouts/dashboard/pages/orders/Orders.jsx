import React from "react";
import MyButton from "../../components/UI/MyButton";
import { Select } from "antd";
import OrdersTable from "./components/OrdersTable";

export default function Orders() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <h3 className="font-bold text-xl">All Orders</h3>
      <div className="py-5 flex flex-col gap-1">
        <div className="flex items-center">
          <input
            className="bg-white border w-[17%] h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5 outline-none mr-3"
            type="search"
            placeholder="Search by Customer name"
          />
          <Select
            className="bg-white w-[10%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
            defaultValue="Status"
            style={{ outline: "none" }}
            onChange={handleChange}
            options={[
              { value: "delivered", label: "Delivered" },
              { value: "pending", label: "Pending" },
              { value: "processing", label: "Processing" },
              { value: "cancel", label: "Cancel" },
            ]}
          />
          <Select
            className="bg-white w-[10%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
            defaultValue="Method"
            style={{ outline: "none" }}
            onChange={handleChange}
            options={[{ value: "cash", label: "Cash" }]}
          />
          <div className="flex items-center gap-3">
            <MyButton label={"Filter"} fill={true} refFunc={() => {}} />
            <MyButton
              label={"Reset"}
              refFunc={() => {
                console.log("test");
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 py-3">
          <div className="">
            <label htmlFor="start-date">Start Date</label>
            <input
              className="border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5"
              type="date"
              name="start-date"
            />
          </div>
          <div className="">
            <label htmlFor="end-date">End Date</label>
            <input
              className="border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5"
              type="date"
              name="end-date"
            />
          </div>
        </div>
      </div>
      <OrdersTable />
    </>
  );
}
