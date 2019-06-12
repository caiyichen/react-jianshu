// 根state也是一个immutable对象了
import { combineReducers } from "redux-immutable";
import { headerReducer } from "../common/header/store";

// defaultState = {
//   header: {
//     focused: false
//   }
// };

const rootReducer = combineReducers({
  header: headerReducer
});

export default rootReducer;
