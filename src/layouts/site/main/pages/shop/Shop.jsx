import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Select, Checkbox } from "antd";
import { getBrandsForSite } from "../../../../../services/brands";
import { dynamicUrl } from "../../../../../utils/generateUrl";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { getProductForSite } from "../../../../../services/homeProduct";

export default function Shop() {
  const [brands, setBrands] = useState([]);
  const [prod, setProd] = useState([]);
  const [query, setQuery] = useState({});
  const { setloading } = useContext(LoadingContext);

  const getBrandsForShop = () => {
    getBrandsForSite()
      .then(({ data }) => {
        setBrands(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBrandsForShop();
  }, []);

  const handleChange = (key, value) => {
    setQuery({ ...query, [key]: value });
  };

  const getDatas = () => {
    setloading(true);
    getProductForSite(dynamicUrl(query))
      .then(({ data }) => {
        setProd(data.data.product);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    getDatas();
  }, [query]);

  return (
    <main>
      <div className="px-14 py-16">
        <div className="flex items-center">
          <div className="w-[20%]">
            <Link to={"/"}>Home / </Link>
            <Link> Search</Link>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold mb-7">Shop By Category </h3>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col py-10 w-[20%]">
            <div className="py-1 border-b-2">
              <h3 className="text-2xl font-semibold mb-7">Filters</h3>
            </div>
            <div className="py-3">
              <h3 className="text-lg font-semibold mb-7">Brand</h3>
              {brands.map((item) => {
                return (
                  <div className="">
                    <Checkbox
                      className="text-lg mb-2"
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleChange("brandId", item._id);
                        } else if (!e.target.checked) {
                          setQuery("");
                        }
                      }}
                    >
                      {item.name}
                    </Checkbox>
                  </div>
                );
              })}
            </div>
            <div className="py-3">
              <h3 className="text-lg font-semibold mb-7">Stock</h3>
              <div className="">
                <Checkbox
                  className="text-lg mb-2"
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleChange("stock", "inStock");
                    } else if (!e.target.checked) {
                      setQuery("");
                    }
                  }}
                >
                  In Stock
                </Checkbox>
              </div>
              <div className="">
                <Checkbox
                  className="text-lg"
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleChange("stock", "outStock");
                    } else if (!e.target.checked) {
                      setQuery("");
                    }
                  }}
                >
                  Out Stock
                </Checkbox>
              </div>
            </div>
          </div>
          <div className="grid mx-auto py-14 grid-cols-2 sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {prod.map((item) => {
              return (
                <div className="rounded-md flex flex-col cursor-pointer group transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl bg-white">
                  <Link to={`/details/${item._id}`}>
                    <img
                      className="rounded-md group-hover:rounded-none"
                      src={item.images[0].url}
                    />
                  </Link>
                  <div className="w-full px-3 py-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                    <h2 className="font-semibold text-lg mt-2">
                      {item.productPrice}$
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
