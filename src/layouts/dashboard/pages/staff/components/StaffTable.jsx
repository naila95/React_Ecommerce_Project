import { Table } from "antd";
import React, { useContext, useState } from "react";

export default function StaffTable({ data }) {
  console.log(data);
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
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
