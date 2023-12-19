import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Select, Space } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
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
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
// const getRandomuserParams = (params) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });

export default function Staff() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  // const fetchData = () => {
  //   setLoading(true);
  //   fetch(
  //     `https://randomuser.me/api?${qs.stringify(
  //       getRandomuserParams(tableParams)
  //     )}`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setTableParams({
  //         ...tableParams,
  //         pagination: {
  //           ...tableParams.pagination,
  //           total: 200,
  //           // 200 is mock data, you should read it from server
  //           // total: data.totalCount,
  //         },
  //       });
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [JSON.stringify(tableParams)]);
  // const handleTableChange = (pagination, filters, sorter) => {
  //   setTableParams({
  //     pagination,
  //     filters,
  //     ...sorter,
  //   });

  //   // `dataSource` is useless since `pageSize` changed
  //   if (pagination.pageSize !== tableParams.pagination?.pageSize) {
  //     setData([]);
  //   }
  // };
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
              ]}
            />
          </Space>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#94D5CB] text-white py-3 px-6 text-base rounded-md">
            Filter
          </button>
          <button className="bg-white border border-[#94D5CB] py-3 px-6 text-base rounded-md">
            Reset
          </button>
          <button className="bg-[#94D5CB] text-white py-3 px-6 text-base rounded-md">
            Add new staff
          </button>
        </div>
      </div>

      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        // onChange={handleTableChange}
      />
    </div>
  );
}
