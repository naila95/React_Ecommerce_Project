import React, { useContext, useEffect, useState } from "react";
import MyButton from "../../components/UI/MyButton";
import StaffTable from "./components/StaffTable";
import { MyModalContext } from "../../../../contexts/MyModalContext";
import AddStaffModel from "./components/AddStaffModel";
import { getStaff } from "../../../../services/staff";

export default function Staff() {
  const [data, setData] = useState([]);
  const { setMyModal } = useContext(MyModalContext);
  const getStaffData = () => {
    getStaff()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStaffData;
  }, []);

  return (
    <div className="">
      <h3 className="font-bold text-xl">All Staff</h3>
      <div className="flex items-center gap-3 py-5">
        <div className="flex items-center gap-3">
          <MyButton
            fill={true}
            refFunc={() => {
              setMyModal({
                open: true,
                width: "63%",
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
