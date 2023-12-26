import React from "react";
import MyButton from "../../../components/UI/MyButton";
import { Form } from "antd";

export default function AddStaffModel() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Form
      name="basic"
      style={{
        display: "flex",
        marginTop: 20,
      }}
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
          placeholder="Name"
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
          placeholder="Surname"
          name="surname"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
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
          placeholder="Email"
          name="email"
          type="email"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <input
          placeholder="Password"
          name="password"
          type="password"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item>
        <MyButton fill={true} label={"Add"} />
      </Form.Item>
    </Form>
  );
}
