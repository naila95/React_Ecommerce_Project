import React, { useContext, useState } from "react";
import { Avatar, Button, Table } from "antd";
import DeleteStaffModel from "../../staff/components/DeleteStaffModel";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import BrandEditModal from "./BrandEditModal";

export default function BrandTable({ data }) {
  console.log("data", data);
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
      title: "Brand Image",
      dataIndex: "image",
      key: "brandImage",
      render: (text, record) => (
        <img src={text.url} className="w-[100px] h-[70px] p-0 rounded-md" />
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
                setMyModal({
                  open: true,
                  width: "45%",
                  Component: <BrandEditModal initialValues={record} />,
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
      <div className="staff_table">
        <Table columns={columns} dataSource={data?.data?.data} />
      </div>
    </>
  );
}
