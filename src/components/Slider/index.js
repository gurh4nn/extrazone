import { Swiper, SwiperSlide } from "swiper/react";
import Card from "components/Card";
import Style from "./slider.module.scss";

import "swiper/css";

const Slider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        768: {
          spaceBetween: 20,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className={Style.slider}>
          <Card data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
