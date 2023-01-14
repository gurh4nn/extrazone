import api from "util/api";
import {
  FETCH_START,
  FETCH_SUCCESS,
  GET_PROMOTIONS,
  GET_PROMOTION_DETAIL,
  GET_TAGS,
} from "./types";
export const getPromotions = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const response = await api.get("/promotions/list?Channel=PWA");
    const payload = response.data;
    if (payload.length < 2) {
      const fillArr = Array(5).fill({
        ...payload[0]
      })
      dispatch({ type: GET_PROMOTIONS, payload: fillArr });
    } else {
      dispatch({ type: GET_PROMOTIONS, payload });
    }
    dispatch({ type: FETCH_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};

export const getFilteredPromotions = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const response = await api.get(`/promotions/list?Channel=PWA&TagId=${id}`);
    const payload = response.data;
    dispatch({ type: GET_PROMOTIONS, payload });
    dispatch({ type: FETCH_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};

export const getPromotionDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const response = await api.get(`/promotions?Id=${id}`);
    const payload = response.data;
    dispatch({ type: GET_PROMOTION_DETAIL, payload });
    dispatch({ type: FETCH_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};
