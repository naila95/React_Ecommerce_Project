import React, { useContext, useEffect, useState } from "react";
import ProductTable from "./components/ProductTable";
import MyButton from "../../components/UI/MyButton";
import { Select } from "antd";
import { MyModalContext } from "../../../../contexts/MyModalContext";
import AddStaffModel from "../staff/components/AddStaffModel";
import { productData } from "../../../../helpers/constants/productConstants";
import AddProductModal from "./components/AddProductModal";

export default function Products() {
  const [data, setData] = useState();
  const { setMyModal } = useContext(MyModalContext);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    setData(productData);
  });
  return (
    <>
      <h3 className="font-bold text-xl">All Products</h3>
      <div className="py-5 flex flex-col gap-1">
        <div className="flex items-center">
          <input
            className="bg-white border w-[17%] h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5 outline-none mr-3"
            type="search"
            placeholder="Search by Product name"
          />
          <Select
            className="bg-white w-[10%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
            defaultValue="Brand"
            style={{ outline: "none" }}
            onChange={handleChange}
            options={[
              { value: "delivered", label: "Delivered" },
              { value: "pending", label: "Pending" },
            ]}
          />

          <div className="flex items-center gap-3">
            <MyButton label={"Filter"} fill={true} refFunc={() => {}} />
            <MyButton
              label={"Reset"}
              refFunc={() => {
                console.log("test");
              }}
            />
            <MyButton
              refFunc={() => {
                setMyModal({
                  open: true,
                  width: "98%",
                  Component: <AddProductModal />,
                });
              }}
              label={"Add new product"}
              fill={true}
            />
          </div>
        </div>
      </div>
      <ProductTable data={data} />
    </>
  );
}
