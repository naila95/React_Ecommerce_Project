import React, { useContext, useEffect, useState } from "react";
import MyButton from "../../components/UI/MyButton";
import { MyModalContext } from "../../../../contexts/MyModalContext";
import BrandTable from "./components/BrandTable";
import AddBrandModal from "./components/AddBrandModal";
import { getBrand } from "../../../../services/brands";
import { LoadingContext } from "../../../../contexts/LoadingContext";

export default function Brands() {
  const [brand, setBrand] = useState();
  const { setMyModal } = useContext(MyModalContext);
  const { setloading } = useContext(LoadingContext);
  const getBrands = () => {
    setloading(true);
    getBrand()
      .then(({ data }) => {
        setBrand(data.data);
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
        <div className="flex items-center gap-3">
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
      <BrandTable data={brand} getBrands={getBrands} />
    </>
  );
}
