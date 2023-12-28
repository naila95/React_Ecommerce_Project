import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img from "../../../../../../assets/kid.jpg";
import img2 from "../../../../../../assets/man.jpg";
import img3 from "../../../../../../assets/bags.jpg";
import img4 from "../../../../../../assets/watch.jpg";
import img5 from "../../../../../../assets/woman.jpg";
import img6 from "../../../../../../assets/sports.jpg";
import img7 from "../../../../../../assets/sunglass.jpg";
import img8 from "../../../../../../assets/sneakers.jpg";
import { Link } from "react-router-dom";

export default function CategorySlider() {
  return (
    <section className="px-14 py-16">
      <h3 className="text-3xl font-bold mb-7">Shop By Category </h3>
      <Splide
        options={{
          gap: "25px",
          perPage: "7",
          type: "loop",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Link>
            <img src={img} />
            <h2 className="text-center py-4 font-semibold text-xl">Kids</h2>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link>
            <img src={img2} />
            <h2 className="text-center py-4 font-semibold text-xl">Man</h2>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link>
            <img src={img3} />
            <h2 className="text-center py-4 font-semibold text-xl">Bags</h2>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link>
            <img src={img4} />
            <h2 className="text-center py-4 font-semibold text-xl">Watch</h2>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link>
            <img src={img5} />
            <h2 className="text-center py-4 font-semibold text-xl">Woman</h2>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link>
            <img src={img6} />
            <h2 className="text-center py-4 font-semibold text-xl">Sports</h2>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link>
            <img src={img7} />
            <h2 className="text-center py-4 font-semibold text-xl">Sunglass</h2>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link>
            <img src={img8} />
            <h2 className="text-center py-4 font-semibold text-xl">Sneakers</h2>
          </Link>
        </SplideSlide>
      </Splide>
    </section>
  );
}
