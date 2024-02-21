import React, { useContext, useEffect, useState } from "react";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { getSingleProduct } from "../../../../../services/homeProduct";
import { useParams } from "react-router-dom";
import Accordion from "./components/Accordion";
import { Form } from "antd";
import { BasketContext } from "../../../../../contexts/BasketContext";

export default function Details() {
  const [details, setDetails] = useState([]);
  let { itemId } = useParams();
  const { basket, addBasketData } = useContext(BasketContext);
  const [src, setSrc] = useState(null);
  const [count, setCount] = useState(1);

  const addToBasket = (id) => {
    addBasketData({ _id: id, count });
  };

  const increaseItem = () => {
    setCount(count + 1);
  };

  const decreaseItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const getSingleProductData = () => {
    getSingleProduct(itemId)
      .then(({ data }) => {
        setDetails(data.data);
        setSrc(data.data.images[0].url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleProductData();
  }, [basket]);

  return (
    <div key={details._id} className="px-4 py-8 md:px-12 2xl:px-16">
      <div className="flex gap-10">
        {details.images ? (
          <div className="w-[27%] flex flex-col gap-2">
            <div className="">
              <img src={src} />
            </div>
            <div className="flex gap-2">
              {details?.images[1]?.url ? (
                <img
                  onClick={(e) => {
                    setSrc(e.target.src);
                    e.target.src = src;
                  }}
                  className="w-[112px] h-[140px] cursor-pointer"
                  src={details?.images[1]?.url}
                />
              ) : null}
              {details?.images[2]?.url ? (
                <img
                  onClick={(e) => {
                    setSrc(e.target.src);
                    e.target.src = src;
                  }}
                  className="w-[112px] h-[140px] cursor-pointer"
                  src={details?.images[2]?.url}
                />
              ) : null}
              {details?.images[3]?.url ? (
                <img
                  onClick={(e) => {
                    setSrc(e.target.src);
                    e.target.src = src;
                  }}
                  className="w-[112px] h-[140px] cursor-pointer"
                  src={details?.images[3]?.url}
                />
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="flex flex-col w-[60%]">
          <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex gap-3">
              <h2 className="text-2xl font-semibold">
                {details.salePrice ? details.salePrice : details.productPrice}$
              </h2>
              <h2 className="text-lg line-through text-gray-300">
                {details.salePrice ? `${details.productPrice}$` : ""}
              </h2>
            </div>
            <h2 className="text-xl">{details.description}</h2>
          </div>
          <div className="flex flex-col gap-3 py-4 border-b border-gray-300">
            <div className="flex gap-2">
              <h1 className="text-lg font-semibold">SKU:</h1>
              <h1 className="text-lg">N/A</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="text-lg font-semibold">Category:</h1>
              <h1 className="text-lg">Clothes</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="text-lg font-semibold">Tags:</h1>
              <h1 className="text-lg">Man, Woman, Clohes</h1>
            </div>
          </div>
          <div className="py-12 flex gap-6">
            <div className="flex items-center border py-3 border-gray-300 rounded-md">
              <button
                onClick={() => {
                  decreaseItem(details._id);
                }}
                className="border-r px-5 cursor-pointer"
              >
                <LuMinus />
              </button>
              <div className="px-7">
                <h2 className="text-lg">{count}</h2>
              </div>
              <button
                onClick={() => {
                  increaseItem(details._id);
                }}
                className="border-l px-5 cursor-pointer"
              >
                <LuPlus />
              </button>
            </div>
            <button
              onClick={() => {
                addToBasket(details._id);
              }}
              className="bg-black rounded-md py-3 px-16 text-white font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="py-10">
        <Accordion />
      </div>
      <div className="py-12 px-12 bg-gray-50 rounded-md flex justify-between items-center">
        <div className="">
          <h3 className="text-3xl font-bold mb-7">
            Get Expert Tips In Your Inbox
          </h3>
          <p className="text-gray-600">
            Subscribe to our newsletter and stay updated.
          </p>
        </div>
        <div className="flex items-center">
          <Form
            name="basic"
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              gap: 30,
            }}
            autoComplete="off"
          >
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
              <input
                onChange={(e) => {}}
                className="bg-white border h-11 md:h-12 w-full rounded-md border-gray-300 py-2 px-4 md:px-5"
                type="email"
                name="email"
                placeholder="Write your email here"
              />
            </Form.Item>

            <Form.Item className="">
              <button
                className="bg-black font-semibold text-white py-3 px-16 rounded-md w-full"
                type="submit"
              >
                Subscripe
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
