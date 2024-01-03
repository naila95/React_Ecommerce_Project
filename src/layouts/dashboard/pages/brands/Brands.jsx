import React, { useContext, useEffect, useState } from "react";
import MyButton from "../../components/UI/MyButton";
import { MyModalContext } from "../../../../contexts/MyModalContext";
import BrandTable from "./components/BrandTable";
import AddBrandModal from "./components/AddBrandModal";
import { getBrand } from "../../../../services/brands";
import { LoadingContext } from "../../../../contexts/LoadingContext";

export default function Brands() {
  const [data, setData] = useState();
  const { setMyModal } = useContext(MyModalContext);
  const { setloading } = useContext(LoadingContext);
  const getBrands = () => {
    setloading(true);
    getBrand()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <>
      <h3 className="font-bold text-xl">Brands</h3>
      <div className="py-5 flex flex-col gap-1">
        <div className="flex items-center">
          <input
            className="bg-white border w-[17%] h-11 md:h-12 rounded-md border-[#94D5CB] py-1 px-4 md:px-5 outline-none mr-3"
            type="search"
            placeholder="Search by Brand name"
          />
          <div className="flex items-center gap-3">
            <MyButton label={"Filter"} fill={true} refFunc={() => {}} />
            <MyButton
              label={"Reset"}
              refFunc={() => {
                console.log("test");
              }}
            />
            <MyButton
              refFunc={() => {
                setMyModal({
                  open: true,
                  width: "40%",
                  Component: <AddBrandModal getBrands={getBrands} />,
                });
              }}
              label={"Add new brand"}
              fill={true}
            />
          </div>
        </div>
      </div>
      <BrandTable data={data} getBrands={getBrands} />
    </>
  );
}
