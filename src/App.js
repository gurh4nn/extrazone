import Card from "components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotionDetail, getPromotions } from "store/actions/promotion";
import { getTags } from "store/actions/tags";

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  useEffect(() => {
    dispatch(getTags())
    dispatch(getPromotionDetail())
    dispatch(getPromotions())
  },[])
  console.log(state)
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
