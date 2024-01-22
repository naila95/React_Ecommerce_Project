import React, { useContext, useEffect, useRef, useState } from "react";
import ProductTable from "./components/ProductTable";
import MyButton from "../../components/UI/MyButton";
import { Select } from "antd";
import { MyModalContext } from "../../../../contexts/MyModalContext";
import AddProductModal from "./components/AddProductModal";
import { getProduct } from "../../../../services/product";
import { getBrand } from "../../../../services/brands";
import { dynamicUrl } from "../../../../utils/generateUrl";
import { LoadingContext } from "../../../../contexts/LoadingContext";

export default function Products() {
  const [prod, setProd] = useState([]);
  const [query, setQuery] = useState({});
  const { setMyModal } = useContext(MyModalContext);
  const { setloading } = useContext(LoadingContext);
  const [brands, setBrands] = useState([]);
  const [selectInitialVal, setselectInitialVal] = useState("Brand");
  const [totalCount, setTotalCount] = useState(1);
  const form = useRef(null);
  const selectRef = useRef(null);

  const getBrands = () => {
    setloading(true);
    getBrand()
      .then(({ data }) => {
        setBrands(
          data.data.map((item) => {
            return { label: item.name, value: item._id };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getDatas();
  };

  const handleChange = (key, value) => {
    setQuery({ ...query, [key]: value });
  };

  const getDatas = () => {
    setloading(true);
    getProduct(dynamicUrl(query))
      .then(({ data }) => {
        setProd(data.data.product);
        setTotalCount(data.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    getBrands();
    getDatas();
  }, [query]);
  return (
    <>
      <h3 className="font-bold text-xl">All Products</h3>
      <div className="py-5 flex flex-col gap-1">
        <form onSubmit={submitHandler} ref={form} className="flex items-center">
          <input
            onChange={(e) => {
              setQuery({ ...query, search: e.target.value });
            }}
            className="bg-white border w-[17%] h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5 outline-none mr-3"
            type="search"
            placeholder="Search by Product name"
          />
          <Select
            ref={selectRef}
            className="bg-white w-[17%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
            value={selectInitialVal}
            style={{ outline: "none" }}
            onChange={(e) => {
              setselectInitialVal(e);
              handleChange("brandId", e);
            }}
            options={brands}
          />

          <div className="flex items-center gap-3">
            <MyButton label={"Filter"} fill={true} />
            <MyButton
              label={"Reset"}
              refFunc={() => {
                setQuery({});
                form.current.reset();
                setselectInitialVal("Brand");
              }}
            />
            <MyButton
              refFunc={() => {
                setMyModal({
                  open: true,
                  width: "98%",
                  Component: <AddProductModal getDatas={getDatas} />,
                });
              }}
              label={"Add new product"}
              fill={true}
            />
          </div>
        </form>
      </div>
      <ProductTable
        totalCount={totalCount}
        data={prod}
        brands={brands}
        setQuery={setQuery}
        query={query}
        getDatas={getDatas}
      />
    </>
  );
}
