import { Button, Form, Spin } from "antd";
import React, { useContext } from "react";
import { deleteBrand } from "../../../../../services/brands";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { toast } from "react-toastify";

export default function BrandDeleteModal({ initialValues = {}, getBrands }) {
  const { setMyModal } = useContext(MyModalContext);
  const { loading, setloading } = useContext(LoadingContext);

  const onFinish = (values) => {
    setloading(true);
    deleteBrand(initialValues._id)
      .then((res) => {
        console.log(res);
        getBrands();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
        setMyModal({
          open: false,
        });
        toast.success("Brand is deleted successfully!");
      });
  };
  return (
    <Spin spinning={loading}>
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
    </Spin>
  );
}
