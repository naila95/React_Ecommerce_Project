import { Form } from "antd";
import React from "react";
import MyButton from "../../../components/UI/MyButton";

export default function BrandEditModal({ initialValues = {} }) {
  console.log(123);
  console.log(initialValues);
  const onFinish = (values) => {
    console.log("Success:", values);
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
      <Form.Item name="image">
        <input
          placeholder="Images"
          name="image"
          type="file"
          className="border border-[#94D5CB] py-2.5 w-full px-2 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item name="name">
        <input
          placeholder="Title"
          name="name"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 ml-2 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item>
        <MyButton fill={true} label={"Edit"} />
      </Form.Item>
    </Form>
  );
}
