import React, { useContext, useState } from "react";
import { Button, Table } from "antd";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import BrandEditModal from "./BrandEditModal";
import BrandDeleteModal from "./BrandDeleteModal";

export default function BrandTable({ data, getBrands }) {
  const { setMyModal } = useContext(MyModalContext);
  const columns = [
    {
      title: "Brand Image",
      dataIndex: "image",
      key: "brandImage",
      render: (text, record) => (
        <img src={text.url} className="w-[80px] h-[50px] p-0 rounded-md" />
      ),
    },
    {
      title: "Brand Name",
      dataIndex: "name",
      key: "brandName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Button
              className="mr-2"
              type="primary"
              ghost
              onClick={() => {
                let costomData = { ...record };
                costomData.src = record.image?.url;
                delete costomData.image;
                setMyModal({
                  open: true,
                  width: "45%",
                  Component: (
                    <BrandEditModal
                      getBrands={getBrands}
                      initialValues={costomData}
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
                  //   width: "80%",
                  Component: (
                    <BrandDeleteModal
                      getBrands={getBrands}
                      initialValues={record}
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
        <Table columns={columns} dataSource={data?.data?.data} />
      </div>
    </>
  );
}
