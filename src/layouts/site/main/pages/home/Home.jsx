import React, { useEffect, useState } from "react";
import FirstSection from "./homeComponents/FirstSection";
import SellingProducts from "./homeComponents/SellingProducts";
import SaleSlider from "./homeComponents/SaleSlider";
import CategorySlider from "./homeComponents/CategorySlider";
import FlashSale from "./homeComponents/FlashSale";
import UptoSale from "./homeComponents/UptoSale";
import TopBrands from "./homeComponents/TopBrands";
import OffSale from "./homeComponents/OffSale";
import NewExclusive from "./homeComponents/NewExclusive";
import BazarApp from "./homeComponents/BazarApp";
import TalkToPeople from "./homeComponents/TalkToPeople";
import { getProduct } from "../../../../../services/homeProduct";

export default function Home() {
  const [data, setData] = useState([]);
  const getProductForHome = () => {
    getProduct()
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProductForHome();
  }, []);

  return (
    <div>
      <main>
        <FirstSection />
        <SellingProducts data={data} />
        <SaleSlider />
        <CategorySlider />
        <FlashSale />
        <UptoSale />
        <TopBrands />
        <OffSale />
        <NewExclusive />
        <BazarApp />
        <TalkToPeople />
      </main>
    </div>
  );
}
