import React from "react";
import MyButton from "../../components/UI/MyButton";
import { Form, Select } from "antd";
import OrdersTable from "./components/OrdersTable";

export default function Orders() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <h3 className="font-bold text-xl">All Orders</h3>
      <div className="pb-5 flex flex-col gap-1">
        <Form
          name="basic"
          form={form}
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="search" className="w-[20%] mt-[22px]">
            <input
              placeholder="Search by Customer name"
              type="search"
              className="bg-white border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-3 md:px-4 outline-none"
            ></input>
          </Form.Item>
          <Form.Item className="w-[15%] mt-[22px]">
            <Select
              className="bg-white w-full border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
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
          </Form.Item>
          <Form.Item className="mt-[22px]">
            <Select
              className="bg-white w-[40%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12"
              defaultValue="Order Limits"
              style={{ outline: "none" }}
              onChange={handleChange}
              options={[
                { value: "days", label: "Last 5 days" },
                { value: "days", label: "Last 7 days" },
                { value: "days", label: "Last 15 days" },
                { value: "days", label: "Last 30 days" },
              ]}
            />
          </Form.Item>
          <Form.Item className="w-[25%]">
            <label htmlFor="start-date">Start Date</label>
            <input
              className="border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5"
              type="date"
              name="start-date"
            />
          </Form.Item>
          <Form.Item className="w-[25%]">
            <label htmlFor="end-date">End Date</label>
            <input
              className="border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5"
              type="date"
              name="end-date"
            />
          </Form.Item>
          <Form.Item>
            <MyButton label={"Filter"} fill={true} refFunc={() => {}} />
          </Form.Item>
          <Form.Item>
            <MyButton
              label={"Reset"}
              refFunc={() => {
                console.log("test");
              }}
            />
          </Form.Item>
        </Form>
      </div>

      {/* <div className="flex items-center gap-3 py-3">
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
        </div> */}
      <OrdersTable />
    </>
  );
}
