import actionTypes from "./actionTypes";
import axios from "axios";

const setSearchListAction = list => {
  return {
    type: actionTypes.SET_SEARCH_LIST,
    data: list
  };
};

export const getInputFocusAction = () => {
  return {
    type: actionTypes.INPUT_FOCUS
  };
};

export const getInputBlurAction = () => {
  return {
    type: actionTypes.INPUT_BLUR
  };
};

export const getSearchListAction = () => {
  return dispatch => {
    axios.get("/api/searchList.json").then(res => {
      dispatch(setSearchListAction(res.data.data));
    });
  };
};
