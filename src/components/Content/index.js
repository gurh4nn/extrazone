import { Back } from "elements/icons";
import { calcDate } from "helpers/calcDate";
import { Link } from "react-router-dom";
import Styles from "./content.module.scss";

const Content = ({ data }) => {
  return (
    <div className={Styles.content}>
      <div className="container mobile-no-container">
        <div className={Styles.content__image}>
          <Link to={"/"} className={Styles.content__image__back}>
            <Back />
          </Link>
          <img
            className={Styles.content__image__img}
            src={data?.ImageUrl}
            alt={data?.Title}
          />
          <div className={Styles.content__image__brand}>
            <img src={data?.BrandIconUrl} alt="" />
          </div>
          <div className={Styles.content__image__date}>
            son {calcDate(data.RemainingText)} gün
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className={Styles.content__title}
          dangerouslySetInnerHTML={{ __html: data?.Title }}
        />
        <div
          className={Styles.content__text}
          dangerouslySetInnerHTML={{ __html: data?.Description }}
        />
      </div>
      <div className={Styles.content__join}>
        <Link to="#" className={Styles.content__join__link}>
          Hemen Katıl
        </Link>
      </div>
    </div>
  );
};

export default Content;
