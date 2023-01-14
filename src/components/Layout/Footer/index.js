import { Portal } from "elements/icons";
import { Discover, Star } from "elements/icons";
import Styles from "./footer.module.scss";

const Footer = () => (
  <div className={Styles.footer}>
    <div className={Styles.footer__item}>
      <Discover />
      <span>KEŞFET</span>
    </div>
    <div className={Styles.footer__portal}>
      <Portal />
    </div>
    <div className={Styles.footer__item}>
      <Star />
      <span>KEŞFET</span>
    </div>
  </div>
);

export default Footer;
