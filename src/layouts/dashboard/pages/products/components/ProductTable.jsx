import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Button, Pagination, Switch, Table, Tag } from "antd";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import ProductEditModal from "./ProductEditModal";
import { getBrand } from "../../../../../services/brands";
import ProductDeleteModal from "./ProductDeleteModal";
import { updateProduct } from "../../../../../services/product";
import { toast } from "react-toastify";

export default function ProductTable({
  totalCount,
  data,
  getDatas,
  setQuery,
  query,
  brands,
}) {
  const { setMyModal } = useContext(MyModalContext);
  const [pagination, setPagination] = useState({ page: 1, perPage: 10 });

  useEffect(() => {
    getBrand();
  }, []);

  useEffect(() => {
    setQuery({ ...query, page: pagination.page, perPage: pagination.perPage });
  }, [pagination]);

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
              checked={record.isPublish == true}
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
                    })
                    .finally(() => {
                      toast.success("Product is published successfully!");
                      getDatas();
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
                    })
                    .finally(() => {
                      toast.warning("Product is not published!");

                      getDatas();
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
      <div className="flex flex-col gap-5">
        <Table pagination={false} columns={columns} dataSource={data} />
        <Pagination
          className="flex justify-end mr-16"
          onChange={(page, perPage) => {
            setPagination({ page, perPage });
          }}
          showSizeChanger
          defaultCurrent={pagination.page}
          total={totalCount}
        />
      </div>
    </>
  );
}
