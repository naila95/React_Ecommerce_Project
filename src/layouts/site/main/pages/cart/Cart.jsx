import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../../../../contexts/BasketContext";
import { LuMinus, LuPlus } from "react-icons/lu";
import { UserContext } from "../../../../../contexts/AuthContext";
import { getSingleProduct } from "../../../../../services/homeProduct";
import { MdOutlineCancel } from "react-icons/md";
import { Form } from "antd";
import { Link } from "react-router-dom";
import { getBasket, updateBasket } from "../../../../../services/basketProduct";

const Cart = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const { user } = useContext(UserContext);
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const increaseItem = (id) => {
    if (user === null || user === false) {
      setBasket(
        basket.map((item) => {
          if (item.productId === id) {
            let productCount = (item.productCount += 1);
            let newObj = { ...item, productCount };
            return newObj;
          } else {
            return item;
          }
        })
      );
    }
    // } else {
    //   let newCount = { productCount: (count += 1) };
    //   updateBasket(id, newCount);
    //   getData();
    // }
  };

  const decreaseItem = (id) => {
    setBasket(
      basket.map((item) => {
        if (item.productId === id) {
          let productCount = (item.productCount -= 1);
          let newObj = { ...item, productCount };
          return newObj;
        } else {
          return item;
        }
      })
    );
  };

  const deleteItem = (id) => {
    setBasket(basket.filter((item) => item.productId !== id));
    getData();
  };

  const getData = async () => {
    console.log("user", user);
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
    } else if (
      user.role === "client" ||
      user.role === "admin" ||
      user.role === "superadmin"
    ) {
      getBasket()
        .then(({ data }) => {
          let arr = data.data.map((item) => {
            setUserCount(item.count);
            return getSingleProduct(item._id);
          });
          let res = Promise.all(arr);
          console.log(res);
          let datas = res
            .map((item) => {
              return item.data.data;
            })
            .map((item) => {
              let newItem = {
                ...item,
                count: userCount,
              };
              return newItem;
            });
          console.log(datas);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const countTotal = () => {
    return details.reduce((sum, item) => {
      return setTotal(sum + item.productPrice * item.count);
    }, 0);
  };

  useEffect(() => {
    countTotal;
  }, [basket]);

  useEffect(() => {
    getData();
  }, [basket, user]);

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
        {basket?.length > 0 ? (
          <div className="flex md:w-[100%] lg:w-[60%] flex-col px-4 py-8 md:px-12 2xl:px-16">
            {details.map((item) => {
              return (
                <div key={item._id} className="flex items-center gap-16 py-4">
                  <div className="cursor-pointer">
                    <MdOutlineCancel
                      onClick={() => {
                        deleteItem(item._id);
                      }}
                      className="text-2xl text-gray-500"
                    />
                  </div>
                  <div className="">
                    <img
                      className="h-[180px] w-[150px]"
                      src={item.images[0]?.url}
                    />
                  </div>
                  <div className="">
                    <h2 className="text-xl">{item.title}</h2>
                    <h2 className="text-base text-gray-400">
                      {item.description}
                    </h2>
                  </div>
                  <div className="">
                    <h2 className="text-lg text-gray-700">
                      {item.productPrice}$
                    </h2>
                  </div>
                  <div className="">
                    <div className="flex items-center border py-3 border-gray-300 rounded-md">
                      <button
                        onClick={() => {
                          decreaseItem(item._id);
                        }}
                        className="border-r px-5 cursor-pointer"
                      >
                        <LuMinus />
                      </button>
                      <div className="px-7">
                        <h2 className="text-lg">{item.count}</h2>
                      </div>
                      <button
                        onClick={() => {
                          increaseItem(item._id, item.count);
                        }}
                        className="border-l px-5 cursor-pointer"
                      >
                        <LuPlus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-[60%] flex justify-center items-center">
            <h3 className="text-xl font-semibold">No product added</h3>
          </div>
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
