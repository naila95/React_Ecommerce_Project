import React from "react";
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

export default function Home() {
  return (
    <div>
      <main>
        <FirstSection />
        <SellingProducts />
        <SaleSlider />
        <CategorySlider />
        <FlashSale />
        <UptoSale />
        <TopBrands />
        <OffSale />
        <NewExclusive />
        <BazarApp />
        <TalkToPeople/>
      </main>
    </div>
  );
}
