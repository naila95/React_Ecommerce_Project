import React, { useContext, useState } from "react";
import MyButton from "../../../components/UI/MyButton";
import { Form, Spin } from "antd";
import FileConverter from "../../../../../utils/fileConverter";
import { postBrand } from "../../../../../services/brands";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import { toast } from "react-toastify";

export default function AddBrandModal({ getBrands }) {
  const [file, setFile] = useState(null);
  const { loading, setloading } = useContext(LoadingContext);
  const { setMyModal } = useContext(MyModalContext);
  const onFinish = (values) => {
    let brandData = {
      name: values.brandName,
      image: file[0],
    };
    setloading(true);
    postBrand(brandData)
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
        toast.success("Brand is added successfully!");
      });
  };

  const [form] = Form.useForm();

  return (
    <>
      <Spin spinning={loading}>
        <Form
          form={form}
          name="basic"
          style={{
            display: "flex",
            marginTop: 20,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="brandImage"
            rules={[
              {
                required: true,
                message: "Please input brand image!",
              },
            ]}
          >
            <input
              multiple
              placeholder="Image"
              onChange={async (e) => {
                const a = Object.values(e.target.files);
                let res = await FileConverter(a);
                setFile(res);
              }}
              type="file"
              className="border border-[#94D5CB] py-2.5 w-full px-2 rounded-md outline-none mr-7"
            ></input>
          </Form.Item>
          <Form.Item
            name="brandName"
            rules={[
              {
                required: true,
                message: "Please input brand name!",
              },
            ]}
          >
            <input
              placeholder="Brand name"
              name="brandName"
              type="text"
              className="border border-[#94D5CB] py-3 px-4 ml-2 rounded-md outline-none mr-7"
            ></input>
          </Form.Item>
          <Form.Item>
            <MyButton refFunc={() => {}} fill={true} label={"Add"} />
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
}
