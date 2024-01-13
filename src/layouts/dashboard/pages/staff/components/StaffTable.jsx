import { Button, Table } from "antd";
import { useContext } from "react";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import { MdDeleteOutline } from "react-icons/md";
import DeleteStaffModal from "./DeleteStaffModal";

export default function StaffTable({ data, getStaffData }) {
  const { setMyModal } = useContext(MyModalContext);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (_, record) => {
        return (
          <Button
            onClick={() => {
              setMyModal({
                open: true,
                Component: (
                  <DeleteStaffModal
                    initialValues={record}
                    getStaffData={getStaffData}
                  />
                ),
              });
            }}
            danger
            type="default"
          >
            <MdDeleteOutline />
          </Button>
        );
      },
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
