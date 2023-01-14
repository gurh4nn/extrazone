import Content from "components/Content";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPromotionDetail } from "store/actions/promotion";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const detail = useSelector(({ promotionDetail }) => promotionDetail);
  console.log(params);
  useEffect(() => {
    dispatch(getPromotionDetail(params.id));
  }, []);
  return <Content data={detail} />;
};

export default Detail;
