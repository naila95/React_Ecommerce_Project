import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Select, Space } from "antd";
import Button from "../components/UI/Button";
import { staffMockData } from "../../../helpers/staffConstants";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    width: "15%",
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname",
    sorter: (a, b) => a.name.length - b.name.length,
    width: "15%",
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
    width: "15%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "20%",
  },
  {
    title: "Phone number",
    dataIndex: "number",
    key: "number",
    width: "20%",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];
// const getRandomuserParams = (params) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });

export default function Staff() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  useEffect(() => {
    setData(staffMockData);
  }, []);
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
  return (
    <div className="">
      <h3 className="font-bold text-xl">All Staff</h3>
      <div className="flex items-center gap-3 py-5">
        <div className="">
          <input
            className="bg-white border h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5 outline-none"
            type="search"
            placeholder="Search by name"
          />
        </div>
        <div className="">
          <Space wrap>
            <Select
              defaultValue="Staff Role"
              bordered="true"
              style={{
                width: 150,
                height: 48,
                borderBlockColor: "#94D5CB",
              }}
              allowClear
              options={[
                {
                  value: "admin",
                  label: "Admin",
                },
                {
                  value: "sales-manager",
                  label: "Sales Manager",
                },
                {
                  value: "seller",
                  label: "Seller",
                },
                {
                  value: "cashier",
                  label: "Cashier",
                },
              ]}
            />
          </Space>
        </div>
        <div className="flex items-center gap-3">
          <Button label={"Filter"} fill={true} refFunc={() => {}} />
          <Button
            label={"Reset"}
            refFunc={() => {
              console.log("test");
            }}
          />
          <Button fill={true} label={"Add new staff"} />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
}
