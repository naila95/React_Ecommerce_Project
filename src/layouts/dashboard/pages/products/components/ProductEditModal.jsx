import { Form, Select, Spin } from "antd";
import React, { useContext, useRef, useState } from "react";
import MyButton from "../../../components/UI/MyButton";
import { updateProduct } from "../../../../../services/product";
import { LoadingContext } from "../../../../../contexts/LoadingContext";
import { MyModalContext } from "../../../../../contexts/MyModalContext";
import FileConverter from "../../../../../utils/fileConverter";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";

export default function ProductEditModal({
  initialValues = {},
  brands,
  getDatas,
}) {
  const [images, setImages] = useState(initialValues.src);
  const { loading, setloading } = useContext(LoadingContext);
  const { setMyModal } = useContext(MyModalContext);
  const [showImg, setShowImg] = useState(true);
  const selectRef = useRef(null);

  const deleteImg = (public_id) => {
    setImages(images.filter((img) => img.public_id !== public_id));
  };
  const onFinish = (values) => {
    let newImgArr = images.map((item) => {
      if (!isNaN(item.public_id)) {
        return item.url;
      } else {
        return item;
      }
    });
    values.images = newImgArr;
    if (initialValues.salePrice > 0) {
      values.isDeal = true;
    } else {
      values.isDeal = false;
    }
    setloading(true);
    updateProduct(initialValues._id, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        toast.success("Product is updated successfully!");
        setloading(false);
        setMyModal({
          open: false,
        });
        getDatas();
      });
  };

  return (
    <>
      <div className="flex gap-2 flex-row-reverse justify-end">
        {images.map((item) => {
          return (
            <div key={item.public_id} className="relative">
              {showImg && (
                <img className="w-[140px] h-[120px] mr-2" src={item.url} />
              )}
              <ImCancelCircle
                onClick={() => {
                  deleteImg(item.public_id);
                }}
                className="absolute top-[-13px] right-[-3px] text-lg cursor-pointer"
              />
            </div>
          );
        })}
      </div>
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
          <Form.Item name="images">
            <input
              disabled={images.length >= 4 ? true : false}
              onChange={async (e) => {
                const a = Object.values(e.target.files);
                let res = await FileConverter(a);
                let newArr = [...images];
                res.forEach((item) => {
                  newArr.push({ public_id: Math.random(), url: item });
                });
                setImages(newArr);
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
          <Form.Item name="productPrice">
            <input
              placeholder="Price"
              name="price"
              type="text"
              className="border border-[#94D5CB] py-3 w-[95%] px-4 rounded-md outline-none mr-2"
            ></input>
          </Form.Item>
          <Form.Item name="salePrice">
            <input
              ref={selectRef}
              placeholder="Sale Price"
              name="salePrice"
              type="text"
              className="border border-[#94D5CB] py-3 px-4 w-[95%] rounded-md outline-none mr-2"
            ></input>
          </Form.Item>
          <Form.Item name="brandId">
            <Select
              className="bg-white w-[10%] border rounded-md border-[#94D5CB] py-1 px-2 h-11 md:h-12 mr-3"
              style={{ outline: "none" }}
              // onChange={handleChange}
              options={brands}
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
      </Spin>
    </>
  );
}
