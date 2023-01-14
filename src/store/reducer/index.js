import {
  FETCH_START,
  FETCH_SUCCESS,
  GET_PROMOTIONS,
  GET_PROMOTION_DETAIL,
  GET_TAGS,
} from "store/actions/types";

const INITIAL_STATE = {
  loading: true,
  tags: [],
  promotions: [],
  promotionDetail: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false };
    case GET_TAGS:
      return { ...state, tags: payload };
    case GET_PROMOTIONS:
      return { ...state, promotions: payload };
    case GET_PROMOTION_DETAIL:
      return { ...state, promotionDetail: payload };
    default:
      return state;
  }
};

export default reducer;
