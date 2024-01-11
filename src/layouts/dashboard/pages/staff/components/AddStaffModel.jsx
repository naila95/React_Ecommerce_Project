import React, { useContext } from "react";
import MyButton from "../../../components/UI/MyButton";
import { Form, Spin } from "antd";
import { postStaff } from "../../../../../services/staff";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { MyModalContext } from "../../../../../contexts/MyModalContext";

export default function AddStaffModel({ getStaffData }) {
  const { loading, setloading } = useContext(LoadingContext);
  const { setMyModal } = useContext(MyModalContext);

  const onFinish = (values) => {
    setloading(true);
    postStaff(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
        setMyModal({
          open: false,
        });
        getStaffData();
      });
  };
  return (
    <Spin spinning={loading}>
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
              message: "Please input your admin name!",
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
              message: "Please input your admin surname!",
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
              message: "Please input your admin email!",
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
              message: "Please input your admin password!",
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
    </Spin>
  );
}
