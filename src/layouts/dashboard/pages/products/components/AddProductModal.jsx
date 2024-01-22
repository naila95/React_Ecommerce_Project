import React, { useContext, useEffect, useState } from "react";
import MyButton from "../../../components/UI/MyButton";
import { Form, Select, Spin } from "antd";
import FileConverter from "../../../../../utils/fileConverter";
import { postProduct } from "../../../../../services/product";
import { getBrand } from "../../../../../services/brands";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { MyModalContext } from "../../../../../contexts/MyModalContext";

export default function AddProductModal({ getDatas }) {
  const [files, setFile] = useState(null);
  const { setMyModal } = useContext(MyModalContext);
  const { loading, setloading } = useContext(LoadingContext);
  const [branding, setBranding] = useState([]);

  const onFinish = (values) => {
    values.images = files;
    if (values.salePrice) {
      values.isDeal = true;
    } else if (!values.salePrice) {
      values.salePrice = false;
    }
    console.log(values);
    setloading(true);
    postProduct(values)
      .then((res) => {
        console.log(res);
        getDatas();
        setMyModal({
          open: false,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  const getBrands = () => {
    getBrand()
      .then(({ data }) => {
        setBranding(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBrands();
  }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
        <Form.Item
          name="images"
          rules={[
            {
              required: true,
              message: "Please input product images!",
            },
          ]}
        >
          <input
            multiple
            placeholder="Images"
            onChange={async (e) => {
              const a = Object.values(e.target.files);
              let res = await FileConverter(a);
              setFile(res);
            }}
            name="images"
            type="file"
            className="border border-[#94D5CB] py-2.5 w-full px-2 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input product title!",
            },
          ]}
        >
          <input
            placeholder="Title"
            name="title"
            type="text"
            className="border border-[#94D5CB] py-3 px-4 ml-2 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please input product description!",
            },
          ]}
        >
          <input
            placeholder="Description"
            name="description"
            type="text"
            className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item
          name="productPrice"
          rules={[
            {
              required: true,
              message: "Please input product price!",
            },
          ]}
        >
          <input
            placeholder="Price"
            type="text"
            className="border border-[#94D5CB] py-3 w-[95%] px-4 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item name="salePrice">
          <input
            placeholder="Sale Price"
            name="salePrice"
            type="text"
            className="border border-[#94D5CB] py-3 px-4 w-[95%] rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item
          name="brandId"
          rules={[
            {
              required: true,
              message: "Please input product brand!",
            },
          ]}
        >
          <Select
            className="bg-white w-[10%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
            defaultValue="Brand"
            style={{ outline: "none" }}
            onChange={handleChange}
            options={branding.map((item) => {
              return { value: item._id, label: item.name };
            })}
          />
        </Form.Item>
        <Form.Item
          name="stock"
          rules={[
            {
              required: true,
              message: "Please input product stock!",
            },
          ]}
        >
          <input
            placeholder="Stock"
            name="stock"
            type="text"
            className="border border-[#94D5CB] w-[90%] py-3 ml-2 px-4 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item>
          <MyButton fill={true} label={"Add"} />
        </Form.Item>
      </Form>
    </Spin>
  );
}
