import React, { useContext, useEffect, useState } from "react";
import { Select, Space } from "antd";
import { staffMockData } from "../../../../helpers/staffConstants";
import MyButton from "../../components/UI/MyButton";
import StaffTable from "./components/StaffTable";
import StaffModalForm from "./components/StaffModalForm";
import { MyModalContext } from "../../../../contexts/MyModalContext";
import AddStaffModel from "./components/AddStaffModel";

export default function Staff() {
  const [data, setData] = useState([]);
  const { setMyModal } = useContext(MyModalContext);

  useEffect(() => {
    setData(staffMockData);
  }, []);

  return (
    <div className="">
      <h3 className="font-bold text-xl">All Staff</h3>
      <div className="flex items-center gap-3 py-5">
        <div className="">
          <input
            className="bg-white border h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5 outline-none mr-3"
            type="search"
            placeholder="Search by name"
          />
          <input
            className="bg-white border h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5 outline-none"
            type="search"
            placeholder="Search by surname"
          />
        </div>
        <div className="flex items-center gap-3">
          <MyButton label={"Filter"} fill={true} refFunc={() => {}} />
          <MyButton
            label={"Reset"}
            refFunc={() => {
              console.log("test");
            }}
          />
          <MyButton
            fill={true}
            refFunc={() => {
              setMyModal({
                open: true,
                width: "88%",
                Component: <AddStaffModel />,
              });
            }}
            label={"Add new staff"}
          />
        </div>
      </div>
      <StaffTable data={data} />
    </div>
  );
}
