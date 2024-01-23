import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./AuthContext";
import { postBasket } from "../services/basketProduct";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
  );
  const [count, setCount] = useState(1);
  const { user } = useContext(UserContext);
  const [basketData, setBasketData] = useState([]);

  useEffect(() => {
    if (user === null || user === false) {
      localStorage.setItem("basket", JSON.stringify(basket));
    } else if (user) {
      if (localStorage.getItem("basket") !== null) {
        postBasket({ basket })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [basket, count, user]);

  useEffect(() => {
    if (user === null) {
      let localBasket = JSON.parse(localStorage.getItem("basket"));
      if (localBasket && basket.length > 0) {
        setBasket(localBasket);
      }
    }
  }, []);

  return (
    <BasketContext.Provider
      value={{ basket, setBasket, count, setCount, basketData, setBasketData }}
    >
      {children}
    </BasketContext.Provider>
  );
}
