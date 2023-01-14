import { Loader } from "elements/icons";
import Styles from "./loading.module.scss";

const Loading = () => (
  <div className={Styles.loading}>
    <Loader />
  </div>
);

export default Loading;
