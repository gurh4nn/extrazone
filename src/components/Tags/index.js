import Styles from "./tags.module.scss";

const Tags = (data) => (
  <>
    {data?.map((item, index) => (
      <div className={Styles.tags} key={index}>
        <div className={Styles.tags__item}>{item.Name}</div>
      </div>
    ))}
  </>
);

export default Tags;
