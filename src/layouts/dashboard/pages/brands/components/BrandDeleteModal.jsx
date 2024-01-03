import { Button, Form } from "antd";
import React, { useContext } from "react";
import MyButton from "../../../components/UI/MyButton";
import { deleteBrand } from "../../../../../services/brands";
import { MyModalContext } from "../../../../../contexts/MyModalContext";

export default function BrandDeleteModal({ initialValues = {}, getBrands }) {
  const { setMyModal } = useContext(MyModalContext);

  const onFinish = (values) => {
    deleteBrand(initialValues._id)
      .then((res) => {
        console.log(res);
        getBrands();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setMyModal({
          open: false,
        });
      });
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
      initialValues={{ buttonClicked: "" }}
    >
      <div className="flex flex-col">
        <div className="mb-3">
          <h3 className="font-bold text-xl">Are you sure?</h3>
        </div>
        <div className="flex justify-end">
          <Form.Item>
            <Button
              name="buttonClicked"
              value="delete"
              className="mr-2"
              type="default"
              danger
              htmlType="submit"
            >
              Delete
            </Button>
            <Button
              name="buttonClicked"
              onClick={() => {
                setMyModal({
                  open: false,
                });
              }}
              value="cancel"
              ghost
              type="primary"
            >
              Cancel
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}
