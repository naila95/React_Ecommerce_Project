import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form } from "antd";
import Spinner from "../components/UI/Spinner";
import { UserContext } from "../../../contexts/AuthContext";
import { loginProcess } from "../../../services/auth";

export default function DashboardLogin() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    loginProcess(values)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("token", data.data.token);
        setUser(data.data.user);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (err) => {
    console.log(err);
  };
  const [form] = Form.useForm();

  if (user === null || user.role !== "client")
    return (
      <main>
        <div className="mx-auto px-4 md:px-8 2xl:px-16 py-16 lg:py-20">
          <div className="w-full px-5 py-5 mx-auto border border-gray-300 rounded-lg sm:w-96 md:w-[450px]">
            <div className="flex justify-center mt-2 mb-8 sm:mb-10">
              <p className="text-sm md:text-base text-gray-600">
                Login with your email & password
              </p>
            </div>
            <Form
              name="basic"
              form={form}
              style={{
                marginTop: 20,
              }}
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="flex flex-col justify-center">
                <Form.Item
                  className="block"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mt-3 mb-3 block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("email", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="email"
                    name="email"
                  />
                </Form.Item>
                <Form.Item
                  className="block"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mt-3 mb-3 block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("password", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="password"
                    name="password"
                  />
                </Form.Item>
                <Form.Item className="flex justify-center mt-6 w-full">
                  <button
                    className="bg-black text-white py-3 px-16 rounded-md w-full"
                    type="submit"
                  >
                    Login
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </main>
    );
  else {
    return <Navigate to={"notFound"} />;
  }
}
