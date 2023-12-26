import { Form, Select } from "antd";
import React from "react";
import MyButton from "../../../components/UI/MyButton";

export default function ProductEditModal({ initialValues = {} }) {
  console.log(initialValues);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form
      name="basic"
      style={{
        // maxWidth: 600,
        display: "flex",
        marginTop: 20,
      }}
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item name="images">
        <input
          placeholder="Images"
          name="images"
          type="file"
          className="border border-[#94D5CB] py-2.5 w-full px-2 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item name="title">
        <input
          placeholder="Title"
          name="title"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 ml-2 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item name="description">
        <input
          placeholder="Description"
          name="description"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item name="price">
        <input
          placeholder="Price"
          name="price"
          type="text"
          className="border border-[#94D5CB] py-3 w-[95%] px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item name="salePrice">
        <input
          placeholder="Sale Price"
          name="salePrice"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 w-[95%] rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item name="brand">
        <Select
          className="bg-white w-[10%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
          defaultValue="Brand"
          style={{ outline: "none" }}
          onChange={handleChange}
          options={[
            { value: "delivered", label: "Delivered" },
            { value: "pending", label: "Pending" },
          ]}
        />
      </Form.Item>
      <Form.Item name="stock">
        <input
          placeholder="Stock"
          name="stock"
          type="text"
          className="border border-[#94D5CB] w-[90%] py-3 ml-2 px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item>
        <MyButton fill={true} label={"Edit"} />
      </Form.Item>
    </Form>
  );
}
