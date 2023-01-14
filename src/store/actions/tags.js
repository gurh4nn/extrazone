import api from "util/api";
import { FETCH_START, FETCH_SUCCESS, GET_TAGS } from "./types";
export const getTags = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_START });
    const response = await api.get("/tags/list");
    const payload = response.data;
    dispatch({ type: GET_TAGS, payload });
    dispatch({ type: FETCH_SUCCESS });
  } catch (e) {
    console.log(e);
  }
};