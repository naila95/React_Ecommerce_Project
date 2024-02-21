import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./AuthContext";
import {
  deleteBasket,
  getBasket,
  postBasket,
  updateBasket,
} from "../services/basketProduct";
import { getSingleProduct } from "../services/homeProduct";
export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [localBasket, setLocalBasket] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("basket")) === null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (
      user &&
      localStorage.getItem("basket") &&
      Array.isArray(basket) &&
      basket.length > 0
    ) {
      console.log("oldu");
      console.log(basket);
      const newArray = basket.map((item) => {
        return { productId: item._id, productCount: item.count };
      });
      postBasket({ basket: newArray })
        .then((res) => {
          console.log(res);
          // localStorage.setItem("basket", false);
        })
        .catch((err) => {
          console.log(err);
        });
      // getBasket().then((res) => {
      //   let basketItem = res.data.data?.find((item) => {
      //     return (
      //       item?.productId ===
      //       basket.find((item) => {
      //         item.productId;
      //       })
      //     );
      //   });
      //   if (!basketItem) {
      //     const newArray = basket.map((item) => {
      //       return { productId: item._id, productCount: item.count };
      //     });
      //     postBasket({ basket: newArray })
      //       .then((res) => {
      //         console.log(res);
      //         localStorage.setItem("basket", false);
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   } else {
      //   }
      // });
    }
  }, [basket, user]);

  const addBasketData = (param) => {
    if (!user) {
      let basketItem = localBasket.find((item) => {
        return item?.productId === param?._id;
      });
      if (!basketItem) {
        let newArr = [...localBasket];
        newArr.push({
          productId: param._id,
          productCount: param.count,
        });
        setLocalBasket(newArr);
        localStorage.setItem("basket", JSON.stringify(newArr));
      } else {
        let newArr = localBasket.map((item) => {
          if (item?._id === basketItem?._id) {
            let temp = { ...item, productCount: param.count };
            return temp;
          } else {
            return item;
          }
        });
        setLocalBasket(newArr);
        localStorage.setItem("basket", JSON.stringify(newArr));
      }
    } else {
      getBasket()
        .then((res) => {
          let basketItem = res.data.data?.find((item) => {
            return item?.productId === param?._id;
          });
          if (!basketItem) {
            postBasket({
              basket: [{ productId: param._id, productCount: param.count }],
            })
              .then((res) => {
                console.log(res);
                getBasketData();
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            updateBasket(basketItem._id, { productCount: param.count })
              .then((res) => {
                console.log(res);
                getBasketData();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updateBasketData = (_id, prop) => {
    if (!user) {
      let newArr = [];
      basket.forEach((elem) => {
        if (elem._id === _id) {
          let newObj = { ...elem, count: prop };
          newArr.push(newObj);
        } else {
          newArr.push(elem);
        }
      });
      setBasket(newArr);
      localStorage.setItem(
        "basket",
        JSON.stringify(
          newArr.map((item) => {
            return { productId: item._id, productCount: item.count };
          })
        )
      );
    } else {
      updateBasket(_id, { productCount: prop })
        .then((res) => {
          console.log(res);
          getBasketData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteBasketData = (_id) => {
    if (!user) {
      let newArr = localBasket.filter((item) => item?.productId !== _id);
      localStorage.setItem("basket", JSON.stringify(newArr));
      setLocalBasket(newArr);
    } else {
      deleteBasket(_id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          getBasketData();
        });
    }
  };

  useEffect(() => {
    getBasketData();
  }, [user, localBasket]);

  const getBasketData = async () => {
    if (!user) {
      let localBasket = JSON.parse(localStorage.getItem("basket"));
      if (localBasket != null) {
        generateBasket(localBasket)
          .then((res) => {
            setBasket(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      getBasket().then(({ data }) => {
        generateBasket(data.data)
          .then((res) => {
            setBasket(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  const generateBasket = async (param) => {
    let arr = param.map((item) => {
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
          count: param.find((el) => el.productId == item._id).productCount,
          basketId: user
            ? param.find((el) => el.productId == item._id)._id
            : null,
        };
        return newItem;
      });
    return data;
  };
  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        deleteBasketData,
        addBasketData,
        localBasket,
        updateBasketData,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
