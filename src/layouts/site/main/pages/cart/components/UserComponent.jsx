import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";
import {
  deleteBasket,
  updateBasket,
} from "../../../../../../services/basketProduct";
import { LoadingContext } from "../../../../../../contexts/LoadingContext";

const UserComponent = ({ details, getData }) => {
  const { setloading } = useContext(LoadingContext);

  const increaseItem = (id, count) => {
    let newCount = { productCount: count + 1 };
    updateBasket(id, newCount);
    getData();
  };

  const decreaseItem = (id, count) => {
    let newCount = { productCount: count - 1 };
    updateBasket(id, newCount);
    getData();
  };

  const deleteItem = (id) => {
    setloading(true);
    deleteBasket(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        getData();
        setloading(false);
      });
  };

  return (
    <div className="flex md:w-[100%] lg:w-[60%] flex-col px-4 py-8 md:px-12 2xl:px-16">
      {details?.map((item) => {
        console.log(details);
        return (
          <div key={item._id} className="flex items-center gap-16 py-4">
            <div className="cursor-pointer">
              <MdOutlineCancel
                onClick={() => {
                  deleteItem(item.basket._id);
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
                    decreaseItem(item.basket._id, item.basket.productCount);
                  }}
                  className="border-r px-5 cursor-pointer"
                >
                  <LuMinus />
                </button>
                <div className="px-7">
                  <h2 className="text-lg">{item.basket?.productCount}</h2>
                </div>
                <button
                  onClick={() => {
                    increaseItem(item.basket._id, item.basket.productCount);
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

export default UserComponent;
