import React, { useContext, useState } from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import StaffModalForm from "../../staff/components/StaffModalForm";
import DeleteStaffModel from "../../staff/components/DeleteStaffModel";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import ProductEditModal from "./ProductEditModal";

export default function ProductTable({ data }) {
  const { setMyModal } = useContext(MyModalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Product Image",
      dataIndex: "product-image",
      key: "product-image",
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
                  width: "85%",
                  Component: <ProductEditModal initialValues={record} />,
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
  return (
    <>
      {/* <Modal
        width={1130}
        title="Info about staff"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      > */}
      {/* <StaffModalForm initialValues={value} /> */}
      {/* </Modal> */}
      {/* <ProductEditModal initialValues={value} /> */}
      <div className="staff_table">
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
