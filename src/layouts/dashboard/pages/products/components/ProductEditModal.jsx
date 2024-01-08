import { Form, Select } from "antd";
import React, { useContext, useState } from "react";
import MyButton from "../../../components/UI/MyButton";
import { updateProduct } from "../../../../../services/product";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import FileConverter from "../../../../../utils/fileConverter";
import { ImCancelCircle } from "react-icons/im";

export default function ProductEditModal({ initialValues = {} }) {
  const [images, setImages] = useState(initialValues.src);
  const { loading, setloading } = useContext(LoadingContext);
  const { setMyModal } = useContext(MyModalContext);
  const [showImg, setShowImg] = useState(true);
  const deleteImg = () => {
    setImages(false);
  };
  // console.log(images);
  const onFinish = (values) => {
    values.images = file ? file[0] : null;
    updateProduct(initialValues._id, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  // console.log(initialValues);
  return (
    <>
      <div className="flex gap-2">
        {images.map((item) => {
          console.log(item);
          return (
            <div key={item.public_id} className="relative">
              {showImg && (
                <img className="w-[140px] h-[120px] mr-2" src={item.url} />
              )}
              <ImCancelCircle
                onClick={deleteImg}
                className="absolute top-[-13px] right-[-3px] text-lg cursor-pointer"
              />
            </div>
          );
        })}
      </div>
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
        <Form.Item name="images">
          <input
            onChange={async (e) => {
              const a = Object.values(e.target.files);
              let res = await FileConverter(a);
              setFile(res);
            }}
            multiple
            placeholder="Images"
            type="file"
            className="border border-[#94D5CB] py-2.5 w-full px-2 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item name="title">
          <input
            placeholder="Title"
            name="title"
            type="text"
            className="border border-[#94D5CB] py-3 px-4 ml-2 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item name="description">
          <input
            placeholder="Description"
            name="description"
            type="text"
            className="border border-[#94D5CB] py-3 px-4 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item name="price">
          <input
            placeholder="Price"
            name="price"
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
        <Form.Item name="brandId">
          <Select
            className="bg-white w-[10%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
            // defaultValue="Brand"
            style={{ outline: "none" }}
            onChange={handleChange}
            options={[
              { value: "delivered", label: "Delivered" },
              { value: "pending", label: "Pending" },
            ]}
          />
        </Form.Item>
        <Form.Item name="stock">
          <input
            placeholder="Stock"
            name="stock"
            type="text"
            className="border border-[#94D5CB] w-[90%] py-3 ml-2 px-4 rounded-md outline-none mr-2"
          ></input>
        </Form.Item>
        <Form.Item>
          <MyButton fill={true} label={"Edit"} />
        </Form.Item>
      </Form>
    </>
  );
}
