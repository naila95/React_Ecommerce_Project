import { Form, Input } from "antd";
import React from "react";
import MyButton from "../../../components/UI/MyButton";

export default function StaffModalForm({ initialValues = {} }) {
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
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <input
          name="name"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item
        name="surname"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <input
          name="surname"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
        {/* <MyInput name={"surname"} type={"text"} /> */}
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <input
          name="email"
          type="email"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
        {/* <MyInput name={"email"} type={"email"} /> */}
      </Form.Item>
      <Form.Item
        name="number"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <input
          name="number"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
        {/* <MyInput name={"number"} type={"text"} /> */}
      </Form.Item>
      <Form.Item
        name="role"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <input
          name="role"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
        {/* <MyInput name={"role"} type={"text"} /> */}
      </Form.Item>
      <Form.Item>
        <MyButton fill={true} label={"Edit"} />
      </Form.Item>
    </Form>
  );
}
