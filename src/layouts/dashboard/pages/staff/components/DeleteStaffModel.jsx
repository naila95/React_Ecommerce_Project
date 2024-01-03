import { Button, Form } from "antd";
import React from "react";
import MyButton from "../../../components/UI/MyButton";

export default function DeleteStaffModel({ initialValues = {} }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Form
      name="basic"
      style={{
        display: "flex",
        marginTop: 20,
      }}
      onFinish={onFinish}
      autoComplete="off"
      initialValues={initialValues}
    >
      <div className="flex flex-col">
        <div className="mb-3">
          <h3 className="font-bold text-xl">Are you sure?</h3>
        </div>
        <div className="flex justify-end">
          <Form.Item>
            <Button className="mr-2" type="default" danger>
              Delete
            </Button>
          </Form.Item>
          <Button ghost type="primary">
            Cancel
          </Button>
        </div>
      </div>
    </Form>
  );
}
