import React from "react";
import { Button, Checkbox, Form, Input, Switch } from "antd";

export default function Checkout() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (err) => {
    console.log(err);
  };
  const [form] = Form.useForm();
  return (
    <main>
      <div className="flex relative flex-center p-6 md:p-10 2xl:p-8 bg-center bg-cover bg-[url('https://chawkbazar.vercel.app/assets/images/page-header.jpg')] ">
        <div className="flex items-center justify-center w-full py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition duration"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-bold text-white">
            Checkout
          </h2>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-8 2xl:px-16 py-4 md:py-8 lg:py-10 2xl:py-12">
        <div className="flex justify-between gap-12">
          <div className="flex flex-col w-[60%]">
            <h3 className="text-3xl font-bold mb-7">Shipping Address</h3>
            <Form
              name="basic"
              form={form}
              style={{
                marginTop: 20,
              }}
              // onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="flex justify-between items-center">
                <Form.Item
                  className="w-[49%]"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mb-1 block"
                    htmlFor="firstName"
                  >
                    *First Name
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("firstName", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="text"
                    name="firstName"
                  />
                </Form.Item>
                <Form.Item
                  className="w-[49%]"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mb-1 block"
                    htmlFor="lastName"
                  >
                    *Last Name
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("lastName", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="text"
                    name="lastName"
                  />
                </Form.Item>
              </div>
              <div className="w-full">
                <Form.Item
                  className="w-full"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mb-1 block"
                    htmlFor="address"
                  >
                    *Address
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("address", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="text"
                    name="address"
                  />
                </Form.Item>
              </div>
              <div className="flex justify-between items-center">
                <Form.Item
                  className="w-[49%]"
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your number!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mb-1 block"
                    htmlFor="number"
                  >
                    *Phone Number
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("number", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="text"
                    name="number"
                  />
                </Form.Item>
                <Form.Item
                  className="w-[49%]"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mb-1 block"
                    htmlFor="email"
                  >
                    *Email
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
              </div>
              <div className="flex justify-between items-center">
                <Form.Item
                  className="w-[49%]"
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Please input your city!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mb-1 block"
                    htmlFor="city"
                  >
                    *Town/City
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("city", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="text"
                    name="city"
                  />
                </Form.Item>
                <Form.Item
                  className="w-[49%]"
                  name="postcode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your postcode!",
                    },
                  ]}
                >
                  <label
                    className="text-gray-600 font-semibold text-sm mb-1 block"
                    htmlFor="postcode"
                  >
                    *Postcode
                  </label>
                  <input
                    onChange={(e) => {
                      form.setFieldValue("postcode", e.target.value);
                    }}
                    className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                    type="text"
                    name="postcode"
                  />
                </Form.Item>
              </div>
              <Form.Item>
                <button
                  type="submit"
                  className="bg-black rounded-md font-semibold px-8 py-4 text-white"
                >
                  Place Order
                </button>
              </Form.Item>
            </Form>
          </div>
          <div className="flex flex-col w-[40%]">
            <h3 className="text-3xl font-bold mb-7">Your Order</h3>
            <div className="flex justify-between border-b py-5">
              <h2>Subtotal</h2>
              <p>0.00$</p>
            </div>
            <div className="flex justify-between border-b py-5">
              <h2>Shipping</h2>
              <p>Free</p>
            </div>
            <div className="flex justify-between border-b py-5">
              <h2 className="font-semibold text-xl">Total</h2>
              <p>0.00$</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
