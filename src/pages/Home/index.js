import Tags from "components/Tags";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotions } from "store/actions/promotion";
import { getTags } from "store/actions/tags";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTags());
    dispatch(getPromotions());
  }, []);
  return (
    <>
    <Tags />
    </>
  );
};

export default Home;
