import React, { useContext } from "react";
import logo from "../../../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Form, Switch } from "antd";
import { loginProcess } from "../../../../services/auth";
import { UserContext } from "../../../../contexts/AuthContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    loginProcess(values)
      .then(({ data }) => {
        localStorage.setItem("token", data.data.token);
        setUser(data.data.user);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [form] = Form.useForm();
  return (
    <main>
      <div className="flex relative flex-center p-6 md:p-10 2xl:p-8 bg-center bg-cover bg-[url('https://chawkbazar.vercel.app/assets/images/page-header.jpg')] ">
        <div className="flex items-center justify-center w-full py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition duration"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-bold text-black italic">
            Sign In
          </h2>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-8 2xl:px-16 py-16 lg:py-20">
        <div className="w-full px-5 py-5 mx-auto border border-gray-300 rounded-lg sm:w-96 md:w-[450px]">
          <div className="flex justify-center">
            <div className="">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </div>
          </div>
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
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2">
                  <Switch defaultChecked />
                  <p>Remember Me</p>
                </div>

                <Link className="font-thin text-black underline hover:no-underline">
                  Fogot Password?
                </Link>
              </div>
              <Form.Item className="flex justify-center mt-6 w-full">
                <button
                  className="bg-black text-white py-3 px-16 rounded-md w-full"
                  type="submit"
                >
                  Login
                </button>
              </Form.Item>
              <div className="flex justify-center mt-4">
                <p className="text-gray-600 font-semibold text-base">
                  Don't have any account?
                  <Link
                    to={"/auth/register"}
                    className="text-black ml-1 font-bold underline hover:no-underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
