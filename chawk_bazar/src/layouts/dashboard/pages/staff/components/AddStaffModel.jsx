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
        name="number"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <input
          placeholder="Number"
          name="number"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
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
          placeholder="Role"
          name="role"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item
        name="gender"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <input
          placeholder="Gender"
          name="gender"
          type="text"
          className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
        ></input>
      </Form.Item>
      <Form.Item>
        <MyButton fill={true} label={"Add"} />
      </Form.Item>
    </Form>
  );
}
