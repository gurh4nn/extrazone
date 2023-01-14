import { calcDate } from "helpers/calcDate";
import { Link } from "react-router-dom";
import Styles from "./card.module.scss";
const Card = ({ data }) => {
  return (
    <Link to={`/campaign/${data?.SeoName}/${data?.Id}`} className={Styles.card}>
      <div className={Styles.card__content}>
        <div className={Styles.card__image}>
          <img
            className={Styles.card__image__img}
            src={data?.ImageUrl}
            alt={data?.Title}
          />
          <div className={Styles.card__image__brand}>
            <img src={data?.BrandIconUrl} alt="" />
          </div>
          <div className={Styles.card__image__date}>
            son {calcDate(data?.RemainingText)} gün
          </div>
        </div>
        <div
          className={Styles.card__title}
          dangerouslySetInnerHTML={{ __html: data?.Title }}
        />
        <div
          className={Styles.card__link}
          style={{ color: data?.PromotionCardColor }}
        >
          Daha Daha
        </div>
      </div>
    </Link>
  );
};

export default Card;
