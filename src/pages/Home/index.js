import Card from "components/Card";
import Layout from "components/Layout/Layout";
import Slider from "components/Slider";
import Tags from "components/Tags";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotions } from "store/actions/promotion";
import { getTags } from "store/actions/tags";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const promotions = useSelector(({ promotions }) => promotions);
  useEffect(() => {
    dispatch(getTags());
    dispatch(getPromotions());
  }, []);
  return (
    <Layout>
      <Tags />
      <Slider data={promotions} />
    </Layout>
  );
};

export default Home;
