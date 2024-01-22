import React, { useEffect, useState } from "react";
import { Button, Checkbox, Pagination, Space, Table, Tag } from "antd";
import moment from "moment";
import { updateOrder } from "../../../../../services/orders";

export default function OrdersTable({
  data,
  getOrdersForDashboard,
  query,
  setQuery,
  totalCount,
}) {
  const [pagination, setPagination] = useState({ page: 1, perPage: 10 });

  useEffect(() => {
    setQuery({ ...query, page: pagination.page, perPage: pagination.perPage });
  }, [pagination]);

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
