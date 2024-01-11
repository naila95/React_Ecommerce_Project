import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Button, Switch, Table, Tag } from "antd";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import ProductEditModal from "./ProductEditModal";
import { getBrand } from "../../../../../services/brands";
import ProductDeleteModal from "./ProductDeleteModal";
import { updateProduct } from "../../../../../services/product";

export default function ProductTable({ data, getDatas, setQuery, brands }) {
  const { setMyModal } = useContext(MyModalContext);

  useEffect(() => {
    getBrand();
  }, []);

  const columns = [
    {
      title: "Product Image",
      key: "product-image",
      render: (_, record) => {
        return (
          <>
            <img
              className="rounded-md w-[70px] h-[50px]"
              src={record.images[record.images.length - 1].url}
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
        let brand = brands.find((item) => item.value === record.brandId);
        return <>{brand && brand.label}</>;
      },
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      key: "price",
      sorter: (a, b) => a.productPrice - b.productPrice,
    },
    {
      title: "Sale price",
      dataIndex: "salePrice",
      key: "salePrice",
      sorter: (a, b) => a.salePrice - b.salePrice,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: "Published",
      key: "published",
      render: (_, record) => {
        return (
          <>
            <Switch
              defaultChecked={true}
              onChange={(checked) => {
                if (checked) {
                  let newData = record;
                  newData.isPublish = true;
                  updateProduct(record._id, newData)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                } else {
                  let newData = record;
                  newData.isPublish = false;
                  updateProduct(record._id, newData)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }}
            />
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
                  Component: (
                    <ProductEditModal
                      brands={brands}
                      initialValues={costomData}
                      getDatas={getDatas}
                    />
                  ),
                });
              }}
            >
              <FiEdit />
            </Button>
            <Button
              onClick={() => {
                setMyModal({
                  open: true,
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
