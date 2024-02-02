import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../../../../contexts/BasketContext";
import { Form } from "antd";
import { Link } from "react-router-dom";

import DetailCard from "./components/DetailCard";

const Cart = () => {
  const { basket } = useContext(BasketContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sumWithInitial = basket.reduce((accumulator, item) => {
      return (
        accumulator +
        item.count * (item.salePrice ? item.salePrice : item.productPrice)
      );
    }, 0);
    setTotal(sumWithInitial);
  }, [basket]);

  return (
    <div>
      <div className="flex relative flex-center p-6 md:p-10 2xl:p-8 bg-center bg-cover bg-[url('https://chawkbazar.vercel.app/assets/images/page-header.jpg')] ">
        <div className="flex items-center justify-center w-full py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition duration"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-bold text-black italic">
            Cart
          </h2>
        </div>
      </div>
      <div className="lg:flex">
        <div className="flex md:w-[100%] lg:w-[60%] flex-col px-4 py-8 md:px-12 2xl:px-16">
          {basket?.map((item) => {
            return <DetailCard value={item} key={item._id} />;
          })}
        </div>
        <div className="flex md:w-[100%] lg:w-[35%] flex-col px-4 py-8 md:px-12 2xl:px-16">
          <div className="px-4 py-4 bg-gray-100">
            <h2 className="font-semibold text-3xl uppercase tracking-wider">
              Total
            </h2>
            <div className="flex py-6 text-xl border-b border-black justify-between">
              <h2>Shipping</h2>
              <h2>0$</h2>
            </div>
            <div className="flex py-6 text-xl justify-between">
              <h2 className="font-semibold">Total Count</h2>
              <h2 className="font-semibold">{total}$</h2>
            </div>
            <Form>
              <Form.Item className="w-full">
                <Link
                  to={"/checkout"}
                  className="bg-black text-white text-center py-3 tracking-wider rounded-md w-full"
                  type="submit"
                  onClick={() => {
                    console.log(basket);
                  }}
                >
                  PROCEED TO CHECKOUT
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
