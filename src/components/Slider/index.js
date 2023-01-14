import { Swiper, SwiperSlide } from "swiper/react";
import Card from "components/Card";
import Styles from "./slider.module.scss";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ data }) => {
  return (
    <div className="container no-right">
      <div className={Styles.slider}>
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            768: {
              spaceBetween: 20,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className={Styles.swiper}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className={Styles.slide}>
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
