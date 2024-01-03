import { Form, Spin } from "antd";
import React, { useContext, useState } from "react";
import MyButton from "../../../components/UI/MyButton";
import FileConverter from "../../../../../utils/fileConverter";
import { updateBrand } from "../../../../../services/brands";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { MyModalContext } from "../../../../../contexts/MyModalContext";

export default function BrandEditModal({ initialValues = {}, getBrands }) {
  const { loading, setloading } = useContext(LoadingContext);
  const { setMyModal } = useContext(MyModalContext);

  const [file, setFile] = useState(null);
  const onFinish = (values) => {
    values.image = file ? file[0] : null;
    setloading(true);
    updateBrand(initialValues._id, values)
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
        setloading(false);
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
        initialValues={initialValues}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name="image">
          <input
            onChange={async (e) => {
              const a = Object.values(e.target.files);
              let res = await FileConverter(a);
              setFile(res);
            }}
            placeholder="Images"
            name="image"
            type="file"
            className="border border-[#94D5CB] py-2.5 w-full px-2 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item name="name">
          <input
            placeholder="Title"
            name="name"
            type="text"
            className="border border-[#94D5CB] py-3 px-4 ml-2 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item>
          <MyButton fill={true} label={"Edit"} />
        </Form.Item>
      </Form>
    </Spin>
  );
}
