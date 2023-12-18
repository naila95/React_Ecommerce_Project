import React from "react";
import img1 from "../../../../../../assets/slider-banner1.jpg";
import img2 from "../../../../../../assets/slider-banner2.jpg";
import img3 from "../../../../../../assets/slider-banner3.jpg";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SaleSlider() {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1.5rem",
        padding: "20%",
        type: "loop",
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide className="flex justify-center 2xl:h-[26rem] xl:h-[20rem] md:h-[15rem] sm:h-[10rem] h-[8rem]">
        <Link className="">
          <img className="w-full h-full" src={img1} />
        </Link>
      </SplideSlide>
      <SplideSlide className="flex justify-center 2xl:h-[26rem] xl:h-[20rem] md:h-[15rem] sm:h-[10rem] h-[8rem]">
        <Link>
          <img className="w-full h-full" src={img2} />
        </Link>
      </SplideSlide>
      <SplideSlide className="flex justify-center 2xl:h-[26rem] xl:h-[20rem] md:h-[15rem] sm:h-[10rem] h-[8rem]">
        <Link>
          <img className="w-full h-full" src={img3} />
        </Link>
      </SplideSlide>
    </Splide>
  );
}
