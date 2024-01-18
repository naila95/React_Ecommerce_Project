import React, { useState } from "react";
import { Button, Checkbox, Space, Table, Tag } from "antd";
import moment from "moment";
import { updateOrder } from "../../../../../services/orders";

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
    },
    {
      title: "Is delivered",
      key: "tags",
      dataIndex: "tags",
      render: (_, record) => {
        return (
          <>
            <Checkbox
              checked={record.status == "delivered"}
              disabled={record.status == "delivered"}
              onChange={(e) => {
                if (e.target.checked) {
                  let data = {
                    status: "delivered",
                  };
                  updateOrder(record._id, data)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    })
                    .finally(() => {
                      getOrdersForDashboard();
                    });
                }
              }}
            ></Checkbox>
          </>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}
