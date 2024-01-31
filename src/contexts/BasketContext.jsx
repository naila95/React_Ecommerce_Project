import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./AuthContext";
import { deleteBasket, getBasket, postBasket } from "../services/basketProduct";
import { getSingleProduct } from "../services/homeProduct";
import { LoadingContext } from "./LoadingContext";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [localBasket, setLocalBasket] = useState(null);
  const { user } = useContext(UserContext);
  const [basketData, setBasketData] = useState([]);
  const { setloading } = useContext(LoadingContext);

  // JSON.parse(localStorage.getItem("basket"))

  useEffect(() => {
    let basket = localStorage.getItem("basket");
    if (!user) {
      if (typeof basket !== "object" && !basket.length > 0) {
        localStorage.setItem("basket", JSON.stringify(localBasket));
      }
    }
  }, [localBasket, user]);

  const addBasketData = (basket) => {
    let localBasket = JSON.stringify(localStorage.getItem("basket"));
    let basketItem = localBasket.find((item) => {
      return item._id === basket._id;
    });
    if (!basketItem) {
      let newArr = [...localBasket];
      newArr.push({
        productId: _id,
        productCount: basket.count,
      });
      setLocalBasket(newArr);
    } else if (basketItem) {
      let newArr = localBasket.map((item) => {
        if (item._id === basketItem._id) {
          let temp = { ...item, productCount: basket.count };
          return temp;
        } else {
          return item;
        }
      });
      setLocalBasket(newArr);
    }
  };

  const deleteBasketData = (_id) => {
    if (!user) {
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
    // if (user === null) {
    //   let localBasket = JSON.parse(localStorage.getItem("basket"));
    //   if (localBasket && basket.length > 0) {
    //     setBasket(localBasket);
    //   }
    // } else if (user) {
    //   setBasket([]);
    // }
  }, [user]);

  const getBasketData = async () => {
    if (!user) {
      let localBasket = JSON.parse(localStorage.getItem("basket"));
      if (localBasket != null && localBasket.length > 0) {
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
      value={{ basket, setBasket, deleteBasketData, count: 1 }}
    >
      {children}
    </BasketContext.Provider>
  );
}
