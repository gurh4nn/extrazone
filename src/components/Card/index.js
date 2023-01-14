import Styles from "./card.module.scss";
const Card = ({ data }) => (
  <div className={Styles.card}>
    <div className={Styles.card__content}>
      <div className={Styles.card__image}>
        <img className={Styles.card__image__img} src={data?.ImageUrl} alt="" />
        <div className={Styles.card__image__brand}>
          <img src={data?.BrandIconUrl} alt="" />
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
  </div>
);

export default Card;
