import { Button, Form, Table, Modal } from "antd";
import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import MyButton from "../../../components/UI/MyButton";
import StaffModalForm from "./StaffModalForm";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import DeleteStaffModel from "./DeleteStaffModel";

export default function StaffTable({ data }) {
  const { setMyModal } = useContext(MyModalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  // const getRandomuserParams = (params) => ({
  //   results: params.pagination?.pageSize,
  //   page: params.pagination?.current,
  //   ...params,
  // });
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      width: "13%",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
      sorter: (a, b) => a.name.length - b.name.length,
      width: "13%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
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
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
      width: "13%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
    },
    {
      title: "Phone number",
      dataIndex: "number",
      key: "number",
      width: "15%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
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
      {/* <StaffModalForm initialValues={value} /> */}
      <div className="staff_table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />
      </div>
    </>
  );
}
