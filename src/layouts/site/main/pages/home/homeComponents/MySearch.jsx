import React, { useContext, useRef, useState } from "react";
import { dynamicUrl } from "../../../../../../utils/generateUrl";
import { getProduct } from "../../../../../../services/product";
import { LoadingContext } from "../../../../../../contexts/LoadingContext";
import { Link } from "react-router-dom";

const MySearch = ({ setShowSearch }) => {
  const [query, setQuery] = useState({});
  const [prod, setProd] = useState([]);
  const { setloading } = useContext(LoadingContext);
  const form = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    getDatas();
  };

  const getDatas = () => {
    setloading(true);
    getProduct(dynamicUrl(query))
      .then(({ data }) => {
        setProd(data.data.product);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        form.current.reset();
        setloading(false);
      });
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0">
      <div
        onClick={() => setShowSearch(false)}
        className="w-full h-full bg-[#00000060] "
      ></div>
      <div className="z-30 absolute top-4 left-1/2 -translate-x-1/2 w-[55%]">
        <form onSubmit={submitHandler} ref={form}>
          <div className="w-full flex">
            <input
              onChange={(e) => {
                setQuery({ ...query, search: e.target.value });
              }}
              className="bg-white w-full md:h-12 rounded-md outline-none py-2 px-4 md:px-5"
              type="text"
              placeholder="Search..."
            />
            <button
              className="bg-gray-300 text-black py-3 px-6 rounded-md"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="absolute top-[96px] z-30 w-[55%] left-1/2 -translate-x-1/2 bg-white rounded-md">
        <div className="flex flex-col">
          {prod.map((item) => {
            console.log(item);
            return (
              <div className="flex px-3 py-3">
                <Link to={`/details/${item._id}`}>
                  <img
                    onClick={() => {
                      setShowSearch(false);
                    }}
                    className="w-[100px] h-[120px]"
                    src={item.images[0].url}
                  />
                </Link>
                <div className="px-3 py-2">
                  <h2 className="text-lg text-gray-600">{item.title}</h2>
                  <h2 className="text-base text-gray-600">
                    {item.description}
                  </h2>
                  <h2 className="text-base text-black">{item.productPrice}$</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MySearch;
