import { Button, Form, Spin } from "antd";
import React, { useContext } from "react";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { deleteProduct } from "../../../../../services/product";
import { toast } from "react-toastify";

export default function ProductDeleteModal({ initialValues = {}, getDatas }) {
  const { setMyModal } = useContext(MyModalContext);
  const { loading, setloading } = useContext(LoadingContext);

  const onFinish = (values) => {
    setloading(true);
    deleteProduct(initialValues._id)
      .then((res) => {
        console.log(res);
        getDatas();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
        setMyModal({
          open: false,
        });
        toast.success("Product is deleted successfully!");
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
      >
        <div className="flex flex-col">
          <div className="mb-3">
            <h3 className="font-bold text-xl">Are you sure?</h3>
          </div>
          <div className="flex justify-end">
            <Form.Item>
              <Button className="mr-2" type="default" danger htmlType="submit">
                Delete
              </Button>
              <Button
                onClick={() => {
                  setMyModal({
                    open: false,
                  });
                }}
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
