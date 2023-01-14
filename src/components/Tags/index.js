import { Search } from "elements/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPromotions, getPromotions } from "store/actions/promotion";
import { getTags } from "store/actions/tags";
import Styles from "./tags.module.scss";

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
        <div className={Styles.tags__item} onClick={() => filterPromotions()}>
          <Search />
          <span className={Styles.tags__item__text}>Fırsat Bul</span>
        </div>
        {tags.map((item, index) => (
          <div
            className={Styles.tags__item}
            key={index}
            onClick={() => filterPromotions(item.Id)}
          >
            <img
              className={Styles.tags__item__icon}
              src={item.IconUrl}
              alt={item.Name}
            />
            <span className={Styles.tags__item__text}>{item.Name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
