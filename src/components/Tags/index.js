import { Search } from "elements/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPromotions, getPromotions } from "store/actions/promotion";
import { getTags } from "store/actions/tags";
import Styles from "./tags.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const Tags = () => {
  const dispatch = useDispatch();
  const tags = useSelector(({ tags }) => tags);
  useEffect(() => {
    dispatch(getTags());
  }, []);
  const filterPromotions = async (id) => {
    if (id) {
      dispatch(getFilteredPromotions(id));
    } else {
      dispatch(getPromotions());
    }
  };
  return (
    <div className="container no-right">
      <div className={Styles.tags}>
        <Swiper
          spaceBetween={6}
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            768: {
              spaceBetween: 10,
            },
          }}
          className={Styles.swiper}
        >
          <SwiperSlide className={Styles.tags__item}>
            <div onClick={() => filterPromotions()}>
              <Search />
              <span className={Styles.tags__item__text}>Fırsat Bul</span>
            </div>
          </SwiperSlide>
          {tags.map((item, index) => (
            <SwiperSlide className={Styles.tags__item}>
              <div key={index} onClick={() => filterPromotions(item.Id)}>
                <img
                  className={Styles.tags__item__icon}
                  src={item.IconUrl}
                  alt={item.Name}
                />
                <span className={Styles.tags__item__text}>{item.Name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tags;
