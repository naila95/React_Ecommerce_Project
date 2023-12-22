import React from "react";
import { Button, Space, Table, Tag } from "antd";
import StaffModalForm from "../../staff/components/StaffModalForm";
import DeleteStaffModel from "../../staff/components/DeleteStaffModel";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export default function ProductTable() {
  const columns = [
    {
      title: "Product Image",
      dataIndex: "product-image",
      key: "product-image",
    },
    {
      title: "Product Name",
      dataIndex: "product-name",
      key: "product-name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      filters: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
      onFilter: (value, record) => record.brand.indexOf(value) === 0,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
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
                setMyModal({
                  open: true,
                  width: "75%",
                  Component: <StaffModalForm initialValues={record} />,
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
                  Component: <DeleteStaffModel />,
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
  const data = [];
  return <Table columns={columns} dataSource={data} />;
}
