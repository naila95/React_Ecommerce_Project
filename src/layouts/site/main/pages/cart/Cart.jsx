import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../../../../contexts/BasketContext";
import { UserContext } from "../../../../../contexts/AuthContext";
import { getSingleProduct } from "../../../../../services/homeProduct";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { getBasket } from "../../../../../services/basketProduct";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import UserComponent from "./components/UserComponent";
import NullUserComponent from "./components/NullUserComponent";
import DetailCard from "./components/DetailCard";

const Cart = () => {
  const { basket, setBasket, basketData, setBasketData } =
    useContext(BasketContext);
  const { user } = useContext(UserContext);
  console.log(basket);
  const getData = async () => {
    // if (user === null || user === false) {
    //   let localBasket = JSON.parse(localStorage.getItem("basket"));
    //   if (localBasket != null) {
    //     let arr = localBasket.map((item) => {
    //       return getSingleProduct(item.productId);
    //     });
    //     let res = await Promise.all(arr);
    //     let data = res
    //       .map((item) => {
    //         return item.data.data;
    //       })
    //       .map((item) => {
    //         let newItem = {
    //           ...item,
    //           count: basket.find((el) => el.productId == item._id).productCount,
    //         };
    //         return newItem;
    //       });
    //     setDetails(data);
    //   }
    // } else if (user) {
    //   console.log(basketData);
    //   console.log(basket);
    //   getBasket()
    //     .then(({ data }) => {
    //       setBasketData(data.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };

  useEffect(() => {
    getData();
  }, [user]);

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
