import React, { useContext, useEffect, useState } from "react";
import { Form } from "antd";
import { postOrder } from "../../../../../services/orders";
import { BasketContext } from "../../../../../contexts/BasketContext";
import { deleteBasket, getBasket } from "../../../../../services/basketProduct";
import { toast } from "react-toastify";

export default function Checkout() {
  const { basket } = useContext(BasketContext);
  const [data, setData] = useState([]);

  const onFinish = () => {
    const newArray = basket.map((item) => {
      return { productId: item._id, productCount: item.count };
    });
    console.log(newArray);
    postOrder({ products: newArray })
      .then((res) => {
        console.log(res);
        toast.success("Order is created successfully!");
        localStorage.setItem("basket", JSON.stringify([]));
        getData();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Order is not created!");
      })
      .finally(() => {
        form.resetFields();
      });
  };

  const getData = () => {
    getBasket()
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setAllData = async () => {
    let arr = data.map((item) => {
      return deleteBasket(item._id);
    });
    let res = await Promise.all(arr);
  };

  useEffect(() => {
    setAllData();
  }, [data]);

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
          <div className="flex flex-col w-[70%]">
            <h3 className="text-3xl font-bold mb-7">Shipping Address</h3>
            <Form
              name="basic"
              form={form}
              style={{
                marginTop: 20,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="flex justify-between items-center">
                <Form.Item className="w-[49%]" name="firstName">
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
                <Form.Item className="w-[49%]" name="lastName">
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
                <Form.Item className="w-full" name="address">
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
                <Form.Item className="w-[49%]" name="number">
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
                <Form.Item className="w-[49%]" name="email">
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
                <Form.Item className="w-[49%]" name="city">
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
                <Form.Item className="w-[49%]" name="postcode">
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
        </div>
      </div>
    </main>
  );
}
