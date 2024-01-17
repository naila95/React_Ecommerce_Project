import React from "react";
import { Button, Space, Table, Tag } from "antd";
import moment from "moment";

export default function OrdersTable({ data, getOrdersForDashboard }) {
  const columns = [
    {
      title: "Order Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => {
        let time = moment(record.createdAt).format("MMMM Do YYYY, h:mm:ss a");
        return <>{time}</>;
      },
    },
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "customer-name",
      render: (_, record) => {
        let name = record.customer.name;
        return <>{name}</>;
      },
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Amount",
      dataIndex: "total",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Processing",
          value: "processing",
        },
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Delivered",
          value: "delivered",
        },
      ],
      onFilter: (value, record) => record.brand.indexOf(value) === 0,
    },
    {
      title: "Is delivered",
      key: "tags",
      dataIndex: "tags",
      render: (_, record) => {
        return <></>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <>
            <Button></Button>
          </>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}
