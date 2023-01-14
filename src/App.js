import Card from "components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getPromotionDetail, getPromotions } from "store/actions/promotion";
import { getTags } from "store/actions/tags";
import routes from "routes";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTags());
    // dispatch(getPromotionDetail());
    dispatch(getPromotions());
  }, []);
  console.log(state);
  const router = createBrowserRouter(routes);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
