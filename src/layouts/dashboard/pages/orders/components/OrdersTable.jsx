import React from "react";
import { Button, Space, Table, Tag } from "antd";

export default function OrdersTable() {
  const columns = [
    {
      title: "Invoice No",
      dataIndex: "invoice-no",
      key: "invoice-no",
    },
    {
      title: "Order Time",
      dataIndex: "order-time",
      key: "order-time",
    },
    {
      title: "Customer Name",
      dataIndex: "customer-name",
      key: "customer-name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
  const data = [];
  return <Table columns={columns} dataSource={data} />;
}
