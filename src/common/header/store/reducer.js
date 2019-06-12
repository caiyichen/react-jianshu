import actionTypes from "./actionTypes";
import { fromJS } from "immutable";

// rootState = {header:defaultState}
// immutable.js（库），会生成immutable对象
// defaultState即rootState.header已经是一个immutable（不可变）的数据了，且focused、list都是immutable的。
const defaultState = fromJS({
  focused: false,
  searchList: []
});

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_FOCUS:
      return state.set("focused", true);
    case actionTypes.INPUT_BLUR:
      return state.set("focused", false);
    case actionTypes.SET_SEARCH_LIST:
      // 引用类型必须再次fromJS！否则返回的state.list就不是immutable的了（action.data来自接口返回的数据，是一个js引用类型
      return state.set("searchList", fromJS(action.data));
    default:
      return state;
  }
};

export default headerReducer;
