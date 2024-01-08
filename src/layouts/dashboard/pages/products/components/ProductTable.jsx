import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Button, Switch, Table, Tag } from "antd";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import ProductEditModal from "./ProductEditModal";
import { getBrand } from "../../../../../services/brands";
import ProductDeleteModal from "./ProductDeleteModal";

export default function ProductTable({ data, getDatas, setQuery }) {
  const { setMyModal } = useContext(MyModalContext);

  useEffect(() => {
    getBrand();
  }, []);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const columns = [
    {
      title: "Product Image",
      key: "product-image",
      render: (_, record) => {
        return (
          <>
            <img
              className="rounded-md w-[70px] h-[50px]"
              src={record.images[0].url}
            />
          </>
        );
      },
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Brand",
      key: "brand",
      render: (_, record) => {
        let brand = brands.find((item) => item._id === record.brandId);
        return <>{brand && brand.name}</>;
      },
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      key: "price",
    },
    {
      title: "Sale price",
      dataIndex: "salePrice",
      key: "salePrice",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Published",
      key: "published",
      render: (_, record) => {
        return (
          <>
            <Switch defaultChecked onChange={onChange} />
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        let costomData = { ...record };
        costomData.src = record.images;
        delete costomData.images;
        return (
          <>
            <Button
              className="mr-2"
              type="primary"
              ghost
              onClick={() => {
                setMyModal({
                  open: true,
                  width: "85%",
                  Component: <ProductEditModal initialValues={costomData} />,
                });
              }}
            >
              <FiEdit />
            </Button>
            <Button
              onClick={() => {
                setMyModal({
                  open: true,
                  //   width: "80%",
                  Component: (
                    <ProductDeleteModal
                      initialValues={record}
                      getDatas={getDatas}
                    />
                  ),
                });
              }}
              danger
              type="default"
            >
              <MdDeleteOutline />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="staff_table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
