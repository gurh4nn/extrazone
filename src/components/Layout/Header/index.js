import { Profile } from "elements/icons";
import { Link } from "react-router-dom";
import Styles from "./header.module.scss";
const Header = () => (
  <div className="container">
    <div className={Styles.header}>
      <Link to={'/'} className={Styles.header__logo}>
        <img src="/img/logo.png" alt="" />
      </Link>
      <div className={Styles.header__cta}>
        <button className={Styles.header__cta__login}>Giriş Yap</button>
        <button className={Styles.header__cta__user}><Profile /></button>
      </div>
    </div>
  </div>
);

export default Header;
