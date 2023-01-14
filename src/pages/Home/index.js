import Card from "components/Card";
import Layout from "components/Layout/Layout";
import Loading from "components/Loading";
import Slider from "components/Slider";
import Tags from "components/Tags";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotions } from "store/actions/promotion";
import { getTags } from "store/actions/tags";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({loading}) => loading);
  const promotions = useSelector(({ promotions }) => promotions);
  useEffect(() => {
    dispatch(getTags());
    dispatch(getPromotions());
  }, []);
  return (
    <Layout>
      <Tags />
      <Slider data={promotions} />
      {loading && <Loading />}
    </Layout>
  );
};

export default Home;
