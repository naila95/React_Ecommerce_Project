import React, { useContext, useEffect, useRef, useState } from "react";
import MyButton from "../../components/UI/MyButton";
import { Form, Select } from "antd";
import OrdersTable from "./components/OrdersTable";
import { getOrder } from "../../../../services/orders";
import { LoadingContext } from "../../../../contexts/LoadingContext";
import { dynamicUrl } from "../../../../utils/generateUrl";

export default function Orders() {
  const [data, setData] = useState([]);
  const { setloading } = useContext(LoadingContext);
  const [query, setQuery] = useState({});
  const [selectInitialVal, setselectInitialVal] = useState("Status");
  const [initialVal, setInitialVal] = useState("Order limits");
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [totalCount, setTotalCount] = useState(1);

  const [form] = Form.useForm();

  const onFinish = () => {
    getOrdersForDashboard();
  };

  const handleChange = (key, value) => {
    setQuery({ ...query, [key]: value });
  };

  const getOrdersForDashboard = () => {
    setloading(true);
    getOrder(dynamicUrl(query))
      .then(({ data }) => {
        setData(data.data.data);
        setTotalCount(data.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    getOrdersForDashboard();
  }, [query]);

  console.log(data);

  return (
    <>
      <h3 className="font-bold text-xl">All Orders</h3>
      <div className="pb-5 flex flex-col gap-1">
        <Form
          name="basic"
          form={form}
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            onChange={(e) => {
              setQuery({ ...query, search: e.target.value });
            }}
            name="search"
            className="w-[20%] mt-[22px]"
          >
            <input
              placeholder="Search by Customer name"
              type="search"
              className="bg-white border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-3 md:px-4 outline-none"
            ></input>
          </Form.Item>
          <Form.Item className="w-[15%] mt-[22px]">
            <Select
              value={selectInitialVal}
              className="bg-white w-full border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
              style={{ outline: "none" }}
              onChange={(e) => {
                handleChange("status", e);
                setselectInitialVal(e);
              }}
              options={[{ value: "delivered", label: "Delivered" }]}
            />
          </Form.Item>
          <Form.Item className="mt-[22px]">
            <Select
              value={initialVal}
              className="bg-white w-[40%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12"
              style={{ outline: "none" }}
              onChange={(e) => {
                handleChange("day", e);
                setInitialVal(e);
              }}
              options={[
                { value: "2", label: "Last 2 days" },
                { value: "5", label: "Last 5 days" },
                { value: "10", label: "Last 10 days" },
                { value: "15", label: "Last 15 days" },
              ]}
            />
          </Form.Item>
          <Form.Item className="w-[25%]">
            <label htmlFor="start-date">Start Date</label>
            <input
              ref={startDateRef}
              onChange={(e) => {
                handleChange("startDate", e.target.value);
              }}
              className="border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5"
              type="date"
              name="start-date"
            />
          </Form.Item>
          <Form.Item className="w-[25%]">
            <label htmlFor="end-date">End Date</label>
            <input
              ref={endDateRef}
              onChange={(e) => {
                handleChange("endDate", e.target.value);
              }}
              className="border w-full h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5"
              type="date"
              name="end-date"
            />
          </Form.Item>
          <Form.Item>
            <MyButton label={"Filter"} fill={true} refFunc={() => {}} />
          </Form.Item>
          <Form.Item>
            <MyButton
              label={"Reset"}
              refFunc={() => {
                form.resetFields();
                setQuery({});
                setselectInitialVal("Status");
                setInitialVal("Order limits");
                console.log(endDateRef.current.value);
                endDateRef.current.value = null;
                startDateRef.current.value = null;
              }}
            />
          </Form.Item>
        </Form>
      </div>
      <OrdersTable
        data={data}
        setQuery={setQuery}
        query={query}
        totalCount={totalCount}
        getOrdersForDashboard={getOrdersForDashboard}
      />
    </>
  );
}
