import React, { useEffect, useState } from "react";
import logo from "../../../../../assets/logo.svg";
import moment from "moment";
import { Spin, Table } from "antd";
import { getSingleProduct } from "../../../../../services/homeProduct";

const OrderDetailModal = ({ initialValues }) => {
  const [data, setData] = useState([]);

  const getProductData = async () => {
    console.log(initialValues);
    let arr = initialValues.products.map((item) => {
      console.log(item.productId);
      return getSingleProduct(item.productId);
    });
    console.log(arr);
    let res = await Promise.all(arr);
    let data = res
      .map((item) => {
        return item.data.data;
      })
      .map((item) => {
        let newItem = {
          ...item,
          count: initialValues.products.find((el) => el.productId == item._id)
            .productCount,
        };
        return newItem;
      });
    return setData(data);
  };

  console.log(data);

  useEffect(() => {
    getProductData();
  }, []);

  const dataSource = data?.map((item, index) => ({
    key: index,
    sr: index + 1,
    title: item?.title,
    description: item?.description,
    count: item?.count,
    price: (item?.salePrice ? item?.salePrice : item?.productPrice) + "$",
  }));

  const columns = [
    {
      title: "SR.",
      dataIndex: "sr",
      key: "sr",
    },
    {
      title: "Product Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Product Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Quantity",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <div className="rounded-md py-6 px-8">
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-xl uppercase font-bold">invoice</h2>
          <h2 className="text-base text-gray-500 uppercase">
            status: {initialValues.status}
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <img className="self-end" src={logo} alt="logo" />
          <h2>59 Station Rd, Purls Bridge, United Kingdom</h2>
          <h2>019579034</h2>
          <h2>kachabazar@gmail.com</h2>
          <h2>kachabazar-admin.vercel.app</h2>
        </div>
      </div>
      <div className="flex justify-between py-14">
        <div className="">
          <h2 className="text-base uppercase font-semibold">date</h2>
          <h2 className="text-base text-gray-800">
            {moment(initialValues.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </h2>
        </div>
        <div className="">
          <h2 className="text-base uppercase font-semibold">invoice to</h2>
          <h2 className="text-base text-gray-800">
            {initialValues.customer.name}
          </h2>
        </div>
      </div>
      {dataSource?.length > 0 ? (
        <div className="flex flex-col mb-8">
          <div className="">
            <Table
              pagination={false}
              columns={columns}
              dataSource={dataSource}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-8">
          <Spin />
        </div>
      )}
      <div className="flex justify-between bg-gray-50 rounded-md px-8 py-8">
        <div className="">
          <h2 className="text-lg uppercase font-semibold">Payment Method</h2>
          <h2 className="text-base uppercase text-gray-500">
            {initialValues.method}
          </h2>
        </div>
        <div className="">
          <h2 className="text-lg uppercase font-semibold">Discount</h2>
          <h2 className="text-base uppercase text-gray-500">0.00$</h2>
        </div>
        <div className="">
          <h2 className="text-lg uppercase font-semibold">Total</h2>
          <h2 className="text-lg uppercase text-red-500">
            {initialValues.total}$
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
