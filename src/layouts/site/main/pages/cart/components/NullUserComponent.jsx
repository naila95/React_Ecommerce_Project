import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";
import { BasketContext } from "../../../../../../contexts/BasketContext";

const NullUserComponent = ({ details, setDetails }) => {
  const { basket, setBasket, count, setCount } = useContext(BasketContext);

  const increaseItem = (id) => {
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
    setDetails(details.filter((item) => item._id !== id));
    setBasket(basket.filter((item) => item.productId !== id));
  };

  return (
    <div className="flex md:w-[100%] lg:w-[60%] flex-col px-4 py-8 md:px-12 2xl:px-16">
      {details?.map((item) => {
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
              <img className="h-[180px] w-[150px]" src={item.images[0]?.url} />
            </div>
            <div className="">
              <h2 className="text-xl">{item.title}</h2>
              <h2 className="text-base text-gray-400">{item.description}</h2>
            </div>
            <div className="">
              <h2 className="text-lg text-gray-700">{item.productPrice}$</h2>
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
                  <h2 className="text-lg">
                    {
                      basket.find((elem) => elem.productId == item._id)
                        .productCount
                    }
                  </h2>
                </div>
                <button
                  onClick={() => {
                    increaseItem(item._id);
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
  );
};

export default NullUserComponent;