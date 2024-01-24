import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../../../../contexts/BasketContext";
import { UserContext } from "../../../../../contexts/AuthContext";
import { getSingleProduct } from "../../../../../services/homeProduct";
import { Form } from "antd";
import { Link } from "react-router-dom";
import {
  deleteBasket,
  getBasket,
  updateBasket,
} from "../../../../../services/basketProduct";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import UserComponent from "./components/UserComponent";
import NullUserComponent from "./components/NullUserComponent";

const Cart = () => {
  const { basket, setBasket, count, setCount, basketData, setBasketData } =
    useContext(BasketContext);
  const { user } = useContext(UserContext);
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState(0);

  // const increaseItem = (id, count) => {
  //   if (user === null || user === false) {
  //     setBasket(
  //       basket.map((item) => {
  //         if (item.productId === id) {
  //           let productCount = (item.productCount += 1);
  //           let newObj = { ...item, productCount };
  //           return newObj;
  //         } else {
  //           return item;
  //         }
  //       })
  //     );
  //   } else if (user) {
  //     let newCount = { productCount: count + 1 };
  //     updateBasket(id, newCount);
  //     getData();
  //   }
  // };

  // const decreaseItem = (id, count) => {
  //   if (user === null || user === false) {
  //     setBasket(
  //       basket.map((item) => {
  //         if (item.productId === id) {
  //           let productCount = (item.productCount -= 1);
  //           let newObj = { ...item, productCount };
  //           return newObj;
  //         } else {
  //           return item;
  //         }
  //       })
  //     );
  //   } else if (user) {
  //     let newCount = { productCount: count - 1 };
  //     updateBasket(id, newCount);
  //     getData();
  //   }
  // };

  // const deleteItem = (id) => {
  //   if (user === null || user === false) {
  //     setBasket(basket.filter((item) => item.productId !== id));
  //     getData();
  //   } else if (user) {
  //     setloading(true);
  //     deleteBasket(id)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         getData();
  //         setloading(false);
  //       });
  //   }
  // };

  const getData = async () => {
    if (user === null || user === false) {
      let localBasket = JSON.parse(localStorage.getItem("basket"));
      if (localBasket != null) {
        let arr = localBasket.map((item) => {
          return getSingleProduct(item.productId);
        });
        let res = await Promise.all(arr);
        let data = res
          .map((item) => {
            return item.data.data;
          })
          .map((item) => {
            let newItem = {
              ...item,
              count: basket.find((el) => el.productId == item._id).productCount,
            };
            return newItem;
          });
        setDetails(data);
      }
    } else if (user) {
      getBasket()
        .then(({ data }) => {
          setBasketData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    setAllData();
  }, [basketData]);

  const setAllData = async () => {
    let arr = basketData.map((item) => {
      console.log(item.productId);
      return getSingleProduct(item.productId);
    });
    let res = await Promise.all(arr);
    res = res.map((item) => {
      let a = basketData.find((el) => el.productId === item.data.data._id);
      console.log(a);
      let myObj = { ...item.data.data, basket: a };
      return myObj;
    });
    setDetails(res);
  };

  // const countTotal = () => {
  //   console.log(details);
  //   return details.reduce((sum, item) => {
  //     console.log;
  //   }, 0);
  // };

  // useEffect(() => {
  //   countTotal();
  // }, [basket]);

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
        {user ? (
          <UserComponent details={details} getData={getData} />
        ) : (
          <NullUserComponent setDetails={setDetails} details={details} />
        )}
        <div className="flex md:w-[100%] lg:w-[35%] flex-col px-4 py-8 md:px-12 2xl:px-16">
          <div className="px-4 py-4 bg-gray-100">
            <h2 className="font-semibold text-3xl uppercase tracking-wider">
              Total
            </h2>
            <div className="flex py-6 text-xl border-b border-black justify-between">
              <h2>Shipping</h2>
              <h2>0$</h2>
            </div>
            <div className="py-4 flex justify-between">
              <h2 className="font-semibold text-xl uppercase tracking-wider">
                total
              </h2>
              <h2 className="font-semibold text-xl uppercase tracking-wider">
                {total}$
              </h2>
            </div>
            <Form>
              <Form.Item className="w-full">
                <Link
                  to={"/checkout"}
                  className="bg-black text-white text-center py-3 tracking-wider rounded-md w-full"
                  type="submit"
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
