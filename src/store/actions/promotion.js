import api from "util/api";
import { FETCH_START, FETCH_SUCCESS, GET_PROMOTIONS, GET_PROMOTION_DETAIL, GET_TAGS } from "./types";
export const getPromotions = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const response = await api.get("/promotions/list?Channel=PWA");
    const payload = response.data;
    dispatch({ type: GET_PROMOTIONS, payload });
    dispatch({ type: FETCH_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};

export const getPromotionDetail = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const response = await api.get("/promotions?Id=33");
    const payload = response.data;
    dispatch({ type: GET_PROMOTION_DETAIL, payload });
    dispatch({ type: FETCH_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};